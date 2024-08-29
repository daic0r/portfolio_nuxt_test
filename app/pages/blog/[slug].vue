<<template>
   <div>
      <h1>{{ route.params.slug }}</h1>
   </div>
</template>

<script setup>
   const route = useRoute();
</script>
