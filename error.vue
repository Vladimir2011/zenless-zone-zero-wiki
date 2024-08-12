<template>
  <NuxtLayout v-if="error">
    <div class="error-container">
      ОШИБКА
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError()
</script>

<style scoped lang="scss">
</style>
