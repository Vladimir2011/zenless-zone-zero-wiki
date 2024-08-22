<template>
  <div class="container">
    <SliderBanner />

    <section class="section characters-section">
      <h2 class="section-title">Персонажи</h2>
      <SliderCharacters />
    </section>

    <section class="section factions-section">
      <h2 class="section-title">Фракции</h2>
      <SliderFactions />
    </section>

    <section class="section news-section">
      <h2 class="section-title">Новости</h2>
      <NewsList />
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.section {
  margin-bottom: 20px;
  @include card;

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
}
</style>
