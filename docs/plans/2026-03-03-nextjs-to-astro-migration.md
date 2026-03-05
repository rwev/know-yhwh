# Next.js/Nextra → Astro/Starlight Migration Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace Next.js + Nextra with Astro + Starlight while preserving all 141 MDX pages, the gold/sandstone design system, and GitHub Pages deployment.

**Architecture:** Astro with Starlight integration handles routing, sidebar, TOC, search (Pagefind), and dark mode. MDX content moves from `content/` to `src/content/docs/` with frontmatter added for titles and sidebar ordering. Custom CSS overrides Starlight's theme variables to match the existing gold/sandstone design.

**Tech Stack:** Astro 5, @astrojs/starlight, @fontsource/cormorant-garamond, @fontsource/source-serif-4, Tailwind CSS (optional, via Starlight integration)

---

### Task 1: Scaffold Astro project and install dependencies

**Files:**
- Modify: `package.json`

**Step 1: Remove old dependencies and install new ones**

```bash
# Remove node_modules and lockfile to start clean
rm -rf node_modules package-lock.json

# Remove all old Next.js/Nextra/React deps
npm pkg delete dependencies.next dependencies.nextra dependencies."nextra-theme-docs" dependencies.react dependencies."react-dom" dependencies."@types/react" dependencies."@types/node" dependencies."@tailwindcss/postcss" dependencies.postcss dependencies.tailwindcss dependencies.typescript
```

**Step 2: Install Astro and Starlight**

```bash
npm install astro @astrojs/starlight @fontsource/cormorant-garamond @fontsource/source-serif-4
```

**Step 3: Update package.json scripts**

Replace the scripts block:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

**Step 4: Commit**

```bash
git add package.json
git commit -m "chore: swap Next.js deps for Astro + Starlight"
```

---

### Task 2: Create Astro config with Starlight integration

**Files:**
- Create: `astro.config.mjs`

**Step 1: Write the Astro config**

```javascript
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/know-yhwh',
  integrations: [
    starlight({
      title: 'Know YHWH',
      customCss: [
        '@fontsource/cormorant-garamond/400.css',
        '@fontsource/cormorant-garamond/400-italic.css',
        '@fontsource/cormorant-garamond/500.css',
        '@fontsource/cormorant-garamond/600.css',
        '@fontsource/cormorant-garamond/700.css',
        '@fontsource/source-serif-4/400.css',
        '@fontsource/source-serif-4/400-italic.css',
        '@fontsource/source-serif-4/500.css',
        '@fontsource/source-serif-4/600.css',
        '@fontsource/source-serif-4/700.css',
        './src/styles/custom.css',
      ],
      sidebar: [
        { slug: 'index' },
        {
          label: "God's Nature",
          autogenerate: { directory: 'gods-nature' },
          collapsed: true,
        },
        {
          label: 'Names of God',
          autogenerate: { directory: 'names-of-god' },
          collapsed: true,
        },
        {
          label: 'The Trinity',
          autogenerate: { directory: 'trinity' },
          collapsed: true,
        },
        {
          label: 'Creation & Humanity',
          autogenerate: { directory: 'creation-and-humanity' },
          collapsed: true,
        },
        {
          label: 'Angels, Demons & Spiritual Warfare',
          autogenerate: { directory: 'angels-demons-and-spiritual-warfare' },
          collapsed: true,
        },
        {
          label: 'Scripture',
          autogenerate: { directory: 'scripture' },
          collapsed: true,
        },
        {
          label: 'Typology & Biblical Theology',
          autogenerate: { directory: 'typology-and-biblical-theology' },
          collapsed: true,
        },
        {
          label: 'Wisdom Literature',
          autogenerate: { directory: 'wisdom-literature' },
          collapsed: true,
        },
        {
          label: 'Prophecy',
          autogenerate: { directory: 'prophecy' },
          collapsed: true,
        },
        {
          label: 'Jesus Christ',
          autogenerate: { directory: 'jesus-christ' },
          collapsed: true,
        },
        {
          label: 'Covenants',
          autogenerate: { directory: 'covenants' },
          collapsed: true,
        },
        {
          label: 'Holy Spirit',
          autogenerate: { directory: 'holy-spirit' },
          collapsed: true,
        },
        {
          label: 'Salvation',
          autogenerate: { directory: 'salvation' },
          collapsed: true,
        },
        {
          label: 'Sanctification & Discipleship',
          autogenerate: { directory: 'sanctification-and-discipleship' },
          collapsed: true,
        },
        {
          label: 'The Law & Ethics',
          autogenerate: { directory: 'the-law-and-ethics' },
          collapsed: true,
        },
        {
          label: 'Prayer & Worship',
          autogenerate: { directory: 'prayer-and-worship' },
          collapsed: true,
        },
        {
          label: 'Spiritual Formation & Mysticism',
          autogenerate: { directory: 'spiritual-formation-and-mysticism' },
          collapsed: true,
        },
        {
          label: 'Christian Life & Vocation',
          autogenerate: { directory: 'christian-life-and-vocation' },
          collapsed: true,
        },
        {
          label: 'Marriage, Family & Sexuality',
          autogenerate: { directory: 'marriage-family-and-sexuality' },
          collapsed: true,
        },
        {
          label: 'Suffering, Evil & Theodicy',
          autogenerate: { directory: 'suffering-evil-and-theodicy' },
          collapsed: true,
        },
        {
          label: 'The Church',
          autogenerate: { directory: 'the-church' },
          collapsed: true,
        },
        {
          label: 'Israel & the Nations',
          autogenerate: { directory: 'israel-and-the-nations' },
          collapsed: true,
        },
        {
          label: 'Church History & Tradition',
          autogenerate: { directory: 'church-history-and-tradition' },
          collapsed: true,
        },
        {
          label: 'World Religions & Comparative Theology',
          autogenerate: { directory: 'world-religions-and-comparative-theology' },
          collapsed: true,
        },
        {
          label: 'Last Things',
          autogenerate: { directory: 'last-things' },
          collapsed: true,
        },
        {
          label: 'Heaven, Hell & the Afterlife',
          autogenerate: { directory: 'heaven-hell-and-the-afterlife' },
          collapsed: true,
        },
        {
          label: 'Apologetics & Worldview',
          autogenerate: { directory: 'apologetics-and-worldview' },
          collapsed: true,
        },
        {
          label: 'Science & Faith',
          autogenerate: { directory: 'science-and-faith' },
          collapsed: true,
        },
      ],
    }),
  ],
})
```

