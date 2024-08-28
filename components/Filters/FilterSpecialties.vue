<template>
  <div class="specialty-characters-filter filter">
    <div
      v-for="specialty in SPECIALTIES_FILTERS"
      :key="specialty.id"
      class="specialty-item filter-button-item"
      :data-tooltip="specialty.tooltip"
    >
      <input type="radio" name="specialty" class="specialty-input" :id="specialty.name" :value="specialty.name" />
      <label :for="specialty.name" @click="$emit('selectSpecialty', specialty)">
        <nuxt-img
          :src="`/specialties/${specialty.image}`"
          :alt="specialty.alt"
          class="specialty-image filter-button-image"
        />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
const { SPECIALTIES_FILTERS } = useConstants()
defineEmits(['selectSpecialty'])
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;
</style>
