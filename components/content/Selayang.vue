<script setup>
import { onMounted, ref } from 'vue'

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
    default: '/img/guru/yusup.webp',
  },
})

const items = [
  'https://a.storyblok.com/f/255043/1416x1062/14a8939cf4/whatsapp-image-2024-02-27-at-16-14-10.jpeg',
  'https://a.storyblok.com/f/255043/1416x1062/f4cfe8d8f4/whatsapp-image-2024-02-27-at-16-14-10-1.jpeg',
  'https://a.storyblok.com/f/255043/1280x959/e6eab3e2d6/whatsapp-image-2024-02-27-at-16-14-08.jpeg',
  'https://a.storyblok.com/f/255043/1280x959/a99d791feb/whatsapp-image-2024-02-27-at-16-14-07-1.jpeg',
  'https://a.storyblok.com/f/255043/1280x959/350c22b6c0/whatsapp-image-2024-02-27-at-16-14-03-1.jpeg',

]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value)
      return

    if (carouselRef.value.page === carouselRef.value.pages)
      return carouselRef.value.select(0)

    carouselRef.value.next()
  }, 3000)
})
</script>

<template>
  <div>
    <!-- Testimonials -->
    <UContainer class=" px-4 py-10 sm:px-16  lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="md:grid h-full gap-6 md:grid-cols-2  md:justify-center md:items-center">
        <UCard>
          <div class="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
            <img src="https://source.unsplash.com/random/100x100?4" alt="" class="w-20 h-20 rounded-full dark:bg-gray-500">
            <blockquote class="max-w-lg text-lg italic font-medium text-center">
              "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!"
            </blockquote>
            <div class="text-center dark:text-gray-600">
              <p>Leroy Jenkins</p>
              <p>CEO of Company Co.</p>
            </div>
          </div>
        </UCard>
        <UCard>
          <div class="w-full ">
            <UCarousel
              ref="carouselRef"
              v-slot="{ item }"
              :items="items"
              :ui="{ item: 'basis-full' }"
              class="rounded-lg  overflow-hidden"
            >
              <USkeleton class="aspect-w-16 aspect-h-9" :ui="{ rounded: 'rounded-md' }" />
              <NuxtImg
                data-aos="fade-up" data-aos-anchor-placement="top-bottom" :src="item" class="w-full h-52 md:h-64 object-cover rounded-md "
                draggable="false"
                height="480"
                width="720"
                loading="lazy"
                title="fasilitas"
                alt="fasilitas"
                :placeholder="[50, 25, 75, 5]"
              />
            </UCarousel>
          </div>
        </UCard>
      </div>
      <!-- End Grid -->
    </UContainer>
    <!-- End Testimonials -->
  </div>
</template>

<style scoped></style>
