<!-- eslint-disable ts/ban-ts-comment -->
<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'media',
  },
})
const selected = ref([])

const { data: _media } = await useAsyncData('media', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())

const medias = computed(() => _media.value || [])

const listkelas = medias.value.map(media => media.kelas)
</script>

<template>
  <UContainer v-if="medias?.length" class="py-4 md:py-8">
    <div class="  mx-auto ">
      <!-- Title -->
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="headline block text-4xl sm:text-5xl  font-black leading-tight">
          media
        </h1>
        <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="-mt-4 subheadline">
          Kumpulan Sumber media
        </h2>
      </div>
      <!-- End Title -->
      <div class="py-6 w-full">
        <USelectMenu v-model="selected" :options="listkelas" placeholder="Pilih Kelas" clear-search-on-close />
      </div>
      <!-- Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <!-- Card -->

        <MediaListItem v-for="(media, index) in medias.slice(0)" :key="index" :media="media" />

        <!-- End Card -->
      </div>
      <!-- End Grid -->
    </div>
  </UContainer>
  <div v-else class="tour">
    <UContainer>
      <p>Seems like there are no beritas yet.</p>
      <p>
        You can start by
        <!-- eslint-disable-next-line -->
      <ProseA href="https://alpine.nuxt.space/beritas/write-beritas">creating</ProseA> one in the <ProseCodeInline>beritas</ProseCodeInline> folder.
      </p>
    </UContainer>
  </div>
</template>
