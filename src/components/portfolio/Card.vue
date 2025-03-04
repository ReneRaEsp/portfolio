<template>
  <a
    @mouseenter="onHover"
    @mouseleave="stopHover"
    draggable="false"
    :href="link"
    target="_blank"
    class="card"
  >
    <div class="img-cont">
      <img draggable="false" :src="currentImage" alt="" />
    </div>
    <div class="data-cont">
      <h2>{{ title }}</h2>
    </div>
  </a>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  images: Array,
  title: String,
  link: String,
})

const imagesArr = ref(props.images)
const currentImage = ref(props.images[0])
const times = ref(0)
let intervalid = null

const onHover = () => {
  const changeImage = () => {
    if (times.value < imagesArr.value.length - 1) {
      times.value = times.value + 1
    } else {
      times.value = 0
    }
    currentImage.value = imagesArr.value[times.value]
  }
  changeImage()
  intervalid = setInterval(() => {
    changeImage()
  }, 2000)
}
const stopHover = () => {
  if (intervalid) {
    clearInterval(intervalid)
    intervalid = null
  }
}
</script>

<style scoped lang="scss">
.card {
  width: 440px;
  height: 340px;
  border: 0px solid blue;
  background: rgba(200, 200, 200, 0.13);
  margin: 30px;
  border-radius: 20px;
  text-decoration: none;
  .img-cont {
    img {
      width: 100%;
      border-radius: 20px 20px 0 0;
    }
  }
  .data-cont {
    padding: 20px;
    color: rgba(200, 200, 200, 0.93);
    h2 {
      font-size: 16px;
    }
  }
}
</style>
