<script setup>
defineProps({
  title: {
    type: String,
    default: 'Gambar Artikel',
  },

  image: {
    type: String,
    default: '/img/dal.png',
  },
})
</script>

<template>
  <div class="aspect-w-16 aspect-h-9">
    <NuxtImg
      class="w-full object-cover rounded-lg"
      loading="lazy"
      :src="image"
      :alt="title"
      laoding="lazy"
      :title="title"
      height="500"
      width="500"
      :placeholder="[50, 25, 75, 5]"
    />
  </div>
</template>
