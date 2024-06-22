import { frames } from '../route'
import { Button } from "frames.js/next";
import { ComposeClient } from '@composedb/client';
import { definition } from '../../definition'
import { PinataFDK } from "pinata-fdk";
import { error } from "frames.js/core";

const fdk = new PinataFDK({
    pinata_jwt: process.env.PINATA_JWT,
    pinata_gateway: process.env.NEXT_PRIVATE_GATEWAY,
});

const bodyMiddleware = async (
    ctx,
    next
) => {
    const body = await ctx.request.clone().json();
    return next({ body });
};

export const POST = frames(async (ctx) => {
    // //instantiate a composeDB client instance
    const composeClient = new ComposeClient({
        ceramic: `${process.env.NEXT_PUBLIC_CERAMIC_URL}`,
        definition: definition
    });

    const currentState = ctx.state;
    let cards = []
    let updatedState

    try {

        const profile = await composeClient.executeQuery(`
            query MyQuery {
            idealiteProfilev1Index(
                filters: {where: {farcasterId: {equalTo: "${ctx.message.requesterFid}"}}}
                first: 10
            ) {
                edges {
                node {
                    account {
                    id
                    }
                }
                }
            }
            }
        `);


        if (!profile.data.idealiteProfilev1Index.edges.length === 0) {
            throw new Error('No idealite profile found')
        }
        const profileId = profile?.data?.idealiteProfilev1Index?.edges[0]

        const result = await composeClient.executeQuery(`
            query MyQuery {
            node(id: "${profileId.node.account.id}") {
                ... on CeramicAccount {
                idealiteCardv1List(
                    first: 10
                    filters: {where: {annotation: {isNull: false}, deleted: {equalTo: false}, learningStatus: {in: FORGETTING}}}
                ) {
                    edges {
                        node {
                            id
                            annotation
                        }
                    }
                }
                }
            }
            }
        `);

        const cardsArray = result.data.node.idealiteCardv1List.edges;
        cards = cardsArray
        updatedState = {
            ...currentState,
            count: 0,
            cards: cardsArray,
            incorrect: 0
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    const analyticsRes = await fdk.sendAnalytics("daily-reviews-welcome", ctx.body)
    if (!analyticsRes.success) {
        console.log(analyticsRes)
        error('Error with sending analytics')
    }

    return {
        image: updatedState.cards.length < 10 ?
            <div tw='flex flex-col text-5xl'>
                <p>You don't have enough cards to review.</p>
                <p>Checkout idealite.xyz</p>
            </div>
            :
            <div tw="flex flex-col text-5xl">
                <p>
                    Welcome {ctx.message.requesterUserData.displayName}.
                </p>
                <div tw='flex flex-col'>
                    <p>You have {updatedState.cards.length} cards to review.</p>
                    <p>Click below to begin.</p>
                </div>
            </div>,
        buttons: updatedState.cards.length < 10 ?
            [
                <Button action="post_redirect" target='/results'>idealite.xyz</Button>
            ]
            :
            [
                <Button action="post" target="/question">
                    See first card
                </Button>,
            ],
        state: updatedState,
    };
}, { middleware: [bodyMiddleware] });
