<template>
  <nuxt-link :to="wEngine.link" class="wengine-card">
    <div class="wengine-header-wrapper">
      <nuxt-img
        :src="`/wengines/${wEngine.image}`"
        :alt="wEngine.name"
        class="wengine-image"
        :class="{
          'wengine-s': wEngine.rarity === 'S',
          'wengine-a': wEngine.rarity === 'A',
          'wengine-b': wEngine.rarity === 'B'
        }"
      />

      <div class="wengine-header-block">
        <h2 class="wengine-name">{{ wEngine.name }}</h2>
        <div class="wengine-main-info-block">
          <p class="wengine-main-info-text">
            Редкость: <nuxt-img :src="`/rarities/${wEngine.icons.rarity}`" alt="rarity-icon" class="rarity-image" />
          </p>
          <p class="wengine-main-info-text">
            Специальность:
            <nuxt-img :src="`/specialties/${wEngine.icons.specialty}`" alt="specialty-icon" class="specialty-image" />
          </p>
          <p v-if="wEngine.signature" class="wengine-main-info-text wengine-character-signature">
            Сигна:
            <nuxt-link :to="wEngine.signature.link" class="wengine-character-link">{{
              wEngine.signature.name
            }}</nuxt-link>
          </p>
        </div>
        <div class="wengine-stats-block">
          <p class="wengine-stats-text">
            {{ wEngine.stats.baseStat.name }}:
            <span class="span-stats">{{ wEngine.stats.baseStat.firstLvl }} ({{ wEngine.stats.baseStat.lastLvl }})</span>
          </p>
          <p class="wengine-stats-text">
            {{ wEngine.stats.mainStat.name }}:
            <span class="span-stats">{{ wEngine.stats.mainStat.firstLvl }} ({{ wEngine.stats.mainStat.lastLvl }})</span>
          </p>
        </div>
      </div>
    </div>

    <div class="wengine-description">
      <div v-html="wEngine.skill" class="wengine-description-text-wrapper" />
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  wEngine: {
    type: Object,
    default: {}
  }
})
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.wengine-card {
  @include nested-card;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }

  @media (hover: hover) {
    &:hover {
      background: $bodyBackgroundColor;
    }
  }

  .wengine-header-wrapper {
    display: flex;
    gap: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid $greyColor;

    @media screen and (max-width: 375px) {
      flex-direction: column;
    }

    .wengine-image {
      object-fit: contain;
      border-radius: $borderRadiusCard;

      width: 200px;
      height: 200px;
      flex: 0 0 200px;

      @media screen and (max-width: 550px) {
        width: 130px;
        height: 100%;
        flex: 0 0 130px;
      }

      @media screen and (max-width: 375px) {
        width: 180px;
        height: 180px;
        flex: 0 0 180px;
        align-self: center;
      }
    }

    .wengine-s {
      background-color: #fe8a00;
    }

    .wengine-a {
      background-color: #8d79e3;
    }

    .wengine-b {
      background-color: #3ba5ff;
    }

    .wengine-header-block {
      display: flex;
      flex-direction: column;
      gap: 10px;

      @media screen and (max-width: 550px) {
        gap: 5px;
      }

      .wengine-name {
        font-size: 22px;
        font-weight: 700;
        @media screen and (max-width: 768px) {
          font-size: 20px;
        }
      }

      .wengine-main-info-block {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
        align-items: baseline;
        font-weight: 300;

        @media screen and (max-width: 550px) {
          gap: 5px;
        }

        .wengine-main-info-text {
          display: flex;
          align-items: center;
          gap: 5px;

          img {
            width: 24px;
            height: 24px;
          }
        }

        .wengine-character-signature {
          font-weight: 500;
          .wengine-character-link {
            color: #3ba5ff;
            font-weight: 700;
            text-decoration: underline;
          }
        }
      }

      .wengine-stats-block {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap: 10px;
        align-items: baseline;
        font-weight: 600;

        @media screen and (max-width: 550px) {
          gap: 5px;
        }

        .wengine-stats-text {
          .span-stats {
            color: #eec554;
          }
        }
      }
    }
  }

  .wengine-description-text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px;

    padding-top: 15px;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }

    .wengine-description-text {
      font-weight: 500;
    }
  }
}
</style>
