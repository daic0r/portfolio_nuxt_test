<<template>
   <article class="prose dark:prose-invert prose-pre:bg-white prose-pre:text-gray-700 dark:prose-pre:text-gray-300 dark:prose-pre:bg-gray-800">
      <ContentDoc v-slot="{ doc }">
         <div class="grid grid-cols-6 gap-16">
            <div :class="{ 'col-span-6 md:col-span-4': doc.toc, 'col-span-6': !doc.toc }">
               <ContentRenderer :value="doc" />
            </div>
            <div class="hidden md:block md:col-span-2 not-prose" v-if="doc.toc">
               <aside class="sticky top-8">
                  <div class="font-semibold mb-2">
                     Table Of Contents
                  </div>
                  <nav>
                     <TocLinks :links="doc.body.toc.links" :active-id="activeId" />
                  </nav>
               </aside>
            </div>

         </div>
      </ContentDoc>
   </article>
</template>

<script setup>
   const activeId = ref(null);
   onMounted(() => {
      const callback = entries => {
         for (const e of entries) {
            console.log(e);
         }
         const entry = entries.find(e => e.isIntersecting);
         activeId.value = entry?.target.id || activeId.value;
      };
      const observer = new IntersectionObserver(callback, {
         root: null,
         threshold: 0.5,
      });
      const elements = document.querySelectorAll('h2, h3');

      for (const element of elements) {
         observer.observe(element);
      }
      onBeforeUnmount(() => {
         for (const element of elements) {
            observer.unobserve(element);
         }
      });
   });

</script>
