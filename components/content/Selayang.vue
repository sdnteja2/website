<script setup>
import { defineProps, onMounted, ref } from 'vue'

defineProps({
  nama: {
    type: String,
    default: 'Yusup, S.Pd.',
  },
  jabatan: {
    type: String,
    default: 'Kepala Sekolah',
  },
  ucapan: {
    type: String,
    default: 'Kehadiran website sekolah ini merupakan salah satu upaya kita untuk meningkatkan layanan informasi dan komunikasi sekolah kepada seluruh stakeholders, termasuk siswa, guru, karyawan, orang tua siswa, alumni, dan masyarakat umum.',
  },
  foto: {
    type: String,
    default: 'guru/1yusupsquare.jpg',
  },
})

// Array items dengan URL gambar dan label
const items = [
  { src: 'https://a.storyblok.com/f/255043/1416x1062/14a8939cf4/whatsapp-image-2024-02-27-at-16-14-10.jpeg', label: 'Perpustakaan' },
  { src: 'https://a.storyblok.com/f/255043/1416x1062/f4cfe8d8f4/whatsapp-image-2024-02-27-at-16-14-10-1.jpeg', label: 'WC' },
  { src: 'https://a.storyblok.com/f/255043/1280x959/e6eab3e2d6/whatsapp-image-2024-02-27-at-16-14-08.jpeg', label: 'Lab Komputer' },
  { src: 'https://a.storyblok.com/f/255043/1280x959/a99d791feb/whatsapp-image-2024-02-27-at-16-14-07-1.jpeg', label: 'Ruang Guru' },
  { src: 'https://a.storyblok.com/f/255043/1280x959/350c22b6c0/whatsapp-image-2024-02-27-at-16-14-03-1.jpeg', label: 'Kantin' },
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value)
      return

    if (carouselRef.value.page === carouselRef.value.pages) {
      carouselRef.value.select(0)
    }
    else {
      carouselRef.value.next()
    }
  }, 3000)
})
</script>

<template>
  <div>
    <!-- Testimonials -->
    <UContainer class="px-4 py-10 sm:px-16 lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="grid grid-cols-1 h-full  gap-6 md:grid-cols-2 md:justify-center md:items-center">
        <!-- Card untuk Foto dan Deskripsi -->
        <UCard data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="h-full">
          <template #header>
            <h2 class="subheadline ">
              Selayang Pandang
            </h2>
          </template>
          <div class="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8">
            <div class="h-40 w-40">
              <CldImage
                :src="foto"
                width="500"
                height="500"
                alt="My Awesome Image"
                class="rounded-md shadow-md object-cover"
              />
            </div>
            <blockquote class="max-w-lg italic font-medium text-center">
              {{ ucapan }}
            </blockquote>
            <div class="text-center">
              <h2>{{ nama }}</h2>
              <p>{{ jabatan }}</p>
            </div>
          </div>
        </UCard>

        <!-- Card untuk Carousel -->
        <UCard data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="h-full">
          <template #header>
            <h2 class="subheadline ">
              Fasilitas
            </h2>
          </template>
          <div class="w-full">
            <UCarousel
              ref="carouselRef"
              v-slot="{ item }"
              :items="items"
              :ui="{ item: 'w-full',
                     indicators: {
                       wrapper: 'relative bottom-0 mt-4',
                     },
                     container: 'rounded-lg' }"

              class="rounded-lg overflow-hidden"
              arrows="true"
              indicators="true"
            >
              <div class="flex flex-col">
                <NuxtImg
                  :src="item.src"
                  :alt="item.label"
                  class="w-full object-cover rounded-md"
                  draggable="false"
                  height="480"
                  width="720"
                  loading="lazy"
                  title="fasilitas"
                />
                <!-- Label untuk Gambar -->
                <div class="text-center mt-2 text-sm font-semibold">
                  {{ item.label }}
                </div>
              </div>
            </UCarousel>
          </div>
        </UCard>
      </div>
      <!-- End Grid -->
    </UContainer>
    <!-- End Testimonials -->
  </div>
</template>
