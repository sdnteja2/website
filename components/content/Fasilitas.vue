<script setup lang="ts">
import { onMounted, ref } from 'vue'

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
  <UContainer class="py-16">
    <div class="w-full text-center pb-8">
      <h2 class="title">
        FASILITAS
      </h2>
    </div>
    <div class="flex flex-wrap w-full justify-center items-start">
      <div class="w-full md:w-1/2">
        <UCarousel
          ref="carouselRef"
          v-slot="{ item }"
          :items="items"
          :ui="{ item: 'basis-full' }"
          class="rounded-lg overflow-hidden"

          arrows
        >
          <USkeleton class="aspect-w-16 aspect-h-9" :ui="{ rounded: 'rounded-md' }" />
          <NuxtImg
            :src="item" class="w-full h-48 md:h-64 object-cover rounded-md "
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
      <div class="w-full md:w-1/2 md:pl-4 md:pt-0 pt-2">
        <ul class="list-disc pl-4 ">
          <li>
            Taman Baca
          </li>
          <li>
            Perpustakaan
          </li>
          <li>
            Laboratorium Komputer
          </li>
          <li>
            UKS
          </li>
          <li>
            Lapangan Olahraga
          </li>
        </ul>
      </div>
    </div>
  </UContainer>
</template>
