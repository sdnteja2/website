// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxt/eslint', '@nuxt/image'],
  ui: {

    global: true,
  },
  colorMode: {
    preference: 'dark',
  },
  fonts: {
    families: [
      {
        name: 'Montserrat',
        provider: 'google',
        weights: [100, 300, 400, 500, 700, 900], // Heading font
        styles: ['normal', 'italic'],
      },
      {
        name: 'Source Sans Pro',
        provider: 'google',
        weights: [200, 300, 400, 600, 700, 900], // Body font
        styles: ['normal', 'italic'],
      },
    ],
  },
})