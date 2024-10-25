<!-- eslint-disable ts/ban-ts-comment -->
<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'pembelajaran',
  },
})
const selected = ref([])

const { data: _pembelajaran } = await useAsyncData('pembelajaran', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())

const pembelajarans = computed(() => _pembelajaran.value || [])

const listkelas = pembelajarans.value.map(pembelajaran => pembelajaran.kelas)
</script>

<template>
  <UContainer v-if="pembelajarans?.length" class="py-4 md:py-8">
    <div class="  mx-auto ">
      <!-- Title -->
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="title">
          Pembelajaran
        </h1>
        <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="mt-1 text-gray-600 dark:text-gray-400">
          Kumpulan Sumber Pembelajaran
        </p>
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

        <PembelajaranListItem v-for="(pembelajaran, index) in pembelajarans.slice(0)" :key="index" :pembelajaran="pembelajaran" />

        <!-- End Card -->
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
