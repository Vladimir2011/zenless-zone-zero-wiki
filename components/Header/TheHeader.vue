<template>
  <header>
    <div class="container">
      <div class="header-wrapper">
        <nuxt-link to="/" class="header-logo">
          <nuxt-img src="/logo.svg" alt="logo" width="36px" height="36px" />
        </nuxt-link>

        <div class="header-nav-wrapper" :class="{ 'header-nav-wrapper--mobile-open': isMobileMenuOpen }">
          <HeaderNavList>
            <HeaderNavListItem v-for="navItem in menu" :key="navItem.title" :nav-item="navItem" />
          </HeaderNavList>

          <AppSocialLinks />
        </div>

        <button @click.prevent="headerStore.toggleMobileMenu()" class="header-burger-menu-button">
          <Icon :name="burgerIconSwap" size="36px" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const headerStore = useHeaderStore()
const route = useRoute()
const { menu, isMobileMenuOpen } = storeToRefs(headerStore)
const { bodyEnable, bodyDisable } = useHelpers()

const burgerIconSwap = computed(() => {
  return isMobileMenuOpen.value ? 'material-symbols:menu-open-rounded' : 'material-symbols:menu-rounded'
})

// Закрываем меню при изменении текущей страницы
watch(
  () => route.path,
  () => {
    headerStore.closeMobileMenu()
  },
  { immediate: true, deep: true }
)

// Отключаем скролл при открытом меню, добавляя фиксированный body
watch(
  () => isMobileMenuOpen.value,
  () => {
    isMobileMenuOpen.value ? bodyEnable() : bodyDisable()
  }
)
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
    gap: 30px;
    height: 72px;
    background: $bodyBackgroundColor;
    .header-logo {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .header-nav-wrapper {
      display: flex;
      justify-content: space-between;
      flex: 1;
      gap: 15px;

      @media screen and (max-width: 1200px) {
        display: none;
        position: absolute;
        top: 72px;
        left: 0;
        width: 100%;
        height: 100vh;
        background: $bodyBackgroundColor;
        z-index: 100;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 30px;
      }
    }

    .header-nav-wrapper--mobile-open {
      display: flex;
    }

    .header-burger-menu-button {
      display: none;
      @media screen and (max-width: 1200px) {
        display: block;
      }
    }
  }
}
</style>
