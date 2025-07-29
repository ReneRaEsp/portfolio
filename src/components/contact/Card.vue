<template>
  <div class="card">
    <div class="title" :class="{ 'title-with-image': image, 'title-complete': !image }">
      <a class="link-title" :href="link" target="_blank"> {{ title }} </a>
    </div>
    <div class="text" :class="{ 'text-with-image': image, 'text-complete': !image }">
      <a class="link" :href="link" target="_blank"> {{ text }} </a>
    </div>
    <div v-if="image" class="img"><img draggable="false" :src="image" alt="copy icon" /></div>
    <div v-else-if="link" class="copy-cont">
      <Copy :textToCopy="text" />
    </div>
    <div v-if="image" class="copy-cont-mobile">
      <Copy :textToCopy="text" />
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
const STORAGE_URL = import.meta.env.VITE_STORAGE_URL
const image = `${STORAGE_URL}/utils/copy.webp`
</script>

<style scoped lang="scss">
.card {
  display: flex;
  width: 96%;
  height: auto;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 20px 20px;
  margin: 15px auto;
  border-radius: 10px;
  background: rgba(10, 10, 10, 0.4);
  .title {
    height: 100%;
    color: #30a567;
    font-weight: 600;
  }
  .text {
    height: 100%;
    color: #71e8d2;
    padding: 5px 10px;
  }
  .img {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    img {
      width: 15px;
      height: 16px;
    }
  }
  .link {
    text-decoration: none;
    color: #71e8d2;
  }
  .link-title {
    text-decoration: none;
    color: #30a567;
  }
  .copy-cont {
    margin: auto;
    width: 10%;
  }
  .copy-cont-mobile {
    display: none;
  }
}

.title-complete {
  width: 20%;
}
.text-complete {
  width: 80%;
}

.title-with-image {
  width: 25%;
}
.text-with-image {
  width: 60%;
}

@media screen and (max-width: 500px) {
  .card {
    .title {
      width: 30%;
    }
    .text {
      display: flex;
      justify-content: flex-end;
      width: 60%;
      padding: 0px;
      font-size: 12.5px;
    }
    .img {
      display: none;
    }
    .copy-cont-mobile {
      display: flex;
    }
  }
}
</style>
