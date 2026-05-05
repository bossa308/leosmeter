# LEOS METER Website

Static marketing/catalog site for **LEOS METER | SME INTER** — built with Astro 5, Tailwind CSS, and deployed to Cloudflare Pages.

## Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and fill in your Web3Forms key
cp .env.example .env

# 3. Start dev server
npm run dev
```

Open <http://localhost:4321> in your browser.

## Environment Variables

| Variable | Description |
|---|---|
| `PUBLIC_WEB3FORMS_KEY` | Access key from [web3forms.com](https://web3forms.com). Leave blank to show the fallback contact message instead of the form. |

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- check` | TypeScript type-check all `.astro` files |

## Adding Products

1. Add a product image (SVG or JPG/PNG) to `src/assets/products/`.
2. Create `src/content/products/<model-slug>.md` with the required frontmatter (see `src/content/config.ts` for the schema).
3. Run `npm run build` to verify — Astro will report any schema validation errors.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub.
2. Go to **Cloudflare Dashboard → Pages → Create a project → Connect to Git**.
3. Select the repository.
4. Set the following build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version (Environment variable):** `NODE_VERSION` = `20`
5. Add `PUBLIC_WEB3FORMS_KEY` in **Settings → Environment variables** (Production + Preview).
6. Click **Save and Deploy**. The site will be live at `<project>.pages.dev`.

## Updating the Domain

When the domain is purchased:

1. Add the custom domain in **Cloudflare Pages → Custom domains**.
2. Update `site` in `astro.config.mjs`:
   ```js
   site: 'https://leosmeter.com',
   ```
3. Update the `Sitemap:` line in `public/robots.txt` to match.
4. Redeploy.

## Web3Forms Setup

1. Go to [web3forms.com](https://web3forms.com) and create a free account.
2. Create an access key for your domain.
3. Add the key to `.env` as `PUBLIC_WEB3FORMS_KEY=<your-key>`.
4. For production, add the key to Cloudflare Pages environment variables.

## Tech Stack

- **Framework:** Astro 5 (static output)
- **Styling:** Tailwind CSS 3 via `@astrojs/tailwind`
- **Icons:** `astro-icon` + `@iconify-json/lucide`
- **Font:** IBM Plex Sans Thai Variable (self-hosted via `@fontsource-variable`)
- **Forms:** Web3Forms (no backend)
- **Hosting:** Cloudflare Pages
