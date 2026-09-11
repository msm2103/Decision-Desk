# Decision Desk

Personal publication site for `decisiondesk.co.uk`. Next.js App Router, TypeScript, Tailwind CSS, markdown notes, and Cloudflare Workers via OpenNext.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Markdown content via `gray-matter` + `remark`
- Buttondown API for subscribe/unsubscribe
- Resend for transactional email
- Optional Plausible analytics via script injection

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content workflow

Import a Research edition folder (reads `A_article_draft.md` and, if present, `D_the_traders_take.md`):

```bash
npm run notes:import -- "C:\Users\msm21\Documents\Macro Tool\Research\editions\YYYY-MM-DD"
```

The script writes `content/notes/{slug}.md` with front matter (`ttsEnabled: true` by default) and refreshes `src/generated/notes-manifest.json`. It never copies `B_private_appendix.md` or `C_next_edition_memory.md`.

You can also add notes directly in `content/notes/*.md` with:

- `title`, `subtitle`, `publishedAt`, `coverImage`, `tags`, `excerpt`
- optional `pdfUrl`, `ttsEnabled` (defaults to true), `metaTitle`, `metaDescription`

Then deploy:

```bash
npm run deploy
```

After a live publish, send the subscriber alert from Buttondown with a link to `/notes/{slug}`.

## Environment variables

Copy `.env.example` to `.env.local` and fill values.

```bash
cp .env.example .env.local
```

Key integrations:

- `BUTTONDOWN_API_KEY` for subscriptions
- `RESEND_API_KEY` + `EMAIL_FROM` for transactional emails
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` for analytics

Set the same secrets on the Cloudflare Worker (`decisiondesk`) before deploying.

## Deployment

```bash
npm run deploy
```

This builds with OpenNext and deploys the existing Cloudflare Worker `decisiondesk` for `decisiondesk.co.uk`.
