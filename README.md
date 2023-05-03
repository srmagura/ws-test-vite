# vite-plugin-node + NestJS GraphQL subscriptions repro

## Repro Steps

1. `npm install`
2. `npm run start:dev`
3. Go to the GraphQL playground at http://localhost:5173/graphql in your browser.
4. Paste in the `TestQuery` from `OrgResolver.ts`. It returns data as expected.
5. Paste in the `TestSubscription` from `OrgResolver.ts`. It produces the error "Could not connect to websocket endpoint ws://localhost:5173/graphql. Please check if the endpoint url is correct."

## Workaround Steps

Instead of `start:dev`, run `npm run start:prod`. Repeat the above steps and the `TestSubscription` will show the message "Listening..." in the Playground.
