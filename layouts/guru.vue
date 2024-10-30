<script setup>
const { page } = useContent()
// Mengambil data konten yang relevan untuk halaman saat ini menggunakan composable useContent.

defineOgImageComponent('OgImage', {
  title: page.value?.title,
  description: page.value?.description || '',
})
// Mendefinisikan komponen gambar Open Graph dengan informasi halaman seperti judul dan deskripsi.
</script>

<template>
  <div>
    <!-- Container utama untuk konten dengan padding vertikal dan lebar maksimum -->
    <UContainer class="py-14 md:py-16 mx-auto max-w-xl">
      <!-- Komponen breadcrumb untuk navigasi, menampilkan jalur navigasi saat ini -->
      <UBreadcrumb
        class="my-4 px-2 shadow py-1 ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg text-lg bg-white dark:bg-gray-900 inset-x-0 text-center z-30"
        divider=">"
        :links="[{ label: 'Home', to: '/' }, { label: 'Guru', to: '/guru' }, { label: page.title, to: page._path }]"
      />

      <!-- Kartu untuk menampilkan informasi detail tentang guru -->
      <UCard>
        <div class="flex flex-col space-y-2">
          <!-- Judul halaman yang diambil dari data konten -->
          <h1 class="subheadline">
            {{ page.title }}
          </h1>

          <!-- Gambar profil dengan ukuran persegi dan penempatan di tengah -->
          <div class="mx-auto aspect-square">
            <CldImage
              class="rounded-lg w-64 h-64 object-cover"
              :src="page.foto"
              :alt="page.title"
              :title="page.title"
              width="500"
              height="500"
              loading="lazy"
              :placeholder="[50, 25, 75, 5]"
            />
          </div>

          <!-- Informasi detail tentang guru dalam format baris -->
          <div class="py-4 text-sm">
            <!-- Baris untuk menampilkan Nama Lengkap -->
            <div class="flex flex-row justify-start w-full space-x-2">
              <div class="w-1/3">
                Nama Lengkap
              </div>
              <div class="">
                :
              </div>
              <div class="w-2/3">
                {{ page.nama }}
              </div>
            </div>

            <!-- Baris untuk menampilkan NIP -->
            <div class="flex flex-row justify-start w-full space-x-2">
              <div class="w-1/3">
                NIP
              </div>
              <div class="">
                :
              </div>
              <div class="w-2/3">
                {{ page.nip }}
              </div>
            </div>

            <!-- Baris untuk menampilkan Tempat Tanggal Lahir -->
            <div class="flex flex-row justify-start w-full space-x-2">
              <div class="w-1/3">
                Tempat Tanggal lahir
              </div>
              <div class="">
                :
              </div>
              <div class="w-2/3">
                {{ page.ttl }}
              </div>
            </div>

            <!-- Baris untuk menampilkan Jabatan -->
            <div class="flex flex-row justify-start w-full space-x-2">
              <div class="w-1/3">
                Jabatan
              </div>
              <div class="">
                :
              </div>
              <div class="w-2/3">
                {{ page.jabatan }}
              </div>
            </div>

            <!-- Baris untuk menampilkan Pendidikan -->
            <div class="flex flex-row justify-start w-full space-x-2">
              <div class="w-1/3">
                Pendidikan
              </div>
              <div class="">
                :
              </div>
              <div class="w-2/3">
                {{ page.pendidikan }}
              </div>
            </div>
          </div>
        </div>

        <!-- Footer kartu dengan tombol untuk media sosial dan email -->
        <template #footer>
          <div class="w-full flex justify-end items-center">
            <!-- Tombol untuk mengikuti di Instagram -->
            <UButton
              icon="i-hugeicons-instagram" size="sm"
              color="primary"
              variant="ghost"
              square
              :to="page.instagram"
              target="_blank"
              :title="`Follow ${page.title} on Instagram`"
            />
            <!-- Tombol untuk mengikuti di Facebook -->
            <UButton
              icon="i-hugeicons-facebook-01" size="sm"
              color="primary"
              variant="ghost"
              square
              :to="page.facebook"
              target="_blank"
              :title="`Follow ${page.title} on Facebook`"
            />
            <!-- Tombol untuk mengirim email -->
            <UButton
              icon="i-hugeicons-mail-02" size="sm" color="primary" variant="ghost" square
              :to="`mailto:${page.email}`"
              target="_blank"
              :title="`Send an email to ${page.title}`"
            />
          </div>
        </template>
      </UCard>
    </UContainer>
  </div>
</template>
