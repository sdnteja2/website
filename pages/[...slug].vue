<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'

const { page } = useContent()
// Mengimpor komponen SpeedInsights dari paket speed-insights untuk digunakan dalam template.
// Komponen ini mungkin digunakan untuk menampilkan metrik kinerja atau analisis terkait kecepatan.
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
    <!-- Komponen SpeedInsights untuk menampilkan wawasan kinerja halaman. -->
    <SpeedInsights />

    <NuxtLayout>
      <ContentDoc />
    </NuxtLayout>

    <!-- Komponen Footer untuk menampilkan informasi footer situs. -->
  </div>
</template>
