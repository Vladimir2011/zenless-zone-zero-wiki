<template>
  <li
    class="header-nav-item"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    :class="{ 'header-nav-item--megamenu': navItem.childrenMenu.length }"
  >
    <nuxt-link class="header-nav-link" :to="navItem.link">
      {{ navItem.title }}
      <Icon name="material-symbols:keyboard-arrow-down-rounded" size="24px" class="megamenu-arrow-icon" />
    </nuxt-link>

    <ul class="megamenu" :class="{ 'megamenu--hover': hover }">
      <li v-for="child in navItem.childrenMenu" :key="child.title" class="megamenu-item">
        <nuxt-link class="megamenu-link" :to="child.link">
          {{ child.title }}
        </nuxt-link>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  navItem: {
    type: Object,
    default: {}
  }
})

const hover = ref(false)
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.header-nav-item {
  .header-nav-link {
    font-size: 18px;
    font-weight: bold;
    padding: 12px;
    border-radius: $borderRadiusCard;

    @media screen and (max-width: 1200px) {
      padding: 16px;
      border-radius: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    @media (hover: hover) {
      &:hover {
        background-color: $whiteColor;
        color: $blackColor;
      }
    }

    .megamenu-arrow-icon {
      display: none;
    }
  }

  .megamenu {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
}

.header-nav-item--megamenu {
  .header-nav-link {
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;

    .megamenu-arrow-icon {
      display: block;

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }

    @media screen and (max-width: 1200px) {
      justify-content: space-between;
      border-bottom: 0;
    }
  }

  .megamenu {
    position: absolute;
    flex-direction: column;
    background-color: $nestedCardBackgroundColor;
    border-radius: $borderRadiusCard;

    @media screen and (max-width: 1200px) {
      display: flex;
      position: static;
      border-radius: 0;
      background-color: transparent;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .megamenu-item {
      @media (hover: hover) {
        &:hover {
          .megamenu-link {
            background: $whiteColor;
            color: $blackColor;
          }
        }
      }

      .megamenu-link {
        padding: 16px;
        font-weight: 700;
        @media screen and (max-width: 1200px) {
          padding: 12px 12px 12px 30px;
          font-size: 14px;
        }
      }

      &:first-child {
        .megamenu-link {
          border-radius: $borderRadiusCard $borderRadiusCard 0 0;
          @media screen and (max-width: 1200px) {
            border-radius: 0;
          }
        }
      }

      &:last-child {
        .megamenu-link {
          border-radius: 0 0 $borderRadiusCard $borderRadiusCard;
          @media screen and (max-width: 1200px) {
            border-radius: 0;
          }
        }
      }
    }
  }

  .megamenu--hover {
    display: flex;
  }
}

.router-link-exact-active {
  background-color: $whiteColor;
  color: $blackColor;
}
</style>
