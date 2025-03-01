<template>
  <div class="card">
    <div class="title" :class="{ 'title-with-image': image, 'title-complete': !image }">
      <a class="link-title" :href="link" target="_blank"> {{ title }} </a>
    </div>
    <div class="text" :class="{ 'text-with-image': image, 'text-complete': !image }">
      <a class="link" :href="link" target="_blank"> {{ text }} </a>
    </div>
    <div v-if="image" class="img"><img :src="image" alt="" /></div>
    <Copy v-else-if="link" :textToCopy="text" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Copy from './../Copy.vue'

const props = defineProps({
  title: String,
  text: String,
  image: String,
  link: String,
})
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
    padding: 5px;
  }
  .img {
    width: 35%;
    img {
      width: 100%;
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
</style>
