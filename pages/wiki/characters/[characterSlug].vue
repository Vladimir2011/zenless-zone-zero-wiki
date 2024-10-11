<template>
  <div class="container">
    <AppBreadcrumbs :breadcrumbs="currentCharacterPage.breadcrumbs" />
    <div class="character-wrapper">
      <h1 class="character-title">{{ currentCharacterPage.name }}</h1>
      <nuxt-img
        :src="`/characters/${currentCharacterPage.bannerImage}`"
        :alt="`${currentCharacterPage.slug}-image`"
        class="character-image-banner"
      />

      <div class="character-description-wrapper">
        <h2>Описание персонажа</h2>
        <div class="character-description">
          <div class="description-wrapper">
            <p class="character-description-text">
              {{ currentCharacterPage.description }}
            </p>

            <div class="character-video-list">
              <div v-for="video in currentCharacterPage.videoList" :key="video.id" class="character-video-item">
                <iframe
                  width="100%"
                  height="100%"
                  :src="`https://www.youtube.com/embed/${video.youtubeCode}`"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                />
              </div>
            </div>
          </div>

          <div class="character-description-card">
            <nuxt-img
              :src="`/characters/${currentCharacterPage.image}`"
              :alt="`${currentCharacterPage.slug}-image`"
              class="character-image-card"
            />

            <div class="character-description-block">
              <p class="character-description-block-text">
                Ранг:
                <nuxt-img :src="`/rarities/${currentCharacterPage.icons.rarity}`" alt="rarity-icon" class="icon" />
              </p>
              <p class="character-description-block-text">
                Специальность:
                <nuxt-img
                  :src="`/specialties/${currentCharacterPage.icons.specialty}`"
                  alt="specialty-icon"
                  class="icon"
                />
              </p>
              <p class="character-description-block-text">
                Атрибут:
                <nuxt-img
                  :src="`/attributes/${currentCharacterPage.icons.attribute}`"
                  alt="attribute-icon"
                  class="icon"
                />
              </p>
              <p class="character-description-block-text">
                Фракция:
                <nuxt-img :src="`/factions/${currentCharacterPage.icons.faction}`" alt="faction-icon" class="icon" />
              </p>
              <p v-if="currentCharacterPage.dateOfBirth" class="character-description-block-text">
                День рождения: <span>{{ currentCharacterPage.dateOfBirth }}</span>
              </p>
              <p v-if="currentCharacterPage.height" class="character-description-block-text">
                Рост: <span>{{ currentCharacterPage.height }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="character-description-wrapper">
        <h2>Смотрите также</h2>
        <div class="characters-grid">
          <CharacterCard v-for="character in getCharactersReadMoreArray" :key="character.id" :character="character" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const charactersStore = useCharactersStore()
const route = useRoute()

const { getCharactersReadMoreArray } = storeToRefs(charactersStore)
const currentCharacterPage = ref({})

currentCharacterPage.value = charactersStore.getCharacterByRouteSlug(route.params.characterSlug)

onMounted(() => {
  charactersStore.updateCharactersReadMoreArray()
})

if (!currentCharacterPage.value) {
  throw showError({ statusCode: 404, message: 'Персонаж не найден', fatal: true })
}
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.container {
  display: flex;
  flex-direction: column;
}

.character-wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 550px) {
    gap: 20px;
  }

  .character-title {
    text-align: center;
    font-size: 42px;

    @media screen and (max-width: 991px) {
      font-size: 36px;
    }

    @media screen and (max-width: 550px) {
      font-size: 30px;
    }
  }

  .character-image-banner {
    width: 100%;
    max-height: 600px;
    object-fit: cover;
    border-radius: $borderRadiusCard;
  }
}

.character-description-wrapper {
  margin-bottom: 20px;
  @include card;

  // Стили для описания персонажа
  .character-description {
    display: flex;
    align-items: flex-start;
    gap: 20px;

    @media screen and (max-width: 991px) {
      flex-direction: column-reverse;
    }

    .description-wrapper {
      display: inline-flex;
      flex-direction: column;
      gap: 20px;
      flex: 1 1 calc(70% - 20px);

      .character-description-text {
        font-size: 18px;
      }

      .character-video-list {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .character-video-item {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: $borderRadiusCard;

          iframe {
            border-radius: $borderRadiusCard;
          }
        }
      }
    }

    .character-description-card {
      @include nested-card;
      display: inline-flex;
      flex: 1 1 calc(30% - 20px);
      flex-direction: column;
      gap: 20px;

      @media screen and (max-width: 991px) {
        flex: 1 1 100%;
        width: 100%;
      }

      .character-image-card {
        width: 100%;
        @media screen and (max-width: 991px) {
          width: 50%;
          align-self: center;
        }
        @media screen and (max-width: 550px) {
          width: 100%;
        }
      }

      .character-description-block {
        display: flex;
        flex-direction: column;

        .character-description-block-text {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 18px;
          padding: 10px 0;
          height: 58px;

          border-bottom: 2px solid $greyColor;
          color: rgba($whiteColor, 0.7);

          &:last-child {
            border-bottom: none;
          }

          span {
            font-weight: 500;
            color: $whiteColor;
          }

          .icon {
            width: 36px;
            height: 36px;
          }
        }
      }
    }
  }
}

.characters-grid {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
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
