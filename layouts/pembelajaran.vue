<script setup lang="ts">
const { page } = useContent()

defineOgImageComponent('OgImage', {
  title: page.title,
  description: page.description,
})
</script>

<template>
  <div>
    <Navbar />
    <UContainer class="py-14 md:py-16">
      <div class="max-w-3xl mx-auto">
        <UBreadcrumb
          class="my-4 px-2 shadow py-1 ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg text-lg  bg-white dark:bg-gray-900  inset-x-0 text-center z-30"
          divider=">"
          :links="[{ label: 'Home', to: '/' }, { label: 'Pembelajaran', to: '/pembelajaran' }]"
        />
        <UCard class="ring-1 ring-gray-200 hover:ring-gray-200 dark:hover:ring-gray-800  dark:ring-gray-800  p-2  sm:p-3 bg-white dark:bg-gray-900">
          <template #header>
            <div class="flex justify-between text-sm">
              <div v-if="page?.tags">
                <div class="flex flex-wrap">
                  <NuxtLink v-for="(tag, n) in page.tags" :key="n" :to="`/tags#${tag}`" class="uppercase">
                    <UBadge size="xs" class="mr-2">
                      {{ tag }}
                    </UBadge>
                  </NuxtLink>
                </div>
              </div>
              <p v-else class="justify-end" />
            </div>
          </template>
          <h1 class="font-bold font-body capitalize leading-tight title text-left">
            {{ page.title }}
          </h1>
        </UCard>
        <!-- konten -->
        <UCard class="my-4 ring-gray-200 dark:ring-gray-800  flex-1 flex flex-col shadow hover:ring-gray-200 dark:hover:ring-ring-gray-800">
          <lite-youtube
            class="mx-auto w-full"
            :videoid="page.video"
            :playlabel="page.title"
            params="controls=2&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"
          />

          <template #footer>
            <div>
              <NuxtLink target="_blank" :to="page.url">
                Sumber: {{ page.sumber }}
              </NuxtLink>
            </div>
            <div class="w-full justify-end flex">
              <UBadge color="gray">
                Kelas {{ page.kelas }}
              </UBadge>
            </div>
          </template>
        </UCard>
      </div>
    </UContainer>
    <Footer />
  </div>
</template>
