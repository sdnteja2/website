<!-- eslint-disable vue/no-unused-vars -->
<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'media',
  },
})
const selected = ref('Semua Kelas') // Default ke "Semua Kelas"

// Mendapatkan data media
const { data: _media } = await useAsyncData('media', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())
const medias = computed(() => _media.value || [])

// Daftar kelas unik untuk opsi filter, hanya menampilkan kelas yang memiliki media
const listkelas = computed(() => {
  const uniqueClasses = new Set(medias.value.map(media => media.kelas))
  // Tambahkan "Kelas" sebelum setiap nomor kelas
  return ['Semua Kelas', ...Array.from(uniqueClasses).map(kelas => `Kelas ${kelas}`)]
})

// Filtered media berdasarkan kelas yang dipilih
const filteredMedias = computed(() => {
  if (selected.value === 'Semua Kelas') {
    return medias.value // Tampilkan semua Kelas jika "Semua Kelas" dipilih
  }

  // Ambil nomor kelas dari string yang dipilih (misalnya "Kelas 5" menjadi "5")
  const selectedKelas = selected.value.replace('Kelas ', '')

  return medias.value.filter(media => media.kelas.toString() === selectedKelas) // Tampilkan media dari kelas yang dipilih
})

const mediaTerkait = [
  {
    url: 'https://buku.kemdikbud.go.id/',
    title: 'SIBI',
    description: 'Sistem Informasi Perbukuan Indonesia',
    icon: '/img/logo/logo-sibi.png',
  },
  {
    url: 'https://belajar.kemdikbud.go.id/',
    title: 'Rumahn Belajar',
    description: 'Platform pembelajaran daring',
    icon: '/img/logo/logo_rumah_belajar.png',
  },
  {
    url: 'https://app.ruangguru.com/',
    title: 'Ruang Guru',
    description: 'Platform belajar online',
    icon: '/img/logo/logo-ruangguru.png',
  },
  {
    url: '#',
    title: 'Arsip Sekolah',
    description: 'Peyimpanan media sekolah',
    icon: '/img/logo/gdrive-logo.png',
  },

]
</script>

<template>
  <UContainer v-if="medias?.length" class="py-4 md:pt-8">
    <div class="  mx-auto ">
      <!-- Title -->
      <div v-motion-fade-visible class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 class="headline block text-4xl sm:text-5xl  font-black leading-tight">
          Media Pembelajaran
        </h1>
        <h2 class="-mt-4 subheadline">
          Kumpulan Sumber media
        </h2>
      </div>
      <!-- End Title -->

      <!-- link terkai media -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-6">
        <NuxtLink
          v-for="media in mediaTerkait" :key="media.title"

          :to="media.url"
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
                :src="media.icon"
                class="w-auto h-12  "
                alt="icon"
                format="webp"
              />
              <div class="bg-gradient-to-r from-merah-200 via-merah-50 to-transparent h-0.5 mt-2 dark:from-kuning-500 dark:via-kuning-200">
                <div class="bg-merah-400 w-9 h-0.5 dark:bg-kuning-600" />
              </div>
              <div class="mt-2">
                <h3 class="font-semibold ">
                  {{ media.title }}
                </h3>
                <p class="mt-1 hidden md:block ">
                  {{ media.description }}
                </p>
              </div>
            </div>
          </UCard>
        </NuxtLink>
      </div>
      <!-- Filter Kelas -->
      <UDivider class="my-4" />
      <h2 v-motion-fade-visible class=" mt-8 subheadline">
        Kumpulan video pembelajaran pilihan dari platform Youtube
      </h2>
      <USelectMenu
        v-model="selected"
        v-motion-fade-visible 
        
        :ui="{ container: 'z-40 group' }"
        class="z-40 flex justify-center my-10 w-full md:w-1/3 mx-auto"
        :options="listkelas"
        placeholder="Pilih Kelas" clear-search-on-close
      />

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 z-30 gap-6">
        <!-- Tampilkan media yang difilter -->
        <MediaListItem
          v-for="media in filteredMedias"
          :key="media._path"
          :media="media"
        />
      </div>
      <!-- End Grid -->
    </div>
  </UContainer>
  <div v-else class="tour">
    <UContainer>
      <p>Seems like there are no media items yet.</p>
      <p>
        You can start by
        <!-- eslint-disable-next-line -->
      <ProseA href="https://alpine.nuxt.space/media/write-media">creating</ProseA> one in the <ProseCodeInline>media</ProseCodeInline> folder.
      </p>
    </UContainer>
  </div>
</template>
