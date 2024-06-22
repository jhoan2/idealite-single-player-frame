import { farcasterHubContext } from "frames.js/middleware";
import { createFrames, Button, types } from "frames.js/next";

export type State = {
  count: number;
  cardsLearned: string[];
};



const frames = createFrames({
  basePath: '/frames',
  initialState: {
    count: 0,
    cards: [],
    cardsLearned: []
  },
  middleware: [
    farcasterHubContext({
      // remove if you aren't using @frames.js/debugger or you just don't want to use the debugger hub
      ...(process.env.NODE_ENV === "production"
        ? {}
        : {
          hubHttpUrl: "http://localhost:3010/hub",
        }),
    }),
  ],
});


const handleRequest = frames(async (ctx) => {
  return {
    image: `${process.env.NEXT_PRIVATE_GATEWAY}/QmVqNJW8zFaPDh86vhtmw1xnPvToN9oS1JH6Y91SpAMapG`,
    buttons:
      [
        <Button action="post" target="/welcome">
          Let's get started.
        </Button>,
        <Button action="post_redirect" target='/results'>idealite.xyz</Button>

      ]

  };
});

export const GET = handleRequest;
export const POST = handleRequest;
