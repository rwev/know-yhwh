# Migration Design: Next.js/Nextra → Astro/Starlight

## Motivation
- Simpler stack: Nextra/Next.js is heavy for a static content site
- Performance: faster builds, smaller bundles, zero JS by default

## Architecture

Astro + Starlight replaces both Next.js and Nextra. Starlight provides sidebar, TOC, Pagefind search, and dark mode toggle out of the box.

Content stays as MDX, moved from `content/` to `src/content/docs/` (Starlight convention). The `_meta.js` sidebar ordering files are replaced by Starlight's `sidebar` config in `astro.config.mjs` using `autogenerate: { directory }` per section.

Static output deployed to GitHub Pages at `/know-yhwh`.

## Design System Mapping

| Current (Nextra) | Starlight equivalent |
|---|---|
| Nextra hue/saturation color config | `--sl-color-accent-*` (gold accent scale) |
| `--color-sandstone` / `--color-night` | `--sl-color-gray-*` (custom gray scale) |
| `--font-heading` (Cormorant Garamond) | Custom CSS heading selector |
| `--font-body` (Source Serif 4) | `--sl-font` override |
| Blockquote Scripture styling | Custom CSS in `src/styles/custom.css` |
| Light/dark mode backgrounds | `data-theme` attribute + CSS overrides |

Fonts loaded via Fontsource npm packages.

## Content Migration

141 MDX files move with minimal changes:
- Add Starlight frontmatter (`title` field)
- Internal links updated for Astro routing
- Blockquote syntax unchanged — custom CSS handles gold styling
- `_meta.js` files deleted (replaced by sidebar config)

## Files Created / Deleted

**New:**
- `astro.config.mjs` — Starlight integration, sidebar, customCss, base path
- `src/styles/custom.css` — design system overrides
- `src/content/docs/**/*.mdx` — moved from `content/`

**Deleted:**
- `app/` directory (layout.tsx, globals.css, catch-all route)
- `content/_meta.js` and all section `_meta.js` files
- `mdx-components.tsx`, `next.config.mjs`, `postcss.config.mjs`, `tsconfig.json`

**Updated:**
- `package.json` — swap deps, update scripts
- `.github/workflows/deploy.yml` — use `withastro/action@v3`
- `CLAUDE.md` — update project guide

## Deployment

GitHub Actions uses `withastro/action@v3` for build + Pages upload. Base path via `base: '/know-yhwh'` in Astro config.
