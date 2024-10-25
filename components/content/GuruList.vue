<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'guru',
  },
})

const { data: _guru } = await useAsyncData('guru', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())

const guru = computed(() => _guru.value || [])
</script>

<template>
  <UContainer class="py-4 md:py-8md:px-10 mx-auto">
    <div v-if="guru?.length">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 class="">
          Guru & Staff
        </h1>
        <p class="mt-1 text-gray-600 dark:text-gray-400">
          SDN Teja II
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="list in guru" :key="list.id" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          class=""
        >
          <div class="flex items-center gap-x-4">
            <NuxtImg
              class="rounded-full bg-top bg-cover object-cover w-16 h-16" :src="list.foto"
              :alt="list.title"
              :title="`Foto ${list.title}`"
              loading="lazy"
              height="500"
              width="500"
              :placeholder="[50, 25, 75, 5]"
            />
            <div class="grow">
              <NuxtLink
                :to="list._path"
                :title="list.title"
                rel="author"
              >
                <h2 class="font-bold  text-merah ">
                  {{ list.title }}
                </h2>
              </NuxtLink>
              <p class="text-xs ">
                {{ list.jabatan }}
              </p>
              <p class="text-xs ">
                NIP. {{ list.nip }}
              </p>
            </div>
          </div>

          <p class="italic py-2 text-sm">
            "{{ list.description }}"
          </p>
          <!-- Social Brands -->
          <template #footer>
            <div class="w-full flex justify-end items-center">
              <UButton
                icon="i-basil-instagram-outline" size="sm"
                color="primary"
                variant="ghost"
                square
                :to="list.instagram"
                target="_blank"
                :title="`Follow ${list.title} on Instagram`"
              />
              <UButton
                icon="i-basil-facebook-solid" size="sm"
                color="primary"
                variant="ghost"
                square
                :to="list.facebook"
                target="_blank"
                :title="`Follow ${list.title} on Facebook`"
              />
              <UButton
                icon="i-basil-gmail-outline" size="sm" color="primary" variant="ghost" square
                :to="`mailto:${list.email}`"
                target="_blank"
                :title="`Send an email to ${list.title}`"
              />
            </div>
          </template>
          <!-- End Social Brands -->
        </UCard>
      </div>
    </div>
    <div v-else class="tour">
      <p>Seems like there are no guru yet.</p>
      <p>
        You can start by
        <!-- eslint-disable-next-line -->
      <ProseA href="https://alpine.nuxt.space/guru/write-guru">creating</ProseA> one in the <ProseCodeInline>guru</ProseCodeInline> folder.
      </p>
    </div>
  </UContainer>
</template>
