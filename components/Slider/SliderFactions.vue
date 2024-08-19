<template>
  <div class="factions-list-slider">
    <Splide class="slider-list" :options="sliderOptions">
      <SplideSlide v-for="faction in factionsList" :key="faction.id" class="slider-item">
        <FactionCard :faction="faction" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
const sliderOptions = {
  type: 'loop',
  rewind: true,
  perPage: 3,
  updateOnMove: true,
  arrows: true,
  perMove: 1,
  pagination: false,
  accessibility: true,
  interval: 3000,
  cover: true,
  gap: '10px',
  padding: '3rem',
  focus: 'center',
  breakpoints: {
    1200: {
      perPage: 4
    },
    991: {
      perPage: 3
    },
    768: {
      perPage: 2
    },
    550: {
      perPage: 2
    }
  },
  classes: {
    arrows: 'splide__arrows slider-arrows',
    arrow: 'splide__arrow slider-arrow',
    prev: 'splide__arrow--prev slider-prev-arrow',
    next: 'splide__arrow--next slider-next-arrow',
    pagination: 'splide__pagination slider-pagination',
    page: 'splide__pagination__page slider-pagination-item'
  }
}
const factionStore = useFactionsStore()

const { factionsList } = storeToRefs(factionStore)
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.slider-list {
  .slider-item {
    opacity: 0.2;
  }

  .is-active {
    opacity: 1;
  }
}
</style>
