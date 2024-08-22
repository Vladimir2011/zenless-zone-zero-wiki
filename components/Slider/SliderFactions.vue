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
    991: {
      perPage: 2
    },
    768: {
      perPage: 2,
      padding: 0
    },
    550: {
      perPage: 1
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
    cursor: auto;
    pointer-events: none;
  }

  .is-active {
    opacity: 1;
    cursor: pointer;
    pointer-events: auto;
  }

  // Слайдер (стрелочки)

  .slider-arrows {
    .slider-arrow {
      background-color: $nestedCardBackgroundColor;
      top: -10%;
      opacity: 1;

      svg {
        fill: $whiteColor;
      }

      @media (hover: hover) {
        &:hover {
          opacity: 0.7;
        }
      }
    }

    .slider-prev-arrow {
      left: 86%;
    }
  }
}
</style>
