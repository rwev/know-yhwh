# Complete Know YHWH Site Content — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Expand the Know YHWH site from 9 sections to 28 sections covering comprehensive Christian theology, deepening all existing content and writing all new content through a 4-agent quality pipeline.

**Architecture:** Each section is processed through a sequential 4-agent pipeline: Editor (structure) → Biblical Scholar (content) → Hebrew/Greek Linguist (language enrichment) → Theological Critic (orthodoxy review). Content is MDX files in `content/<section>/` with `_meta.js` for sidebar ordering.

**Tech Stack:** Next.js 15, Nextra 4, MDX, Tailwind CSS

---

## Content Conventions

All MDX pages follow these patterns:
- **H1 heading** matching the page title
- **Opening Scripture blockquote** (gold-bordered via site CSS)
- **Sections with H2/H3 headings**, bulleted lists, Scripture references
- **~60-100 lines** per page
- **Index pages**: H1, Scripture quote, intro paragraph, H2 "Key Topics"/"In This Section", bulleted links to sub-pages
- **_meta.js**: `export default { index: { title: 'Overview' }, 'slug': { title: 'Display Title' } }`
- **Root _meta.js** must be updated to include new sections
- **Homepage** `content/index.mdx` must be updated with links to new sections

## Theological Guidelines

