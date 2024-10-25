<!-- eslint-disable unused-imports/no-unused-vars -->
<script setup lang="ts">
const { page } = useContent()
const route = useRoute()

const article = ref<HTMLElement | null>(null)

if (page.value && page.value.cover) {
  useHead({
    meta: [
      { property: 'og:image', content: page.value.cover },
    ],
  })
}

const parentPath = computed(
  () => {
    const pathTabl = route.path.split('/')
    pathTabl.pop()
    return pathTabl.join('/')
  },
)

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
          :links="[{ label: 'Home', to: '/' }, { label: 'Berita', to: '/berita' }]"
        />
        <UCard class="ring-1 ring-gray-200 hover:ring-gray-200 dark:hover:ring-gray-800  dark:ring-gray-800  p-2  sm:p-3 bg-white dark:bg-gray-900">
          <template #header>
            <div class="flex justify-between text-sm">
              <time>
                {{ formatDate(page.date) }}
              </time>
            </div>
          </template>
          <h1 class="font-bold font-body leading-tight title text-left">
            {{ page.title }}
          </h1>
          <div v-if="page?.tags">
            <div class="flex flex-wrap">
              <NuxtLink
                v-for="(tag, n) in page.tags" :key="n"

                :to="`/tags#${tag}`" class="uppercase"
              >
                <UBadge size="xs" class="mr-2">
                  {{ tag }}
                </UBadge>
              </NuxtLink>
            </div>
          </div>
        </UCard>
        <!-- konten -->
        <UCard class="my-4 ring-gray-200 dark:ring-gray-800  flex-1 flex flex-col shadow hover:ring-gray-200 dark:hover:ring-ring-gray-800">
          <div class="prose mx-auto prose-red prose-sm sm:prose-base  dark:prose-invert">
            <slot />
          </div>
        </UCard>
      </div>
    </UContainer>
    <Footer />
  </div>
</template>
