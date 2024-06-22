import { frames } from '../route'
import { Button } from "frames.js/next";

export const POST = frames(async (ctx) => {
    let updatedState
    const progressPercent = ((ctx.state.count + 1) / ctx.state.cards.length) * 100
    const removeFirstLongestWord = (str) => {
        str = str.replace(/<[^>]*>/g, ' ');

        // Split the string into words using a regular expression to handle various delimiters
        const words = str.match(/\b\w+\b/g);

        if (!words) return str; // If no words found, return the original string

        // Find the longest word
        let longestWord = words.reduce((longest, current) => {
            return current.length > longest.length ? current : longest;
        }, "");

        // Create a regular expression to find the first occurrence of the longest word
        const regex = new RegExp(`\\b${longestWord}\\b`);

        // Replace the first occurrence of the longest word with an empty string
        return str.replace(regex, '___');
    }

    switch (
    ctx.searchParams.action
    ) {
        case "skip":
            ctx.state.count = ctx.state.count + 1
            updatedState = ctx.state
            break;
        case "incorrect":
            updatedState = {
                ...ctx.state,
                incorrect: ctx.state.incorrect + 1,
                cardsLearned: [
                    ...ctx.state.cardsLearned,
                    {
                        cardId: ctx.state.cards[ctx.state.count].node.id,
                        correct: false
                    }
                ]
            };
            break;
        case "correct":
            updatedState = {
                ...ctx.state,
                cardsLearned: [
                    ...ctx.state.cardsLearned,
                    {
                        cardId: ctx.state.cards[ctx.state.count].node.id,
                        correct: true
                    }
                ]
            };
            break;
    }
    const word = removeFirstLongestWord(ctx.state.cards[ctx.state.count].node.annotation)

    return {
        image: (ctx.state.count === 10) ?
            (<div tw="flex flex-col justify-center text-5xl">
                <p>You're all done</p>
            </div>)
            :
            (
                <div tw='flex flex-col justify-between items-center h-full w-full'>
                    <div tw="flex flex-col max-w-3/4 text-wrap overflow-hidden h-full pt-8">
                        {/* <p tw='overflow-hidden text-wrap break-words'>{removeFirstLongestWord(ctx.state.cards[ctx.state.count].node.annotation)}</p> */}
                        {word}
                    </div>
                    <div tw="flex w-full rounded-full bg-gray-400">
                        <div tw=" h-2.5 rounded-full bg-[#4338ca]" style={{ width: `${progressPercent}%` }} />
                    </div>
                </div>
            )
        ,
        buttons: ctx.state.count === 10 ?
            [
                <Button action="post" target="/results">
                    Get results
                </Button>,
            ]
            :
            [
                <Button action="post" target="/answer">
                    See answer
                </Button>,
                <Button action="post" target={{ pathname: "/question", query: { action: "skip" } }}>
                    Skip
                </Button>,

            ],
        state: updatedState,
    };
});
