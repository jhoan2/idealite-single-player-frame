import { frames } from '../route'
import { Button } from "frames.js/next";

export const POST = frames(async (ctx) => {
    const removeHtmlElementStrings = (str) => {
        return str.replace(/<[^>]*>/g, ' ');
    }
    const cleanAnnotation = removeHtmlElementStrings(ctx.state.cards[ctx.state.count].node.annotation)
    const progressPercent = ((ctx.state.count + 1) / ctx.state.cards.length) * 100
    const currentState = ctx.state
    let updatedState = {
        ...currentState,
        count: currentState.count + 1
    }

    return {
        image:
            <div tw='flex flex-col justify-between items-center h-full w-full'>
                <div tw="flex flex-col max-w-3/4 text-wrap overflow-hidden h-full pt-8">
                    {cleanAnnotation}
                </div>
                <div tw="flex w-full rounded-full bg-gray-400">
                    <div tw=" h-2.5 rounded-full bg-[#4338ca]" style={{ width: `${progressPercent}%` }} />
                </div>
            </div>,
        buttons:
            [
                <Button action="post" target={{ pathname: "/question", query: { action: "correct" } }}>Correct</Button>,
                <Button action="post" target={{ pathname: "/question", query: { action: "incorrect" } }}>Incorrect</Button>,
            ],

        state: updatedState,
    };
});
