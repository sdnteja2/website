<!-- eslint-disable ts/ban-ts-comment -->
<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'artikel',
  },
})

const { data: _articles } = useAsyncData(
  'artikel',
  () => queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find(),
)

const articles = computed(() => _articles.value || [])
</script>

<template>
  <UContainer class="py-4 md:py-8">
    <div class="max-w-[85rem]">
      <!-- Title -->
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 class="headline block text-4xl sm:text-5xl  font-black leading-tight">
          Artikel SDN Teja II
        </h1>
        <h2 class="-mt-4 subheadline">
          Artikel yang dipublikasikan oleh SDN Teja II
        </h2>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Menampilkan Skeleton jika articles tidak ada -->
        <template v-if="!articles.length">
          <UCard v-for="n in 3" :key="n" class="h-full">
            <!-- Placeholder untuk Gambar -->
            <div class="aspect-w-16 aspect-h-9">
              <USkeleton class="w-full h-full rounded-lg" />
            </div>

            <!-- Placeholder untuk Tanggal -->
            <div class="w-full justify-end flex my-4">
              <USkeleton class="h-4 w-20" />
            </div>

            <!-- Placeholder untuk Judul -->
            <div class="mb-2">
              <USkeleton class="h-6 w-full" />
            </div>

            <!-- Placeholder untuk Tags -->
            <div class="flex mt-4 flex-wrap">
              <USkeleton v-for="m in 3" :key="m" class="h-6 w-20 mr-2 rounded-md" />
            </div>
          </UCard>
        </template>

        <!-- Menampilkan Artikel setelah data dimuat -->
        <ArtikelListItem v-for="(article, index) in articles" :key="index" :article="article" />
      </div>
      <!-- End Grid -->
    </div>
  </UContainer>
</template>
