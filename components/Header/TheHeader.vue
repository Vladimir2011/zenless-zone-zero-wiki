<template>
  <header>
    <div class="container">
      <div class="header-wrapper">
        <nuxt-link to="/" class="header-logo">
          <nuxt-img src="/logo.svg" alt="logo" width="36px" height="36px" />
        </nuxt-link>

        <HeaderNavList>
          <HeaderNavListItem v-for="navItem in HEADER_NAVIGATION" :key="navItem.title" :nav-item="navItem" />
        </HeaderNavList>

        <AppSocialLinks />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { HEADER_NAVIGATION } = useConstants()
</script>

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
        font-size: 24px;
        font-weight: 700;
      }
    }
  }
}
</style>
