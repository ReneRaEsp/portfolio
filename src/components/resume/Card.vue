<template>
  <div class="card">
    <div class="title">
      <a class="link-title" :href="link" target="_blank"> {{ title }} </a>
      <div class="copy-cont">
        <Copy :textToCopy="text" />
      </div>
    </div>
    <div class="text">
      <a class="link" :href="link" target="_blank"> {{ text }} </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Copy from './../Copy.vue'

const props = defineProps({
  title: String,
  text: String,
  link: String,
})
</script>

<style scoped lang="scss">
.card {
  display: flex;
  width: 96%;
  height: auto;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 15px auto;
  border-radius: 10px;
  .title {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    color: #30a567;
    font-weight: 600;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    margin: 0px;
    background: rgba(30, 30, 30, 0.5);
    border-radius: 15px 15px 0px 0px;
  }
  .text {
    height: 100%;
    color: white;
    padding: 20px 20px 20px 60px;
    background: rgba(10, 10, 10, 0.4);
    margin: 2px;
    border-radius: 0 0 15px 15px;
    word-break: break-all;
  }
  .link {
    text-decoration: none;
    color: rgba(230, 230, 230, 0.8);
  }
  .link-title {
    text-decoration: none;
    color: #30a567;
  }
}

@media screen and (max-width: 500px) {
  .card {
    .copy-cont-mobile {
      display: flex;
    }
  }
}
</style>
