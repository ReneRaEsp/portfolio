<template>
  <div
    @mouseenter="onHover"
    @mouseleave="stopHover"
    draggable="false"
    class="card"
    v-if="!props.project.isDownloadable"
  >
    <div
      v-if="
        project?.description?.es?.length > 0 ||
        project?.description?.en?.length > 0 ||
        project?.description?.eo?.length > 0
      "
      class="btn-instructions"
      @click="displayDesc"
    >
      {{ $t('description-btn') }}
    </div>
    <div
      v-if="
        project?.instructions?.es?.length > 0 ||
        project?.instructions?.en?.length > 0 ||
        project?.instructions?.eo?.length > 0
      "
      class="btn-description"
      @click="displayInst"
    >
      {{ $t('instructions-btn') }}
    </div>
    <div class="img-cont">
      <v-img
        aspect-ratio="16/9"
        :height="240"
        contain
        draggable="false"
        :src="`${STORAGE_URL}${currentImage}`"
        :alt="`${props.project?.title?.es}`"
      ></v-img>
    </div>
    <div class="data-cont">
      <h2 v-if="locale === 'es'">{{ props.project?.title?.es }}</h2>
      <h2 v-else-if="locale === 'en'">{{ props.project?.title?.en }}</h2>
      <h2 v-else-if="locale === 'eo'">{{ props.project?.title?.eo }}</h2>
    </div>
    <div class="stack-cont">
      <div v-for="tech of props.project?.technologies" :key="tech.name" class="tech">
        <img :src="`${STORAGE_URL}${tech.img}`" :alt="tech.name" />
        <v-tooltip activator="parent" location="top"> {{ tech.name }} </v-tooltip>
      </div>
    </div>
    <div class="buttons-cont-solo">
      <a
        v-if="props.project?.isActive"
        class="btn"
        :href="props.project?.links?.view?.url"
        target="_blank"
        rel="noreferrer noopener"
        ><span v-if="$i18n.locale === 'en'">{{ props.project.links?.view?.text?.en }}</span
        ><span v-else-if="$i18n.locale === 'eo'">{{ props.project.links?.view?.text?.eo }}</span
        ><span v-else>{{ props.project.links?.view?.text?.es }}</span></a
      >
      <span v-else-if="!props.project?.isActive" class="btn maintaining"
        ><span> {{ $t('maintaining') }} </span></span
      >
    </div>
    <div
      v-if="isAnexDesc && locale === 'es'"
      class="card card-anex"
      :class="{
        closed: !isAnexDesc,
        opened: isAnexDesc,
      }"
    >
      {{ $t('description-btn') }}
      <br /><br />
      {{ project?.description?.es }}
    </div>
    <div
      v-else-if="isAnexDesc && locale === 'en'"
      class="card card-anex"
      :class="{
        closed: !isAnexDesc,
        opened: isAnexDesc,
      }"
    >
      {{ $t('description-btn') }}
      <br /><br />
      {{ project?.description?.en }}
    </div>
    <div
      v-else-if="isAnexDesc && locale === 'eo'"
      class="card card-anex"
      :class="{
        closed: !isAnexDesc,
        opened: isAnexDesc,
      }"
    >
      {{ $t('description-btn') }}
      <br /><br />
      {{ project?.description?.eo }}
    </div>
    <div v-if="isAnexInst && locale === 'es'" class="card card-anex">
      {{ $t('instructions-btn') }}
      <br /><br />
      {{ project?.instructions?.es }}
    </div>
    <div v-if="isAnexInst && locale === 'en'" class="card card-anex">
      {{ $t('instructions-btn') }}
      <br /><br />
      {{ project?.instructions?.en }}
    </div>
    <div v-if="isAnexInst && locale === 'eo'" class="card card-anex">
      {{ $t('instructions-btn') }}
      <br /><br />
      {{ project?.instructions?.eo }}
    </div>
    <div v-if="isAnexDesc || isAnexInst" @click="closeBoth" class="btn close-btn">
      {{ $t('close') }}
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
    <div
      v-if="
        project?.description?.es?.length > 0 ||
        project?.description?.en?.length > 0 ||
        project?.description?.eo?.length > 0
      "
      class="btn-instructions"
      @click="displayDesc"
    >
      {{ $t('description-btn') }}
    </div>
    <div
      v-if="
        project?.instructions?.es?.length > 0 ||
        project?.instructions?.en?.length > 0 ||
        project?.instructions?.eo?.length > 0
      "
      class="btn-description"
      @click="displayInst"
    >
      {{ $t('instructions-btn') }}
    </div>
    <div class="img-cont">
      <v-img
        aspect-ratio="16/9"
        :height="240"
        contain
        draggable="false"
        :src="`${STORAGE_URL}${currentImage}`"
        :alt="props?.project?.title?.es"
      ></v-img>
    </div>
    <div class="data-cont">
      <h2 v-if="locale === 'es'">{{ props?.project?.title?.es }}</h2>
      <h2 v-else-if="locale === 'en'">{{ props?.project?.title?.en }}</h2>
      <h2 v-else-if="locale === 'eo'">{{ props?.project?.title?.eo }}</h2>
    </div>
    <div class="stack-cont">
      <div v-for="tech of props.project?.technologies" :key="tech.name" class="tech">
        <img :src="`${STORAGE_URL}${tech.img}`" :alt="tech.name" />
        <v-tooltip activator="parent" location="top"> {{ tech.name }} </v-tooltip>
      </div>
    </div>
    <div class="buttons-cont">
      <a
        class="btn"
        :href="props.project?.links?.view?.url"
        target="_blank"
        rel="noreferrer noopener"
        ><span v-if="$i18n.locale === 'en'">{{ props.project.links?.view?.text?.en }}</span
        ><span v-else-if="$i18n.locale === 'eo'">{{ props.project.links?.view?.text?.eo }}</span
        ><span v-else>{{ props.project.links?.view?.text?.es }}</span></a
      >
      <a
        v-if="props.project?.isActive"
        class="btn"
        :href="props.project?.links?.download?.url"
        target="_blank"
        rel="noreferrer noopener"
        ><span v-if="$i18n.locale === 'en'">{{ props.project.links?.download?.text?.en }}</span
        ><span v-else-if="$i18n.locale === 'eo'">{{ props.project.links?.download?.text?.eo }}</span
        ><span v-else>{{ props.project.links?.download?.text?.es }}</span></a
      >
      <span v-else-if="!props.project?.isActive" class="btn maintaining"
        ><span> {{ $t('maintaining') }} </span></span
      >
    </div>
    <div
      v-if="isAnexDesc && locale === 'es'"
      class="card card-anex"
      :class="{
        closed: !isAnexDesc,
        opened: isAnexDesc,
      }"
    >
      {{ $t('description-btn') }}
      <br /><br />
      {{ project?.description?.es }}
    </div>
    <div
      v-else-if="isAnexDesc && locale === 'en'"
      class="card card-anex"
      :class="{
        closed: !isAnexDesc,
        opened: isAnexDesc,
      }"
    >
      {{ $t('description-btn') }}
      <br /><br />
      {{ project?.description?.en }}
    </div>
    <div
      v-else-if="isAnexDesc && locale === 'eo'"
      class="card card-anex"
      :class="{
        closed: !isAnexDesc,
        opened: isAnexDesc,
      }"
    >
      {{ $t('description-btn') }}
      <br /><br />
      {{ project?.description?.eo }}
    </div>
    <div v-if="isAnexInst && locale === 'es'" class="card card-anex">
      {{ $t('instructions-btn') }}
      <br /><br />
      {{ project?.instructions?.es }}
    </div>
    <div v-else-if="isAnexInst && locale === 'en'" class="card card-anex">
      {{ $t('instructions-btn') }}
      <br /><br />
      {{ project?.instructions?.en }}
    </div>
    <div v-else-if="isAnexInst && locale === 'eo'" class="card card-anex">
      {{ $t('instructions-btn') }}
      <br /><br />
      {{ project?.instructions?.eo }}
    </div>

    <div v-if="isAnexDesc || isAnexInst" @click="closeBoth" class="btn close-btn">
      {{ $t('close') }}
    </div>
  </div>
