<!-- eslint-disable no-console -->
<script setup>
const route = useRoute()
const selectedTag = ref(route.hash.replace(/^#/, ''))

async function fetchContent() {
  const content = await queryContent(['berita', 'artikel']).where({ tags: { $in: [selectedTag.value] } }).find()
  console.log(content)
  return content
}

// Dapatkan konten pada saat komponen dimount
const filteredContent = ref([])
onMounted(async () => {
  filteredContent.value = await fetchContent()
})
async function handleTagClick(tag) {
  selectedTag.value = tag
  filteredContent.value = await fetchContent()
  // Set URL tanpa mereload halaman
  const router = useRouter()
  router.push({ path: '/tags', query: { tag } })
}
</script>

<template>
  <UContainer class="py-4 md:py-8">
    <UBreadcrumb
      class="my-4 px-2 shadow py-1 ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg text-lg  bg-white dark:bg-gray-900  inset-x-0 text-center z-30"
      divider=">"
      :links="[{ label: 'Home', to: '/' }, { label: 'Tags' }]"
    />
    <div>
      <div>
        <div class="py-10">
          <h1 class="dark:text-white title">
            Konten dengan tag: <span class="uppercase">
              {{ selectedTag }}
            </span>
          </h1>
        </div>
        <div
          class="grid md:grid-cols-2    gap-6"
        >
          <div v-for="content in filteredContent" :key="content.id">
            <UCard class="h-full">
              <NuxtLink :to="content._path">
                <div class="mb-2">
                  <h2 class="font-semibold font-body leading-tight text-gray-800 dark:text-gray-300 ">
                    {{ content.title }}
                  </h2>
                </div>
              </NuxtLink>
              <template #footer>
                <div class="flex flex-wrap">
                  <NuxtLink v-for="(tag, n) in content.tags" :key="n" :to="`/tags#${tag}`" class="uppercase" @click="handleTagClick(tag)">
                    <UBadge size="xs" class="mr-2">
                      {{ tag }}
                    </UBadge>
                  </NuxtLink>
                </div>
              </template>
            </UCard>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>
