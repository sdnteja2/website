<script setup lang="ts">
interface SocialIcon {
  name: string
  icon: string
  href: string
}

// Ambil konfigurasi `app.config.ts` menggunakan `useAppConfig`
const config = useAppConfig()
const socialIcons = ref<SocialIcon[]>(config.socialIcons?.items?.map((item: any) => ({
  name: item.name || '',
  icon: item.icon || '',
  href: item.href || '',
})) ?? [])

// const socialIcons = ref([
//   { name: 'facebook', icon: 'i-hugeicons-facebook', href: '#' },
//   { name: 'twitter', icon: 'i-hugeicons-twitter', href: '#' },
//   { name: 'instagram', icon: 'i-hugeicons-instagram', href: '#' },
//   { name: 'linkedin', icon: 'i-hugeicons-linkedin', href: '#' },
//   { name: 'whatsapp', icon: 'i-hugeicons-whatsapp', href: '#' },
// ])

const footerColumns = ref([
  {
    title: 'KEMDIKBUD',
    links: [
      { text: 'Pricing', href: '#' },
      { text: 'Changelog', href: '#' },
      { text: 'Docs', href: '#' },
    ],
  },
  {
    title: 'DISDIK JABAR',
    links: [
      { text: 'About us', href: '#' },
      { text: 'Blog', href: '#' },
      { text: 'Careers', href: '#', badge: 'We\'re hiring' },
      { text: 'Customers', href: '#' },
    ],
  },
  {
    title: 'DISDIK MAJALENGKA',
    links: [
      { text: 'Tes', href: '#' },
      { text: 'Blog', href: '#' },
      { text: 'Careers', href: '#', badge: 'We\'re hiring' },
      { text: 'Customers', href: '#' },
    ],
  },
])
</script>

<template>
  <!-- ========== FOOTER ========== -->
  <footer class="mt-auto bg-gray-700 w-full dark:bg-merah-900">
    <div class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <!-- Grid -->
      <UDivider class="mb-10">
        <NuxtLink to="/">
          <NuxtImg
            src="/sdnteja2.png"
            alt="Logo Sekolah"
            width="100"
            height="100"
            class="w-32 h-auto  md:w-40 md:h-auto"
          />
        </NuxtLink>
      </UDivider>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(column, index) in footerColumns"
          :key="index"
          class="col-span-1"
        >
          <h3 class="font-semibold text-white">
            {{ column.title }}
          </h3>
          <div class="mt-3 grid space-y-3">
            <p
              v-for="(link, linkIndex) in column.links"
              :key="linkIndex"
            >
              <a
                :href="link.href"
                class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              >
                {{ link.text }}
              </a>
              <span
                v-if="link.badge"
                class="inline-block ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg"
              >
                {{ link.badge }}
              </span>
            </p>
          </div>
        </div>
      </div>
      <!-- End Grid -->

      <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
        <div class="flex justify-between items-center">
          <p class="text-sm text-gray-400 dark:text-neutral-400">
            © 2024 narr07.
          </p>
        </div>
        <!-- End Col -->

        <!-- Social Brands -->
        <div class="flex gap-4 justify-center">
          <UButton
            v-for="(social, index) in socialIcons"
            :key="index"

            :icon="social.icon"
            :to="social.href"
          />
        </div>
      <!-- End Social Brands -->
      </div>
    </div>
  </footer>
<!-- ========== END FOOTER ========== -->
</template>
