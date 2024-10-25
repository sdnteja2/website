<!-- eslint-disable ts/ban-ts-comment -->
<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'galeri',
  },
})

const { data: _galeri } = await useAsyncData('galeri', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())

const galeris = computed(() => _galeri.value || [])
</script>

<template>
  <UContainer v-if="galeris?.length" class="py-4 md:py-8">
    <div class="  mx-auto ">
      <!-- Title -->
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="title">
          Galeri  SDN Teja II
        </h1>
        <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="mt-1 text-gray-600 dark:text-gray-400">
          Galeri kegiatan SDN Teja II
        </p>
      </div>

      <div class="grid  md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GaleriListItem v-for="(galeri, index) in galeris.slice(0)" :key="index" :galeri="galeri" />
      </div>
      <!-- End Grid -->
    </div>
  </UContainer>
  <div v-else class="tour">
    <p>Seems like there are no beritas yet.</p>
    <p>
      You can start by
      <!-- eslint-disable-next-line -->
      <ProseA href="https://alpine.nuxt.space/beritas/write-beritas">creating</ProseA> one in the <ProseCodeInline>beritas</ProseCodeInline> folder.
    </p>
  </div>
</template>
