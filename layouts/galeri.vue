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
          :links="[{ label: 'Home', to: '/' }, { label: 'Galeri', to: '/galeri' }]"
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
          <div class="aspect-square max-w-3xl mx-auto ">
            <NuxtImg
              v-if="page.image"
              class=" object-cover  w-full rounded-md"
              :src="page.image"
              :alt="page.title"
              :title="page.title"
              loading="lazy"
              :placeholder="[50, 25, 75, 5]"
            />
          </div>

          <template #footer>
            <div>
              <p>{{ page.title }}</p>
            </div>
          </template>
        </UCard>
      </div>
    </UContainer>
    <Footer />
  </div>
</template>
