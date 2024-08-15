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
  &-list {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
