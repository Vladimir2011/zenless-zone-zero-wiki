<template>
  <div class="characters-list-slider">
    <Splide class="slider-list" :options="sliderOptions" :extensions="{ AutoScroll }">
      <SplideSlide v-for="character in charactersList" :key="character.id" class="slider-item">
        <CharacterCard :character="character" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
const charactersStore = useCharactersStore()
const { charactersList } = storeToRefs(charactersStore)

const sliderOptions = {
  type: 'loop',
  rewind: true,
  width: '100%',
  height: '100%',
  perPage: 5,
  updateOnMove: true,
  arrows: true,
  perMove: 1,
  pagination: false,
  accessibility: true,
  autoplay: false,
  interval: 3000,
  cover: true,
  gap: '10px',
  speed: 500,
  drag: 'free',
  autoScroll: {
    speed: 1
  },

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
      perPage: 1,
      height: 'auto',
      width: 'auto',
      fixedWidth: '288px'
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
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;
</style>
