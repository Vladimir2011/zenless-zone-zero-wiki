<template>
  <nuxt-link :to="faction.link" class="faction-card">
    <nuxt-img :src="`/factions/${faction.image}`" :alt="faction.name" class="faction-image" />
    <p class="faction-name">{{ faction.name }}</p>
    <p class="faction-description">{{ faction.description }}</p>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  faction: {
    type: Object,
    default: {}
  }
})
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.faction-card {
  @include nested-card;
  width: 100%;
  height: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (hover: hover) {
    &:hover {
      background: $bodyBackgroundColor;
    }
  }

  .faction-image {
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
  }

  .faction-name {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
  }

  .faction-description {
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }
}
</style>
