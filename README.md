# Next.js Instagram Clone

This is a [Next.js](https://nextjs.org/) project based on [Sonny Sangha's tutorial](https://www.youtube.com/watch?v=a6Xs2Ir40OI) but with some improvement, like Clerk for authentication.

<div>
  <img loading="lazy" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/firebase.png" target="_blank" width="36" style="background: #fefefe; border-radius: 12px; padding:2px;">
  <img loading="lazy" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png" target="_blank" width="36" style="background: #fefefe; border-radius: 12px; padding:2px;">
  <img loading="lazy" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png" target="_blank" width="36" style="background: #fefefe; border-radius: 12px; padding:2px;">
  <img loading="lazy" src="https://clerk.com/v2/favicon.ico" target="_blank" width="36" style="background: #fefefe; border-radius: 12px; padding:2px;">
  <img loading="lazy" src="https://github.com/pmndrs/zustand/raw/main/docs/favicon.ico" target="_blank" width="36" style="background: #fefefe; border-radius: 12px; padding:2px;">
  <img loading="lazy" src="https://lucide.dev/logo.light.svg" target="_blank" width="36" style="background: #fefefe; border-radius: 12px; padding:2px;">
</div>

## Getting Started

First, you need to configure your own project on [Clerk](https://clerk.com/) to use the authentication method of your preference. In this project, only the Google authentication method is used. After setting it up, save the keys generated by Clerk in a `.env` file.

With the `.env` file properly configured, you can install the dependencies and start the development server:

### Install dependecies

```bash
pnpm i
```

### Run development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
