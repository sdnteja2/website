<script setup lang="ts">
import { useContentPreview } from '#imports'

interface Pembelajaran {
  _path: string
  title: string
  description: string
  video: string
  kelas: string
  url: string
  sumber: string

}

const props = defineProps({
  pembelajaran: {
    type: Object,
    required: true,
    validator: (value: Pembelajaran) => {
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
  return (process.dev || useContentPreview()?.isEnabled()) ? props.pembelajaran?._id : undefined
})
</script>

<template>
  <article
    v-if="pembelajaran._path && pembelajaran.title" data-aos="fade-up"
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
        :videoid="pembelajaran.video"
        :playlabel="pembelajaran.title"
        params="controls=2&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"
      />
      <h2 class="capitalize">
        {{ pembelajaran.title }}
      </h2>
      <template #footer>
        <div>
          <NuxtLink
            target="_blank"
            rel="nofollow"
            :title="pembelajaran.title"

            :to="pembelajaran.url"
          >
            Sumber: {{ pembelajaran.sumber }}
          </NuxtLink>
        </div>
        <div class="w-full justify-end flex">
          <UBadge color="gray">
            Kelas {{ pembelajaran.kelas }}
          </UBadge>
        </div>
      </template>
    </UCard>
  </article>
</template>
