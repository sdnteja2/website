<script setup lang="ts">
import { computed, ref } from 'vue'

const columns = [
  { key: 'tahun', label: 'Tahun', sortable: true, direction: 'desc' as const },
  { key: 'lomba', label: 'Lomba', sortable: true },
  { key: 'peringkat', label: 'Peringkat' },
  { key: 'siswa', label: 'Siswa' },
]

const prestasi = [
  { tahun: '2024', lomba: 'OSN Matematika', peringkat: '1', siswa: 'Farhan Muhaemin A.' },
  { tahun: '2024', lomba: 'Siswa Berprestasi', peringkat: '3', siswa: 'Sindi Dewi N.' },
  { tahun: '2023', lomba: 'Voli', peringkat: '1', siswa: 'Tim Bola Voli Putra' },
  { tahun: '2023', lomba: 'Voli', peringkat: '1', siswa: 'Tim Bola Voli Putra' },
  { tahun: '2023', lomba: 'Voli', peringkat: '1', siswa: 'Tim Bola Voli Putra' },
  { tahun: '2023', lomba: 'Voli', peringkat: '1', siswa: 'Tim Bola Voli Putra' },
  { tahun: '2023', lomba: 'Voli', peringkat: '1', siswa: 'Tim Bola Voli Putra' },
  { tahun: '2023', lomba: 'Voli', peringkat: '1', siswa: 'Tim Bola Voli Putra' },
]

const schoolInfo = [
  { label: 'Nama Sekolah', value: 'SDN Teja II' },
  { label: 'NPSN', value: '20246133' },
  { label: 'Jenjang Pendidikan', value: 'Sekolah Dasar (SD)' },
  { label: 'Status Sekolah', value: 'Negeri' },
  { label: 'Alamat Sekolah', value: 'Blok Desa, Desa Teja' },
  { label: 'Kecamatan', value: 'Rajagaluh' },
  { label: 'Kabupaten', value: 'Majalengka' },
  { label: 'Provinsi', value: 'Jawa Barat' },
  { label: 'Kode Pos', value: '45472' },
  { label: 'Titik Kordinat', value: '-6.821242097490107, 108.34612476589537' },
]

// Paginate Settings
const page = ref(1)
const pageCount = 3
const rows = computed(() => {
  const start = (page.value - 1) * pageCount
  const end = page.value * pageCount
  return prestasi.slice(start, end)
})
</script>

<template>
  <UContainer class="py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
    <UCard>
      <div class="pb-8">
        <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="subheadline">
          PRESTASI SDN TEJA II
        </h2>
      </div>

      <!-- Tabel dengan Paginasi -->
      <UTable
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        class="max-w-3xl mx-auto"
        :columns="columns"
        :rows="rows"
      />
      <!-- Kontrol Paginasi -->
      <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
        <UPagination v-model="page" :page-count="pageCount" :total="prestasi.length" />
      </div>
    </UCard>

    <!-- Identitas Sekolah -->
    <UCard>
      <div class="max-w-2xl mx-auto">
        <div class="pb-8">
          <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="subheadline">
            Identitas Sekolah
          </h2>
        </div>
        <UCard data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="text-sm space-x-0">
          <!-- Iterasi untuk menampilkan data sekolah -->
          <div v-for="(info, index) in schoolInfo" :key="index" class="flex flex-row">
            <div class="w-1/4">
              {{ info.label }}
            </div>
            <div class="w-3/4">
              : {{ info.value }}
            </div>
          </div>

          <!-- Tombol di footer -->
          <template #footer>
            <div>
              <UButton
                color="primary"
                to="https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/10946411-2cf5-e011-b2b8-71cae28b2adc"
                target="_blank"
              >
                Lihat Detail
              </UButton>
            </div>
          </template>
        </UCard>
      </div>
    </UCard>
  </UContainer>
</template>
