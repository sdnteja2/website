<!-- eslint-disable ts/ban-ts-comment -->
<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'kegiatan',
  },
})

const { data: _kegiatan } = await useAsyncData('kegiatan', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())

const kegiatans = computed(() => _kegiatan.value || [])
</script>

<template>
  <UContainer v-if="kegiatans?.length" class="py-4 md:py-8">
    <div class="  mx-auto ">
      <!-- Title -->
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="headline block text-4xl sm:text-5xl  font-black leading-tight">
          Galeri  SDN Teja II
        </h1>
        <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="-mt-4 subheadline">
          Galeri kegiatan SDN Teja II
        </h2>
      </div>

      <div class="grid  md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GaleriListItem v-for="(kegiatan, index) in kegiatans.slice(0)" :key="index" :kegiatan="kegiatan" />
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
