import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    socialIcons: group({
      title: 'Social Media',
      description: 'Customize social media icons and links',
      icon: 'i-hugeicons-folder-shared-02',
      fields: {
        items: field({
          type: 'array',
          title: 'Icons',
          description: 'Add or edit social media icons and links',
          schema: {
            type: 'object',
            fields: {
              name: field({
                type: 'string',
                title: 'Social Media Name',
                description: 'Name of the social media platform',
              }),
              icon: field({
                type: 'icon',
                title: 'Icon',
                description: 'Select an icon for the platform',
              }),
              href: field({
                type: 'string',
                title: 'Link',
                description: 'URL to the social media profile',
              }),
            },
          },
        }),
      },
    }),
  },
})
