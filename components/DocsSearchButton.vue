<script setup lang="ts">
const isOpen = ref(false)
const router = useRouter()
const commandPaletteRef = ref()

function truncateText(text: string, length: number): string {
  if (text.length <= length) {
    return text
  }
  return `${text.substring(0, length)}...`
}
const { data: files } = await useLazyAsyncData('search', () =>
  queryContent()
    .where({ _type: 'markdown' })
    .find()
    .then(files => files.filter((file) => {
      return ['/berita/', '/artikel/'].some(prefix => (file._path ?? '').startsWith(prefix))
    })), { default: () => [] })

const defaultGroups = computed(() => files.value.map(file => ({
  id: file._id,
  title: truncateText(file.title ?? '', 45),
  to: file._path,
  suffix: file.description,
  icon: file.icon,
  tags: file.tags,
  tools: file.tools,
  content: file.body ? extractTextFromMarkdown(file.body.children) : '', // Check if body is not null
})))

const queryGroups = computed(() => files.value.flatMap((file) => {
  return [{
    id: file._id,
    title: truncateText(file.title ?? '', 45),
    to: file._path,
    description: file.description,
    icon: file.icon,
    tags: file.tags,
    tools: file.tools,
    content: file.body ? extractTextFromMarkdown(file.body.children) : '', // Check if body is not null
  }]
}))

const groups = computed(() =>
  [commandPaletteRef.value?.query
    ? {
        key: 'queryGroups',
        commands: queryGroups.value,
      }
    : {
        key: 'defaultGroups',
        commands: defaultGroups.value,
      }].filter(Boolean))

// Function to extract text from markdown elements
function extractTextFromMarkdown(children: any[]): string {
  let textContent = ''
  children.forEach((child) => {
    if (child.type === 'text') {
      textContent += `${child.value} `
    }
    else if (child.children) {
      textContent += `${extractTextFromMarkdown(child.children)} `
    }
  })
  return textContent.trim()
}

function onSelect(option: any) {
  if (option.click)
    option.click()
  else if (option.to)
    router.push(option.to)
  else if (option.href)
    window.open(option.href, '_blank')
}
</script>

<template>
  <div>
    <UTooltip
      text="Pencarian"
      placement="bottom"
      :popper="{ arrow: true }"
    >
      <div>
        <UButton

          aria-label="Buka pencarian"
          icon="i-ph-magnifying-glass-duotone"
          color="gray"
          variant="ghost"
          @click="isOpen = true"
        />
      </div>
    </UTooltip>
    <UModal
      v-model="isOpen"

      :ui="{
        container: 'flex overflow-y-hidden min-h-full items-start sm:items-start justify-center text-center',
        margin: 'sm:my-8',
        base: 'relative overflow-x-hidden text-left rtl:text-right overflow-hidden flex flex-col',
        padding: 'sm:p-4',
        rounded: 'sm:rounded-lg',
        width: 'sm:max-w-3xl',
        height: 'h-[400px]',
      }"
    >
      <UCommandPalette
        :ui="{
          container: 'overflow-y-hidden',
        }"
        placeholder="Cari..."
        command-attribute="title"
        :groups="groups"
        :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'ghost', size: 'sm' }"
        :autoselect="false"
        :fuse="{
          fuseOptions: {
            ignoreLocation: true,
            includeMatches: true,
            threshold: 0,
            keys: ['title', 'tags', 'tools.name', 'description', 'content'],
          },
          resultLimit: 10,
        }"
        @update:model-value="onSelect"
        @click="isOpen = false"
      />
    </UModal>
  </div>
</template>
