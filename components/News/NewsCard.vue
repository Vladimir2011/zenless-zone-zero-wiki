<template>
  <nuxt-link class="news-card" :to="news.link">
    <nuxt-img :src="`/news/${news.image}`" :alt="news.title" class="news-image" />

    <div class="news-info">
      <h3 class="news-title">{{ news.title }}</h3>
      <p class="news-date">{{ news.date }}</p>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  news: {
    type: Object,
    default: {}
  }
})
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.news-card {
  display: flex;
  flex-direction: column;
  @media (hover: hover) {
    &:hover {
      .news-info {
        background: $bodyBackgroundColor;
      }
    }
  }
  .news-image {
    width: 100%;
    height: auto;
    object-fit: cover;

    transform: scale(1);
    transition: transform 0.3s ease-in-out;
    will-change: transform;
    border-radius: $borderRadiusCard $borderRadiusCard 0 0;
  }

  .news-info {
    padding: 12px;
    background-color: $nestedCardBackgroundColor;
    border-radius: 0 0 $borderRadiusCard $borderRadiusCard;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .news-title {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 16px;
      color: $sectionTitleColorText;

      @media screen and (max-width: 550px) {
        font-size: 16px;
      }
    }

    .news-date {
      font-size: 16px;
      color: $greyColor;
      margin-top: auto;

      @media screen and (max-width: 550px) {
        font-size: 14px;
      }
    }
  }
}
</style>
