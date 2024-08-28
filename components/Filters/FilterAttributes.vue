<template>
  <div class="attribute-characters-filter filter">
    <div
      v-for="attribute in ATTRIBUTES_FILTERS"
      :key="attribute.id"
      class="attribute-item filter-button-item"
      :data-tooltip="attribute.tooltip"
    >
      <input type="radio" name="attribute" class="attribute-input" :id="attribute.name" :value="attribute.name" />
      <label :for="attribute.name" @click="$emit('selectAttribute', attribute)">
        <nuxt-img
          :src="`/attributes/${attribute.image}`"
          :alt="attribute.alt"
          class="attribute-image filter-button-image"
        />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
const { ATTRIBUTES_FILTERS } = useConstants()
defineEmits(['selectAttribute'])
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;
</style>
