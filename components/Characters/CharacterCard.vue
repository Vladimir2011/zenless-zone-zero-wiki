<template>
  <nuxt-link :to="character.link" class="characters-card">
    <nuxt-img :src="`/characters/${character.image}`" :alt="character.name" class="character-image" />
    <ul class="icons-list">
      <li class="icon-item">
        <nuxt-img :src="`/rarities/${character.icons.rarity}`" alt="rarity-icon" />
      </li>
      <li class="icon-item">
        <nuxt-img :src="`/attributes/${character.icons.attribute}`" alt="attribute-icon" />
      </li>
      <li class="icon-item">
        <nuxt-img :src="`/specialties/${character.icons.specialty}`" alt="specialty-icon" />
      </li>
    </ul>

    <div class="faction-image">
      <nuxt-img :src="`/factions/${character.icons.faction}`" alt="faction-icon" />
    </div>

    <p class="character-name">{{ character.name }}</p>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  character: {
    type: Object,
    default: {}
  }
})
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.characters-card {
  @include nested-card;
  position: relative;

  @media (hover: hover) {
    &:hover {
      background: $bodyBackgroundColor;
    }
  }

  .character-image {
    width: 100%;
    height: 100%;
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

  .faction-image {
    position: absolute;
    top: 8px;
    right: 8px;

    width: 48px;
    height: 48px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .character-name {
    font-size: 24px;
    line-height: 1;
    font-weight: 600;
  }
}
</style>
