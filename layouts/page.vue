<script setup>
const { page } = useContent()
defineOgImageComponent('OgImage', {
  title: page.value?.title,
  description: page.value?.description || '',
})
</script>

<template>
  <div>
    <div class="py-20">
      <slot />
    </div>
  </div>
</template>
