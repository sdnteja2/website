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
    v-if="media._path && media.title"

    :data-content-id="id"
    class="h-full x"
  >
    <UCard
      v-motion-fade-visible
      :ui="{
        body: {
          padding: 'px-2 py-2 sm:px-4',
        },
        footer: {
          padding: 'px-2 py-2 sm:px-4',
        },
        header: {
          padding: 'px-2 py-2 sm:px-4',
        },
      }"
      class="h-full z-20"
    >
      <div>
        <div class="flex items-center justify-center p-5">
          <ScriptYouTubePlayer :video-id="media.video">
            <template #placeholder="{ placeholder }">
              <img :src="placeholder" :alt="media.tile" loading="eager">
            </template>
          </ScriptYouTubePlayer>
        </div>
      </div>
      <h3 class="font-body font-medium mt-2 ">
        {{ media.title }}
      </h3>
      <template #footer>
        <div>
          <NuxtLink
            target="_blank"
            rel="nofollow"
            :title="media.title"
            class="text-sm underline"
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
