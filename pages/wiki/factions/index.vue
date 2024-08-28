<template>
  <div class="container">
    <AppBreadcrumbs :breadcrumbs="factionsPageBreadcrumbs" />
    <div class="factions-wrapper">
      <h1 class="factions-title">Фракции</h1>
      <div class="grid-factions">
        <FactionCard v-for="faction in factionsList" :key="faction.id" :faction="faction" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const factionsStore = useFactionsStore()

const { factionsPageBreadcrumbs, factionsList } = storeToRefs(factionsStore)
</script>
<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.factions-wrapper {
  margin-bottom: 20px;
  @include card;

  .factions-title {
    margin-bottom: 20px;
  }

  .grid-factions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 10px;

      &:deep(.faction-card) {
        .faction-image {
          height: auto;
        }
      }
    }
    @media screen and (max-width: 550px) {
      grid-template-columns: repeat(auto-fill, minmax(167px, 1fr));
      gap: 10px;
    }
  }
}
</style>
