import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  site: 'https://rwev.github.io',
  base: '/know-yhwh',
  integrations: [
    starlight({
      title: 'Know YHWH',
      customCss: [
        '@fontsource/libre-baskerville/400.css',
        '@fontsource/libre-baskerville/400-italic.css',
        '@fontsource/libre-baskerville/700.css',
        '@fontsource/spectral/400.css',
        '@fontsource/spectral/400-italic.css',
        '@fontsource/spectral/500.css',
        '@fontsource/spectral/600.css',
        '@fontsource/spectral/700.css',
        './src/styles/custom.css',
      ],
      sidebar: [
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
