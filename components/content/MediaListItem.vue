<script setup lang="ts">
import { useContentPreview } from '#imports'

interface Media {
  _path: string
  title: string
  description: string
  video: string
  kelas: string
  url: string
  sumber: string

}

const props = defineProps({
  media: {
    type: Object,
    required: true,
    validator: (value: Media) => {
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
  return (process.dev || useContentPreview()?.isEnabled()) ? props.media?._id : undefined
})
</script>

<template>
  <article
    v-if="media._path && media.title" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    :data-content-id="id"
    class="h-full"
  >
    <UCard
      :ui="{
        footer: {
          padding: 'px-2 py-2 sm:px-4',
        },
        header: {
          padding: 'px-2 py-2 sm:px-4',
        },
      }"
      class="h-full"
    >
      <lite-youtube
        :videoid="media.video"
        :playlabel="media.title"
        params="controls=2&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"
      />
      <h2 class="capitalize">
        {{ media.title }}
      </h2>
      <template #footer>
        <div>
          <NuxtLink
            target="_blank"
            rel="nofollow"
            :title="media.title"

            :to="media.url"
          >
            Sumber: {{ media.sumber }}
          </NuxtLink>
        </div>
        <div class="w-full justify-end flex">
          <UBadge color="gray">
            Kelas {{ media.kelas }}
          </UBadge>
        </div>
      </template>
    </UCard>
  </article>
</template>
