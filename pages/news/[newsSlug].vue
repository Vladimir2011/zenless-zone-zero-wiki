<template>
  <div class="container">
    <AppBreadcrumbs :breadcrumbs="newsPageBreadcrumbs" />
    <div class="news-wrapper">
      <h1 class="news-title">Новость</h1>
      <p class="news-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores at aut consequuntur dicta earum,
        eveniet ipsam minus natus nobis officia placeat, quos reprehenderit sunt, voluptatum. Assumenda facere fugit hic
        molestiae rem sint, sit. A cupiditate dolores facilis non odit qui reiciendis rerum, ut voluptatum? Ab aliquam
        dolore nemo neque!
      </p>
      <p class="news-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores at aut consequuntur dicta earum,
        eveniet ipsam minus natus nobis officia placeat, quos reprehenderit sunt, voluptatum. Assumenda facere fugit hic
        molestiae rem sint, sit. A cupiditate dolores facilis non odit qui reiciendis rerum, ut voluptatum? Ab aliquam
        dolore nemo neque!
      </p>
    </div>

    <div class="additional-news-wrapper">
      <h2 class="additional-news-title">Смотрите также</h2>
      <div class="additional-grid-news">
        <NewsCard v-for="news in newsList.slice(0, 4)" :key="news.id" :news="news" />
      </div>
    </div>
    <NewsList :news-list="getNewsListForMainPage" />
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
    font-size: 40px;
    margin-bottom: 20px;

    @media screen and (max-width: 991px) {
      font-size: 34px;
    }

    @media screen and (max-width: 550px) {
      font-size: 28px;
    }
  }
}

.additional-news-wrapper {
  margin-bottom: 20px;
  padding: 20px;
  border-radius: $borderRadiusCard;
  background-color: $cardBackgroundColor;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }

  .additional-grid-news {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 550px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

h2 {
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;

  margin-bottom: 20px;

  @media screen and (max-width: 550px) {
    font-size: 20px;
  }
}
</style>
