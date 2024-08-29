<template>
   <div class="container mx-auto max-w-2xl">
      <header class="flex justify-between items-center mt-5">
         <div>
            <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200">Matthias Gruen</NuxtLink>
         </div>
         <Menu />
      </header>
   </div>
   <div>
      <slot />
   </div>
</template>

<script setup>
   useHead({
      titleTemplate: '%s - Matthias Gruen'
   })
</script>
