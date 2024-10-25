<script setup>
defineProps({
  nama: {
    type: String,
    default: 'Yusup, S.Pd.',
  },
  jabatan: {
    type: String,
    default: 'Kepala Sekolah',
  },
  ucapan: {
    type: String,
    default: 'Kehadiran website sekolah ini merupakan salah satu upaya kita untuk meningkatkan layanan informasi dan komunikasi sekolah kepada seluruh stakeholders, termasuk siswa, guru, karyawan, orang tua siswa, alumni, dan masyarakat umum.',
  },
  foto: {
    type: String,
    default: '/img/guru/yusup.webp',
  },
})
</script>

<template>
  <div>
    <!-- Testimonials -->
    <UContainer class=" px-4 py-10 sm:px-16  lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="md:grid md:grid-cols-2  md:justify-center md:items-center">
        <div class="hidden  md:flex md:justify-center  mb-24 md:mb-0 sm:px-6">
          <div class="relative justify-center">
            <NuxtImg
              data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="rounded-md object-cover h-[450px]" :src="foto"
              width="380"
              height="450"
              loading="lazy"
              :title="nama"
              :alt="nama"
              :placeholder="[50, 25, 75, 5]"
            />
          </div>
        </div>
        <!-- End Col -->

        <div>
          <!-- Blockquote -->
          <blockquote class="relative">
            <div class="relative z-10">
              <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-gray-200">
                SELAYANG PANDANG
              </p>

              <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" class=" font-medium italic text-gray-800 md:text-2xl  dark:text-gray-400">
                {{ ucapan }}
              </p>
            </div>

            <footer class="mt-6">
              <div class="flex items-center">
                <div class="md:hidden flex-shrink-0">
                  <NuxtImg
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    class="h-12 w-12 rounded-full bg-cover object-cover"
                    width="200"
                    height="200"
                    loading="lazy"
                    :src="foto"
                    :title="nama"
                    :alt="nama"
                    :placeholder="[50, 25, 75, 5]"
                  />
                </div>
                <div class="ms-4 md:ms-0">
                  <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="text-base font-semibold text-gray-800 dark:text-gray-200">
                    {{ nama }}
                  </div>
                  <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="text-xs text-gray-500 dark:text-gray-400">
                    {{ jabatan }}
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
          <!-- End Blockquote -->
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </UContainer>
    <!-- End Testimonials -->
  </div>
</template>

<style scoped></style>
