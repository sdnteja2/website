<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
    default: '',
  },
})
</script>

<template>
  <div class="w-full h-full flex flex-col justify-between items-start bg-[#0f172a] p-20 pt-26 pb-16">
    <div>
      <h1 class="text-[#F22727] mb-4 font-bold  flex items-center" :class="title?.length > 50 ? 'text-5xl' : 'text-6xl'">
        <span>{{ title }}</span>
        <img v-if="image" :src="image" class="h-20 w-20 rounded ml-8">
      </h1>
      <p class="text-gray-200 leading-tight pr-10" :class="description?.length > 100 ? 'text-3xl' : 'text-4xl'">
        {{ description }}
      </p>
    </div>
    <div class="flex flex-row items-center bg-white py-2 px-4 rounded-md">
      <Logo class="w-[48px] h-[48px] text-white" />
      <h2 class="pl-2 text-3xl font-bold text-[#F22727] ">
        SDN TEJA 2
      </h2>
    </div>
  </div>
</template>

<style scoped>
._gradient {
}
</style>
