<!-- eslint-disable ts/ban-ts-comment -->
<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

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

const beritaTerkait = [
  {
    url: 'https://www.kemdikbud.go.id/main/blog/category/berita',
    title: 'Kemdikbud',
    icon: 'https://res.cloudinary.com/dyy24w5kl/image/upload/v1730119603/logo/tutwuri_fdqfmn.png',
  },
  {
    url: 'https://disdik.jabarprov.go.id/informasi/berita',
    title: 'Disdik Jabar',
    icon: 'https://res.cloudinary.com/dyy24w5kl/image/upload/v1730119602/logo/logo-disdik-jabar_wqzwwa.png',
  },
  {
    url: 'https://disdik.majalengkakab.go.id/artikel/semua',
    title: 'Disdik Majalengka',
    icon: 'https://res.cloudinary.com/dyy24w5kl/image/upload/v1730119602/logo/logo-disdik-mjl_qjnalj.png',
  },

]
</script>

<template>
  <UContainer v-if="beritas?.length" class="py-4 md:py-8">
    <div class="max-w-4xl  mx-auto ">
      <!-- List -->

      <!-- End List -->
      <!-- Title -->
      <div v-motion-fade-visible class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 class="headline block text-4xl sm:text-5xl  font-black leading-tight">
          Berita  SDN Teja II
        </h1>
        <h2 class="-mt-4 subheadline">
          Berita yang di publikasikan oleh SDN Teja II & Dinas Terkait
        </h2>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center my-6 gap-6">
        <NuxtLink
          v-for="berita in beritaTerkait" :key="berita.title"
          
          
          :to="berita.url"
          class="h-full"
          target="_blank"
        >
          <UCard
            v-motion-fade-visible
            :ui="{
              body: {
                base: '',
                background: '',
                padding: 'px-4 py-4 sm:p-4',
              },
            }"
            class="hover:ring-2 h-full hover:ring-merah dark:hover:ring-merah-400"
          >
            <div>
              <NuxtImg
                :src="berita.icon"
                class="w-auto object-fill  h-12 bg-merah-500 p-1 dark:bg-merah-800 rounded-md "
                alt="icon"
                height="48"
                format="webp"
              />
              <div class="bg-gradient-to-r from-merah-200 via-merah-50 to-transparent h-0.5 mt-2 dark:from-kuning-500 dark:via-kuning-200">
                <div class="bg-merah-400 w-9 h-0.5 dark:bg-kuning-600" />
              </div>
              <div class="mt-2">
                <h3 class="font-semibold ">
                  {{ berita.title }}
                </h3>
              </div>
            </div>
          </UCard>
        </NuxtLink>
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
