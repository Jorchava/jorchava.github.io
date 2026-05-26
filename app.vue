<script setup lang="ts">
import { useRevealAnimation } from '~/composables/useRevealAnimation'
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: '',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Mozilla+Text:wght@200..700&family=Press+Start+2P&display=swap',
    },
  ],
})

useRevealAnimation('.reveal')
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
