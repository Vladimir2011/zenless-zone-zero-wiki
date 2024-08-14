<template>
  <header>
    <div class="container">
      <div class="header-wrapper">
        <nuxt-link to="/" class="header-logo">
          <nuxt-img src="/logo.svg" alt="logo" width="48px" height="48px" />
          <span class="logo-text">WIKI</span>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

header {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  left: 0;
  border-bottom: 0;

  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    background: $bodyBackgroundColor;
    .header-logo {
      display: flex;
      align-items: center;
      gap: 8px;

      .logo-text {
        font-size: 32px;
        font-weight: 700;
      }
    }
  }
}
</style>
