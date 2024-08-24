<template>
  <div class="news-list">
    <NewsCard v-for="news in newsList" :key="news.id" :news="news" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  newsList: {
    type: {}
  }
})
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.news-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
