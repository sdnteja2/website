<script setup>
const { page } = useContent()
defineOgImageComponent('OgImage', {
  title: page.title,
  description: page.description,
})
</script>

<template>
  <div>
    <Navbar />
    <div class="py-20">
      <slot />
    </div>
    <Footer />
  </div>
</template>
