<template>
  <div class="container">
    <AppBreadcrumbs :breadcrumbs="charactersPageBreadcrumbs" />
    <div class="characters-wrapper">
      <div class="characters-header-wrapper">
        <h1 class="characters-wrapper-title">Каталог персонажей</h1>
        <button
          @click.prevent="toggleCharactersFilters"
          class="button characters-page-button"
          :class="{ 'characters-page-button--active': isCharactersFilterOpen }"
        >
          <Icon name="mage:filter-fill" class="filter-icon" />
          Фильтры
        </button>
      </div>

      <div v-if="isCharactersFilterOpen" :key="filtersKey" class="characters-filters-wrapper">
        <FilterCharactersAndBangboosRarity @selectRarity="selectRarity" />
        <FilterAttributes @selectAttribute="selectAttribute" />
        <FilterSpecialties @selectSpecialty="selectSpecialty" />
        <FilterFactionsDropdown @selectFaction="selectFaction" />
        <button @click.prevent="resetFilters" class="button filters-reset-button">Сбросить</button>
      </div>

      <div class="grid-characters">
        <CharacterCard v-for="character in filteredCharactersList" :key="character.id" :character="character" />
      </div>

      <div v-if="filteredCharactersList.length === 0" class="no-characters-found">
        <nuxt-img src="/bangboos/bangboo-avocaboo.webp" alt="Ничего не найдено" class="no-characters-found-image" />
        <p class="no-characters-found-text">Ничего не найдено. Попробуйте изменить параметры поиска.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const charactersStore = useCharactersStore()
const { charactersPageBreadcrumbs, filteredCharactersList } = storeToRefs(charactersStore)

const isCharactersFilterOpen = ref(false)
const filtersKey = ref(0)

const selectRarity = rarity => {
  charactersStore.setRarityFilterParam(rarity)
  charactersStore.filterCharactersList()
}

const selectAttribute = attribute => {
  charactersStore.setAttributeFilterParam(attribute)
  charactersStore.filterCharactersList()
}

const selectSpecialty = specialty => {
  charactersStore.setSpecialtyFilterParam(specialty)
  charactersStore.filterCharactersList()
}

const selectFaction = faction => {
  charactersStore.setFactionFilterParam(faction)
  charactersStore.filterCharactersList()
  charactersStore.selectFaction(faction)
}

const resetFilters = () => {
  charactersStore.resetFilters()
  filtersKey.value += 1
}

const toggleCharactersFilters = () => {
  isCharactersFilterOpen.value = !isCharactersFilterOpen.value
  resetFilters()
}
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.characters-wrapper {
  margin-bottom: 20px;
  @include card;

  .characters-header-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;

    margin-bottom: 20px;

    .characters-page-button {
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

    .characters-page-button--active {
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

  .characters-filters-wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .grid-characters {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
    }

    @media screen and (max-width: 550px) {
      grid-template-columns: repeat(auto-fill, minmax(167px, 1fr));
      grid-gap: 10px;

      &:deep(.character-card) {
        padding: 8px;
        .icons-list {
          .icon-item {
            width: 24px;
            height: 24px;
          }
        }

        .faction-image {
          width: 40px;
          height: 40px;
        }

        .character-name {
          font-size: 16px;
        }
      }
    }

    @media screen and (max-width: 375px) {
      grid-template-columns: repeat(auto-fill, minmax(138px, 1fr));

      &:deep(.character-card) {
        .icons-list {
          .icon-item {
            width: 20px;
            height: 20px;
          }
        }

        .faction-image {
          width: 32px;
          height: 32px;
        }
      }
    }
  }

  .no-characters-found {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    padding: 30px 0;
    text-align: center;

    .no-characters-found-text {
      font-weight: 700;
    }
  }
}
</style>
