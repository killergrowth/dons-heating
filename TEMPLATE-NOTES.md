# Template: contractor-1b — Timnath Painting (Clean Build)

**Slug:** `contractor-1b`
**Based on:** Timnath Painting (`killergrowth/timnath-painting`)
**Parent template:** contractor-1 (Wallox)
**Created:** 2026-06-29
**Owner:** Tyler Brickley

---

## What This Is

This is the production-grade KillerGrowth version of the Wallox contractor template.
Timnath Painting was built from contractor-1 (raw Wallox), cleaned up significantly,
and this template captures that clean state as a reusable starting point.

Use this instead of contractor-1 when building contractor, painting, or
general home-services sites. It includes the full KillerGrowth build system
(partials, `build.js`, `_build-data.js`) — not raw HTML.

---

## What's Included

- `_partials/` — Header, footer, blog partials (Timnath-clean versions)
- `assets/` — All CSS, JS, fonts, vendors, and sample images from Timnath
- `build.js` — Full production build script (services, cities, SxC matrix, blog, reviews)
- `build-templates.js` — Page template functions
- `_build-data.js` — **Blanked out with TODO placeholders** — fill this first
- `functions/submit.js` — CF Pages contact form handler (Turnstile + Gmail API)
- `gen-sitemap.js` — Sitemap generator
- Standard config files: `robots.txt`, `_headers`, `_redirects`, `package.json`

---

## How to Use

1. Copy this entire directory to `workspace/sites/<new-site-name>/`
2. Run `npm install` to install dependencies
3. Fill out `_build-data.js` — every `TODO` must be replaced with real client data
4. Run `node build.js` to generate `dist/`
5. Follow the standard deploy flow (SOP-WEB-BUILD.md)
6. Register the new site in `References/sites.json`

---

## Key Differences from contractor-1 (Wallox)

| Feature | contractor-1 (Wallox) | contractor-1b (Timnath) |
|---|---|---|
| Format | Raw purchased HTML | KillerGrowth production build system |
| Pages | Static HTML pages | Generated from `_build-data.js` |
| Blog | Basic template | Full blog system with scheduling |
| Reviews | None | Auto-pull from Google + static fallback |
| SxC Matrix | Not included | Full service × city matrix |
| Forms | None | CF Pages Function + Turnstile + Gmail |
| Build | `node build.js` (simple) | `node build.js` (full pipeline) |

---

## Sample Images

The `assets/images/` directory contains Timnath Painting's actual photos.
These are here for visual reference only — replace with client-specific images before launch.

---

## Notes

- The `data/` directory needs a `reviews.json` for live reviews to work.
  Seed it by running `scripts/fetch-reviews.js` with the client's Google Place ID,
  or create a minimal `{ "rating": null, "userRatingCount": 0, "reviews": [] }` seed.
- `_data/posts/` should be populated with client blog post `.md` files before build.
- The `functions/submit.js` needs Cloudflare secrets set in CF Pages:
  `TURNSTILE_SECRET`, `GOOGLE_SA_PRIVATE_KEY`, `GOOGLE_SA_CLIENT_EMAIL`