**Step 2: Commit**

```bash
git add astro.config.mjs
git commit -m "feat: add Astro config with Starlight integration and sidebar"
```

---

### Task 3: Create custom CSS theme

**Files:**
- Create: `src/styles/custom.css`

**Step 1: Write the custom CSS**

This file overrides Starlight's CSS custom properties to match the gold/sandstone design system. Starlight uses `[data-theme='light']` and `[data-theme='dark']` selectors.

```css
/* ============================================
   Know YHWH — Design System Overrides
   ============================================ */

:root {
  --color-sandstone: #ece3d1;
  --color-sandstone-dark: #ddd0b8;
  --color-night: #0d0b14;
  --color-night-light: #1a1726;
  --color-gold: #b09050;
  --color-gold-light: #c4a468;

  /* Starlight font overrides */
  --sl-font: 'Source Serif 4', Georgia, 'Times New Roman', serif;
  --sl-font-system: 'Source Serif 4', Georgia, 'Times New Roman', serif;
}

/* --- Aged gold accent scale --- */
:root {
  --sl-color-accent-low: #2a2215;
  --sl-color-accent: #b09050;
  --sl-color-accent-high: #e8d5b0;
}

/* --- Light mode: desert sandstone --- */
[data-theme='light'] {
  --sl-color-bg: var(--color-sandstone);
  --sl-color-bg-nav: color-mix(in srgb, var(--color-sandstone) 95%, var(--color-sandstone-dark));
  --sl-color-bg-sidebar: color-mix(in srgb, var(--color-sandstone) 90%, var(--color-sandstone-dark));
  --sl-color-hairline-light: color-mix(in srgb, var(--color-sandstone-dark) 60%, transparent);
  --sl-color-hairline: var(--color-sandstone-dark);
}

/* --- Dark mode: starry night --- */
[data-theme='dark'] {
  --sl-color-bg: var(--color-night);
  --sl-color-bg-nav: color-mix(in srgb, var(--color-night) 90%, var(--color-night-light));
  --sl-color-bg-sidebar: color-mix(in srgb, var(--color-night) 85%, var(--color-night-light));
  --sl-color-hairline-light: color-mix(in srgb, var(--color-night-light) 60%, transparent);
  --sl-color-hairline: var(--color-night-light);
}

/* --- Heading font: Cormorant Garamond --- */
h1, h2, h3, h4, h5, h6,
.sl-markdown-content h1,
.sl-markdown-content h2,
.sl-markdown-content h3,
.sl-markdown-content h4,
.sl-markdown-content h5,
.sl-markdown-content h6 {
  font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
}

/* Site title in nav */
[data-pagefind-ignore] .site-title {
  font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
}

/* --- Scripture-style blockquotes --- */
.sl-markdown-content blockquote {
  font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif;
  font-style: italic;
  font-size: 1.05em;
  line-height: 1.8;
  letter-spacing: 0.01em;
  border-left: 4px solid var(--color-gold);
  border-top: 1px solid color-mix(in srgb, var(--color-gold) 30%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--color-gold) 30%, transparent);
  border-right: none;
  padding: 1.25rem 1.5rem;
  margin: 1.75rem 0;
  border-radius: 0 0.375rem 0.375rem 0;
}

[data-theme='light'] .sl-markdown-content blockquote {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--color-sandstone-dark) 50%, transparent),
    color-mix(in srgb, var(--color-sandstone-dark) 25%, transparent)
  );
  box-shadow: 0 1px 3px color-mix(in srgb, var(--color-gold) 10%, transparent);
}

[data-theme='dark'] .sl-markdown-content blockquote {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--color-night-light) 80%, transparent),
    color-mix(in srgb, var(--color-night-light) 50%, transparent)
  );
  border-top-color: color-mix(in srgb, var(--color-gold) 20%, transparent);
  border-bottom-color: color-mix(in srgb, var(--color-gold) 20%, transparent);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

/* --- Footer --- */
footer {
  font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif;
}
```

