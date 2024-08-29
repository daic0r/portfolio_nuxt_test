<template>
  <div>
     Hello World
  </div>
</template>

<script setup>
   useSeoMeta({
      title: '[title]',
      description: '[description]',
      ogTitle: '[og:title]',
      ogDescription: '[og:description]',
      ogImage: '[og:image]',
      ogUrl: '[og:url]',
      twitterTitle: '[twitter:title]',
      twitterDescription: '[twitter:description]',
      twitterImage: '[twitter:image]',
      twitterCard: 'summary'
   })

   useHead({
      htmlAttrs: {
         lang: 'en'
      },
      link: [
         {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
         }
      ],
      title: 'Home page'
   })
</script>
