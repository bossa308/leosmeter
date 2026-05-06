# LEOS METER Website — Project Guide

This file is read by Claude Code at the start of every session. Keep it current.

## Project Overview

A static marketing/catalog website for **LEOS METER | SME INTER**, a Thai company that sells industrial measurement equipment: Power Meters, Jumbo Displays, NTP-Clocks, and Haiwell PLC/HMI products. Customers are Thai industrial buyers (factories, electricians, system integrators).

This is a rebuild of an existing WordPress site (`leosmeter.com`) currently hosted on Bluehost. The rebuild is motivated by performance — the WordPress version is slow during peak hours. The new site must load fast on average Thai mobile networks.

The primary content language is **Thai**. English may appear in technical product names and specs.

## Tech Stack

- **Framework:** Astro (latest stable, currently v5.x)
- **Styling:** Tailwind CSS via the official Astro integration (`@astrojs/tailwind`)
- **Language:** TypeScript with `strict: true`
- **Content:**
  - **Products / categories / solutions / downloads:** plain TypeScript data modules in `src/data/` (single-source-of-truth arrays). Chosen over content collections so technical specs can be authored as structured TS rather than markdown frontmatter.
  - **Tutorials / FAQs / firmware notes:** Astro Content Collections (MDX in `src/content/tutorial/`).
- **Icons:** `astro-icon` with the `lucide` icon set
- **Forms:** Web3Forms (no backend required) — access key goes in `.env` as `PUBLIC_WEB3FORMS_KEY`
- **Hosting:** Cloudflare Pages (build command `npm run build`, output dir `dist`)
- **Node:** v20 LTS (set in `.nvmrc` and `package.json` `engines`)
- **Package manager:** npm (do not introduce yarn/pnpm/bun unless asked)

## Important Constraints

- **No domain yet.** The site will be deployed to `*.pages.dev` for review until a domain is purchased. Do not hardcode `https://leosmeter.com` anywhere — read the site URL from `astro.config.mjs` `site` field, which should be `'https://leosmeter.pages.dev'` for now and easy to swap later.
- **JavaScript budget:** Keep client-side JS to the absolute minimum. Most pages should ship 0 KB JS. Use Astro components (`.astro`), not React/Vue, unless interactivity is genuinely required (then use `client:visible` or `client:idle`, never `client:load`).
- **Image performance:** Always use Astro's `<Image />` or `<Picture />` component for product photos. Originals go in `src/assets/`, not `public/`, so Astro can optimize them.
- **No tracking pixels, no analytics SDKs** until explicitly requested. If asked later, prefer Cloudflare Web Analytics (cookieless).

## File Structure

```
.
├── CLAUDE.md
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── public/
├── src/
│   ├── assets/products/        # product images (Astro-optimized)
│   ├── components/             # PascalCase .astro components
│   ├── data/                   # products.ts, categories.ts, solutions.ts, downloads.ts, site.ts
│   ├── content/
│   │   ├── config.ts           # tutorial collection schema only
│   │   └── tutorial/           # *.mdx tutorials / Q&A / firmware notes
│   ├── layouts/BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── downloads.astro
│   │   ├── solutions.astro
│   │   ├── product-selector.astro
│   │   ├── products/{index,[...slug]}.astro
│   │   ├── category/[slug].astro
│   │   └── tutorial/{index,[slug]}.astro
│   └── styles/global.css
├── public/                     # static assets + downloadable PDFs (public/downloads/)
└── .env.example
```

## Data shape (src/data/products.ts)

Products are typed TS objects (`Product` interface in [src/data/products.ts](src/data/products.ts)). Each product has: `id`, `name`, `slug`, `category`, `shortDescription`, `description`, `image` (filename in `src/assets/products/`), `tags`, `features`, `specs[]`, optional `model`, `protocols`, `applications`, `relatedProducts`, `downloads[]`, `faqs[]`. Add new products by appending to the `products` array.

Downloads referenced in `product.downloads[].filename` should exist at `public/downloads/<filename>`. Until the real PDFs are uploaded, the UI hides links to missing files.

## Design Direction

Industrial / B2B Thai aesthetic, not a consumer SaaS look:

- **Palette:** Clean white + a single brand accent. Default to deep blue (`#0B3D91`) until the brand color is confirmed; expose it as a CSS variable `--brand` so it can be changed in one place.
- **Typography:** `IBM Plex Sans Thai` for Thai body text, loaded via `@fontsource-variable/ibm-plex-sans-thai` (self-hosted). System sans for English fallbacks.
- **Layout:** Generous whitespace, large clear product photos, specs in clean tables, no carousels on the homepage.
- **Mobile-first.** Most Thai industrial buyers will land on this from a mobile search.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run astro -- check
```

## Deployment (Cloudflare Pages)

1. Push to GitHub.
2. Cloudflare dashboard → Pages → Connect to Git → pick the repo.
3. Framework preset: **Astro**. Build command: `npm run build`. Output: `dist`. Env var: `NODE_VERSION=20`.
4. Add `PUBLIC_WEB3FORMS_KEY` in Pages project settings (Production + Preview).
5. Site lives at `<project>.pages.dev` until a custom domain is added.

When the domain is purchased: add it as a custom domain in Cloudflare Pages, update `site` in `astro.config.mjs`, then update absolute URLs in `robots.txt` and the sitemap.

## Conventions

- Component file names: `PascalCase.astro`.
- Page file names: `kebab-case.astro`.
- Tailwind utilities only; custom CSS goes in `src/styles/global.css` under `@layer components`.
- Thai strings live directly in `.astro` files (site is Thai-only for now).
- Every page extends `BaseLayout.astro`.
- Every product detail page must include: title, gallery, specs table, price/CTA, "ติดต่อสอบถาม" button.
- Run `npm run build` and `npm run astro -- check` before declaring a task done.

## What NOT to do

- No database. Site is fully static.
- No SSR. Keep `output: 'static'`.
- No heavy UI libraries (MUI, Chakra, full shadcn install).
- Do not commit `.env`. Only `.env.example`.
- Do not hardcode the production domain.
- Do not use Google Fonts via CDN `<link>` — self-host with `@fontsource-variable/*`.