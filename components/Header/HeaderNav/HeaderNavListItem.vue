<template>
  <li class="header-nav-item">
    <nuxt-link class="header-nav-link" :to="navItem.link">
      {{ navItem.title }}
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  navItem: {
    type: Object,
    default: {}
  }
})
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.header-nav-item {
  .header-nav-link {
    font-size: 18px;
    font-weight: bold;
    padding: 12px;
    border-radius: $borderRadiusCard;

    @media (hover: hover) {
      &:hover {
        background-color: $whiteColor;
        color: $blackColor;
      }
    }
  }
}

.router-link-exact-active {
  background-color: $whiteColor;
  color: $blackColor;
}
</style>
