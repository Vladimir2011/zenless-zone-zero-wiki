<template>
  <div class="container">
    <AppBreadcrumbs :breadcrumbs="newsPageBreadcrumbs" />
    <div class="news-wrapper">
      <h1 class="news-title">Новости</h1>
      <NewsList :news-list="newsList" />
    </div>
  </div>
</template>

<script setup lang="ts">
const newsStore = useNewsStore()

const { newsList, newsPageBreadcrumbs } = storeToRefs(newsStore)
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.news-wrapper {
  margin-bottom: 20px;
  @include card;

  .news-title {
    margin-bottom: 20px;
  }
}
</style>
