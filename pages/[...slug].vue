<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'
// Mengimpor komponen SpeedInsights dari paket speed-insights untuk digunakan dalam template.
// Komponen ini mungkin digunakan untuk menampilkan metrik kinerja atau analisis terkait kecepatan.
</script>

<template>
  <!-- Komponen SpeedInsights untuk menampilkan wawasan kinerja halaman. -->
  <SpeedInsights />

  <div>
    <!-- Komponen NavBar untuk menampilkan navigasi utama situs. -->
    <NavBar />

    <!-- NuxtLayout digunakan untuk menyusun tata letak halaman dengan menyertakan konten dokumen. -->
    <NuxtLayout>
      <!-- Komponen ContentDoc untuk menampilkan konten utama dari dokumen atau halaman. -->
      <ContentDoc />
    </NuxtLayout>

    <!-- Komponen Footer untuk menampilkan informasi footer situs. -->
    <Footer />
  </div>
</template>
