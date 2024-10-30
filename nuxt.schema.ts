// nuxt.schema.ts
import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    socialIcons: group({
      title: 'Social Icons',
      description: 'Customize social media icons and links',
      icon: 'i-hugeicons-social', // Sesuaikan dengan ikon yang diinginkan
      fields: {
        items: field({
          type: 'array',
          title: 'Icons',
          description: 'Add or edit social media icons and links',
          default: [
            { name: 'facebook', icon: 'i-hugeicons-facebook', href: '#' },
            { name: 'twitter', icon: 'i-hugeicons-twitter', href: '#' },
            { name: 'instagram', icon: 'i-hugeicons-instagram', href: '#' },
            { name: 'linkedin', icon: 'i-hugeicons-linkedin', href: '#' },
            { name: 'whatsapp', icon: 'i-hugeicons-whatsapp', href: '#' },
          ],
        }),
      },
    }),
    footerColumns: group({
      title: 'Footer Columns',
      description: 'Customize footer columns and links',
      icon: 'i-hugeicons-columns', // Sesuaikan dengan ikon yang diinginkan
      fields: {
        items: field({
          type: 'array',
          title: 'Columns',
          description: 'Edit footer columns and their links',
          default: [
            {
              title: 'KEMDIKBUD',
              links: [
                { text: 'Pricing', href: '#' },
                { text: 'Changelog', href: '#' },
                { text: 'Docs', href: '#' },
              ],
            },
            {
              title: 'DISDIK JABAR',
              links: [
                { text: 'About us', href: '#' },
                { text: 'Blog', href: '#' },
                { text: 'Careers', href: '#', badge: 'We\'re hiring' },
                { text: 'Customers', href: '#' },
              ],
            },
            {
              title: 'DISDIK MAJALENGKA',
              links: [
                { text: 'Tes', href: '#' },
                { text: 'Blog', href: '#' },
                { text: 'Careers', href: '#', badge: 'We\'re hiring' },
                { text: 'Customers', href: '#' },
              ],
            },
          ],
        }),
      },
    }),
  },
})
