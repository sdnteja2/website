/* eslint-disable unused-imports/no-unused-vars */

import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default <Partial<Config>> {
  theme: {
    extend: {
      colors: {
        kuning: {
          DEFAULT: '#F2A516',
          50: '#FCE8C4',
          100: '#FBE1B1',
          200: '#F8D28A',
          300: '#F6C363',
          400: '#F4B43D',
          500: '#F2A516',
          600: '#C5840B',
          700: '#906008',
          800: '#5B3D05',
          900: '#261902',
          950: '#0B0701',
        },
        merah: {
          DEFAULT: '#F22727',
          50: '#FCD4D4',
          100: '#FBC1C1',
          200: '#F99A9A',
          300: '#F77474',
          400: '#F44D4D',
          500: '#F22727',
          600: '#D40D0D',
          700: '#9F0A0A',
          800: '#6A0606',
          900: '#350303',
          950: '#1B0202',
        },
        gelap: {
          DEFAULT: '#0e1426',
          50: '#b4bfdc',
          100: '#a6b0d8',
          200: '#8b95cc',
          300: '#6f7ac0',
          400: '#545fb4',
          500: '#3a479a',
          600: '#2f3b7e',
          700: '#232e61',
          800: '#182244',
          900: '#0e1426',
          950: '#080b12',
        },
      },
      fontFamily: {
        title: ['Montserrat'], // Mengganti Poppins dengan Montserrat untuk heading
        body: ['Source Sans Pro'], // Mengganti Lato dengan Source Sans Pro untuk body text
      },
      typography: ({ theme }: { theme: any }) => ({
        merah: {
          css: {
            '--tw-prose-body': theme('colors.merah[800]'),
            '--tw-prose-headings': theme('colors.merah[900]'),
            '--tw-prose-lead': theme('colors.merah[700]'),
            '--tw-prose-links': theme('colors.merah[900]'),
            '--tw-prose-bold': theme('colors.merah[900]'),
            '--tw-prose-counters': theme('colors.merah[600]'),
            '--tw-prose-bullets': theme('colors.merah[400]'),
            '--tw-prose-hr': theme('colors.merah[300]'),
            '--tw-prose-quotes': theme('colors.merah[900]'),
            '--tw-prose-quote-borders': theme('colors.merah[300]'),
            '--tw-prose-captions': theme('colors.merah[700]'),
            '--tw-prose-code': theme('colors.merah[900]'),
            '--tw-prose-pre-code': theme('colors.merah[100]'),
            '--tw-prose-pre-bg': theme('colors.merah[900]'),
            '--tw-prose-th-borders': theme('colors.merah[300]'),
            '--tw-prose-td-borders': theme('colors.merah[200]'),
            '--tw-prose-invert-body': theme('colors.merah[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.merah[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.merah[400]'),
            '--tw-prose-invert-bullets': theme('colors.merah[600]'),
            '--tw-prose-invert-hr': theme('colors.merah[700]'),
            '--tw-prose-invert-quotes': theme('colors.merah[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.merah[700]'),
            '--tw-prose-invert-captions': theme('colors.merah[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.merah[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.merah[600]'),
            '--tw-prose-invert-td-borders': theme('colors.merah[700]'),
          },
        },
      }),
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    plugin(({ addComponents, theme }: { addComponents: any, theme: any }) => {
      addComponents({
        '.headline': {},
        '.subheadline': {},
        '.cardHover': {},
      })
    }),
  ],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './content/**/*.md',
  ],
}
