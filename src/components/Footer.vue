<template>
  <footer class="footer">
    <div class="items">
      <RouterLink to="/" class="item" draggable="false">
        <img class="icon" src="/img/icons/perfil.png" draggable="false" />
        <v-tooltip activator="parent" location="top"> {{ $t('profile') }} </v-tooltip>
      </RouterLink>
      <RouterLink to="/resume" class="item" draggable="false">
        <img class="icon" src="/img/icons/resume.png" draggable="false" />
        <v-tooltip activator="parent" location="top"> {{ $t('resume') }} </v-tooltip>
      </RouterLink>
      <RouterLink to="/portfolio" class="item" draggable="false">
        <img class="icon" src="/img/icons/portfolio.png" draggable="false" />
        <v-tooltip activator="parent" location="top"> {{ $t('portfolio') }} </v-tooltip>
      </RouterLink>
      <RouterLink to="/contact" class="item" draggable="false">
        <img class="icon" src="/img/icons/contact.png" draggable="false" />
        <v-tooltip activator="parent" location="top"> {{ $t('contact') }} </v-tooltip>
      </RouterLink>
      <div class="item">
        <img class="icon" src="/img/icons/gitlab.png" alt="" draggable="false" />
        <v-tooltip activator="parent" location="top"> Gitlab </v-tooltip>
      </div>
      <div class="item">
        <img class="icon" src="/img/icons/linkedin.png" alt="" draggable="false" />
        <v-tooltip activator="parent" location="top"> Linkedin </v-tooltip>
      </div>
      <div class="item">
        <img class="icon" src="/img/icons/efset.jpeg" alt="" draggable="false" />
        <v-tooltip activator="parent" location="top"> EF Set </v-tooltip>
      </div>
      <div class="item">
        <img class="icon codewars" src="/img/icons/codewars.png" alt="" draggable="false" />
        <v-tooltip activator="parent" location="top"> Codewars </v-tooltip>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.footer {
  width: auto;
  height: 50px;
  border: 1px solid rgba(244, 244, 244, 0.2);
  border-radius: 10px;
  background: #030a0f;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  .items {
    display: flex;
    justify-content: space-evenly;
    width: auto;
    height: 60px;
    transform: translateY(-30px);
    margin-left: 20px;
    margin-right: 20px;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 70px;
      background: transparent;
      transition: 00.8s;
      .icon {
        margin-left: 5px;
        margin-right: 5px;
        width: 56px;
        height: 56px;
        border-radius: 10px;
        transition: 00.4s;
      }

      &:hover {
        transform: translateY(-30px) scale(1.35);
        cursor: pointer;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .footer {
    height: 70px;
    .items {
      transform: translateY(-10px);
      margin-left: 10px;
      margin-right: 10px;

      .item {
        width: 76px;
        height: 76px;
        .icon {
          width: 55px;
          height: 55px;
        }
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .footer {
    height: 70px;
    .items {
      transform: translateY(-10px);
      margin-left: 10px;
      margin-right: 10px;

      .item {
        width: 47px;
        height: 47px;
        .icon {
          width: 45px;
          height: 45px;
        }
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .footer {
    height: 40px;
    .items {
      transform: translateY(-0px);
      margin-left: 10px;
      margin-right: 10px;
      height: 30px;
      .item {
        width: 42px;
        height: 39px;
        .icon {
          width: 33px;
          height: 33px;
        }
      }
    }
  }
}
@media screen and (max-width: 330px) {
  .footer {
    height: 40px;
    .items {
      transform: translateY(-0px);
      margin-left: 10px;
      margin-right: 10px;
      height: 30px;
      .item {
        width: 35px;
        height: 20px;
        .icon {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
}
</style>
