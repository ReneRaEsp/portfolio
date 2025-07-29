<template>
  <div class="menu-cont">
    <div class="menu-head">
      <div class="rr-cont">
        <p class="rr">R R</p>
        <p class="name">René Ramírez</p>
      </div>
      <router-link to="/">
        <div class="item" @click="toggleShowMenu">
          <img :src="`${STORAGE_URL}/utils/perfil.webp`" :alt="`${$t('profile')}`" />
          {{ $t('profile') }}
        </div></router-link
      >
      <router-link to="/resume">
        <div class="item" @click="toggleShowMenu">
          <img :src="`${STORAGE_URL}/utils/resume.webp`" :alt="`${$t('resume')}`" />
          {{ $t('resume') }}
        </div></router-link
      >
      <router-link to="/portfolio">
        <div class="item" @click="toggleShowMenu">
          <img :src="`${STORAGE_URL}/utils/resume.webp`" :alt="`${$t('portfolio')}`" />
          {{ $t('portfolio') }}
        </div></router-link
      >
      <router-link to="/contact">
        <div class="item" @click="toggleShowMenu">
          <img :src="`${STORAGE_URL}/utils/contact.webp`" :alt="`${$t('contact')}`" />
          {{ $t('contact') }}
        </div></router-link
      >
      <hr />
      <div class="item"><img :src="`${STORAGE_URL}/utils/gitlab.webp`" alt="Gitlab" /> Gitlab</div>
      <div class="item">
        <img :src="`${STORAGE_URL}/utils/linkedin.webp`" alt="Linkedin" /> Linkedin
      </div>
      <div class="item"><img :src="`${STORAGE_URL}/utils/efset.webp`" alt="EF Set" /> EF Set</div>
      <div class="item">
        <img :src="`${STORAGE_URL}/utils/codewars.webp`" alt="codewars" /> Codewars
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({ toggleShowMenu: Function })

const STORAGE_URL = import.meta.env.VITE_STORAGE_URL
</script>

<style lang="scss" scoped>
.menu-cont {
  display: flex;
  position: absolute;
  background: #202b4c;
  width: 333px;
  height: 510px;
  left: 60px;
  border-radius: 0 0 10px 10px;
  z-index: 2;
  .menu-head {
    width: 100%;
    height: 60px;
    background: #171f36;
    .rr-cont {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      width: 100%;
      height: 100%;
      .rr {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        color: white;
        background: rgba(23, 102, 150, 0.9);
        border-radius: 50px;
        font-weight: 600;
        margin: 0px 20px;
        font-size: 12px;
      }
      .name {
        color: white;
        font-weight: 600;
      }
    }
    .item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: white;
      width: 100%;
      height: 50px;
      margin-bottom: 4px;
      text-decoration: none;
      &:hover {
        background: #171f36;
        cursor: pointer;
      }
      img {
        width: 31px;
        height: 31px;
        margin: auto 23px;
        margin-bottom: auto;
      }
    }
    hr {
      margin: auto;
      width: 93%;
      border: 00.23px solid rgba(211, 211, 211, 0.5);
    }
  }
}
* {
  text-decoration: none;
}

@media screen and (max-width: 950px) {
  .menu-cont {
    left: 30px;
  }
}

@media screen and (max-width: 600px) {
  .menu-cont {
    display: flex;
    position: absolute;
    background: #202b4c;
    width: 253px;
    height: 510px;
    left: 20px;
  }
}
</style>
