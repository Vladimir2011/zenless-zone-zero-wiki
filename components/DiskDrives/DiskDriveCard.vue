<template>
  <nuxt-link :to="diskDrive.link" class="disk-drive-card">
    <nuxt-img :src="`/disk-drives/${diskDrive.image}`" :alt="diskDrive.name" class="disk-drive-image" />
    <div class="disk-drive-description">
      <h2 class="disk-drive-name">{{ diskDrive.name }}</h2>
      <div v-html="diskDrive.features" class="disk-drive-description-text-wrapper" />
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  diskDrive: {
    type: Object,
    default: {}
  }
})
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.disk-drive-card {
  @include nested-card;
  display: flex;
  gap: 20px;
  cursor: pointer;
  align-items: center;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }

  @media (hover: hover) {
    &:hover {
      background: $bodyBackgroundColor;
    }
  }

  .disk-drive-image {
    width: 200px;
    height: 170px;
    object-fit: cover;

    flex: 0 0 200px;
    @media screen and (max-width: 550px) {
      width: 252px;
      height: 214px;
      flex: 0 0 252px;
      object-fit: contain;
    }
  }

  .disk-drive-description {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .disk-drive-name {
      font-size: 24px;
      font-weight: 700;
      @media screen and (max-width: 768px) {
        font-size: 22px;
      }
    }

    .disk-drive-description-text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 18px;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }

      .disk-drive-description-text {
        font-weight: 500;
      }
    }
  }
}
</style>
