<script setup lang="ts">
const { prev, next } = useContent()

function isArticle(item: any) {
  return (
    item
    && item._path.includes('/artikel')
    && !item._path.includes('/galeri')
  )
}
const ui = ref({
  header: {
    padding: 'p-1 m-0 sm:p-2',
  },
})
</script>

<template>
  <div class="grid py-8 gap-8 sm:grid-cols-2">
    <NuxtLink
      v-if="isArticle(prev)"
      :to="prev?._path"
    >
      <UCard
        class="h-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 ease-in-out"
        :ui="ui"
      >
        <div class="wfull pb-2 flex items-center justify-start">
          <UIcon
            name="i-ph-arrow-circle-left-duotone"
            class="w-8 h-8"
          />
        </div>
        <h3 class="line-clamp-2 text-lg font-medium">
          {{ prev?.title }}
        </h3>
      </UCard>
    </NuxtLink>
    <NuxtLink
      v-if="isArticle(next)"
      :to="next?._path"
    >
      <UCard
        class="h-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 ease-in-out"
        :ui="ui"
      >
        <div class="wfull pb-2 flex items-center justify-end">
          <UIcon
            name="i-ph-arrow-circle-right-duotone"
            class="w-8 h-8"
          />
        </div>
        <h3 class="line-clamp-2 text-lg text-right font-medium">
          {{ next?.title }}
        </h3>
      </UCard>
    </NuxtLink>
  </div>
</template>
