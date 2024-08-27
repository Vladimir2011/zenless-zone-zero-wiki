<template>
  <div class="container">
    <AppBreadcrumbs :breadcrumbs="newsPageBreadcrumbs" />
    <div class="news-wrapper">
      <h1 class="news-title">Новости</h1>
      <div class="grid-news">
        <NewsCard v-for="news in newsList" :key="news.id" :news="news" />
      </div>
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

  .grid-news {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;

    &:deep(.news-card) {
      @media screen and (min-width: 769px) {
        flex-direction: row;
      }

      .news-image {
        @media screen and (min-width: 769px) {
          max-width: 450px;
          width: auto;
          height: auto;
          flex: 0 0 45%;
          border-radius: $borderRadiusCard 0 0 $borderRadiusCard;
        }
      }

      .news-info {
        @media screen and (min-width: 769px) {
          border-radius: 0 $borderRadiusCard $borderRadiusCard 0;

          .news-title {
            font-size: 24px;
            @media screen and (max-width: 991px) {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
</style>
