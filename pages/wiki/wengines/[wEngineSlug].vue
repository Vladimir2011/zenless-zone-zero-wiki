<template>
  <div class="container">
    <AppBreadcrumbs :breadcrumbs="currentWEnginePage.breadcrumbs" />
    <h1 class="wengine-title visually-hidden">{{ currentWEnginePage.name }}</h1>

    <div class="wengine-card-wrapper">
      <WEngineCard :wEngine="currentWEnginePage" />
    </div>

    <div class="wengine-description-wrapper">
      <h2>Описание</h2>
      <div class="wengine-text" v-html="currentWEnginePage.description" />
    </div>

    <div class="wengine-description-wrapper">
      <h2>Кому лучше всего подойдет</h2>
      <div class="character-grid">
        <CharacterSmallCard
          v-for="character in currentWEnginePage.characters"
          :key="character.id"
          :character="character"
        />
      </div>
    </div>

    <div class="wengine-description-wrapper">
      <h2>Смотрите также</h2>
      <div class="wengine-grid">
        <WEngineCard v-for="wEngine in getWEngineReadMoreArray" :key="wEngine.id" :wEngine="wEngine" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const wEngineStore = useWEnginesStore()
const route = useRoute()

const { getWEngineReadMoreArray } = storeToRefs(wEngineStore)
const currentWEnginePage = ref({})

currentWEnginePage.value = wEngineStore.getWEngineByRouteSlug(route.params.wEngineSlug)

onMounted(() => {
  wEngineStore.updateWEnginesReadMoreArray()
})

if (!currentWEnginePage.value) {
  throw showError({ statusCode: 404, message: 'Амплификатор не найден', fatal: true })
}
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.container {
  display: flex;
  flex-direction: column;
}

.wengine-title {
  text-align: center;
  font-size: 42px;

  @media screen and (max-width: 991px) {
    font-size: 36px;
  }

  @media screen and (max-width: 550px) {
    font-size: 30px;
  }
}

.wengine-card-wrapper {
  margin-bottom: 20px;
  &:deep(.wengine-card) {
    cursor: auto;
    @include card;
    &:hover {
      background-color: $cardBackgroundColor;
    }

    .wengine-link {
      &::after {
        display: none;
      }
    }
  }
}

.wengine-description-wrapper {
  margin-bottom: 20px;
  @include card;
}

.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 15px;
}

.wengine-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
  gap: 10px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

h2 {
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;

  margin-bottom: 20px;

  @media screen and (max-width: 550px) {
    font-size: 20px;
  }
}
</style>
