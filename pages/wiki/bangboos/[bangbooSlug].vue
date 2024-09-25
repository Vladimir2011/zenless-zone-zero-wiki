<template>
  <div class="container">
    <AppBreadcrumbs :breadcrumbs="currentBangbooPage.breadcrumbs" />
    <h1 class="bangboo-title visually-hidden">{{ currentBangbooPage.name }}</h1>

    <div class="bangboo-card-wrapper bangboo-content-wrapper">
      <nuxt-img :src="`/bangboos/${currentBangbooPage.image}`" :alt="currentBangbooPage.name" class="bangboo-image" />

      <div class="bangboo-content">
        <p class="bangboo-name">{{ currentBangbooPage.name }}</p>
        <p class="bangboo-rarity">
          Редкость: <nuxt-img :src="`/rarities/${currentBangbooPage.icons.rarity}`" alt="rarity-icon" />
        </p>
        <p class="bangboo-description-text">{{ currentBangbooPage.description }}</p>
      </div>
    </div>

    <div v-if="currentBangbooPage.commonDescription" class="bangboo-card-wrapper bangboo-common-description-wrapper">
      <h2>Описание</h2>

      <p class="common-description-text">
        {{ currentBangbooPage.commonDescription }}
      </p>
    </div>

    <div class="bangboo-card-wrapper bangboo-stats-wrapper">
      <h2>Параметры (60 уровень)</h2>

      <ul class="bangboo-stats-list">
        <li class="bangboo-stats-item">
          <p class="bangboo-stats-title">
            <nuxt-img src="/stats/stat-hp-icon.webp" alt="hp-icon" class="icon-image" width="25px" height="25px" />HP
          </p>
          <p class="bangboo-stats-value">{{ currentBangbooPage.stats.hp }}</p>
        </li>
        <li class="bangboo-stats-item">
          <p class="bangboo-stats-title">
            <nuxt-img
              src="/stats/stat-atk-icon.webp"
              alt="atk-icon"
              class="icon-image"
              width="25px"
              height="25px"
            />Сила атаки
          </p>
          <p class="bangboo-stats-value">{{ currentBangbooPage.stats.atk }}</p>
        </li>
        <li class="bangboo-stats-item">
          <p class="bangboo-stats-title">
            <nuxt-img
              src="/stats/stat-def-icon.webp"
              alt="def-icon"
              class="icon-image"
              width="25px"
              height="25px"
            />Защита
          </p>
          <p class="bangboo-stats-value">{{ currentBangbooPage.stats.def }}</p>
        </li>
        <li class="bangboo-stats-item">
          <p class="bangboo-stats-title">
            <nuxt-img
              src="/stats/stat-crit-rate-icon.webp"
              alt="crit-rate-icon"
              class="icon-image"
              width="25px"
              height="25px"
            />Шанс крит. попадания
          </p>
          <p class="bangboo-stats-value">{{ currentBangbooPage.stats.critRate }}</p>
        </li>
        <li class="bangboo-stats-item">
          <p class="bangboo-stats-title">
            <nuxt-img
              src="/stats/stat-crit-dmg-icon.webp"
              alt="crit-dmg-icon"
              class="icon-image"
              width="25px"
              height="25px"
            />Крит. урон
          </p>
          <p class="bangboo-stats-value">{{ currentBangbooPage.stats.critDmg }}</p>
        </li>
        <li class="bangboo-stats-item">
          <p class="bangboo-stats-title">
            <nuxt-img
              src="/stats/stat-impact-icon.webp"
              alt="impact-icon"
              class="icon-image"
              width="25px"
              height="25px"
            />Импульс
          </p>
          <p class="bangboo-stats-value">{{ currentBangbooPage.stats.impact }}</p>
        </li>
      </ul>
    </div>

    <div class="bangboo-card-wrapper bangboo-skills-wrapper">
      <h2>Навыки</h2>

      <div class="bangboo-skills-list">
        <div class="bangboo-skills-item">
          <div class="bangboo-skill-header">
            <nuxt-img src="/skills/bangboo-active-skill-icon.png" alt="skill-a-image" class="skill-image" />
            <h3 class="bangboo-skill-name">{{ currentBangbooPage.skills.a.name }}</h3>
          </div>
          <div class="skill-description" v-html="currentBangbooPage.skills.a.description" />
        </div>
        <div class="bangboo-skills-item">
          <div class="bangboo-skill-header">
            <nuxt-img src="/skills/bangboo-passive-skill-icon.png" alt="skill-a-image" class="skill-image" />
            <h3 class="bangboo-skill-name">{{ currentBangbooPage.skills.b.name }}</h3>
          </div>
          <div class="skill-description" v-html="currentBangbooPage.skills.b.description" />
        </div>
        <div v-if="currentBangbooPage.skills.c" class="bangboo-skills-item">
          <div class="bangboo-skill-header">
            <nuxt-img src="/skills/bangboo-chain-skill-icon.png" alt="skill-a-image" class="skill-image" />
            <h3 class="bangboo-skill-name">{{ currentBangbooPage.skills.c.name }}</h3>
          </div>
          <div class="skill-description" v-html="currentBangbooPage.skills.c.description" />
        </div>
      </div>
    </div>

    <div class="bangboo-card-wrapper">
      <h2>Смотрите также</h2>
      <div class="grid-bangboos">
        <BangbooCard v-for="bangboo in getBangbooReadMoreArray" :key="bangboo.id" :bangboo="bangboo" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bangboosStore = useBangboosStore()
