<template>
  <nuxt-link :to="character.link" class="character-small-card">
    <nuxt-img
      :src="`/characters/${character.image}`"
      alt="character-image"
      class="character-image"
      :class="{ 'character-image--s': character.rarity === 'S', 'character-image--a': character.rarity === 'A' }"
    />

    <ul class="icons-list">
      <li class="icon-item">
        <nuxt-img :src="`/attributes/${character.icons.attribute}`" alt="attribute-icon" />
      </li>
      <li class="icon-item">
        <nuxt-img :src="`/specialties/${character.icons.specialty}`" alt="specialty-icon" />
      </li>
    </ul>

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

.character-small-card {
  display: block;
  position: relative;

  width: 130px;
  height: 160px;

  border-radius: $borderRadiusCard;

  .character-image {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: $borderRadiusCard;
  }

  .character-image--s {
    background-color: #fe8a00;
  }

  .character-image--a {
    background-color: #8d79e3;
  }

  .icons-list {
    display: flex;
    align-items: center;
    gap: 5px;

    position: absolute;
    top: 4px;
    left: 4px;
    .icon-item {
      width: 24px;
      height: 24px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .character-name {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);

    width: 100%;
    display: block;

    padding: 5px;
    text-align: center;

    border-radius: 0 0 $borderRadiusCard $borderRadiusCard;
  }
}
</style>
