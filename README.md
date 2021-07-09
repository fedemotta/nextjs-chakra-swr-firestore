# Example with Chakra + SWR + Firestore  

This is a NextJS app built with Chakra using swr-firestore.

## How to use

### For local development just run:

```bash
cp .env.local.sample .env.local
yarn install
yarn run dev
```

It will serve on `localhost:3000`

### For a static export:

When trying to run `yarn start` it will build and export your pages into the `out` folder and serve them on `localhost:5000`.

### For production:

There is a Github CI pipeline running on the main branch. This is deploying to vercel `https://nextjs-chakra-swr-firestore.vercel.app`
