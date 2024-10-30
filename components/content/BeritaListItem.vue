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
    v-if="berita._path && berita.title"

    :data-content-id="id"
    class="h-full"
  >
    <UCard v-motion-fade-visible>
      <p class="mb-1 text-sm justify-end flex text-gray-500 dark:text-neutral-500">
        <UBadge size="xs" class="">
          <time>
            {{ formatDate(berita.date) }}
          </time>
        </UBadge>
      </p>
      <NuxtLink
        :title="berita.title"
        :to="berita._path"
      >
        <h2 class=" font-bold text-lg text-gray-800 dark:text-neutral-200">
          {{ berita.title }}
        </h2>
      </NuxtLink>
      <p class="mt-1 line-clamp-2   dark:text-neutral-500">
        {{ berita.description }}
      </p>
      <div v-if="berita?.tags" class="flex flex-wrap mt-4 space-x-2">
        <div v-for="(tag, n) in berita.tags" :key="n">
          <NuxtLink
            rel="tag"
            :title="`Tags ${tag}`"
            :to="`/tags#${tag}`" class="uppercase"
          >
            <UBadge color="white" size="xs">
              {{ tag }}
            </UBadge>
          </NuxtLink>
        </div>
      </div>
      <p class="my-2 flex justify-end">
        <NuxtLink :to="berita._path" class="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
          Lanjut Baca...
        </NuxtLink>
      </p>
    </UCard>
    <UDivider />
  </article>
</template>
