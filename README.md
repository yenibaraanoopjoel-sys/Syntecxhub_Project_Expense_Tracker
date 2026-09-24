# Syntecxhub Project Expense Tracker

Pocket Ledger is a calm, responsive expense tracker built with Next.js, React, TypeScript, Tailwind CSS, and Firebase-ready configuration.

## Run locally

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open http://localhost:3000. Expenses can be added and deleted from the dashboard and persist in the browser with localStorage.

## Firebase setup

1. Create or select the `syntecxhub-expensetracker` project in Firebase Console.
2. Copy the Web App configuration into `.env.local` using `.env.example`.
3. Enable Authentication and Firestore when ready to replace local persistence with synced accounts.
4. Deploy the Next.js app with Firebase App Hosting after authenticating with the Firebase CLI:

```bash
npm install -g firebase-tools
firebase login
firebase use syntecxhub-expensetracker
firebase apphosting:backends:create
```

The `apphosting.yaml` file contains the production build and start commands. Firebase credentials are intentionally kept out of Git.

## GitHub

```bash
git init
git add .
git commit -m "Build Pocket Ledger expense tracker"
git branch -M main
git remote add origin https://github.com/yenibaraanoopjoel-sys/Syntecxhub_Project_Expense_Tracker.git
git push -u origin main
```
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
