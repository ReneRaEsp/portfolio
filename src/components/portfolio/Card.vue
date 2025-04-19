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
      <img draggable="false" :src="`${urlBase}${currentImage}`" alt="" />
    </div>
    <div class="data-cont">
      <h2>{{ title }}</h2>
    </div>
    <div class="stack-cont">
      <div v-for="tech of technologies" :key="tech.name" class="tech">
        <img :src="tech.img" alt="" />
        <v-tooltip activator="parent" location="top"> {{ tech.name }} </v-tooltip>
      </div>
    </div>
  </a>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const urlBase = ref(import.meta.env.BASE_URL)

const props = defineProps({
  images: Array,
  title: String,
  link: String,
  technologies: Array,
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
  min-height: 340px;
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

  .stack-cont {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    height: auto;
    padding: 0 20px;
    border-radius: 0 0 20px 20px;
    transition:
      background 0.4s,
      box-shadow 0.4s,
      backdrop-filter 0.4s;
    &:hover {
      background: rgba(200, 200, 200, 0.091);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 0 15px 0.25px rgba(255, 255, 255, 0.7);
    }
    .tech {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      width: 50px;
      height: 70px;
      cursor: pointer;
      img {
        width: 40px;
        transition: 0.8s;
        &:hover {
          transform: scale(2);
        }
      }
    }
  }
}

@media screen and (max-width: 425px) {
  .card {
    min-height: auto;
    padding-bottom: 5px;
    .data-cont {
      padding: 7px 17px;
    }
    .stack-cont {
      padding: 0px 15px;
      .tech {
        width: 35px;
        height: 40px;
        img {
          width: 25px;
        }
      }
    }
  }
}
</style>
