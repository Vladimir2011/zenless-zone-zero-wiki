<template>
  <div class="container">
    <AppBreadcrumbs :breadcrumbs="currentDiskDrivePage.breadcrumbs" />
    <h1 class="disk-drive-title visually-hidden">{{ currentDiskDrivePage.name }}</h1>

    <div class="disk-drive-wrapper">
      <DiskDriveCard :disk-drive="currentDiskDrivePage" />
    </div>

    <div v-if="currentDiskDrivePage.description" class="disk-drive-description-wrapper">
      <h2>Описание</h2>
      <p class="disk-drive-text">{{ currentDiskDrivePage.description }}</p>
    </div>

    <div class="disk-drive-description-wrapper">
      <h2>Смотрите также</h2>
      <div class="disk-drives-grid">
        <DiskDriveCard v-for="diskDrive in getDiskDrivesReadMoreArray" :key="diskDrive.id" :disk-drive="diskDrive" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const diskDrivesStore = useDiskDrivesStore()
const route = useRoute()

const { getDiskDrivesReadMoreArray } = storeToRefs(diskDrivesStore)
const currentDiskDrivePage = ref({})

currentDiskDrivePage.value = diskDrivesStore.getDiskDriveByRouteSlug(route.params.diskDriveSlug)

onMounted(() => {
  diskDrivesStore.updateDiskDrivesReadMoreArray()
})

if (!currentDiskDrivePage.value) {
  throw showError({ statusCode: 404, message: 'Драйв диск не найден', fatal: true })
}
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.container {
  display: flex;
  flex-direction: column;
}

.disk-drive-wrapper {
  margin-bottom: 20px;
  &:deep(.disk-drive-card) {
    cursor: auto;
    @include card;
    &:hover {
      background-color: $cardBackgroundColor;
    }
  }
}

.disk-drive-description-wrapper {
  margin-bottom: 20px;
  @include card;

  .disk-drive-text {
    font-size: 18px;
  }
}

.disk-drives-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 550px) {
    gap: 15px;
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
