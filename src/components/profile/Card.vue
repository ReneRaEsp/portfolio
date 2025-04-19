<template>
  <div class="card">
    <div class="header">
      <div class="img-cont">
        <img draggable="false" :src="`${urlBase}${image}`" alt="" />
      </div>
      <div class="title-cont">
        {{ title }}
      </div>
    </div>
    <div class="body-card">
      {{ text }}
    </div>
    <div class="footer-card">
      <div class="solicitar">
        <a :href="links[0]" class="whatsapp-btn"> {{ $t('requestService') }} </a>
      </div>
      <div class="links">
        <a draggable="false" :href="links[0]" class="whatsapp-btn">
          <img draggable="false" src="/img/icons/whatsapp.webp" alt="" />
        </a>
        <a draggable="false" :href="links[1]" class="email-btn">
          <img draggable="false" src="/img/icons/contact.webp" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
const urlBase = ref(import.meta.env.BASE_URL)

const props = defineProps({
  title: String,
  text: String,
  image: String,
  links: String,
})
</script>

<style scoped lang="scss">
.card {
  box-sizing: border-box;
  display: flex;
  width: 440px;
  height: 80%;
  flex-direction: column;
  border-radius: 10px;
  flex-shrink: 0;
  margin: 10px;
  .header {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    width: 100%;
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
    margin: 2px 0 0 0;
    border-radius: 0 0 0px 0px;
    font-size: 14px;
  }
  .footer-card {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    color: rgba(230, 230, 230, 0.75);
    padding: 0px 20px 10px 20px;
    background: rgba(130, 170, 190, 0.12);
    border-radius: 0 0 15px 15px;
    font-size: 14px;
    .btn {
      width: fit-content;
      padding: 6px 10px;
      border-radius: 4px;
      background: rgba(30, 120, 120, 0.75);
      color: rgba(230, 230, 230, 0.85);
      text-decoration: none;
      cursor: pointer;
    }
    img {
      width: 30px;
    }
    .links {
      display: flex;
      justify-content: space-evenly;
      width: 40%;
    }
    .solicitar {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 5px;
    }
  }
}
a {
  text-decoration: none;
  color: rgba(230, 230, 230, 0.85);
}

@media screen and (max-width: 500px) {
  .card {
    width: 250px;
    height: 100%;
    margin: 0 10px;
    background: rgba(0, 0, 255, 0);
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
    font-size: 11px !important;
    padding: 10px !important;
    text-align: justify;
  }
}
</style>
