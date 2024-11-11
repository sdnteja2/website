<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import { computed } from 'vue'

const props = defineProps({
  path: {
    type: String,
    default: 'guru',
  },
})

// useAsyncData tanpa await, dengan caching
const { data: _guru } = useAsyncData(
  'guru',
  () => queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find(),
)

// Komputasi data guru
const guru = computed(() => _guru.value || [])
</script>

<template>
  <UContainer class="py-4 md:py-8 md:px-10 mx-auto">
    <div v-if="guru?.length">
      <div v-motion-fade-visible class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 class="headline block text-4xl sm:text-5xl  font-black leading-tight">
          Guru & Staff
        </h1>
        <h2 class="-mt-4 subheadline">
          SDN Teja II
        </h2>
      </div>

      <!-- Tampilkan Guru dengan Lazy Loading -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="list in guru"
          :key="list.id"
          v-motion-fade-visible
        >
          <div class="flex flex-col justify-center md:flex-row items-center gap-y-4 gap-x-4">
            <div class="md:h-36 h-52 w-52 md:w-36">
              <CldImage
                class="rounded-md bg-fit bg-center"
                :src="list.foto"
                :alt="list.title || ''"
                :title="`Foto ${list.title}`"
                loading="lazy"
                height="300"
                width="300"
                :placeholder="[50, 25, 75, 5]"
              />
            </div>

            <div class="grow">
              <div class="py-2">
                <p class="text-xs text-center">
                  {{ list.jabatan }}
                </p>
              </div>

              <div class="w-full flex justify-center items-center">
                <UButton
                  icon="i-hugeicons-instagram"
                  size="sm"
                  color="primary"
                  variant="ghost"
                  square
                  :to="list.instagram"
                  target="_blank"
                  :title="`Follow ${list.title} on Instagram`"
                />
                <UButton
                  icon="i-hugeicons-facebook-01"
                  size="sm"
                  color="primary"
                  variant="ghost"
                  square
                  :to="list.facebook"
                  target="_blank"
                  :title="`Follow ${list.title} on Facebook`"
                />
                <UButton
                  icon="i-hugeicons-mail-02"
                  size="sm"
                  color="primary"
                  variant="ghost"
                  square
                  :to="`mailto:${list.email}`"
                  target="_blank"
                  :title="`Send an email to ${list.title}`"
                />
              </div>
            </div>
          </div>
          <div class="md:pt-4">
            <UButton
              variant="outline"
              :to="list._path"
              :title="list.title"
              rel="author"
              block
            >
              <h2 class="text-left font-bold tracking-wide">
                {{ list.title }}
              </h2>
            </UButton>
          </div>
          <div class="md:pt-4">
            <p class="italic py-2 text-sm">
              "{{ list.description }}"
            </p>
          </div>
        </UCard>
      </div>
    </div>

    <div v-else class="tour">
      <UContainer class="py-4 md:py-8 md:px-10 mx-auto">
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <!-- Judul Halaman Placeholder -->
          <USkeleton class="h-10 w-1/2 mx-auto mb-2" />
          <USkeleton class="h-6 w-1/3 mx-auto" />
        </div>

        <!-- Skeleton Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Card Skeleton untuk Guru -->
          <UCard v-for="n in 6" :key="n">
            <div class="flex flex-col justify-center md:flex-row items-center gap-y-4 gap-x-4">
              <!-- Placeholder untuk Foto Profil -->
              <div class="md:h-36 h-52 w-52 md:w-36">
                <USkeleton class="w-full h-full rounded-md" />
              </div>

              <!-- Placeholder untuk Nama, Jabatan, dan Ikon Media Sosial -->
              <div class="grow space-y-2">
                <!-- Nama -->
                <USkeleton class="h-6 w-3/4" />
                <!-- Jabatan -->
                <USkeleton class="h-4 w-1/2 mx-auto" />

                <!-- Tombol Media Sosial -->
                <div class="w-full flex justify-center items-center space-x-2">
                  <USkeleton v-for="i in 3" :key="i" class="h-6 w-6 rounded-full" />
                </div>
              </div>
            </div>

            <!-- Placeholder untuk Deskripsi -->
            <div class="md:pt-4">
              <USkeleton class="h-4 w-full mb-1" />
              <USkeleton class="h-4 w-5/6" />
            </div>
          </UCard>
        </div>
      </UContainer>
    </div>
  </UContainer>
</template>
