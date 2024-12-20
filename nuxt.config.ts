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
    '@nuxt/scripts',
    '@vueuse/motion/nuxt',
    'nuxt-delay-hydration',
    '@nuxtjs/web-vitals',

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
  icon: {
    fetchTimeout: 2000, // 15 seconds
  },
  site: {
    url: 'https://sdnteja2.sch.id/',
    name: 'SDN TEJA 2',
    description: 'Website resmi SDN Teja 2, Kecamatan Rajagaluh, Kabupaten Majalengka, Jawa Barat',
    defaultLocale: 'id', // not needed if you have @nuxtjs/i18n installed
    themeColor: '#F22727',
  },

  scripts: {
    registry: {
      // loads the script
      googleAnalytics: true,
      googleTagManager: true,
    },
  },
  delayHydration: {
    mode: 'mount',
  },
  runtimeConfig: {
    public: {
      scripts: {
        googleAnalytics: {
          id: process.env.GOOGLE_ANALYTICS_ID,
        },
        googleTagManager: {
          id: process.env.GOOGLE_TAG_MANAGER_ID,
        },
      },
    },
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

  studio: {
    gitInfo: {
      name: 'website',
      owner: 'sdnteja2',
      url: 'https://github.com/sdnteja2/website',
    },
    // enabled: true,
  },
  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: [
        '/',
        '/guru',
        '/berita',
        '/artikel',
        '/media',
        '/kegiatan',
      ],
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/guru/**': { isr: true, prerender: true },
    '/berita/**': { isr: true, prerender: true },
    '/artikel/**': { isr: true, prerender: true },
    '/guru': { isr: true, prerender: true },
    '/berita': { isr: true, prerender: true },
    '/artikel': { isr: true, prerender: true },
    '/media': { ssr: false },
    '/kegiatan': { isr: true, prerender: true },

  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

})