**Step 2: Commit**

```bash
git add src/styles/custom.css
git commit -m "feat: add custom CSS for gold/sandstone design system"
```

---

### Task 4: Move and transform MDX content files

This is the bulk of the migration. All 141 MDX files move from `content/` to `src/content/docs/`. Each file needs:
1. Frontmatter added with `title` (from the h1 heading or `_meta.js`)
2. The h1 heading removed (Starlight renders the title from frontmatter)
3. `sidebar.order` set to match the ordering from `_meta.js`
4. Internal links updated (Starlight uses relative paths or full paths without the basePath prefix — Astro handles `base` automatically)

**Files:**
- Move: `content/**/*.mdx` → `src/content/docs/**/*.mdx`
- Delete: all `content/**/_meta.js` files

**Step 1: Create the target directory structure**

```bash
mkdir -p src/content/docs
```

**Step 2: Copy content preserving directory structure**

```bash
# Copy all section directories
for dir in content/*/; do
  dirname=$(basename "$dir")
  if [ -d "$dir" ]; then
    mkdir -p "src/content/docs/$dirname"
    cp "$dir"*.mdx "src/content/docs/$dirname/" 2>/dev/null
  fi
done

# Copy root index.mdx
cp content/index.mdx src/content/docs/index.mdx
```

**Step 3: Add frontmatter to every MDX file**

For each MDX file, extract the title from the h1 heading (e.g., `# Holiness` → `title: Holiness`), add frontmatter, and remove the h1 line.

Also set `sidebar.order` based on the position in the section's `_meta.js`. For each section, the `_meta.js` defines ordering. The `index` page gets `order: 0`, then subsequent entries get `order: 1, 2, 3...` in the order they appear in `_meta.js`.

**Important transformation rules:**

For `content/index.mdx` (homepage): Add frontmatter with `title: Know YHWH`, `template: splash` (hero landing), and remove the h1 heading.

For section `index.mdx` files (e.g., `gods-nature/index.mdx`): Add frontmatter with the section title from the parent `_meta.js`, `sidebar.order: 0`, `sidebar.label: Overview`. Remove the h1.

For topic pages (e.g., `gods-nature/holiness.mdx`): Add frontmatter with the title from the h1 heading, `sidebar.order` matching position in `_meta.js`. Remove the h1.

Example transformation for `gods-nature/holiness.mdx`:

Before:
```mdx
# Holiness

> "Who is like you, O LORD..."
```

After:
```mdx
---
title: Holiness
sidebar:
  order: 1
---

> "Who is like you, O LORD..."
```

Example frontmatter for `gods-nature/index.mdx`:

```mdx
---
title: "God's Nature"
sidebar:
  order: 0
  label: Overview
---

> "Holy, holy, holy is the LORD..."
```

Example frontmatter for root `index.mdx`:

```mdx
---
title: Know YHWH
description: A comprehensive guide to knowing the God of the Bible — His nature, names, covenants, and plan of salvation.
template: splash
hero:
  title: Know YHWH
  tagline: A comprehensive resource for understanding the God of the Bible — His nature, His names, His covenants, and His plan of redemption through Jesus Christ.
---
```

**Step 4: Update internal links**

All internal links currently use the format `[text](/section/page)`. In Starlight with `base: '/know-yhwh'`, Astro automatically prepends the base path, so links should remain as-is (e.g., `[Holiness](/gods-nature/holiness)`). No changes needed if Astro is handling base correctly.

However, check that links don't have a leading `/know-yhwh` prefix already. They don't (confirmed from content/index.mdx inspection).

