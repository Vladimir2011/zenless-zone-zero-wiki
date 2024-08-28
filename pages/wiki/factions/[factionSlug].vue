<template>
  <div class="container" v-if="currentFactionPage">
    <AppBreadcrumbs :breadcrumbs="currentFactionPage.breadcrumbs" />
    <div class="faction-wrapper">
      <h1 class="faction-title">{{ currentFactionPage.title }}</h1>
      <nuxt-img :src="`/factions/banner/${currentFactionPage.image}`" alt="faction-image" class="faction-image" />

      <div class="faction-info">
        <div class="faction-info-block">
          <p class="faction-quote">{{ currentFactionPage.quote }}</p>

          <p v-for="text in currentFactionPage.text" :key="text.id" class="faction-text">
            {{ text.text }}
          </p>
        </div>

        <div class="faction-logo">
          <nuxt-img :src="`/factions/${currentFactionPage.logo}`" alt="faction-logo" class="faction-logo-image" />
        </div>
      </div>

      <div class="faction-characters">
        <h2 class="faction-characters-title">Агенты</h2>
        <div class="grid-characters">
          <CharacterCard
            v-for="character in currentFactionPage.characters"
            :key="character.id"
            :character="character"
          />
        </div>
      </div>

      <div class="factions">
        <h2 class="factions-title">Другие фракции</h2>
        <SliderFactions :factions-list="currentFactionPage.anotherFactions" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const factionStore = useFactionsStore()
const route = useRoute()

const currentFactionPage = ref({})

currentFactionPage.value = factionStore.getFactionByRouteSlug(route.params.factionSlug)

console.log(currentFactionPage.value)

if (!currentFactionPage.value) {
  throw showError({ statusCode: 404, message: 'Фракция не найдена', fatal: true })
}
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.faction-wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 550px) {
    gap: 20px;
  }

  .faction-title {
    text-align: center;
    font-size: 42px;

    @media screen and (max-width: 991px) {
      font-size: 36px;
    }

    @media screen and (max-width: 550px) {
      font-size: 30px;
    }
  }

  .faction-image {
    width: 100%;
    border-radius: $borderRadiusCard;
  }

  .faction-info {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    @include card;

    .faction-info-block {
      display: flex;
      flex-direction: column;
      gap: 15px;

      flex: 0 0 75%;
      @media screen and (max-width: 991px) {
        flex: 0 0 100%;
      }
      .faction-quote {
        display: inline-block;
        padding: 30px;
        background-color: $nestedCardBackgroundColor;
        border-radius: $borderRadiusCard;

        font-size: 24px;
        font-weight: 700;
        font-style: italic;

        @media screen and (max-width: 991px) {
          padding: 20px;
        }

        @media screen and (max-width: 550px) {
          font-size: 18px;
          padding: 15px;
        }
      }

      .faction-text {
        font-size: 18px;

        @media screen and (max-width: 550px) {
          font-size: 16px;
        }
      }
    }

    .faction-logo {
      flex: 0 0 25%;

      @media screen and (max-width: 991px) {
        flex: 0 0 100%;
        width: 100%;
        height: 100%;

        max-width: 450px;
        max-height: 450px;
      }

      @media screen and (max-width: 550px) {
        max-width: 300px;
        max-height: 300px;
      }

      .faction-logo-image {
        width: 100%;
        height: 100%;
      }
    }

    @media screen and (max-width: 991px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .faction-characters {
    @include card;

    .grid-characters {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(4, 1fr);

      @media screen and (max-width: 991px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
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
  }

  .factions {
    margin-bottom: 20px;
    @include card;
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
