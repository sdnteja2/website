interface SocialIcon {
  name: string
  icon: string
  href: string
}
export default defineAppConfig({
  socialIcons: {
    items: [
      { name: 'facebook', icon: 'i-hugeicons-facebook', href: '#' },
      { name: 'twitter', icon: 'i-hugeicons-twitter', href: '#' },
      { name: 'instagram', icon: 'i-hugeicons-instagram', href: '#' },
      { name: 'linkedin', icon: 'i-hugeicons-linkedin', href: '#' },
      { name: 'whatsapp', icon: 'i-hugeicons-whatsapp', href: '#' },
    ] as SocialIcon[], // Tipekan langsung sebagai SocialIcon[]

  },

  ui: {
    primary: 'merah',
    gray: 'gelap',
    button: {
      default: {
        color: 'primary',
      },
    },
    container:
    {
      base: 'mx-auto',
      padding: 'px-2 sm:px-4 lg:px-6',
      constrained: 'max-w-7xl',
    },
    tabs:
    {
      wrapper: 'relative space-y-2',
      container: 'relative w-full ',
      base: 'focus:outline-none ',
      list: {
        base: 'relative',
        background: 'bg-merah dark:bg-merah-900',
        rounded: 'rounded-lg',
        shadow: '',
        padding: 'p-1',
        height: 'h-10',
        width: 'w-full',
        marker: {
          wrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
          base: 'w-full h-full',
          background: 'bg-kuning-400 dark:bg-kuning', // Marker tetap putih di mode terang dan gelap gelap
          rounded: 'rounded-md',
          shadow: 'shadow-sm',
        },
        tab: {
          base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-merah-500 dark:ui-focus-visible:ring-merah-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
          background: '',
          active: 'text-merah-950 dark:text-merah-950', // Warna teks aktif merah untuk mode terang, putih untuk mode gelap
          inactive: 'text-white dark:text-white', // Warna teks inaktif gray
          height: 'h-8',
          padding: 'px-3',
          size: 'text-base',
          font: 'font-medium',
          rounded: 'rounded-md',
          shadow: '',
          icon: 'w-4 h-4 flex-shrink-0 me-2',
        },
      },
    },

  },

})