const route = useRoute()

const { getBangbooReadMoreArray } = storeToRefs(bangboosStore)
const currentBangbooPage = ref({})

currentBangbooPage.value = bangboosStore.getBangbooBySlug(route.params.bangbooSlug)

onMounted(() => {
  bangboosStore.updateBangbooReadMoreArray()
})

if (!currentBangbooPage.value) {
  throw showError({ statusCode: 404, message: 'Банбу не найден', fatal: true })
}
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.bangboo-card-wrapper {
  margin-bottom: 20px;
  @include card;
}
.bangboo-content-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 20px;
  border-radius: $borderRadiusCard;
  background-color: $cardBackgroundColor;

  @media screen and (max-width: 768px) {
    padding: 12px;
    flex-direction: column;
    align-items: flex-start;
  }

  .bangboo-image {
    width: 100%;
    height: 100%;
    max-width: 180px;
    max-height: 250px;
    @media screen and (max-width: 768px) {
      align-self: center;
      max-width: 270px;
      max-height: 375px;
    }
  }

  .bangboo-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    @media screen and (max-width: 768px) {
      gap: 10px;
    }
    .bangboo-name {
      font-size: 36px;
      font-weight: 700;
      line-height: 1.2;

      @media screen and (max-width: 768px) {
        font-size: 30px;
      }

      @media screen and (max-width: 550px) {
        font-size: 24px;
      }
    }

    .bangboo-rarity {
      display: flex;
      align-items: center;
      gap: 5px;

      font-size: 22px;
      font-weight: 600;
      @media screen and (max-width: 768px) {
        font-size: 20px;
      }

      @media screen and (max-width: 550px) {
        font-size: 18px;
      }
    }

    .bangboo-description-text {
      display: inline-block;
      padding: 20px;
      background-color: $nestedCardBackgroundColor;
      border-radius: $borderRadiusCard;

      font-size: 24px;
      font-weight: 600;
      font-style: italic;

      @media screen and (max-width: 768px) {
        padding: 15px;
        font-size: 22px;
      }

      @media screen and (max-width: 550px) {
        font-size: 18px;
      }
    }
  }
}

.bangboo-common-description-wrapper {
  .common-description-text {
    font-size: 18px;
  }
}

.bangboo-stats-wrapper {
  .bangboo-stats-list {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 10px 20px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    .bangboo-stats-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex: 1 0 calc(50% - 20px);

      padding: 10px;
      background-color: $nestedCardBackgroundColor;
      border-radius: $borderRadiusCard;

      font-size: 20px;

      @media screen and (max-width: 768px) {
        font-size: 18px;
      }

      .bangboo-stats-title {
        display: flex;
        align-items: center;
        gap: 8px;

        .icon-image {
          width: 25px;
          height: 25px;
        }
      }

      .bangboo-stats-value {
        font-weight: 700;
      }
    }
  }
}

.bangboo-skills-wrapper {
  .bangboo-skills-list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .bangboo-skills-item {
      @include nested-card;
      display: flex;
      flex-direction: column;
      gap: 15px;

      .bangboo-skill-header {
        display: flex;
        align-items: center;
        gap: 15px;

        .skill-image {
          width: 64px;
          height: 64px;
        }
      }
    }
  }
}

.grid-bangboos {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 991px) {
    &:deep(.bangboo-card) {
      .bangboo-name {
        font-size: 20px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 2fr 2fr;
    &:deep(.bangboo-card) {
      padding: 8px;
      .bangboo-name {
        font-size: 18px;
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

h3 {
  font-size: 22px;
  line-height: 1.2;
  font-weight: 700;

  @media screen and (max-width: 550px) {
    font-size: 18px;
  }
}
</style>
