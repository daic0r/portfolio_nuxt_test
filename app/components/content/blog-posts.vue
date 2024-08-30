<template>
   <section class="not-prose">
      <h1>All blog posts</h1>
      <ul>
         <li v-for="post in posts" v-bind:key="post._path">
            <div class="border-gray-800">
               <NuxtLink :to="post._path"><h2>{{ post.title }}</h2></NuxtLink>
            </div>
         </li>
      </ul>
   </section>
</template>

<script setup>
   const { data: posts } = await useAsyncData(
      'posts', 
      () => queryContent('/')
         .only(['title', '_path'])
         .where({ _path: { $ne: '/blog' } })
         .find());
   console.log(posts);
</script>
