<template>
  <div class="container">
    <div class="character-wrapper">{{ route.params.characterSlug }}</div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped lang="scss"></style>
