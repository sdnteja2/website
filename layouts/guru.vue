<script setup>
const { page } = useContent()
defineOgImageComponent('OgImage', {
  title: page.title,
  description: page.description,
})
</script>

<template>
  <div>
    <Navbar />
    <UContainer class="py-14 md:py-16 mx-auto max-w-xl">
      <UBreadcrumb
        class="my-4 px-2 shadow py-1 ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg text-lg bg-white dark:bg-gray-900  inset-x-0 text-center z-30"
        divider=">"
        :links="[{ label: 'Home', to: '/' }, { label: 'Guru', to: '/guru' }, { label: page.title, to: page._path }]"
      />
      <UCard>
        <div class="flex flex-col  space-y-2">
          <h1 class="title">
            {{ page.title }}
          </h1>
          <div class="mx-auto aspect-square">
            <NuxtImg
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
          <div class="py-4 text-sm">
            <!-- baris -->
            <div class="flex flex-row justify-start w-full  space-x-2">
              <div class="w-1/3">
                Nama Lengkap
              </div>
              <div class="">
                :
              </div>
              <div class="w-2/3">
                {{ page.nama }}
              </div>
            </div> <!-- baris -->
            <div class="flex flex-row justify-start w-full  space-x-2">
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
            <!-- baris -->
            <div class="flex flex-row justify-start w-full  space-x-2">
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

            <!-- baris -->
            <div class="flex flex-row justify-start w-full  space-x-2">
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
            <!-- baris -->
            <div class="flex flex-row justify-start w-full  space-x-2">
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
            <!-- baris -->
          </div>
        </div>
        <template #footer>
          <div class="w-full flex justify-end items-center">
            <UButton
              icon="i-basil-instagram-outline" size="sm"
              color="primary"
              variant="ghost"
              square
              :to="page.instagram"
              target="_blank"
              :title="`Follow ${page.title} on Instagram`"
            />
            <UButton
              icon="i-basil-facebook-solid" size="sm"
              color="primary"
              variant="ghost"
              square
              :to="page.facebook"
              target="_blank"
              :title="`Follow ${page.title} on Facebook`"
            />
            <UButton
              icon="i-basil-gmail-outline" size="sm" color="primary" variant="ghost" square
              :to="`mailto:${page.email}`"
              target="_blank"
              :title="`Send an email to ${page.title}`"
            />
          </div>
        </template>
      </UCard>
    </UContainer>
    <Footer />
  </div>
</template>
