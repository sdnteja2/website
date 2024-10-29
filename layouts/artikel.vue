<!-- eslint-disable unused-imports/no-unused-vars -->
<script setup lang="ts">
const emit = defineEmits(['move'])
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
const router = useRouter()
const { activeHeadings, updateHeadings } = useScrollspy()
watch(() => route.path, () => {
  setTimeout(() => {
    if (process.client) {
      updateHeadings([
        ...document.querySelectorAll('h2'),
        ...document.querySelectorAll('h3'),
      ])
    }
  }, 300)
}, { immediate: true })

function scrollToHeading(id: string) {
  const element = document.getElementById(id)
  if (element) {
    window.setTimeout(() => {
      window.scrollBy({
        top: element.getBoundingClientRect().top - 65,
        behavior: 'smooth',
      })
    }, 100)
    emit('move', id)
  }
}

defineOgImageComponent('OgImage', {
  title: page.value?.title,
  description: page.value?.description || '',
})

if (page.value) {
  useHead({
    title: page.value.title,
    meta: [
      {
        name: 'keywords',
        content: page.value.tags?.join(', ') || 'SDN TEJA 2, TEJA, RAJAGALUH', // Default keywords jika tags kosong
      },
    ],
  })
}
</script>

<template>
  <div>
    <UContainer class="py-14 scroll-smooth md:py-16">
      <div class="max-w-3xl mx-auto">
        <UBreadcrumb
          class="my-4 px-2 shadow py-1 ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg text-lg  bg-white dark:bg-gray-900  inset-x-0 text-center z-30"
          divider=">"
          :links="[{ label: 'Home', to: '/' }, { label: 'Artikel', to: '/artikel' }]"
        />
        <UCard class="ring-1 ring-gray-200 hover:ring-gray-200 dark:hover:ring-gray-800   dark:ring-gray-800  p-2  sm:p-3 bg-white dark:bg-gelap-900">
          <template #header>
            <div class="flex justify-between text-sm">
              <p v-if="page?.author">
                Penulis: {{ page.author }}
              </p>
              <p v-else class="justify-end" />
              <time>
                {{ formatDate(page.date) }}
              </time>
            </div>
          </template>
          <h1 class="font-bold text-balance leading-tight subheadline text-left">
            {{ page.title }}
          </h1>
          <div class="aspect-w-16 aspect-h-9">
            <NuxtImg
              v-if="page?.image"
              class=" object-cover rounded-xl"
              :src="page.image"
              :alt="page.title"
              laoding="lazy"
              :title="page.title"
              height="500"
              width="500"
              :placeholder="[50, 25, 75, 5]"
            />
          </div>
          <p class="text-balance mt-2">
            {{ page.description }}
          </p>
          <template #footer>
            <div v-if="page?.tags">
              <div class="flex flex-wrap ">
                <NuxtLink
                  v-for="(tag, n) in page.tags" :key="n"

                  :to="`/tags#${tag}`" class="uppercase"
                >
                  <UBadge class="mr-2" size="xs">
                    {{ tag }}
                  </UBadge>
                </NuxtLink>
              </div>
            </div>
          </template>
        </UCard>
        <!-- konten -->
        <UCard class="my-4  dark:bg-gelap-900 ring-gray-200 dark:ring-gray-800  flex-1 flex flex-col shadow hover:ring-gray-200 dark:hover:ring-ring-gray-800">
          <div class="prose mx-auto prose-gelap prose-img:mx-auto prose-img:rounded-md prose-img:w-full prose-sm sm:prose-base  dark:prose-invert">
            <slot />
          </div>
        </UCard>

        <!-- sticki butom -->
        <div class="sticky bottom-3 inset-x-0 text-center">
          <div class="inline-block relative group isolate rounded-lg background-gradient ring-1 ring-gray-200 dark:ring-gray-800  p-1  sm:p-3 bg-white dark:bg-gray-900 ">
            <div class="flex items-center gap-x-1.5">
              <UPopover :popper="{ arrow: true }" overlay>
                <UTooltip text="Daftar Isi">
                  <UButton size="xs" square color="white" trailing-icon="i-hugeicons-left-to-right-list-dash" />
                </UTooltip>
                <template #panel="{ close }">
                  <div class="p-3  w-80  ">
                    <h3>Daftar Isi</h3>
                    <div v-for="link of page.body?.toc?.links" :key="link.id" class="flex flex-col  " :class="{ 'ml-1': link.depth === 3 }">
                      <a
                        class="text-sm my-1 px-2 p-1 line-clamp-1 ring-1 rounded-md ring-gray-200 hover:ring-gray-400 dark:hover:ring-gray-600  dark:ring-gray-800 text-left" :href="`#${link.id}`" :class="[activeHeadings.includes(link.id) ? 'text-white bg-merah  ' : 'hover:text-kuning  ']"
                        @click.prevent="scrollToHeading(link.id)" @click="close"
                      >{{ link.text }}</a>
                    </div>
                  </div>
                </template>
              </UPopover><div class="block h-3 border-e border-gray-300 mx-1 dark:border-gray-600" />

              <div class="hs-tooltip inline-block">
                <UPopover :popper="{ arrow: true }" overlay>
                  <UTooltip text="Bagikan Artikel">
                    <UButton size="xs" color="white" trailing-icon="i-hugeicons-share-01" />
                  </UTooltip>
                  <template #panel>
                    <div class="p-3 flex flex-row space-x-2">
                      <ClientOnly>
                        <ShareNetwork
                          network="twitter"
                          :url="`https://sdnteja2.sch.id${page._path}`"
                          :title="page.title"
                          :description="page.description"
                          :hashtags="page.tags"
                          twitter-user="sdnteja2"
                        >
                          <UButton size="xs" color="white" variant="ghost" trailing-icon="i-ph-twitter-logo-duotone" />
                        </ShareNetwork>
                      </ClientOnly>

                      <ClientOnly>
                        <ShareNetwork
                          network="linkedIn"
                          :url="`https://sdnteja2.sch.id${page._path}`"
                          :title="page.title"
                          :description="page.description"
                          :hashtags="page.tags"
                          twitter-user="sdnteja2"
                        >
                          <UButton size="xs" color="white" variant="ghost" trailing-icon="i-ph-linkedin-logo-duotone" />
                        </ShareNetwork>
                      </ClientOnly>
                      <ClientOnly>
                        <ShareNetwork
                          network="telegram"
                          :url="`https://sdnteja2.sch.id${page._path}`"
                          :title="page.title"
                          :description="page.description"
                          :hashtags="page.tags"
                          twitter-user="sdnteja2"
                        >
                          <UButton size="xs" color="white" variant="ghost" trailing-icon="i-ph-telegram-logo-duotone" />
                        </ShareNetwork>
                      </ClientOnly>
                      <ClientOnly>
                        <ShareNetwork
                          network="facebook"
                          :url="`https://sdnteja2.sch.id${page._path}`"
                          :title="page.title"
                          :description="page.description"
                          :hashtags="page.tags"
                          twitter-user="sdnteja2"
                        >
                          <UButton size="xs" color="white" variant="ghost" trailing-icon="i-ph-facebook-logo-duotone" />
                        </ShareNetwork>
                      </ClientOnly>
                      <ClientOnly>
                        <ShareNetwork
                          network="email"
                          :url="`https://sdnteja2.sch.id${page._path}`"
                          :title="page.title"
                          :description="page.description"
                          :hashtags="page.tags"
                          twitter-user="sdnteja2"
                        >
                          <UButton size="xs" color="white" variant="ghost" trailing-icon="i-ph-envelope-simple-duotone" />
                        </ShareNetwork>
                      </ClientOnly>
                      <ClientOnly>
                        <ShareNetwork
                          network="whatsapp"
                          :url="`https://sdnteja2.sch.id${page._path}`"
                          :title="page.title"
                          :description="page.description"
                          :hashtags="page.tags"
                          twitter-user="sdnteja2"
                        >
                          <UButton size="xs" color="white" variant="ghost" trailing-icon="i-ph-whatsapp-logo-duotone" />
                        </ShareNetwork>
                      </ClientOnly>
                    </div>
                  </template>
                </UPopover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
