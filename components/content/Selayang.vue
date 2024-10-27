<script setup lang="ts">
interface SelayangPandang {
  nama: string
  jabatan: string
  foto: string
  ucapan: string
}

const props = defineProps({
  selayangPandang: {
    type: Object as () => SelayangPandang,
    default: () => ({
      nama: 'Yusup, S.Pd.',
      jabatan: 'Kepala Sekolah',
      foto: 'https://res.cloudinary.com/dyy24w5kl/image/upload/v1729924575/guru/1yusupsquare.jpg',
      ucapan: 'Kehadiran website sekolah ini merupakan salah satu upaya kita untuk meningkatkan layanan informasi dan komunikasi sekolah kepada seluruh stakeholders, termasuk siswa, guru, karyawan, orang tua siswa, alumni, dan masyarakat umum.',
    }),
  },
  fasilitas: {
    type: Array as () => { src: string, label: string }[],
    default: () => ([]),
  },
})

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
      <div class="grid grid-cols-1 h-full gap-6 md:grid-cols-2 md:justify-center md:items-center">
        <!-- Card untuk Foto dan Deskripsi -->
        <UCard v-motion-fade-visible class="h-full">
          <template #header>
            <h2 class="subheadline">
              Selayang Pandang
            </h2>
          </template>
          <div class="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8">
            <div class="h-40 w-40">
              <CldImage
                :src="props.selayangPandang.foto"
                width="500"
                height="500"
                alt="My Awesome Image"
                class="rounded-md shadow-md object-cover"
              />
            </div>
            <blockquote class="max-w-lg italic font-medium text-center">
              {{ props.selayangPandang.ucapan }}
            </blockquote>
            <div class="text-center">
              <h2>{{ props.selayangPandang.nama }}</h2>
              <p>{{ props.selayangPandang.jabatan }}</p>
            </div>
          </div>
        </UCard>

        <!-- Card untuk Carousel -->
        <UCard v-motion-fade-visible class="h-full">
          <template #header>
            <h2 class="subheadline">
              Fasilitas
            </h2>
          </template>
          <div class="w-full">
            <UCarousel
              ref="carouselRef"
              v-slot="{ item }"
              :items="props.fasilitas"
              :ui="{
                item: 'w-full',
                indicators: { wrapper: 'relative bottom-0 mt-4' },
                container: 'rounded-lg',
              }"
              class="rounded-lg overflow-hidden"
              arrows
              indicators
            >
              <div class="flex flex-col">
                <CldImage
                  :src="item.src"
                  :alt="item.label"
                  class="w-full object-cover rounded-md"
                  draggable="false"
                  height="900"
                  width="1600"
                  loading="lazy"
                  title="fasilitas"
                />
                <div class="text-center mt-2 text-sm font-semibold">
                  {{ item.label }}
                </div>
              </div>
            </UCarousel>
          </div>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
