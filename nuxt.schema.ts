import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    socialIcons: group({
      title: 'Social Media',
      description: 'Customize social media icons and links',
      icon: 'i-hugeicons-folder-shared-02', // Sesuaikan dengan ikon yang diinginkan
      fields: {
        items: field({
          type: 'array',
          title: 'Icons',
          description: 'Add or edit social media icons and links',
          default: [
            { name: 'facebook', icon: 'i-hugeicons-facebook-01', href: '#' },
            { name: 'twitter', icon: 'i-hugeicons-twitter', href: '#' },
            { name: 'instagram', icon: 'i-hugeicons-instagram', href: '#' },
            { name: 'linkedin', icon: 'i-hugeicons-linkedin-01', href: '#' },
            { name: 'whatsapp', icon: 'i-hugeicons-whatsapp', href: '#' },
          ],
          // Menambahkan konfigurasi subfield untuk array objek
          schema: {
            name: field({
              type: 'string',
              title: 'Social Media Name',
              description: 'Name of the social media platform',
            }),
            icon: field({
              type: 'icon', // Menampilkan icon picker
              title: 'Icon',
              description: 'Select an icon for the platform',
            }),
            href: field({
              type: 'string',
              title: 'Link',
              description: 'URL to the social media profile',
            }),
          },
        }),
      },
    }),
  },
})
