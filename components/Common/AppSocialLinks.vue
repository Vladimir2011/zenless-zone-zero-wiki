<template>
  <ul class="social-links-list">
    <li v-for="socialLink in SOCIAL_LINKS" :key="socialLink.name" class="social-links-item">
      <a :href="socialLink.link" target="_blank" class="social-link">
        <Icon :name="socialLink.icon" size="36px" />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const { SOCIAL_LINKS } = useConstants()
</script>
<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.social-links-list {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;

  .social-links-item {
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
