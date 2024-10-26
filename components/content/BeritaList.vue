<!-- eslint-disable ts/ban-ts-comment -->
<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import { computed } from 'vue'

// Define Props
const props = defineProps({
  path: {
    type: String,
    default: 'berita',
  },
})

// useAsyncData tanpa `await` dan mengaktifkan `cache`
const { data: _berita } = useAsyncData(
  'berita',
  () => queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find(),
)

// Komputasi data berita dengan pembatasan jumlah
const beritas = computed(() => (_berita.value || []).slice(0, 10)) // Tampilkan 10 data pertama
</script>

<template>
  <UContainer v-if="beritas?.length" class="py-4 md:py-8">
    <div class="max-w-3xl  mx-auto ">
      <!-- List -->

      <!-- End List -->
      <!-- Title -->
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="headline block text-4xl sm:text-5xl  font-black leading-tight">
          Berita  SDN Teja II
        </h1>
        <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="-mt-4 subheadline">
          Berita yang di publikasikan oleh SDN Teja II
        </h2>
      </div>
      <ul class="space-y-10">
        <div class="featured">
          <BeritaListItem :berita="beritas[0]" :featured="true" />
        </div>
        <div class="layout">
          <BeritaListItem v-for="(berita, index) in beritas.slice(1)" :key="index" :berita="berita" />
        </div>
      </ul>
    </div>
  </UContainer>
  <UContainer v-else class="tour">
    <div class="flex flex-col max-w-3xl space-y-4">
      <!-- Tanggal Placeholder -->
      <div class="flex justify-end">
        <USkeleton class="h-4 w-20" />
      </div>

      <!-- Judul Placeholder -->
      <USkeleton class="h-6 w-full" />

      <!-- Deskripsi Placeholder -->
      <div class="space-y-2">
        <USkeleton class="h-4 w-[90%]" />
        <USkeleton class="h-4 w-[85%]" />
      </div>

      <!-- Tags Placeholder -->
      <div class="flex flex-wrap mt-4 space-x-2">
        <USkeleton v-for="n in 3" :key="n" class="h-6 w-14 rounded-md" />
      </div>

      <!-- Link Baca Selengkapnya Placeholder -->
      <div class="flex justify-end">
        <USkeleton class="h-4 w-24" />
      </div>
    </div>
  </UContainer>
</template>
