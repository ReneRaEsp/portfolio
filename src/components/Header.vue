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
      <div class="menu-indicator" v-if="route?.fullPath === '/'">{{ $t('profile') }}</div>
      <div class="menu-indicator" v-else-if="route?.fullPath === '/resume'">{{ $t('resume') }}</div>
      <div class="menu-indicator" v-else-if="route?.fullPath === '/portfolio'">
        {{ $t('portfolio') }}
      </div>
      <div class="menu-indicator" v-else-if="route?.fullPath === '/contact'">
        {{ $t('contact') }}
      </div>
    </div>
    <div class="menu-toolbar-cont">
      <div @click="toggleShowLang" class="languages-cont">
        <p class="lang">{{ locale }}</p>
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
  <Languages v-if="showLanguages" @mouseleave="toggleShowLang" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Menu from './Menu.vue'
import Languages from './Languages.vue'

const route = useRoute()
const fechaHora = ref(new Date())
const showMenu = ref(false)
const showLanguages = ref(false)
const { locale } = useI18n()

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
const toggleShowLang = () =>
  showLanguages.value ? (showLanguages.value = false) : (showLanguages.value = true)
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-start;
  background: #011532;
  width: 95%;
  margin-right: auto;
  margin-left: auto;
  height: 50px;
  border-radius: 10px;
  .languages-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90px;
    height: 100%;
    cursor: pointer;

    .lang {
      color: rgba(250, 250, 250, 00.59);
      font-size: 18px;
      font-weight: 600;
      height: 17px;
    }
  }
  .menu-icon-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100%;
    background: rgba(20, 50, 90, 00.19);
    border-radius: 10px 0px 0px 10px;
    .menu-icon {
      width: 40px;
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
      width: 40px;
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
      cursor: default;

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

@media screen and (max-width: 600px) {
  .header {
    height: 50px;
    .menu-icon-cont {
      width: 15%;
      height: 100%;
      background: rgba(20, 50, 90, 00.19);
      border-radius: 10px 0px 0px 10px;
      padding: 7px;
      .menu-icon {
        width: 35px;
        cursor: pointer;
      }
    }
    .menu-indicator-cont {
      padding-left: 15px;
      width: 35%;
      .menu-icon {
        width: 30px;
      }
      .menu-indicator {
        color: white;
        font-size: 14px;
        font-weight: 600;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
    .menu-toolbar-cont {
      width: 50%;
      height: 100%;

      .languages-cont {
        width: 20%;
        height: 100%;

        .lang {
          font-size: 18px;
          height: 17px;
        }
      }

      .battery-cont {
        width: 30%;
        height: 100%;

        img {
          width: 23px;
        }
      }

      .date-cont {
        width: 30%;
        margin-right: 15px;

        p {
          font-size: 14px;
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .header {
    .menu-toolbar-cont {
      .date-cont {
        p {
          font-size: 12px;
        }
      }
    }
  }
}
@media screen and (max-width: 400px) {
  .header {
    .menu-toolbar-cont {
      .date-cont {
        p {
          font-size: 11px;
        }
      }
    }
  }
}
@media screen and (max-width: 330px) {
  .header {
    .menu-indicator-cont {
      padding-left: 7px;
      .menu-icon {
        width: 30px;
      }
      .menu-indicator {
        font-size: 12px;
        margin-left: 07px;
      }
    }
  }
}
</style>
