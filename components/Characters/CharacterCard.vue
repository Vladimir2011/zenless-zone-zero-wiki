<template>
  <nuxt-link :to="character.link" class="character-card">
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

.character-card {
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

  .character-image {
    width: 100%;
    height: 100%;
    filter: drop-shadow(2px 4px 0 rgba(0, 0, 0, 0.6));
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
    width: fit-content;
    text-shadow: rgba(255, 255, 255, 0.6) 0 2px 6px;

    @media screen and (max-width: 550px) {
      font-size: 18px;
    }
  }
}
</style>
