import { frames } from '../route'
import { Button } from "frames.js/next";
import { redirect } from "frames.js/core";
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

    if (ctx.pressedButton?.action === "post_redirect") {
        return redirect("https://idealite.xyz");
    }

    const analyticsRes = await fdk.sendAnalytics("daily-reviews-end", ctx.body)

    if (!analyticsRes.success) {
        console.log(analyticsRes)
        error('Error with sending analytics')
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_RESOURCE_URL}/api/gameResults`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            farcasterId: ctx.message.requesterFid,
            cardsLearned: ctx.state.cardsLearned
        }),
    })

    if (!res.ok) {
        error('Error with sending game results: ' + res.status);
    }

    return {
        image: <div tw="flex flex-col text-5xl">
            <p>
                {`Number of incorrect: ${ctx.state.incorrect}`}
            </p>
        </div>,
        buttons: [
            <Button action="post_redirect" target='/results'>idealite.xyz</Button>
        ],
    };
}, { middleware: [bodyMiddleware] });
