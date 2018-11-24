// That proves that css needs to be in js :D
export const css = {
  color: {
    green: '#5cdc8f'
  }
}

// Maybe array notation would be better
// @see https://github.com/davidroyer/nuxt-api-example/blob/master/nuxt.config.js
const meta = {
  name: 'Offline-insurance',
  description: 'Offline insurance done right',
  theme_color: css.color.green,
  ogHost: 'https://www.axa.com/',
  ogImage: { path: '/og-image.png' },
  twitterCard: 'summary',
  twitterSite: '@syzer3',
  twitterCreator: '@syzer3',
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
}

export default {
  meta,
  jsonLd: {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Basel',
      addressRegion: 'BS',
      postalCode: '4054',
      streetAddress: 'Oberalpstrasse 78'
    },
    description: 'Simpego - a offline insurance',
    logo: `${meta.ogHost}${meta.ogImage.path}`, // Google wants valid url
    url: 'https://axa.com'
  }
}