</template>

<script setup>
//NPM
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
//Data
const isAnexDesc = ref(false)
const isAnexInst = ref(false)

const STORAGE_URL = import.meta.env.VITE_STORAGE_URL
//Props
const props = defineProps({
  project: Object,
})

const { locale } = useI18n()

const imagesArr = ref(props.project.images)
const currentImage = ref(props.project.images[0])
const times = ref(0)

let intervalid = null
//Functions
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
const displayDesc = () => {
  isAnexDesc.value == true ? (isAnexDesc.value = false) : (isAnexDesc.value = true)
}
const displayInst = () => {
  isAnexInst.value == true ? (isAnexInst.value = false) : (isAnexInst.value = true)
}
const closeBoth = () => {
  isAnexDesc.value = false
  isAnexInst.value = false
}
</script>

<style scoped lang="scss">
.card {
  position: relative;
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
.card-anex {
  display: flex;
  padding: 30px;
}
.dislpay-anex {
  display: flex;
}
.closed {
  opacity: 0;
}
.opened {
  opacity: 1;
}

.btn {
  border: 1.5px solid rgb(54, 191, 164);
  padding: 10px;
  color: rgb(54, 191, 164);
  text-decoration: none;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    border: 1.5px solid rgba(54, 191, 164, 0);
    color: rgb(29, 42, 51);
    background-color: rgba(54, 191, 164, 1);
    border-radius: 7px;
  }
}

.maintaining {
  border: 1.5px solid #8d8940;
  color: #8d8940;
  &:hover {
    border: 1.5px solid transparent;
    color: #1c2932;
    background-color: rgba(140, 136, 63, 0.3);
    border-radius: 7px;
  }
}

.close-btn {
  display: flex;
  justify-content: center;
  justify-self: center;
  margin: 10px;
  width: 50%;
  padding: 4px;
  border: 1.5px solid #323e46;
  color: #323e46;
  &:hover {
    border: 1.5px solid rgba(54, 191, 164, 0);
    color: rgb(29, 42, 51);
    background-color: #b71c1c;
    border-radius: 7px;
  }
}

.btn-instructions,
.btn-description {
  position: absolute;
  display: flex;
  justify-content: center;
  right: 0;
  width: 25%;
  border: 1.5px solid rgb(54, 191, 164);
  background-color: rgba(54, 191, 164, 0.5);
  padding: 4px;
  color: rgb(54, 191, 164);
  text-decoration: none;
  transition: 0.4s;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;
  opacity: 0.4;
  &:hover {
    border: 1.5px solid rgba(54, 191, 164, 0);
    color: rgb(29, 42, 51);
    background-color: rgba(54, 191, 164, 1);
    border-radius: 7px;
    opacity: 1;
  }
}
.btn-description {
  left: 0;
}

@media screen and (max-width: 425px) {
  .btn-instructions,
  .btn-description {
    width: 45%;
  }
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
  .card-anex {
    width: 94%;
    display: flex;
    padding: 14px;
    font-size: 12px;
  }
}
</style>
