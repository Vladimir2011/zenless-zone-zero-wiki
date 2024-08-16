<template>
  <div class="container">
    <SliderBanner />

    <section class="section characters-section">
      <h2 class="section-title">Персонажи</h2>
      <SliderCharacters />
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.section {
  @include card;
  margin-top: 20px;

  .section-title {
    font-size: 26px;
    line-height: 32px;
    font-weight: 600;
    color: $sectionTitleColorText;

    margin-bottom: 20px;
  }
}
</style>
