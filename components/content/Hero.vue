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
            <h1 class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span class="text-gelap-900 dark:text-kuning-500">{{ firstThreeChars }}</span>{{ remainingText }}
            </h1>
            <p class="text-lg ">
              {{ props.description }}
            </p>
          </div>
          <!-- End Title and Description -->

          <!-- Image -->
          <div class="flex justify-center lg:justify-end">
            <div class="w-full max-w-md lg:max-w-xl aspect-w-16 aspect-h-9">
              <NuxtImg
                class="w-full h-full rounded-xl object-cover object-center shadow-lg"
                :src="image"
                height="500"
                width="500"
                format="webp"
                alt="Hero Image"
              />
            </div>
          </div>
          <!-- End Image -->
        </div>
      </div>
    </UContainer>
  </div>
</template>
s