- Ecumenical orthodox Christianity (Nicene Creed, Chalcedonian Definition, Apostles' Creed)
- All claims backed by Scripture references
- Present major traditions fairly where they disagree (predestination, baptism, gifts, governance)
- Hebrew/Greek terms: transliterated with original script, e.g., *hesed* (חֶסֶד)
- No speculative theology

## Agent Roles

Each agent is dispatched as a subagent with a specific prompt and role:

**1. Editor Agent** — Given the section topic and design doc, outputs:
- Section folder name (kebab-case)
- List of pages with slugs and titles
- _meta.js content
- Outline for each page (headings, key topics, target Scripture passages)

**2. Biblical Scholar Agent** — Given the Editor's outline, writes:
- Full MDX content for every page in the section
- Deep Scripture exposition, 3-5+ key passages per page
- Church history context where relevant
- Cross-references to other site pages

**3. Hebrew/Greek Linguist Agent** — Given the Scholar's pages, enriches:
- Original-language word studies (Hebrew for OT topics, Greek for NT topics)
- Etymologies and semantic ranges
- Translational nuances that illuminate meaning
- Format: *transliteration* (original script) — definition/significance

**4. Theological Critic Agent** — Given the enriched pages, reviews:
- Consistency with Nicene/Chalcedonian orthodoxy
- Scripture accuracy (correct references, not taken out of context)
- Ecumenical balance (no tradition unfairly favored or excluded)
- Flags any errors and outputs corrected content

---

## Phase 1: New Sections (19 sections)

Each task below creates one complete section through the 4-agent pipeline.

### Task 1: The Trinity

**Files:**
- Create: `content/trinity/_meta.js`
- Create: `content/trinity/index.mdx`
- Create: `content/trinity/one-god-three-persons.mdx`
- Create: `content/trinity/historical-development.mdx`
- Create: `content/trinity/trinitarian-heresies.mdx`
- Modify: `content/_meta.js` (add trinity entry)

**Step 1:** Run Editor Agent — plan section structure and page outlines
**Step 2:** Run Scholar Agent — write all 4 MDX files
**Step 3:** Run Linguist Agent — enrich with Hebrew/Greek (ruach, pneuma, logos, homoousios)
**Step 4:** Run Critic Agent — verify Trinitarian orthodoxy (critical for this topic)
**Step 5:** Write all files to disk
**Step 6:** Commit: `content: add Trinity section`

### Task 2: Creation & Humanity

**Files:**
- Create: `content/creation-and-humanity/_meta.js`
- Create: `content/creation-and-humanity/index.mdx`
- Create: `content/creation-and-humanity/creation.mdx`
- Create: `content/creation-and-humanity/image-of-god.mdx`
- Create: `content/creation-and-humanity/the-fall.mdx`
- Create: `content/creation-and-humanity/sin.mdx`
- Modify: `content/_meta.js`

**Step 1:** Editor Agent — structure and outlines
**Step 2:** Scholar Agent — write all 5 MDX files
**Step 3:** Linguist Agent — enrich (bara, tselem, hamartia, etc.)
**Step 4:** Critic Agent — verify orthodoxy on creation, imago Dei, original sin
**Step 5:** Write files
**Step 6:** Commit: `content: add Creation & Humanity section`

### Task 3: Sanctification & Discipleship

**Files:**
- Create: `content/sanctification-and-discipleship/_meta.js`
- Create: `content/sanctification-and-discipleship/index.mdx`
- Create: `content/sanctification-and-discipleship/sanctification.mdx`
- Create: `content/sanctification-and-discipleship/spiritual-disciplines.mdx`
- Create: `content/sanctification-and-discipleship/suffering-and-growth.mdx`

**Step 1-6:** Same pipeline pattern. Key terms: hagiasmos, teleios.

### Task 4: The Church

**Files:**
- Create: `content/the-church/_meta.js`
- Create: `content/the-church/index.mdx`
- Create: `content/the-church/body-of-christ.mdx`
- Create: `content/the-church/sacraments-and-ordinances.mdx`
- Create: `content/the-church/mission-and-evangelism.mdx`

**Step 1-6:** Same pipeline. Key terms: ekklesia, koinonia, kerygma.

### Task 5: Last Things (Eschatology)

**Files:**
- Create: `content/last-things/_meta.js`
- Create: `content/last-things/index.mdx`
- Create: `content/last-things/second-coming.mdx`
- Create: `content/last-things/resurrection-and-judgment.mdx`
- Create: `content/last-things/new-creation.mdx`

**Step 1-6:** Same pipeline. Key terms: parousia, anastasis, eschaton.

### Task 6: Angels, Demons & Spiritual Warfare

**Files:**
- Create: `content/angels-demons-and-spiritual-warfare/_meta.js`
- Create: `content/angels-demons-and-spiritual-warfare/index.mdx`
- Create: `content/angels-demons-and-spiritual-warfare/angels.mdx`
- Create: `content/angels-demons-and-spiritual-warfare/satan-and-demons.mdx`
- Create: `content/angels-demons-and-spiritual-warfare/spiritual-warfare.mdx`

**Step 1-6:** Same pipeline. Key terms: mal'ak, angelos, diabolos, panoplia.

### Task 7: The Law & Ethics

**Files:**
- Create: `content/the-law-and-ethics/_meta.js`
- Create: `content/the-law-and-ethics/index.mdx`
- Create: `content/the-law-and-ethics/ten-commandments.mdx`
- Create: `content/the-law-and-ethics/moral-and-ceremonial-law.mdx`
- Create: `content/the-law-and-ethics/sermon-on-the-mount.mdx`

**Step 1-6:** Same pipeline. Key terms: torah, nomos, entole, mitzvah.

### Task 8: Israel & the Nations

**Files:**
- Create: `content/israel-and-the-nations/_meta.js`
- Create: `content/israel-and-the-nations/index.mdx`
- Create: `content/israel-and-the-nations/gods-plan-for-israel.mdx`
- Create: `content/israel-and-the-nations/israel-and-the-church.mdx`
- Create: `content/israel-and-the-nations/missions.mdx`

**Step 1-6:** Same pipeline. Key terms: goy/goyim, am, ethne.

### Task 9: Marriage, Family & Sexuality

**Files:**
- Create: `content/marriage-family-and-sexuality/_meta.js`
- Create: `content/marriage-family-and-sexuality/index.mdx`
- Create: `content/marriage-family-and-sexuality/marriage.mdx`
- Create: `content/marriage-family-and-sexuality/family-and-parenting.mdx`
- Create: `content/marriage-family-and-sexuality/sexuality-and-purity.mdx`

**Step 1-6:** Same pipeline.

### Task 10: Apologetics & Worldview

**Files:**
- Create: `content/apologetics-and-worldview/_meta.js`
- Create: `content/apologetics-and-worldview/index.mdx`
- Create: `content/apologetics-and-worldview/arguments-for-god.mdx`
- Create: `content/apologetics-and-worldview/problem-of-evil.mdx`
- Create: `content/apologetics-and-worldview/reliability-of-scripture.mdx`

**Step 1-6:** Same pipeline. Key terms: apologia, logos, pistis.

### Task 11: Church History & Tradition

**Files:**
- Create: `content/church-history-and-tradition/_meta.js`
- Create: `content/church-history-and-tradition/index.mdx`
- Create: `content/church-history-and-tradition/early-church-and-councils.mdx`
- Create: `content/church-history-and-tradition/the-reformation.mdx`
- Create: `content/church-history-and-tradition/modern-christianity.mdx`

**Step 1-6:** Same pipeline.

### Task 12: Christian Life & Vocation

**Files:**
- Create: `content/christian-life-and-vocation/_meta.js`
- Create: `content/christian-life-and-vocation/index.mdx`
- Create: `content/christian-life-and-vocation/work-and-stewardship.mdx`
- Create: `content/christian-life-and-vocation/justice-and-mercy.mdx`
- Create: `content/christian-life-and-vocation/loving-neighbor.mdx`

**Step 1-6:** Same pipeline.

### Task 13: Wisdom Literature

**Files:**
- Create: `content/wisdom-literature/_meta.js`
- Create: `content/wisdom-literature/index.mdx`
- Create: `content/wisdom-literature/proverbs.mdx`
- Create: `content/wisdom-literature/ecclesiastes.mdx`
- Create: `content/wisdom-literature/job.mdx`
- Create: `content/wisdom-literature/psalms.mdx`

**Step 1-6:** Same pipeline. Key terms: hokhmah, mashal, tehillim.

### Task 14: Typology & Biblical Theology

**Files:**
- Create: `content/typology-and-biblical-theology/_meta.js`
- Create: `content/typology-and-biblical-theology/index.mdx`
- Create: `content/typology-and-biblical-theology/types-and-shadows.mdx`
- Create: `content/typology-and-biblical-theology/temple-exile-kingdom.mdx`
- Create: `content/typology-and-biblical-theology/old-testament-to-new.mdx`

**Step 1-6:** Same pipeline. Key terms: typos, antitypos, pleroma.

### Task 15: Suffering, Evil & Theodicy

**Files:**
- Create: `content/suffering-evil-and-theodicy/_meta.js`
- Create: `content/suffering-evil-and-theodicy/index.mdx`
- Create: `content/suffering-evil-and-theodicy/why-suffering-exists.mdx`
- Create: `content/suffering-evil-and-theodicy/gods-sovereignty-over-evil.mdx`
- Create: `content/suffering-evil-and-theodicy/the-cross-as-answer.mdx`

**Step 1-6:** Same pipeline. Key terms: theodikia, pascho, thlipsis.

### Task 16: Heaven, Hell & the Afterlife

**Files:**
- Create: `content/heaven-hell-and-the-afterlife/_meta.js`
- Create: `content/heaven-hell-and-the-afterlife/index.mdx`
- Create: `content/heaven-hell-and-the-afterlife/intermediate-state.mdx`
- Create: `content/heaven-hell-and-the-afterlife/heaven.mdx`
- Create: `content/heaven-hell-and-the-afterlife/hell.mdx`
- Create: `content/heaven-hell-and-the-afterlife/resurrection-body.mdx`

**Step 1-6:** Same pipeline. Key terms: sheol, hades, gehenna, ouranos, paradeisos.

### Task 17: Spiritual Formation & Mysticism

**Files:**
- Create: `content/spiritual-formation-and-mysticism/_meta.js`
- Create: `content/spiritual-formation-and-mysticism/index.mdx`
- Create: `content/spiritual-formation-and-mysticism/contemplative-prayer.mdx`
- Create: `content/spiritual-formation-and-mysticism/desert-fathers.mdx`
- Create: `content/spiritual-formation-and-mysticism/union-with-god.mdx`
- Create: `content/spiritual-formation-and-mysticism/theosis.mdx`

**Step 1-6:** Same pipeline. Key terms: theosis, kenosis, hesychia.

### Task 18: World Religions & Comparative Theology

**Files:**
- Create: `content/world-religions-and-comparative-theology/_meta.js`
- Create: `content/world-religions-and-comparative-theology/index.mdx`
- Create: `content/world-religions-and-comparative-theology/christianity-and-judaism.mdx`
- Create: `content/world-religions-and-comparative-theology/christianity-and-islam.mdx`
- Create: `content/world-religions-and-comparative-theology/uniqueness-of-christ.mdx`

**Step 1-6:** Same pipeline.

### Task 19: Science & Faith

**Files:**
- Create: `content/science-and-faith/_meta.js`
- Create: `content/science-and-faith/index.mdx`
- Create: `content/science-and-faith/creation-and-evolution.mdx`
- Create: `content/science-and-faith/miracles-and-natural-law.mdx`
- Create: `content/science-and-faith/faith-and-reason.mdx`

**Step 1-6:** Same pipeline.

---

## Phase 2: Deepen Existing Sections (9 sections)

Each task expands existing pages and adds new pages.

### Task 20: Deepen God's Nature

**Files:**
- Modify: `content/gods-nature/holiness.mdx` (expand to ~80 lines)
- Modify: `content/gods-nature/omniscience.mdx` (expand)
- Modify: `content/gods-nature/love.mdx` (expand)
- Modify: `content/gods-nature/index.mdx` (add links to new pages)
- Modify: `content/gods-nature/_meta.js` (add new entries)
- Create: `content/gods-nature/sovereignty.mdx`
- Create: `content/gods-nature/immutability.mdx`
- Create: `content/gods-nature/mercy-and-justice.mdx`

**Step 1:** Editor Agent — plan expansions and new page outlines
**Step 2:** Scholar Agent — expand existing pages + write new pages
**Step 3:** Linguist Agent — enrich (qadosh, yada, hesed, tsedaqah, etc.)
**Step 4:** Critic Agent — review
**Step 5:** Write files
**Step 6:** Commit: `content: deepen God's Nature section`

### Task 21: Deepen Names of God

**Files:**
- Modify: existing 3 pages (expand)
- Modify: `_meta.js` and `index.mdx`
- Create: `content/names-of-god/adonai.mdx`
- Create: `content/names-of-god/el-elyon.mdx`
- Create: `content/names-of-god/jehovah-jireh.mdx`

**Step 1-6:** Same pipeline.

### Task 22: Deepen Jesus Christ

**Files:**
- Modify: existing 3 pages (expand)
- Modify: `_meta.js` and `index.mdx`
- Create: `content/jesus-christ/prophet-priest-king.mdx`
- Create: `content/jesus-christ/ascension-and-session.mdx`

**Step 1-6:** Same pipeline.

### Task 23: Deepen Holy Spirit

**Files:**
- Modify: existing 3 pages (expand)
- Modify: `_meta.js` and `index.mdx`
- Create: `content/holy-spirit/baptism-of-the-spirit.mdx`
- Create: `content/holy-spirit/indwelling-and-sealing.mdx`

**Step 1-6:** Same pipeline.

### Task 24: Deepen Scripture

**Files:**
- Modify: existing 3 pages (expand)
- Modify: `_meta.js` and `index.mdx`
- Create: `content/scripture/inspiration-and-inerrancy.mdx`
- Create: `content/scripture/canon.mdx`
- Create: `content/scripture/hermeneutics.mdx`

**Step 1-6:** Same pipeline.

### Task 25: Deepen Salvation

**Files:**
- Modify: existing 3 pages (expand)
- Modify: `_meta.js` and `index.mdx`
- Create: `content/salvation/repentance.mdx`
- Create: `content/salvation/faith.mdx`
- Create: `content/salvation/adoption.mdx`
- Create: `content/salvation/perseverance.mdx`

**Step 1-6:** Same pipeline.

### Task 26: Deepen Covenants

**Files:**
- Modify: existing 3 pages (expand)
- Modify: `_meta.js` and `index.mdx`
- Create: `content/covenants/noahic.mdx`
- Create: `content/covenants/davidic.mdx`
- Create: `content/covenants/covenant-theology.mdx`

**Step 1-6:** Same pipeline.

### Task 27: Deepen Prayer & Worship

**Files:**
- Modify: existing 2 pages (expand)
- Modify: `_meta.js` and `index.mdx`
- Create: `content/prayer-and-worship/lords-prayer.mdx`
- Create: `content/prayer-and-worship/fasting.mdx`
- Create: `content/prayer-and-worship/psalms-and-hymns.mdx`

**Step 1-6:** Same pipeline.

### Task 28: Deepen Prophecy

**Files:**
- Modify: existing 3 pages (expand)
- Modify: `_meta.js` and `index.mdx`
- Create: `content/prophecy/prophetic-literature.mdx`
- Create: `content/prophecy/fulfillment-patterns.mdx`

**Step 1-6:** Same pipeline.

---

## Phase 3: Final Integration

### Task 29: Update Root Navigation

**Files:**
- Modify: `content/_meta.js` — add all 19 new section entries
- Modify: `content/index.mdx` — add links to all new sections

**Step 1:** Update `content/_meta.js` with all new sections in logical order
**Step 2:** Update `content/index.mdx` with links and descriptions for all 28 sections
**Step 3:** Commit: `content: update root navigation for all 28 sections`

### Task 30: Final Theological Review

**Step 1:** Run Critic Agent across ALL content for cross-section consistency
**Step 2:** Verify all Scripture references are accurate
**Step 3:** Verify ecumenical balance across all sections
**Step 4:** Fix any issues found
**Step 5:** Final commit: `content: final theological review pass`

### Task 31: Build Verification

**Step 1:** Run `npm run build` to verify all pages compile
**Step 2:** Fix any build errors
**Step 3:** Commit fixes if needed
