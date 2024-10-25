<script setup lang="ts">
import { useContentPreview } from '#imports'

interface Berita {
  _path: string
  title: string
  date: string
  description: string
  cover: string
  image: string

}

const props = defineProps({
  berita: {
    type: Object,
    required: true,
    validator: (value: Berita) => {
      if (value?._path && value.title)
        return true
      return false
    },
  },
  featured: {
    type: Boolean,
    default: false,
  },
})

const id = computed(() => {
  return (process.dev || useContentPreview()?.isEnabled()) ? props.berita?._id : undefined
})
</script>

<template>
  <article
    v-if="berita._path && berita.title" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    :data-content-id="id"
    class="h-full"
  >
    <UCard
      :ui="{
        footer: {
          padding: 'px-2 py-1 sm:px-4',
        },
        header: {
          padding: 'px-2 py-1 sm:px-4',
        },
      }"
      class="h-full"
    >
      <NuxtLink
        :title="berita.title"
        :to="berita._path"
      >
        <div class="mb-2">
          <h2 class="font-bold text-lg line-clamp-3 font-body leading-tight text-gray-800 dark:text-gray-300 ">
            {{ berita.title }}
          </h2>
        </div>
      </NuxtLink>
      <template #header>
        <div class="w-full  flex justify-end ">
          <UBadge size="xs" class="">
            <time>
              {{ formatDate(berita.date) }}
            </time>
          </UBadge>
        </div>
      </template>
      <template #footer>
        <div v-if="berita?.tags" class="flex flex-wrap space-x-2">
          <div v-for="(tag, n) in berita.tags" :key="n">
            <NuxtLink
              rel="tag"
              :title="`Tags ${tag}`"
              :to="`/tags#${tag}`" class="uppercase"
            >
              <UBadge size="xs">
                {{ tag }}
              </UBadge>
            </NuxtLink>
          </div>
        </div>
      </template>
    </UCard>
  </article>
</template>
