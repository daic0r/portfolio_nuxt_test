<template>
   <div class="flex space-x-2 items-center">
      <div class="text-gray-500 text-xs" v-if="showNextModeLabel">Change to {{ nextMode.name }}</div>
      <button @click="toggleMode" @mouseenter="showNextModeLabel=true" @mouseleave="showNextModeLabel=false" class="hover:bg-gray-300 dark:hover:bg-gray-700 px-2 py-1 text-gray-500">{{ nextMode.icon }}</button>
   </div>
</template>

<script setup>
   const colorMode = useColorMode();
   const showNextModeLabel = ref(false);

   const modes = [
      { name: 'system', icon: '🖥' },
      { name: 'light', icon: '☀️' },
      { name: 'dark', icon: '🌙' },
   ];

   const nextMode = computed(() => {
      const currentModeIdx = modes.findIndex(m => m.name === colorMode.preference);
      const nextModeIdx = (currentModeIdx + 1) % modes.length;
      return modes[nextModeIdx]; 
   });

   const toggleMode = () =>  {
      colorMode.preference = nextMode.value.name;
   };
</script>
