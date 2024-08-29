<template>
   <nav class="font-mono">
      <ul class="flex space-x-4">
         <li><NuxtLink to="/" class="link">Home</NuxtLink></li>
         <li><NuxtLink to="/about" class="link">About</NuxtLink></li>
      </ul>
   </nav>
</template>

<!-- scoped means only available inside this component -->
<style scoped>
.link {
   @apply p-1 hover:bg-gray-200
}
</style>
