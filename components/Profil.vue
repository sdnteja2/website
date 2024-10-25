<script setup>
defineProps({
  identitas: {
    type: String,
    default: 'Wujudkan Impian Pendidikan Berkualitas untuk Semua',
  },
  deskripsi: {
    type: String,
    default: 'Lingkungan Belajar yang Nyaman, Kreatif, dan Menyenangkan',
  },

})
</script>

<template>
  <UContainer class="py-16">
    <div class="max-w-2xl mx-auto">
      <div class="pb-8">
        <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="title">
          Identitas Sekolah
        </h2>
      </div>
      <UCard data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="text-sm space-x-0">
        <!-- 1 baris -->
        <div class="flex  flex-row">
          <div class="w-1/4">
            Nama Sekolah
          </div>
          <div class="w-3/4">
            : SDN Teja II
          </div>
        </div>
        <!-- 2 baris -->
        <div class="flex  flex-row">
          <div class="w-1/4">
            NPSN
          </div>
          <div class="w-3/4">
            : 20246133
          </div>
        </div>
        <!-- 3 baris -->
        <div class="flex  flex-row">
          <div class="w-1/4">
            Jenjang Pendidikan
          </div>
          <div class="w-3/4">
            : Sekolah Dasar (SD)
          </div>
        </div>
        <!-- 4 baris -->
        <div class="flex  flex-row">
          <div class="w-1/4">
            Status Sekolah
          </div>
          <div class="w-3/4">
            : Negeri
          </div>
        </div>
        <!-- 5 baris -->
        <div class="flex  flex-row">
          <div class="w-1/4">
            Alamat Sekolah
          </div>
          <div class="w-3/4">
            : Blok Desa, Desa Teja
          </div>
        </div>
        <!-- 6 baris -->

        <!-- 4 baris -->
        <div class="flex  flex-row">
          <div class="w-1/4">
            Kecamatan
          </div>
          <div class="w-3/4">
            : Rajagaluh
          </div>
        </div>
        <!-- 4 baris -->
        <div class="flex  flex-row">
          <div class="w-1/4">
            Kabupaten
          </div>
          <div class="w-3/4">
            : Majalengka
          </div>
        </div>
        <!-- 4 baris -->
        <div class="flex  flex-row">
          <div class="w-1/4">
            Provinsi
          </div>
          <div class="w-3/4">
            : Jawa Barat
          </div>
        </div>
        <div class="flex  flex-row">
          <div class="w-1/4">
            Kode Pos
          </div>
          <div class="w-3/4">
            : 45472
          </div>
        </div>
        <div class="flex  flex-row">
          <div class="w-1/4">
            Titik Kordinat
          </div>
          <div class="w-3/4">
            : -6.821242097490107, 108.34612476589537
          </div>
        </div>
        <template #footer>
          <div>
            <UButton

              color="primary"
              to="https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/10946411-2cf5-e011-b2b8-71cae28b2adc"

              block="true"
              target="_blank"
            >
              Lihat Detail
            </UButton>
          </div>
        </template>
      </UCard>
    </div>
  </UContainer>
</template>
