# Know YHWH — Project Guide

## Overview
An Astro-based knowledge base about YHWH / the God of the Bible. Markdown source files organized by topic get built into a documentation-style website using Starlight.

## Tech Stack
- **Framework**: Astro 5
- **Docs engine**: Starlight (@astrojs/starlight)
- **Fonts**: @fontsource/libre-baskerville, @fontsource/spectral
- **Language**: TypeScript

## Project Structure
```
astro.config.mjs         # Astro + Starlight config (sidebar, fonts, customCss)
src/
  content.config.ts      # Starlight content collection schema
  styles/
    custom.css           # Design system overrides (colors, fonts, blockquotes)
  content/
    docs/                # Markdown source files (each folder = sidebar section)
      index.md          # Homepage
      <section>/
        index.md        # Section overview (sidebar.order: 0)
        <topic>.md      # Individual topic pages
tsconfig.json            # Extends astro/tsconfigs/strict
```

## Commands
- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Production build (output: dist/)
- `npm run preview` — Preview production build

## Content Authoring
- Add new pages as `.md` files in the appropriate `src/content/docs/<section>/` folder
- Each file needs frontmatter with `title` and `sidebar.order` fields
- Add new sections by creating a directory and adding an `autogenerate` entry in astro.config.mjs sidebar
- Use blockquotes (`>`) for Scripture passages — they get special gold-bordered styling

## Design System
- **Headings font**: Libre Baskerville (sturdy, authoritative transitional serif)
- **Body font**: Spectral (sleek, minimal-ornament screen serif)
- **Light mode**: Desert sandstone (#ece3d1) — weathered limestone monastery walls
- **Dark mode**: Starry night sky (#0d0b14) — deep indigo-black
- **Accent**: Aged gold (#b09050) — muted, ancient
- **Blockquotes**: Gold-bordered, stone/night background, serif italic — for Scripture
- **CSS overrides**: src/styles/custom.css (Starlight CSS custom properties)
