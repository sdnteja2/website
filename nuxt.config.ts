// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxt/eslint'],
  ui: {

    global: true,
  },
  colorMode: {
    preference: 'dark',
  },
  fonts: {
    families: [
      {
        name: 'Poppins',
        provider: 'google',
        weights: [400, 600, 700, 800, 900], // Anda bisa menambahkan bobot yang diperlukan
        styles: ['normal', 'italic'],
      },
      {
        name: 'Lato',
        provider: 'google',
        weights: [300, 400, 700, 900], // Anda bisa menambahkan bobot yang diperlukan
        styles: ['normal', 'italic'],
      },
    ],
  },
})
