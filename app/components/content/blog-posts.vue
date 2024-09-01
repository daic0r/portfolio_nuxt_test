<template>
   <slot :posts="posts">
      <section class="not-prose font-mono">
         <div class="column text-gray-400 text-sm">
            date
            title
         </div>
         <ul>
            <li v-for="post in posts" v-bind:key="post._path">
               <div class="border-gray-800">
                  <NuxtLink :to="post._path" class="column group hover:bg-gray-100 dark:hover:bg-gray-800">
                  <div :class="{ 'text-white dark:text-gray-900 group-hover:text-gray-100 dark:group-hover:text-gray-800': !post.displayYear, 'text-gray-400 dark:text-gray-500': post.displayYear }">{{ post.year }}</div>
                  <div>{{ post.title }}</div>
                  </NuxtLink>
               </div>
            </li>
         </ul>
      </section>
   </slot>
</template>

<script setup>
   const props = defineProps({
      limit: {
         type: Number,
         default: null
      }
   });



   const { data } = await useAsyncData(
      'posts', 
      () => {
         const query = queryContent('/blog')
            .only(['title', '_path', 'publishedAt'])
            .where({ _path: { $ne: '/blog' } })
            .sort({ publishedAt: -1 });

         if (props.limit) {
            query.limit(props.limit);
         }

         return query.find();
      }
   );

   const posts = computed(() => {
      if (!data.value)
         return [];

      const result = [];
      let lastYear = null;
      
      for (const post of data.value) {
         const year = new Date(post.publishedAt).getFullYear();
         const displayYear = year !== lastYear;
         lastYear = year;

         post.year = year;
         post.displayYear = displayYear;

         result.push(post);
      }
      console.log(data.value);
      return result; 
   })
</script>

<style scoped>
.column {
   @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700 
}
</style>
