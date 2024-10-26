// plugins/aos.client.ts
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  AOS.init({}) // Initialize AOS
  nuxtApp.AOS = AOS // Optionally assign AOS to nuxtApp for global access
})
