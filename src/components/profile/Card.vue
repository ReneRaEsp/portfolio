<template>
  <div class="card">
    <div class="header">
      <div class="img-cont">
        <img draggable="false" :src="image" alt="" />
      </div>
      <div class="title-cont">
        {{ title }}
      </div>
    </div>
    <div class="body-card">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  text: String,
  image: String,
})
</script>

<style scoped lang="scss">
.card {
  box-sizing: border-box;
  display: flex;
  width: 440px;
  height: 90%;
  flex-direction: column;
  border-radius: 10px;
  flex-shrink: 0;
  margin: 10px;
  .header {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    width: 101%;
    min-height: 70px;
    font-weight: 600;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    margin: 0px;
    background: rgba(130, 170, 190, 0.12);
    border-radius: 15px 15px 0px 0px;
    .img-cont {
      display: flex;
      flex-direction: flex-start;
      width: auto;
      img {
        height: 55px;
      }
    }
    .title-cont {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 70%;
      padding-left: 35px;
      color: rgba(230, 230, 230, 0.75);
      font-size: 18px;
    }
  }
  .body-card {
    width: 100%;
    height: 100%;
    color: rgba(230, 230, 230, 0.75);
    padding: 20px 20px 20px 20px;
    background: rgba(130, 170, 190, 0.12);
    margin: 2px;
    border-radius: 0 0 15px 15px;
    font-size: 14px;
  }
}

@media screen and (max-width: 500px) {
  .card {
    width: 300px;
    height: 90%;
    margin: 0 10px;
    .header {
      min-height: 50px;
      padding: 7px 20px;
      margin: 0px;
      background: rgba(130, 170, 190, 0.12);
      border-radius: 15px 15px 0px 0px;
      .img-cont {
        display: flex;
        flex-direction: flex-start;
        align-items: center;
        width: auto;
        img {
          height: 30px;
        }
      }
      .title-cont {
        font-size: 11px;
      }
    }
  }
  .body-card {
    font-size: 9px !important;
    padding: 6px !important;
    text-align: justify;
  }
}
</style>
