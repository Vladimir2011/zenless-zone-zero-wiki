<template>
  <nav class="header-nav">
    <ul class="header-nav-list">
      <slot />
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header-nav {
  flex: 1;
  &-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 1200px) {
    flex: 0;
  }
}
</style>
