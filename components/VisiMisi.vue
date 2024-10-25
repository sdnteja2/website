<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/no-unused-vars -->
<script setup>
const items = [
  {
    label: 'Visi',
    slot: 'visi',
  },
  {
    label: 'Tujuan',
    slot: 'tujuan',
  },
  {
    label: 'Misi',
    slot: 'misi',
  },
]
</script>

<template>
  <UContainer class="py-16 md:py-24 max-w-5xl mx-auto">
    <UTabs data-aos="fade-up" :items="items" size="lg" :default-index="1">
      <template #misi>
        <div
          data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          class="px-6 bg-slate-100 shadow dark:bg-slate-900 py-2 rounded-md"
        >
          <div class="p-4">
            <ol class="list-decimal space-y-2">
              <li>
                Untuk mencapai visi tersebut melalui misi sebagai berikut:
              </li>
              <li>
                Menciptakan lingkungan sekolah yang bernuansa agamis, bersih dan sehat
              </li>
              <li>
                Meningkatkan kegiatan ibadah melalui kegiatan kultum dan Shalat berjamaah
              </li>
              <li>
                Mengoptimalkan guru profesional dan berdedikasi tinggi sehingga peserta didik mempunyai kompetensi yang
                baik dan berkarakter
              </li>
              <li>
                Menyelenggarakan pendidikan, pelatihan dan pembinaan berdasarkan bakat, minat dan kreativitas peserta
                didik melalui ekstrakurikuler
              </li>
              <li>
                Meningkatkan prestasi peserta didik degan mengoptimalkan proses pembelajaran yang efektif dan efisien.
              </li>
            </ol>
          </div>
        </div>
      </template>
      <template #tujuan>
        <div
          data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          class="px-6 bg-slate-100 shadow dark:bg-slate-900 py-2 rounded-md"
        >
          <div class="p-4">
            <ol class="list-decimal space-y-2">
              <li>Terciptanya lingkungan yang agamis, bersih dan sehat</li>
              <li> Meningkatnya ketakwaan peserta didik terhadap Tuhan Yang Maha Esa</li>
              <li> Berkembangnya profesionalisme tenaga pendidik</li>
              <li> Terbentuknya pribadi peserta didik yang cerdas, terampil, kreatif, aktif dan berkarakter</li>
              <li> Meningkatnya jumlah peserta didik yang melanjutkan pendidikan ke jenjang yang lebih tinggi</li>
            </ol>
          </div>
        </div>
      </template>
      <template #visi>
        <div data-aos="fade-up" class="px-6 bg-slate-100 shadow dark:bg-slate-900 py-2 rounded-md">
          <div class="p-4">
            Terwujudnya pribadi yang beriman dan bertakwa kepada Tuhan Tang Maha Esa, berilmu, berkarakter, terampil,
            kreatif dan berprestasi
          </div>
        </div>
      </template>
    </UTabs>
  </UContainer>
</template>
