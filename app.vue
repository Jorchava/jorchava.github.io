<script setup lang="ts">
import { seoConfig } from '~/constants/seo'
import { useRevealAnimation } from '~/composables/useRevealAnimation'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: seoConfig.title,
  meta: [
    {
      name: 'description',
      content: seoConfig.description,
    },

    {
      name: 'keywords',
      content: seoConfig.keywords.join(', '),
    },

    {
      name: 'author',
      content: seoConfig.author,
    },

    {
      property: 'og:title',
      content: seoConfig.title,
    },

    {
      property: 'og:description',
      content: seoConfig.description,
    },

    {
      property: 'og:type',
      content: 'website',
    },

    {
      property: 'og:url',
      content: seoConfig.url,
    },

    {
      property: 'og:image',
      content: `${seoConfig.url}${seoConfig.image}`,
    },

    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },

    {
      name: 'twitter:title',
      content: seoConfig.title,
    },

    {
      name: 'twitter:description',
      content: seoConfig.description,
    },

    {
      name: 'twitter:image',
      content: `${seoConfig.url}${seoConfig.image}`,
    },

    {
      name: 'theme-color',
      content: '#0d0c0c',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Jorchava',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
  script: [
    {
      innerHTML: `
(function() {
  try {
    const theme = localStorage.getItem('theme');

    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
      return;
    }

    const prefersDark =
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    document.documentElement.setAttribute(
      'data-theme',
      prefersDark ? 'dark' : 'light'
    );
  } catch {}
})();
`,
      tagPosition: 'head',
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Jorge Chavarria',
        url: 'https://jorchava.github.io',
        jobTitle: 'Frontend Developer',
        sameAs: [
          'https://github.com/Jorchava',
          'https://linkedin.com/in/jorgechavarriachaves',
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Jorchava Portfolio',
        url: 'https://jorchava.github.io',
      }),
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: seoConfig.url,
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-96x96.png?v=20260527',
      sizes: '96x96',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg?v=20260527',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.ico?v=20260527',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png?v=20260527',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest?v=20260527',
    },
  ],
})

useRevealAnimation('.reveal')
</script>

<template>
  <a href="#main-content" class="skip-link"> Skip to content </a>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
