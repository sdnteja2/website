<script setup lang="ts">
const open = ref(false)
const trailingIcon = computed(() => open.value ? 'i-hugeicons-cancel-02' : 'i-hugeicons-dashboard-square-01')
const links = [
  [{
    label: 'Home',
    icon: 'i-hugeicons-home-03',
    to: '/',
  }, {
    label: 'Guru',
    icon: 'i-hugeicons-user',
    to: '/guru',
  }, {
    label: 'Berita',
    icon: 'i-hugeicons-news',
    to: '/berita',
  }, {
    label: 'Artikel',
    icon: 'i-hugeicons-notebook',
    to: '/artikel',
  }, {
    label: 'Media',
    icon: 'i-hugeicons-video-replay',
    to: '/media',
  }, {
    label: 'Kegiatan',
    icon: 'i-hugeicons-image-01',
    to: '/kegiatan',
  }],
]
</script>

<template>
  <div class="w-full fixed top-0 z-50 bg-merah-600/90 dark:bg-merah-900/85 backdrop-blur">
    <UContainer class="flex h-14 md:h-16 justify-between items-center">
      <div>LOGO</div>
      <div class="flex items-center space-x-4">
        <div class="flex items-center">
          <UHorizontalNavigation
            :ui="{
              active: 'text-gelap dark:text-kuning font-semibold relative after:bg-gelap dark:after:bg-kuning after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:transform after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-in-out',
              inactive: 'text-gray-50 dark:text-gray-500 relative after:bg-transparent after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out',
              icon: {
                base: 'flex-shrink-0 w-5 h-5 relative',
                active: 'text-gelap dark:text-kuning',
                inactive: 'text-white dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200',
              },
            }"
            :links="links"
            class="hidden md:block"
          />
          <div class="flex items-center">
            <DarkMode />
          </div>
          <UDropdown v-model:open="open" class="md:hidden" :items="links" :popper="{ placement: 'bottom-start' }">
            <UButton color="merah" variant="ghost" :trailing-icon="trailingIcon" />
          </UDropdown>
        </div>
      </div>
    </UContainer>
  </div>
</template>
