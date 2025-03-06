<template>
  <div class="card">
    <div class="title">
      <div :class="{ 'first-exp': isExp, 'first-edu': !isExp }">
        {{ title }}
      </div>
      <div class="place">
        {{ place }}
      </div>
      <div class="dates">
        {{ dates }}
      </div>
    </div>
    <div class="text">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  place: String,
  dates: String,
  text: String,
  isExp: Boolean,
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
    min-height: 40px;
    font-weight: 600;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    margin: 0px;
    background: rgba(30, 30, 30, 0.5);
    border-radius: 15px 15px 0px 0px;
    .first-exp {
      width: 60%;
      font-size: 14px;
      color: rgba(250, 250, 250, 0.65);
    }
    .first-edu {
      width: 60%;
      font-size: 14px;
      color: #30a567;
    }
    .place {
      width: 25%;
      font-size: 12px;
      color: #90ffd2;
    }
    .dates {
      width: 15%;
      font-size: 14px;
      color: #61a08b;
    }
  }
  .text {
    height: 100%;
    color: rgba(230, 230, 230, 0.75);
    padding: 35px 20px 35px 20px;
    background: rgba(10, 10, 10, 0.4);
    margin: 2px;
    border-radius: 0 0 15px 15px;
    word-break: break-all;
    font-size: 12px;
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
