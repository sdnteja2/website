<script setup>
defineProps({
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
</script>

<template>
  <div>
    <!-- Hero -->
    <UContainer class="relative overflow-hidden">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="max-w-2xl text-center mx-auto">
          <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="mt-3 text-lg text-gray-800 dark:text-gray-400">
            Selamat datang di website resmi
          </p>
          <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="block text-3xl font-black text-merah sm:text-4xl ">
            {{ title }}
          </h1>
          <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="mt-3 text-lg text-gray-800 dark:text-gray-400">
            {{ description }}
          </p>
        </div>
        <div class="  mt-10 rounded-md ">
          <div class="aspect-w-16 max-w-3xl mx-auto aspect-h-9">
            <NuxtImg
              class="w-full object-cover rounded-lg"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              :src="image"
              height="450"
              width="720"
              loading="lazy"

              :title="title"
              :placeholder="[50, 25, 75, 5]"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </UContainer>
    <!-- End Hero -->
  </div>
</template>
