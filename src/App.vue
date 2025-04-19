<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app-cont">
    <Header />
    <div class="dinamic-secction">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.app-cont {
  background: #02111b;
  width: 100vw;
  height: 100vh;
  padding-top: 30px;

  .dinamic-secction {
    width: 100%;
    height: 85vh;
  }
}
</style>
