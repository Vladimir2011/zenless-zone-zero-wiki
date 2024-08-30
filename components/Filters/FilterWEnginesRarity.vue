<template>
  <div class="rarity-wengines-filter filter">
    <div
      v-for="rarity in RARITY_WENGINES_FILTERS"
      :key="rarity.id"
      class="rarity-item filter-button-item"
      :data-tooltip="rarity.name"
    >
      <input type="radio" name="rarity" class="rarity-input" :id="rarity.name" :value="rarity.name" />
      <label :for="rarity.name" @click="$emit('selectRarity', rarity)">
        <nuxt-img :src="`/rarities/${rarity.image}`" :alt="rarity.alt" class="rarity-image filter-button-image" />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
const { RARITY_WENGINES_FILTERS } = useConstants()

defineEmits(['selectRarity'])
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;
</style>