**Step 5: Commit**

```bash
git add src/content/docs/
git commit -m "feat: migrate 141 MDX files to Starlight content structure"
```

---

### Task 5: Delete Next.js-specific files

**Files:**
- Delete: `app/` directory
- Delete: `mdx-components.tsx`
- Delete: `next.config.mjs`
- Delete: `postcss.config.mjs`
- Delete: `tsconfig.json`
- Delete: `content/` directory (after content has been moved to `src/content/docs/`)
- Delete: all `_meta.js` files (already inside content/)

**Step 1: Remove Next.js files**

```bash
rm -rf app/
rm mdx-components.tsx
rm next.config.mjs
rm postcss.config.mjs
rm tsconfig.json
rm -rf content/
```

**Step 2: Commit**

```bash
git add -A
git commit -m "chore: remove Next.js/Nextra files"
```

---

### Task 6: Create Astro TypeScript config

**Files:**
- Create: `tsconfig.json`

**Step 1: Write tsconfig.json**

Astro projects use the Astro TypeScript preset:

```json
{
  "extends": "astro/tsconfigs/strict"
}
```

**Step 2: Commit**

```bash
git add tsconfig.json
git commit -m "chore: add Astro tsconfig"
```

---

### Task 7: Update GitHub Actions deployment workflow

**Files:**
- Modify: `.github/workflows/deploy.yml`

**Step 1: Rewrite the workflow for Astro**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci

      - run: npm run build

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Key change: artifact path is `dist` (Astro output) instead of `out` (Next.js output).

**Step 2: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: update deployment workflow for Astro"
```

---

### Task 8: Update .gitignore

**Files:**
- Modify: `.gitignore`

**Step 1: Replace with Astro-appropriate ignores**

```
# Astro
dist/
.astro/

# Dependencies
node_modules/

# Environment
.env
.env.*

# OS
.DS_Store

# Editor
*.pem
```

**Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: update .gitignore for Astro"
```

---

### Task 9: Update CLAUDE.md project guide

**Files:**
- Modify: `CLAUDE.md`

**Step 1: Rewrite the project guide**

Update the following sections:
- **Tech Stack**: Replace Next.js/Nextra/React with Astro/Starlight
- **Project Structure**: Replace `app/` with `src/`, `content/` with `src/content/docs/`, remove `_meta.js` references, add `astro.config.mjs`
- **Commands**: Replace `next dev` with `astro dev`, `next build` with `astro build`, `next start` with `astro preview`
- **Content Authoring**: Update to reference Starlight frontmatter instead of `_meta.js`, note that titles come from frontmatter `title` field and sidebar ordering from `sidebar.order`
- **Design System**: Keep as-is (fonts and colors unchanged), note CSS lives in `src/styles/custom.css`

**Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md for Astro migration"
```

---

### Task 10: Install dependencies, build, and verify

**Step 1: Install dependencies**

```bash
npm install
```

**Step 2: Run the build**

```bash
npm run build
```

Expected: Build succeeds, `dist/` directory created with static HTML for all 141 pages.

**Step 3: Preview locally**

```bash
npm run preview
```

Expected: Site loads at `localhost:4321/know-yhwh/` with:
- Sidebar showing all 28 sections, collapsed by default
- Gold/sandstone design system (light mode) and starry night (dark mode)
- Cormorant Garamond headings, Source Serif 4 body text
- Gold-bordered Scripture blockquotes
- Pagefind search working
- TOC on right side of content pages
- Dark mode toggle functional

**Step 4: Spot-check pages**

Navigate to:
- `/know-yhwh/` — homepage with hero
- `/know-yhwh/gods-nature/` — section overview
- `/know-yhwh/gods-nature/holiness/` — topic page with blockquotes
- `/know-yhwh/salvation/gospel/` — topic page with internal links

Verify:
- All internal links resolve correctly
- Blockquotes have gold border styling
- Fonts render correctly
- Dark mode toggle works
- Search finds content

**Step 5: Fix any issues found during verification**

Common issues to watch for:
- Links that need trailing slashes
- MDX syntax that Starlight handles differently
- CSS selector mismatches between `.nextra-content` → `.sl-markdown-content`
- Font loading issues

**Step 6: Commit any fixes**

```bash
git add -A
git commit -m "fix: resolve migration issues found during verification"
```

---

### Task 11: Final cleanup

**Step 1: Remove old design docs if desired**

The `docs/plans/` directory can stay for historical reference.

**Step 2: Remove `out/` from gitignore if it was tracked**

Already handled in Task 8.

**Step 3: Final commit**

```bash
git add -A
git commit -m "chore: complete Next.js to Astro/Starlight migration"
```
