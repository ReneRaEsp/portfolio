<template>
  <footer class="footer">
    <div class="items">
      <RouterLink to="/" class="item" draggable="false">
        <img class="icon" src="/img/icons/perfil.png" draggable="false" />
        <v-tooltip activator="parent" location="top"> Perfil </v-tooltip>
      </RouterLink>
      <RouterLink to="/resume" class="item" draggable="false">
        <img class="icon" src="/img/icons/resume.png" draggable="false" />
        <v-tooltip activator="parent" location="top"> Resumen </v-tooltip>
      </RouterLink>
      <RouterLink to="/portfolio" class="item" draggable="false">
        <img class="icon" src="/img/icons/portfolio.png" draggable="false" />
        <v-tooltip activator="parent" location="top"> Portafolio </v-tooltip>
      </RouterLink>
      <RouterLink to="/contact" class="item" draggable="false">
        <img class="icon" src="/img/icons/contact.png" draggable="false" />
        <v-tooltip activator="parent" location="top"> Contacto </v-tooltip>
      </RouterLink>
      <div class="item">
        <img class="icon" src="/img/icons/gitlab.png" alt="" draggable="false" />
        <v-tooltip activator="parent" location="top"> Gitlab </v-tooltip>
      </div>
      <div class="item">
        <img class="icon" src="/img/icons/linkedin.png" alt="" draggable="false" />
        <v-tooltip activator="parent" location="top"> Linkedin </v-tooltip>
      </div>
      <div class="item">
        <img class="icon" src="/img/icons/efset.jpeg" alt="" draggable="false" />
        <v-tooltip activator="parent" location="top"> EF Set </v-tooltip>
      </div>
      <div class="item">
        <img class="icon codewars" src="/img/icons/codewars.png" alt="" draggable="false" />
        <v-tooltip activator="parent" location="top"> Codewars </v-tooltip>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.footer {
  width: auto;
  height: 70px;
  border: 1px solid rgba(244, 244, 244, 0.2);
  border-radius: 10px;
  background: #030a0f;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  .items {
    display: flex;
    justify-content: space-evenly;
    width: auto;
    height: 70px;
    transform: translateY(-70px);
    margin-left: 20px;
    margin-right: 20px;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 130px;
      background: transparent;
      transition: 00.8s;
      .icon {
        margin-left: 5px;
        margin-right: 5px;
        width: 70px;
        height: 70px;
        border-radius: 10px;
        transition: 00.4s;
      }

      &:hover {
        transform: translateY(-30px) scale(1.35);
        cursor: pointer;
      }
    }
  }
}
</style>
