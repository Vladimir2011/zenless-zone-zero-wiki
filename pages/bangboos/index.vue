<template>
  <div class="container">
    <AppBreadcrumbs :breadcrumbs="bangboosPageBreadcrumbs" />
    <div class="bangboos-wrapper">
      <div class="bangboos-header-wrapper">
        <h1 class="bangboos-wrapper-title">Каталог банбу</h1>
        <button
          @click.prevent="toggleBangboosFilters"
          class="button bangboos-page-button"
          :class="{ 'bangboos-page-button--active': isBangboosFilterOpen }"
        >
          <Icon name="mage:filter-fill" class="filter-icon" />
          Фильтры
        </button>
      </div>

      <div v-if="isBangboosFilterOpen" :key="filtersKey" class="bangboos-filters-wrapper">
        <FilterCharactersAndBangboosRarity @selectRarity="selectRarity" />
        <button @click.prevent="resetFilters" class="button filters-reset-button">Сбросить</button>
      </div>

      <div class="grid-bangboos">
        <BangbooCard v-for="bangboo in filteredBangboosList" :key="bangboo.id" :bangboo="bangboo" />
      </div>

      <div v-if="false" class="no-bangboo-found">
        <nuxt-img
          src="/bangboos/avocaboo/bangboo-avocaboo.webp"
          alt="Ничего не найдено"
          class="no-characters-found-image"
        />
        <p class="no-bangboo-found-text">Ничего не найдено. Попробуйте изменить параметры поиска.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bangboosStore = useBangboosStore()

const { filteredBangboosList, bangboosPageBreadcrumbs } = storeToRefs(bangboosStore)

const isBangboosFilterOpen = ref(false)
const filtersKey = ref(0)

const toggleBangboosFilters = () => {
  isBangboosFilterOpen.value = !isBangboosFilterOpen.value
  resetFilters()
}

const selectRarity = rarity => {
  bangboosStore.setRarityFilterParam(rarity)
  bangboosStore.filterBangboosList()
}

const resetFilters = () => {
  bangboosStore.resetFilters()
  filtersKey.value += 1
}
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.bangboos-wrapper {
  margin-bottom: 20px;
  @include card;

  .bangboos-header-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;

    margin-bottom: 20px;

    .bangboos-page-button {
      display: flex;
      align-items: center;
      gap: 8px;

      line-height: 1;

      @media screen and (max-width: 550px) {
        font-size: 14px;
        padding: 8px;
      }

      .filter-icon {
        width: 24px;
        height: 24px;

        @media screen and (max-width: 550px) {
          width: 20px;
          height: 20px;
        }
      }
    }

    .bangboos-page-button--active {
      background-color: $whiteColor;
      color: $blackColor;
      .filter-icon {
        color: $blackColor;
      }

      @media (hover: hover) {
        &:hover {
          background-color: $whiteColor;
          color: $blackColor;
          .filter-icon {
            color: $blackColor;
          }
        }
      }
    }
  }

  .bangboos-filters-wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .grid-bangboos {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
    }

    @media screen and (max-width: 550px) {
      grid-template-columns: repeat(auto-fill, minmax(167px, 1fr));
      grid-gap: 10px;

      &:deep(.bangboo-card) {
        padding: 8px;
        .icons-list {
          .icon-item {
            width: 24px;
            height: 24px;
          }
        }

        .bangboo-name {
          font-size: 16px;
        }
      }
    }

    @media screen and (max-width: 375px) {
      grid-template-columns: repeat(auto-fill, minmax(138px, 1fr));

      &:deep(.bangboo-card) {
        .icons-list {
          .icon-item {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  .no-bangboo-found {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    padding: 30px 0;
    text-align: center;

    .no-bangboo-found-text {
      font-weight: 700;
    }
  }
}
</style>
