/* eslint-disable node/prefer-global/process */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxtjs/cloudinary',
    '@nuxthq/studio',
  ],
  ui: {
    global: true,
  },
  colorMode: {
    preference: 'dark',
  },
  content: {
    documentDriven: true,
    navigation: {
      fields: ['navTitle'],
    },
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini', 'c', 'cpp'],
    },
  },
  site: {
    url: 'https://sdnteja2.sch.id/',
    name: 'SDN TEJA 2',
    description: 'Website resmi SDN Teja 2, Kecamatan Rajagaluh, Kabupaten Majalengka, Jawa Barat',
    defaultLocale: 'id', // not needed if you have @nuxtjs/i18n installed
    themeColor: '#F22727',
  },
  cloudinary: {

    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
  },
  fonts: {
    families: [
      {
        name: 'Montserrat',
        provider: 'google',
        weights: [200, 300, 400, 500, 600, 700, 800, 900], // Heading font
        styles: ['normal', 'italic'],
      },
      {
        name: 'Plus Jakarta Sans',
        provider: 'google',
        weights: [200, 300, 400, 500, 600, 700, 800, 900], // Body font
        styles: ['normal', 'italic'],
      },
    ],
  },
  css: [
    '~/node_modules/lite-youtube-embed/src/lite-yt-embed.css',
  ],
  build: {
    transpile: ['lite-youtube'],
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['lite-youtube'].includes(tag),
    },
  },
  studio: {
    gitInfo: {
      name: 'sdnteja2',
      owner: 'sdnteja2',
      url: 'https://sdnteja2.sch.id/',
    },
  },
  // routeRules: {
  //   // Home pre-rendered at build time
  //   '/': { prerender: true },

  //   // Guru page cached with stale-while-revalidate (background revalidation)
  //   '/guru': { swr: true, prerender: true },

  //   // Berita page generated on demand, cached in CDN for 1 hour
  //   '/berita': { isr: 3600 },

  //   // Artikel page cached with swr for 1 hour
  //   '/artikel': { swr: 3600 },

  //   // Media page only rendered on client-side
  //   '/media': { ssr: false },

  //   // Kegiatan page generated on demand, cached on CDN
  //   '/kegiatan': { isr: true },
  // },
})
