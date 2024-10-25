<script setup lang="ts">
const columns = [{
  key: 'tahun',
  label: 'Tahun',
  sortable: true,
  direction: 'desc' as const,
}, {
  key: 'lomba',
  label: 'Lomba',
  sortable: true,
}, {
  key: 'peringkat',
  label: 'Peringkat',
}, {
  key: 'siswa',
  label: 'Siswa',

}]

const prestasi = [{
  tahun: '2024',
  lomba: 'OSN Matematika',
  peringkat: '1',
  siswa: 'Farhan Muhaemin A. ',

}, {

  lomba: 'Siswa Berprestasi',
  siswa: 'Sindi Dewi N.',
  tahun: '2024',
  peringkat: '3',

}, {

  lomba: 'Voli',
  siswa: 'Tim Bola Voli Putra',
  tahun: '2023',
  peringkat: '1',

}]
</script>

<template>
  <UContainer class="py-16">
    <div class="pb-8">
      <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="title">
        PRESTASI SDN TEJA II
      </h2>
    </div>

    <UTable data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="max-w-3xl mx-auto" :columns="columns" :rows="prestasi" />
  </UContainer>
</template>
