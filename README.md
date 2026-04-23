# The Decision Room

Professional website for `the-decision-room.com`, built with Next.js App Router, TypeScript, Tailwind CSS, markdown-based Notes content, and tool pages with Stripe checkout links and webhook delivery support.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Markdown content via `gray-matter` + `remark`
- Buttondown API for subscribe/unsubscribe flow
- Resend for transactional email
- Stripe webhook route for automatic digital tool delivery
- Optional Plausible analytics via script injection

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content workflow

- Add notes in `content/notes/*.md` with front matter:
  - `slug` (filename), `title`, `subtitle`, `publishedAt`, `coverImage`, `tags`, `excerpt`
- Add tools in `content/tools/*.json`:
  - `slug`, `title`, `priceText`, `shortDescription`, `screenshots`, `paymentLink`, delivery fields, and FAQ

## Environment variables

Copy `.env.example` to `.env.local` and fill values.

```bash
cp .env.example .env.local
```

Key integrations:

- `BUTTONDOWN_API_KEY` for subscriptions
- `RESEND_API_KEY` + `EMAIL_FROM` for transactional emails
- `STRIPE_SECRET_KEY` + `STRIPE_WEBHOOK_SECRET` for purchase webhook delivery
- `TOOL_PRICE_ID_TO_SLUG_JSON` if mapping Stripe Price IDs to tool slugs
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` for analytics

## Deployment

- Recommended: Vercel or Cloudflare Pages.
- Configure all environment variables in hosting platform settings.
- Point domain DNS for `the-decision-room.com`.
- Configure Stripe webhook endpoint:
  - `https://the-decision-room.com/api/stripe/webhook`
