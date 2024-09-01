export default {
   scrollBehavior(to, from, savedPosition) {
      // `to` and `from` are both route locations
      // `savedPosition` can be null if there isn't one

      if (savedPosition) {
         return savedPosition;
      }

      if (to.hash) {
         return {
            top: 30,
            el: to.hash,
            behavior: 'smooth'
         }
      }

      return { left: 0, top: 0, behavior: 'smooth' };
   }
}
