<template>
  <header class="header">
    <div class="menu-icon-cont">
      <img
        @click="toggleShowMenu"
        class="menu-icon"
        src="/img/icons/logo.svg"
        draggable="false"
        alt=""
      />
    </div>
    <div class="menu-indicator-cont">
      <img
        class="menu-icon"
        draggable="false"
        :src="route.fullPath === '/' ? '/img/icons/perfil.png' : `/img/icons${route.fullPath}.png`"
        alt=""
      />
      <p class="menu-indicator">
        {{
          route.fullPath === '/'
            ? 'Perfil'
            : route.fullPath.split('/')[1][0].toUpperCase() + route.fullPath.slice(2)
        }}
      </p>
    </div>
    <div class="menu-toolbar-cont">
      <div class="languages-cont">
        <p class="lang">Es_ve</p>
      </div>
      <div class="battery-cont">
        <img src="/img/icons/battery.png" draggable="false" />
      </div>
      <div class="date-cont">
        <p>{{ formatearHora(fechaHora) }}</p>
        <p>{{ formatearFecha(fechaHora) }}</p>
      </div>
    </div>
  </header>
  <Menu :toggleShowMenu="toggleShowMenu" v-if="showMenu" @mouseleave="toggleShowMenu" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Menu from './Menu.vue'

const route = useRoute()
const fechaHora = ref(new Date())
const showMenu = ref(false)

const actualizarHora = () => {
  fechaHora.value = new Date()
}

let intervalo

onMounted(() => {
  actualizarHora()
  intervalo = setInterval(actualizarHora, 60000)
})

onUnmounted(() => {
  clearInterval(intervalo)
})

const formatearFecha = (fecha) => {
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  }).format(fecha)
}

const formatearHora = (fecha) => {
  let horas = fecha.getHours()
  let minutos = fecha.getMinutes().toString().padStart(2, '0')
  let periodo = horas >= 12 ? 'PM' : 'AM'
  horas = horas % 12 || 12
  return `${horas}:${minutos} ${periodo}`
}

const toggleShowMenu = () => (showMenu.value ? (showMenu.value = false) : (showMenu.value = true))
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-start;
  background: #011532;
  width: 95%;
  margin-right: auto;
  margin-left: auto;
  height: 70px;
  border-radius: 10px;
  .menu-icon-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100%;
    background: rgba(20, 50, 90, 00.19);
    border-radius: 10px 0px 0px 10px;
    .menu-icon {
      width: 50px;
      cursor: pointer;
    }
  }
  .menu-indicator-cont {
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    align-items: center;
    width: 300px;
    height: 100%;
    background: #1c293c;
    .menu-icon {
      width: 50px;
    }
    .menu-indicator {
      color: white;
      font-size: 20px;
      font-weight: 500;
      margin-left: 20px;
    }
  }
  .menu-toolbar-cont {
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    height: 100%;
    width: 560px;
    justify-self: end;
    .languages-cont {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 90px;
      height: 100%;

      .lang {
        color: rgba(250, 250, 250, 00.59);
        font-size: 18px;
        font-weight: 600;
        height: 17px;
      }
    }

    .battery-cont {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50px;
      height: 100%;

      img {
        width: 27px;
      }
    }

    .date-cont {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 120px;
      height: 100%;
      margin-right: 40px;

      p {
        text-align: center;
        width: 100%;
        height: 17px;
        font-weight: 600;
        color: rgba(250, 250, 250, 00.59);
        font-family: 'Source Sans Pro';
      }
    }
  }
}
</style>
