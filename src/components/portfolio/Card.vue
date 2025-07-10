<template>
  <div
    @mouseenter="onHover"
    @mouseleave="stopHover"
    draggable="false"
    :href="props.project.links?.url"
    target="_blank"
    class="card"
    v-if="!props.project.isDownloadable"
  >
    <div class="img-cont">
      <v-img
        aspect-ratio="16/9"
        :height="240"
        cover
        draggable="false"
        :src="`${urlBase}${currentImage}`"
        alt=""
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-img>
    </div>
    <div class="data-cont">
      <h2>{{ props.project?.title }}</h2>
    </div>
    <div class="stack-cont">
      <div v-for="tech of props.project?.technologies" :key="tech.name" class="tech">
        <img :src="tech.img" alt="" />
        <v-tooltip activator="parent" location="top"> {{ tech.name }} </v-tooltip>
      </div>
    </div>
    <div class="buttons-cont-solo">
      <a class="btn" :href="props.project?.links?.view?.url" target="_blank"
        ><span v-if="$i18n.locale === 'en'">{{ props.project.links?.view?.text?.en }}</span
        ><span v-else-if="$i18n.locale === 'eo'">{{ props.project.links?.view?.text?.eo }}</span
        ><span v-else>{{ props.project.links?.view?.text?.es }}</span></a
      >
    </div>
  </div>
  <div
    @mouseenter="onHover"
    @mouseleave="stopHover"
    draggable="false"
    :href="props.project?.links?.url"
    target="_blank"
    class="card"
    v-else-if="props.project?.isDownloadable"
  >
    <div class="img-cont">
      <v-img
        aspect-ratio="16/9"
        :height="240"
        cover
        draggable="false"
        :src="`${urlBase}${currentImage}`"
        alt=""
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-img>
    </div>
    <div class="data-cont">
      <h2>{{ props?.project?.title }}</h2>
    </div>
    <div class="stack-cont">
      <div v-for="tech of props.project?.technologies" :key="tech.name" class="tech">
        <img :src="tech.img" alt="" />
        <v-tooltip activator="parent" location="top"> {{ tech.name }} </v-tooltip>
      </div>
    </div>
    <div class="buttons-cont">
      <a class="btn" :href="props.project?.links?.view?.url" target="_blank"
        ><span v-if="$i18n.locale === 'en'">{{ props.project.links?.view?.text?.en }}</span
        ><span v-else-if="$i18n.locale === 'eo'">{{ props.project.links?.view?.text?.eo }}</span
        ><span v-else>{{ props.project.links?.view?.text?.es }}</span></a
      >
      <a class="btn" :href="props.project?.links?.download?.url" target="_blank"
        ><span v-if="$i18n.locale === 'en'">{{ props.project.links?.download?.text?.en }}</span
        ><span v-else-if="$i18n.locale === 'eo'">{{ props.project.links?.download?.text?.eo }}</span
        ><span v-else>{{ props.project.links?.download?.text?.es }}</span></a
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const urlBase = import.meta.env.BASE_URL

const props = defineProps({
  project: Object,
})

const imagesArr = ref(props.project.images)
const currentImage = ref(props.project.images[0])
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
  border-radius: 10px;
  text-decoration: none;
  .img-cont {
    img {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
  }
  .data-cont {
    padding: 5px 20px;
    color: rgba(200, 200, 200, 0.93);
    h2 {
      font-size: 16px;
    }
  }
  .stack-cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    height: auto;
    padding: 2px 20px;
    border-radius: 0 0 0px 0px;
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
      width: 43px;
      height: 55px;
      cursor: pointer;
      img {
        width: 40px;
        transition: 1s;
        &:hover {
          transform: scale(1.5);
        }
      }
    }
  }
  .buttons-cont {
    display: flex;
    justify-content: space-around;
    border-radius: 0 0 0px 0px;
    padding: 10px 10px;
    &:hover {
      background: rgba(200, 200, 200, 0.091);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 0 15px 0.25px rgba(255, 255, 255, 0.7);
      border-radius: 0px 0 10px 10px;
    }
  }
  .buttons-cont-solo {
    display: flex;
    justify-content: flex-end;
    border-radius: 0 0 0px 0px;
    padding: 10px 20px;
    &:hover {
      background: rgba(200, 200, 200, 0.091);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 0 15px 0.25px rgba(255, 255, 255, 0.7);
      border-radius: 0px 0 10px 10px;
    }
  }
}

.btn {
  border: 1.5px solid rgb(54, 191, 164);
  padding: 10px;
  color: rgb(54, 191, 164);
  text-decoration: none;
  transition: 0.4s;
  &:hover {
    border: 1.5px solid rgba(54, 191, 164, 0);
    color: rgb(29, 42, 51);
    background-color: rgba(54, 191, 164, 1);
    border-radius: 7px;
  }
}

@media screen and (max-width: 425px) {
  .card {
    min-height: auto;
    padding-bottom: 5px;
    .data-cont {
      padding: 7px 17px;
      h2 {
        font-size: 14px;
      }
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
    .buttons-cont,
    .buttons-cont-solo {
      .btn {
        padding-top: 03px;
        padding-bottom: 03px;
        padding-left: 07px;
        padding-right: 07px;
        margin-top: 0px;
        margin-bottom: 0px;
      }
    }
  }
}
</style>
