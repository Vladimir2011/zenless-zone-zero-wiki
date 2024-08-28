<template>
  <div class="container">
    <AppBreadcrumbs :breadcrumbs="wikiBreadcrumbs" />
    <div class="wiki-wrapper">
      <h1 class="wiki-title">База знаний</h1>

      <div class="grid-wiki">
        <nuxt-link v-for="item in getWikiChildMenuList" :key="item.title" :to="item.link" class="wiki-card">
          <nuxt-img :src="`/wiki/${item.image}`" :alt="item.name" class="wiki-item-image" />
          <p class="wiki-item-name">{{ item.title }}</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const wikiStore = useWikiStore()
const headerStore = useHeaderStore()
const { wikiBreadcrumbs } = storeToRefs(wikiStore)
const { getWikiChildMenuList } = storeToRefs(headerStore)
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.wiki-wrapper {
  margin-bottom: 20px;
  @include card;

  .wiki-title {
    margin-bottom: 20px;
  }

  .grid-wiki {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 10px;
    }
    @media screen and (max-width: 550px) {
      grid-template-columns: repeat(auto-fill, minmax(167px, 1fr));
      gap: 10px;
    }

    .wiki-card {
      @include nested-card;
      width: 100%;
      height: 100%;
      text-align: center;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      @media (hover: hover) {
        &:hover {
          background: $bodyBackgroundColor;
        }
      }

      .wiki-item-image {
        width: 100%;
        height: 100%;
        max-width: 350px;
        max-height: 350px;
        object-fit: contain;
      }

      .wiki-item-name {
        font-size: 24px;
        line-height: 30px;
        font-weight: 700;

        @media screen and (max-width: 550px) {
          font-size: 18px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
