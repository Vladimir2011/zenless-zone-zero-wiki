<template>
  <div class="container">
    <AppBreadcrumbs :breadcrumbs="wEnginesPageBreadcrumbs" />
    <div class="description-wrapper">
      <p class="description-text">
        <b>Амплификаторы</b> являются местным аналогом оружия, дающим возможность наделить агента уникальным пассивным
        навыком. Они увеличивают базовую атаку персонажа, а также имеют свои собственные уникальные параметры повышения
        и эффекты.
      </p>
    </div>

    <div class="wengines-wrapper">
      <div class="wengines-header-wrapper">
        <h1 class="wengines-wrapper-title">Каталог амплификаторов</h1>
        <button
          @click.prevent="toggleCharactersFilters"
          class="button wengines-page-button"
          :class="{ 'wengines-page-button--active': isWEnginesFilterOpen }"
        >
          <Icon name="mage:filter-fill" class="filter-icon" /> Фильтры
        </button>
      </div>

      <div v-if="isWEnginesFilterOpen" :key="filtersKey" class="wengines-filters-wrapper">
        <FilterWEnginesRarity @selectRarity="selectRarity" />
        <FilterSpecialties @selectSpecialty="selectSpecialty" />
        <button @click.prevent="resetFilters" class="button filters-reset-button">Сбросить</button>
      </div>

      <div class="grid-wengines">
        <WEngineCard v-for="wEngine in filteredWEnginesList" :key="wEngine.id" :wEngine="wEngine" />
      </div>

      <div v-if="filteredWEnginesList.length === 0" class="no-wengines-found">
        <nuxt-img
          src="/bangboos/avocaboo/bangboo-avocaboo.webp"
          alt="Ничего не найдено"
          class="no-wengines-found-image"
        />
        <p class="no-wengines-found-text">Ничего не найдено. Попробуйте изменить параметры поиска.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const wEnginesStore = useWEnginesStore()
const { wEnginesPageBreadcrumbs, filteredWEnginesList } = storeToRefs(wEnginesStore)

const isWEnginesFilterOpen = ref(false)
const filtersKey = ref(0)

const selectRarity = rarity => {
  wEnginesStore.setRarityFilterParam(rarity)
  wEnginesStore.filterWEnginesList()
}

const selectSpecialty = specialty => {
  wEnginesStore.setSpecialtyFilterParam(specialty)
  wEnginesStore.filterWEnginesList()
}

const resetFilters = () => {
  wEnginesStore.resetFilters()
  filtersKey.value += 1
}

const toggleCharactersFilters = () => {
  isWEnginesFilterOpen.value = !isWEnginesFilterOpen.value
  resetFilters()
}
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.description-wrapper {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @include card;
  .description-text {
    font-size: 20px;
    font-weight: 500;

    @media screen and (max-width: 550px) {
      font-size: 16px;
    }
  }
}

.wengines-wrapper {
  margin-bottom: 20px;
  @include card;

  .wengines-header-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;

    margin-bottom: 20px;

    .wengines-page-button {
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

    .wengines-page-button--active {
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

  .wengines-filters-wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .grid-wengines {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
    gap: 10px;

    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .no-wengines-found {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    padding: 30px 0;
    text-align: center;

    .no-wengines-found-text {
      font-weight: 700;
    }
  }
}
</style>
