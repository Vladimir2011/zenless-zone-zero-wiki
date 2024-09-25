<template>
  <nuxt-link class="bangboo-card" :to="bangboo.link">
    <nuxt-img :src="`/bangboos/${bangboo.image}`" :alt="bangboo.name" class="bangboo-image" />
    <ul class="icons-list">
      <li class="icon-item">
        <nuxt-img :src="`/rarities/${bangboo.icons.rarity}`" alt="rarity-icon" />
      </li>
    </ul>
    <p class="bangboo-name">{{ bangboo.name }}</p>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  bangboo: {
    type: Object,
    default: {}
  }
})
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.bangboo-card {
  @include nested-card;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 12px;

  @media (hover: hover) {
    &:hover {
      background: $bodyBackgroundColor;
    }
  }

  .bangboo-image {
    width: 100%;
    height: 100%;
    filter: drop-shadow(2px 4px 0 rgba(0, 0, 0, 0.6));
    object-fit: contain;
  }

  .icons-list {
    display: flex;
    align-items: center;
    gap: 5px;

    position: absolute;
    top: 8px;
    left: 8px;
    .icon-item {
      width: 28px;
      height: 28px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .bangboo-name {
    font-size: 24px;
    line-height: 1;
    font-weight: 600;
    width: fit-content;
    text-shadow: rgba(255, 255, 255, 0.6) 0 2px 6px;

    @media screen and (max-width: 550px) {
      font-size: 18px;
    }
  }
}
</style>
