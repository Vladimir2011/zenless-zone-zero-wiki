<template>
  <div class="container">
    <AppBreadcrumbs :breadcrumbs="charactersPageBreadcrumbs" />
    <div class="characters-wrapper">
      <h1 class="characters-wrapper-title">Каталог персонажей</h1>
      <div class="grid-characters">
        <CharacterCard v-for="character in charactersList" :key="character.id" :character="character" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const charactersStore = useCharactersStore()
const { charactersPageBreadcrumbs, charactersList } = storeToRefs(charactersStore)
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.characters-wrapper {
  @include card;

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
}
</style>
