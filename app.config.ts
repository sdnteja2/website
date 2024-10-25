export default defineAppConfig({
  ui: {
    primary: 'red',
    gray: 'slate',
    container:
    {
      base: 'mx-auto',
      padding: 'px-2 sm:px-6 lg:px-8',
      constrained: 'max-w-7xl',
    },
    tabs:
    {
      wrapper: 'relative space-y-2',
      container: 'relative w-full',
      base: 'focus:outline-none',
      list: {
        base: 'relative',
        background: 'bg-merah dark:bg-gelap', // Sesuaikan background dengan merah terang dan gray gelap untuk mode gelap
        rounded: 'rounded-lg',
        shadow: '',
        padding: 'p-1',
        height: 'h-10',
        width: 'w-full',
        marker: {
          wrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
          base: 'w-full h-full',
          background: 'bg-kuning dark:bg-kuning', // Marker tetap putih di mode terang dan gelap gelap
          rounded: 'rounded-md',
          shadow: 'shadow-sm',
        },
        tab: {
          base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-merah-500 dark:ui-focus-visible:ring-merah-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
          background: '',
          active: 'text-merah-900 dark:text-white', // Warna teks aktif merah untuk mode terang, putih untuk mode gelap
          inactive: 'text-gray-500 dark:text-gray-400', // Warna teks inaktif gray
          height: 'h-8',
          padding: 'px-3',
          size: 'text-sm',
          font: 'font-medium',
          rounded: 'rounded-md',
          shadow: '',
          icon: 'w-4 h-4 flex-shrink-0 me-2',
        },
      },
    },

  },

})
