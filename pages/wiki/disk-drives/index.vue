<template>
  <div class="container">
    <AppBreadcrumbs :breadcrumbs="diskDrivesPageBreadcrumbs" />

    <div class="description-wrapper">
      <p class="description-text">
        <b>Диски</b> – это предметы в Zenless Zone Zero, которые можно использовать на агентах, чтобы повысить их
        характеристики, а если вы объедините доступные наборы, то откроете дополнительные возможности. Это эквивалент
        реликвий из Honkai: Star Rail. У каждого персонажа есть 6 слотов для дисков, и ниже вы можете найти список всех
        доступных наборов.
      </p>
    </div>

    <div class="disk-drives-wrapper">
      <h1 class="disk-drives-wrapper-title">Каталог драйв дисков</h1>

      <div class="grid-disk-drives">
        <DiskDriveCard v-for="diskDrive in diskDrivesList" :key="diskDrive.id" :disk-drive="diskDrive" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const diskDrivesStore = useDiskDrivesStore()
const { diskDrivesPageBreadcrumbs, diskDrivesList } = storeToRefs(diskDrivesStore)
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

.disk-drives-wrapper {
  margin-bottom: 20px;
  @include card;
  .disk-drives-wrapper-title {
    margin-bottom: 20px;
  }

  .grid-disk-drives {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 550px) {
      gap: 15px;
    }
  }
}
</style>
