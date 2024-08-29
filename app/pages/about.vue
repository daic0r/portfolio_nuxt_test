<template>
  <div>
    <h1>About Page</h1>
  </div>
  <div>
     <button @click="updateLayout">Update Layout</button>
   </div>
</template>

<script setup>
   // definePageMeta({
   //    layout: "another",
   // });
   function updateLayout() {
      setPageLayout("another");
   }
</script>
