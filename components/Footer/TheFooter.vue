<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer-block">
          <p class="footer-text">
            Zenless Zone Zero™ является зарегистрированным товарным знаком компании MiHoYo Co., Ltd.
          </p>
          <p class="footer-text">
            Все информация взята из открытых источников, и предоставлена в ознакомительных целях.
          </p>
        </div>

        <div class="footer-block">
          <AppSocialLinks />
          <p class="footer-text copyright">© {{ new Date().getFullYear() }} ZZZWiki.ru, Все права защищены</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.footer {
  .footer-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-top: 1px solid $whiteColor;

    .footer-block {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .footer-text {
        font-weight: 400;
        color: $greyColor;
      }

      .copyright {
        font-weight: 700;
        color: $whiteColor;
        font-size: 14px;
      }
    }
  }
}
</style>
