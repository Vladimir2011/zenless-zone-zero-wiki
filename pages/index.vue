<template>
  <div class="container">
    <h1 class="visually-hidden">База данных по игре Zenless Zone Zero</h1>
    <SliderBanner />

    <section class="section characters-section">
      <h2 class="section-title">Персонажи</h2>
      <SliderCharacters />
      <nuxt-link to="/wiki/characters" class="main-page-button"> Открыть каталог персонажей </nuxt-link>
    </section>

    <section class="section factions-section">
      <h2 class="section-title">Фракции</h2>
      <SliderFactions :factions-list="factionsList" />
      <nuxt-link to="/wiki/factions" class="main-page-button"> Посмотреть все фракции </nuxt-link>
    </section>

    <section class="section news-section">
      <h2 class="section-title">Новости</h2>
      <NewsList :news-list="getNewsListForMainPage" />
      <nuxt-link to="/news" class="main-page-button"> Посмотреть все новости </nuxt-link>
    </section>
  </div>
</template>

<script setup lang="ts">
const factionsStore = useFactionsStore()
const newsStore = useNewsStore()

const { factionsList } = storeToRefs(factionsStore)
const { getNewsListForMainPage } = storeToRefs(newsStore)
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.section {
  margin-bottom: 20px;
  @include main-page-card;

  .section-title {
    font-size: 26px;
    line-height: 32px;
    font-weight: 600;
    color: $sectionTitleColorText;

    margin-bottom: 20px;

    @media screen and (max-width: 550px) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  .main-page-button {
    width: 100%;
    padding: 24px 10px;
    margin-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    color: $whiteColor;
    transition: 0.5s ease;

    @media (hover: hover) {
      &:hover {
        text-shadow: rgba(255, 255, 255, 0.6) 0 2px 6px;
      }
    }

    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 24px;
      padding: 20px 10px;
      border-top: none;
      background-color: $nestedCardBackgroundColor;
      margin-top: 10px;
      border-radius: $borderRadiusCard;
    }

    @media screen and (max-width: 550px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
}
</style>
