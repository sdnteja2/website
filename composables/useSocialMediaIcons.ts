// ~/composables/useSocialMediaIcons.ts

export default function useSocialMediaIcons() {
  const iconMap: Record<string, string> = {
    facebook: 'i-hugeicons-facebook-01',
    twitter: 'i-hugeicons-new-twitter-rectangle',
    instagram: 'i-hugeicons-instagram',
    linkedin: 'i-hugeicons-linkedin-01',
    tiktok: 'i-hugeicons-tiktok',
    youtube: 'i-hugeicons-youtube',
    pinterest: 'i-hugeicons-pinterest',
    snapchat: 'i-hugeicons-snapchat',
    whatsapp: 'i-hugeicons-whatsapp',
    telegram: 'i-hugeicons-telegram',
    reddit: 'i-hugeicons-reddit',
    tumblr: 'i-hugeicons-tumblr',
    vimeo: 'i-hugeicons-vimeo',
    flickr: 'i-hugeicons-flickr',
    dribbble: 'i-hugeicons-dribbble',
    behance: 'i-hugeicons-behance-02',
    medium: 'i-hugeicons-medium-square',
    github: 'i-hugeicons-github-01',
    email: 'i-hugeicons-mail-02',
    messenger: 'i-hugeicons-messenger',
    // tambahkan sosial media lainnya sesuai kebutuhan
  }

  const getIcon = (name: string) => {
    return iconMap[name.toLowerCase()] || 'i-hugeicons-default-icon'
  }

  return {
    getIcon,
  }
}
