<template>
  <div class="language-menu">
    <div @click="changeLocale('es')" class="lang">es</div>
    <div @click="changeLocale('en')" class="lang">en</div>
    <div @click="changeLocale('eo')" class="lang">eo</div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLocale = (newLocale) => {
  locale.value = newLocale
}
</script>

<style scoped lang="scss">
.language-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #202b4c;
  width: 110px;
  height: 110px;
  right: 230px;
  border-radius: 0 0 10px 10px;
  .lang {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    font-weight: 600;
    background: rgba(40, 60, 70, 0.21);
    color: rgba(242, 232, 212, 0.71);
    &:last-child {
      border-radius: 0px 0px 20px 20px;
    }
    &:hover {
      background: rgba(24, 23, 21, 0.21);
      border-radius: 0px 0px 0px 0px;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 950px) {
  .language-menu {
    right: 225px;
  }
}

@media screen and (max-width: 600px) {
  .language-menu {
    right: 26%;
  }
}
</style>
