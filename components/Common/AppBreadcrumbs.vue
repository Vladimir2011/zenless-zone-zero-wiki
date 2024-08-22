<template>
  <div class="breadcrumbs-wrapper">
    <nav aria-label="breadcrumb">
      <ol vocab="https://schema.org/" typeof="BreadcrumbList" class="breadcrumb-list">
        <li
          v-for="(breadcrumb, index) in breadcrumbs"
          :key="breadcrumb.name"
          class="breadcrumb-item"
          property="itemListElement"
          typeof="ListItem"
        >
          <nuxt-link
            v-if="breadcrumbs.length !== index + 1"
            :to="breadcrumb.link"
            property="item"
            typeof="WebPage"
            class="breadcrumb-item-link"
          >
            <span property="name">{{ breadcrumb.name }}</span>
          </nuxt-link>
          <span v-else class="breadcrumb-item-link breadcrumb-item-link--last" property="name">{{
            breadcrumb.name
          }}</span>
          <meta property="position" :content="index" />
          <Icon v-if="breadcrumbs.length !== index + 1" name="material-symbols:chevron-right-rounded" size="16px" />
        </li>
      </ol>
    </nav>
  </div>
</template>

<script lang="ts" setup>
interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbsType[]
}

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  breadcrumbs: () => []
})
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.breadcrumb-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 20px 0;
  list-style: none;
  @media screen and (max-width: 768px) {
    margin: 0 0 15px 0;
  }
  .breadcrumb-item {
    display: flex;
    align-items: center;
    .breadcrumb-item-link {
      display: flex;
      align-items: center;
      gap: 4px;

      font-size: 14px;
      line-height: 1.3;
      font-weight: 600;
      color: $whiteColor;

      padding: 8px;
      background-color: $nestedCardBackgroundColor;
      border-radius: 8px;
      @media (hover: hover) {
        &:hover {
          background-color: $greyColor;
        }
      }
    }

    .breadcrumb-item-link--last {
      padding: 8px;
      color: rgba($whiteColor, 0.5);
      background-color: $nestedCardBackgroundColor;
      @media (hover: hover) {
        &:hover {
          background-color: $nestedCardBackgroundColor;
        }
      }
    }
  }
}
</style>
