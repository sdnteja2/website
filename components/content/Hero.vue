<script setup>
// Ambil props
const props = defineProps({
  title: {
    type: String,
    default: 'Wujudkan Impian Pendidikan Berkualitas untuk Semua',
  },
  description: {
    type: String,
    default: 'Lingkungan Belajar yang Nyaman, Kreatif, dan Menyenangkan',
  },
  image: {
    type: String,
    default: '/img/dal.png',
  },
})

// Pisahkan tiga karakter pertama dan sisa teks dari title
const firstThreeChars = props.title.substring(0, 3) // Tiga karakter pertama
const remainingText = props.title.substring(3) // Sisa teks
</script>

<template>
  <div>
    <UContainer class="relative overflow-hidden">
      <!-- Hero -->
      <div class="">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 grid lg:grid-cols-2 gap-10 items-center">
          <!-- Title and Description -->
          <div class="max-w-3xl text-center lg:text-left mx-auto lg:mx-0 space-y-6">
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span class="text-gelap-900 dark:text-kuning-500">{{ firstThreeChars }}</span>{{ remainingText }}
            </h1>
            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="text-lg ">
              {{ props.description }}
            </p>
          </div>
          <!-- End Title and Description -->

          <!-- Image -->
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="flex justify-center lg:justify-end">
            <CldImage
              src="https://res.cloudinary.com/dyy24w5kl/image/upload/v1729926403/image/fotobersama_3x_mbgo9l.jpg"
              width="1600"
              height="900"
              alt="My Awesome Image"
              class="aspect-[16/9] w-full rounded-md shadow-md h-auto object-cover"
            />
          </div>
          <!-- End Image -->
        </div>
      </div>
    </UContainer>
  </div>
</template>
s
