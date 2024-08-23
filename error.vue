<template>
  <NuxtLayout v-if="error">
    <div class="error-container">
      <div v-if="error.statusCode === 404" class="error-block">
        <nuxt-img src="/bangboos/bangboo-avocaboo.webp" alt="Ничего не найдено" />
        <h1 class="error-code">404</h1>
        <h2 class="error-status">Oops! Страница, которую вы ищете, не найдена :(</h2>
        <nuxt-link to="/" class="button error-button"> Вернуться на главную </nuxt-link>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError()

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  text-align: center;
}
.error-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  gap: 15px;

  .error-code {
    font-size: 120px;

    @media screen and (max-width: 550px) {
      font-size: 80px;
    }
  }

  .error-status {
    font-size: 24px;

    @media screen and (max-width: 550px) {
      font-size: 16px;
    }
  }
}
</style>
