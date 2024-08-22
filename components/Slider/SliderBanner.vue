<template>
  <div class="main-banner-slider">
    <Splide class="slider-list" :options="mainSliderOptions">
      <SplideSlide class="slider-item">
        <a href="'/'" class="slider-link" target="_blank">
          <NuxtImg src="/characters/qingyi/qingyi-image-banner.webp" alt="qingyi" width="100%" class="banner-image" />
        </a>
      </SplideSlide>

      <SplideSlide class="slider-item">
        <a href="'/'" class="slider-link" target="_blank">
          <NuxtImg
            src="/characters/jane-doe/jane-doe-banner-image.webp"
            alt="jane-doe"
            width="100%"
            class="banner-image"
          />
        </a>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
const mainSliderOptions = {
  type: 'slider',
  rewind: true,
  width: '100%',
  height: '100%',
  perPage: 1,
  updateOnMove: true,
  arrows: false,
  perMove: 1,
  pagination: false,
  accessibility: true,
  autoplay: true,
  interval: 5000,
  cover: true,
  speed: 500,
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

.main-banner-slider {
  margin-bottom: 30px;
  border-radius: $borderRadiusCard;
  background-color: $cardBackgroundColor;

  .banner-image {
    border-radius: $borderRadiusCard;
    object-fit: contain;
    width: 100%;
  }
}
</style>
