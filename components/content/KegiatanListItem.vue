<script setup lang="ts">
import { useContentPreview } from '#imports'

interface Kegiatan {
  _path: string
  title: string
  description: string

}

const props = defineProps({
  kegiatan: {
    type: Object,
    required: true,
    validator: (value: Kegiatan) => {
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
  return (process.dev || useContentPreview()?.isEnabled()) ? props.kegiatan?._id : undefined
})
const isOpen = ref(false)
const isLoaded = ref(false)
</script>

<template>
  <article
    v-if="kegiatan._path && kegiatan.title"
    :data-content-id="id"
  >
    <UCard
      v-motion-fade-visible
      :ui="{
        footer: {
          padding: 'px-2 py-2 sm:px-4',
        },
        header: {
          padding: 'px-2 py-2 sm:px-4',
        },
      }"
    >
      <div class="aspect-square " @click="isOpen = true">
        <NuxtImg
          v-show="isLoaded"
          v-if="kegiatan.image"
          class=" object-cover  rounded-md"
          :src="kegiatan.image"
          :alt="kegiatan.title"
          :title="kegiatan.title"
          loading="lazy"
          width="500"
          height="500"
          :placeholder="[50, 25, 75, 5]"
          @load="isLoaded = true"
          @click="isOpen = true"
        />
        <USkeleton

          v-show="!isLoaded"
          class="w-full h-64 rounded"
          :ui="{
            rounded: 'rounded',
            base: 'animate-pulse',
            background: 'bg-primary-500 dark:bg-primmary-500',

          } "
        />
      </div>

      <template #footer>
        <div>
          <p class="line-clamp-1 text-sm">
            {{ kegiatan.title }}
          </p>
        </div>
      </template>
    </UCard>
    <UModal
      v-model="isOpen"
      :ui="{
        container: 'flex min-h-full items-center sm:items-center justify-center text-center' }"
    >
      <UCard
        :ui="
          {
            header: {
              padding: 'px-2 py-1 sm:px-4',
            },
            footer: {
              padding: 'px-2 py-2 sm:px-4',
            },
          }
        "
      >
        <template #header>
          <div class="w-full  flex justify-end">
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>

        <NuxtImg
          v-show="isLoaded"
          class=" object-cover w-full h-auto rounded-md aspect-video"
          :src="kegiatan.image"
          :alt="kegiatan.title"
          :placeholder="[50, 25, 75, 5]"
          @load="isLoaded = true"
        />
        <USkeleton

          v-show="!isLoaded"
          class="w-full h-64 rounded"
          :ui="{
            rounded: 'rounded',
            base: 'animate-pulse',
            background: 'bg-primary-500 dark:bg-primmary-500',

          } "
        />
        <template #footer>
          <p class="">
            {{ kegiatan.title }}
          </p>
        </template>
      </UCard>
    </UModal>
  </article>
</template>
