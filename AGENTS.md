# AGENTS.md

## Project Overview

Astro + Starlight documentation site for Christian theology. The project is almost
entirely Markdown content — there are no custom components, layouts, or application
code. Agents working here will primarily write and edit `.md` files under
`src/content/docs/`.

## Build / Dev / Preview Commands

```bash
npm run dev        # Start dev server (http://localhost:4321/know-yhwh/)
npm run build      # Production build — the only quality gate
npm run preview    # Preview production build locally
```

There are no linters, formatters, or test frameworks installed. The Astro build
(`npm run build`) is the sole verification step. Always run it after structural
changes (new pages, config edits, frontmatter changes). Pure content edits to
existing pages do not require a build check.

## CI/CD

GitHub Actions deploys to GitHub Pages on push to `master`. The workflow
(`.github/workflows/deploy.yml`) uses `withastro/action@v3` with Node 22.

## Project Structure

```
astro.config.mjs          # Site config, Starlight integration, sidebar definition
tsconfig.json              # Extends astro/tsconfigs/strict
src/
  content.config.ts        # Astro content collection (standard Starlight boilerplate)
  content/docs/            # ALL site content lives here
    index.md               # Homepage
    404.md                 # 404 page
    <section>/             # ~28 topic directories
      index.md             # Section overview (sidebar order: 0)
      <article>.md         # Individual articles (order: 1, 2, 3, ...)
  styles/
    custom.css             # Design system overrides (colors, fonts, blockquotes)
public/
  favicon.ico
```

## Adding Content

### New article in an existing section

Create `src/content/docs/<section>/<slug>.md` with frontmatter (see below).
Sidebar ordering is automatic via `autogenerate` — just set the `order` value.

### New section

1. Create `src/content/docs/<section-slug>/index.md` (with `order: 0`, `label: Overview`)
2. Add a sidebar entry in `astro.config.mjs` inside the `sidebar` array
3. Add a link on the homepage `src/content/docs/index.md`

## Markdown Content Conventions

### Frontmatter

Section overview pages use `order: 0` and `label: Overview`:
```yaml
---
title: "Section Name"
sidebar:
  order: 0
  label: Overview
---
```

Article pages just need `title` and `order`:
```yaml
---
title: Article Title
sidebar:
  order: 3
---
```

- Quote titles containing special characters: `"God's Nature"`, `"One God, Three Persons"`
- Leave simple titles unquoted: `Holiness`, `Justification`
- Do not add `description` (only the root index.md and 404.md use it)

### Opening Scripture blockquote

Every page must begin with a Scripture blockquote immediately after the frontmatter:

```markdown
> "Scripture text here." — Book Chapter:Verse
```

- Em dash (`—`) before the reference; en dash (`–`) for verse ranges
- Wrap the quotation in double quotes
- Standard Bible citation format (e.g., `Romans 5:1`, `Ephesians 2:8–9`)

### Headings

- `## H2` for major sections, `### H3` for subsections
- Never use `# H1` — the title comes from frontmatter
- Use Title Case for headings

### Hebrew and Greek terms

```markdown
*qadosh* (קָדוֹשׁ) — "holy" or "set apart"
*dikaiosynē* (δικαιοσύνη) — "righteousness"
```

- Italicize transliterations with `*asterisks*`
- Include the original Hebrew/Greek script in parentheses
- Use em dash before the English gloss

### Lists

- Ordered lists (`1.`, `2.`) for sequential or numbered content
- Unordered lists (`-`) for non-sequential items
- Bold lead terms: `- **Term** — explanation`

### Internal links

- Always use relative paths with `./` prefix and trailing slash:
  `[**God's Nature**](./gods-nature/)`
- Bold text inside links for section references on overview/index pages

### Blockquotes

Used exclusively for Scripture quotations. Never for callouts, asides, or emphasis.

### Content tone

- Scholarly and irenic — present multiple theological viewpoints fairly
  (e.g., Protestant vs. Catholic, different eschatological positions)
- Deeply Scriptural — weave Scripture references throughout with parenthetical
  citations like `(Romans 8:1)` or `(cf. Isaiah 53:6)`
- Long, substantive paragraphs (3-6 sentences typical)
- No images, code blocks, or tables

## JavaScript/TypeScript Style (config files)

The project has only two config files (`astro.config.mjs`, `src/content.config.ts`),
but follow these conventions if editing or adding them:

- No semicolons (ASI)
- Single quotes for strings
- Trailing commas in objects and arrays
- Import ordering: framework imports first (`astro/config`, `astro:content`),
  then plugin imports (`@astrojs/starlight/*`)
- Use `const` for exports; use Astro's `defineConfig` / `defineCollection` helpers

## CSS Style (`src/styles/custom.css`)

- Section headers: `/* === Section Name === */`
- Sub-sections: `/* --- Sub-section --- */`
- Semantic custom property names: `--color-sandstone`, `--color-night`, `--color-gold`
- Override Starlight variables (`--sl-color-accent`, `--sl-font`, etc.) — do not
  duplicate Starlight's own styling
- Support both light and dark themes via `[data-theme='light']` / `[data-theme='dark']`
