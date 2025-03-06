<template>
  <div class="contact">
    <div class="contact-glass">
      <div class="header">{{ $t('aboutMe') }}</div>
      <div class="body">
        <div class="left">
          <div class="img-cont">
            <img draggable="false" src="/img/perfil2.webp" alt="" />
            <p class="mis-servicios">{{ $t('myServices') }}</p>
          </div>
          <div class="resumen-cont">
            <div class="text-cont">
              <p>
                {{ $t('description') }}
              </p>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="skills-cont">
            <div class="chip">
              <p>{{ $t('principalSkills') }}</p>
            </div>

            <div v-for="(skill, index) of principalSkills" :key="index" class="tech">
              <img draggable="false" :src="`${urlBase}${skill.img}`" :alt="skill.name" />
              <v-tooltip activator="parent" location="top"> {{ skill.name }} </v-tooltip>
            </div>
          </div>
          <div class="languages-cont">
            <div class="top">
              <div class="top-left">
                <div class="chip">
                  <p>{{ $t('languages') }}</p>
                </div>
                <a
                  draggable="false"
                  href="https://cert.efset.org/CgECYy"
                  target="_blank"
                  class="ver"
                >
                  {{ $t('view') }}
                  <img draggable="false" src="/img/icons/view.svg" alt="" />
                </a>
                <a
                  href="https://certificates-eu-west-1.efset.org/v2/certificates/CgECYy/pdf?locale=en"
                  target="_blank"
                  class="descargar"
                  draggable="false"
                >
                  {{ $t('download') }}
                  <img draggable="false" src="/img/icons/download.svg" alt="" />
                </a>
              </div>
              <div class="top-right">
                <p>
                  {{ $t('spanish') }} <br />
                  -&nbsp;{{ $t('native') }} <br />
                  {{ $t('english') }} <br />
                  -&nbsp;{{ $t('reading') }} <br />
                  -&nbsp;{{ $t('listening') }}<br />
                </p>
              </div>
            </div>
            <div class="bottom">
              <div class="chip">
                <p>{{ $t('secondarySkills') }}</p>
              </div>

              <div v-for="(skill, index) of secondarySkills" :key="index" class="tech">
                <img draggable="false" :src="`${urlBase}${skill.img}`" :alt="skill.name" />
                <v-tooltip activator="parent" location="top"> {{ skill.name }} </v-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <Card
          v-for="(card, index) of cardsData"
          :key="index"
          :title="card.title"
          :text="card.text"
          :image="card.image"
          :links="card.links"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from './../components/profile/Card.vue'

import usePerfil from './../composables/usePerfil.js'

const urlBase = ref(import.meta.env.BASE_URL)

const { principalSkills, secondarySkills, cardsData } = usePerfil()
</script>

<style lang="scss" scoped>
.chip {
  display: flex;
  width: 210px;
  height: 50px;
  max-width: auto;
  padding: 20px;
  p {
    display: flex;
    padding: 0px 10px;
    background: #37fb8b;
    border-radius: 5px;
    color: #363636;
    font-weight: 500;
    min-height: 25px;
  }
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
    width: 30px;
    transition: 0.8s;
    &:hover {
      transform: scale(2);
    }
  }
}
.contact {
  display: flex;
  align-items: flex-start;
  background: rgba(50, 210, 219, 0);
  width: 100%;
  height: 97%;
  .contact-glass {
    margin: auto;
    width: 90%;
    height: 97%;
    background: rgba(44, 48, 50, 0.51);
    border-radius: 42px;
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid rgba(222, 222, 222, 0.47);
    .header {
      color: rgba(202, 242, 262, 0.7);
      height: 7%;
      padding: 10px 30px;
      font-size: 20px;
      border: 1px solid rgba(222, 222, 222, 0.47);
      border-radius: 42px 42px 0 0;
    }
    .body {
      display: flex;
      width: 100%;
      height: 43%;
      .left {
        display: flex;
        width: 50%;
        height: 100%;
        border: 1px solid rgba(222, 222, 222, 0.47);
        .img-cont {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 30%;
          height: 100%;
          img {
            width: 70%;
            opacity: 0.7;
            border-radius: 10px;
          }
          p {
            text-align: center;
            width: 100%;
            background: rgba(40, 52, 62, 1);
            position: absolute;
            bottom: 0px;
            left: 0px;
            padding: 10px 20px;
            font-size: 20px;
            color: rgba(222, 222, 222, 0.7);
            border: 1px solid rgba(222, 222, 222, 0.7);
          }
        }
        .resumen-cont {
          width: 70%;
          height: 100%;
          p {
            padding: 50px;
            color: rgba(202, 242, 262, 0.7);
          }
        }
      }
      .right {
        display: flex;
        width: 50%;
        height: 100%;
        border: 1px solid rgba(222, 222, 222, 0.47);
        .skills-cont {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;
          width: 50%;
          height: 100%;
          padding-left: 20px;
          padding-top: 10px;
          border: 1px solid rgba(222, 222, 222, 0.7);
          &:hover {
            background: rgba(2, 60, 60, 0.12);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            box-shadow: 0 0 15px 0.25px rgba(255, 255, 255, 0.7);
          }
        }
        .languages-cont {
          display: flex;
          flex-wrap: wrap;
          width: 50%;
          height: 100%;

          .top {
            display: flex;
            width: 100%;
            height: 50%;
            border: 1px solid rgba(222, 222, 222, 0.7);
            &:hover {
              background: rgba(2, 60, 60, 0.12);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              box-shadow: 0 0 15px 0.25px rgba(255, 255, 255, 0.7);
            }
            .top-left {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              width: 35%;
              height: 100%;
              .ver {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                width: 100%;
                height: 54px;
                color: rgba(252, 252, 252, 0.73);
                font-size: 14px;
                padding: 15px;
              }
              .descargar {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 54px;
                color: rgba(252, 252, 252, 0.73);
                font-size: 14px;
                padding: 15px;
              }
              img {
                width: 30px;
                height: 30px;
              }
            }
            .top-right {
              display: flex;
              width: 65%;
              height: 100%;
              padding: 20px;
              p {
                color: rgba(252, 252, 252, 0.73);
                font-size: 15px;
              }
            }
          }
          .bottom {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-content: flex-start;
            align-items: flex-start;
            flex-wrap: wrap;
            width: 100%;
            height: 50%;
            border: 1px solid rgba(222, 222, 222, 0.7);
            padding: 0px 0px 0 15px;
            &:hover {
              background: rgba(2, 60, 60, 0.12);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              box-shadow: 0 0 15px 0.25px rgba(255, 255, 255, 0.7);
            }
          }
        }
      }
    }
    .footer {
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow-y: auto;
      width: 100%;
      height: 50%;
      border: 1px solid rgba(252, 252, 252, 0.73);
      border-radius: 0px 0px 40px 40px;
      &:hover {
        background: rgba(2, 60, 60, 0.12);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        box-shadow: 0 0 15px 0.25px rgba(255, 255, 255, 0.7);
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .contact {
    .contact-glass {
      .body {
        display: flex;
        flex-wrap: wrap;
        height: auto;
        .left {
          width: 100%;
          height: auto;
          min-height: 300px;
        }
        .right {
          width: 100%;
          height: 400px;
        }
      }
    }
  }
  .mis-servicios {
    display: none;
  }
}
@media screen and (max-width: 500px) {
  .chip {
    p {
      padding: 0px 7px;
      font-size: 14px;
    }
  }
  .tech {
    width: 40px;
    height: 70px;
    img {
      width: 30px;
    }
  }
  .contact {
    .contact-glass {
      .body {
        display: flex;
        flex-wrap: wrap;
        height: auto;
        .left {
          width: 100%;
          height: auto;
          min-height: 300px;
          .resumen-cont {
            .text-cont {
              p {
                padding: 10px;
              }
            }
          }
        }
        .right {
          width: 100%;
          height: auto;
          flex-wrap: wrap;

          .skills-cont {
            width: 100%;
            height: auto;
          }
          .languages-cont {
            width: 100%;
            height: auto;
          }
        }
      }
      .footer {
        padding-top: 0;
      }
    }
  }
  .mis-servicios {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  .contact {
    .contact-glass {
      .body {
        .left {
          display: flex;
          flex-wrap: wrap;
          padding: 0;
          height: auto;
          p {
            text-align: justify;
            font-size: 12px;
            padding: 0;
          }
          .img-cont {
            width: 100%;
            height: auto;
            padding-top: 10px;
            img {
              width: 60%;
              opacity: 0.7;
              border-radius: 10px;
            }
          }
          .resumen-cont {
            width: 100%;
            height: auto;
          }
        }
        .right {
          width: 100%;
          height: auto;
          flex-wrap: wrap;

          .skills-cont {
            width: 100%;
            height: auto;
          }
          .languages-cont {
            width: 100%;
            height: auto;
            .top {
              .top-right {
                padding: 30px;
                p {
                  font-size: 10px;
                }
              }
              .top-left {
                a {
                  font-size: 10px !important;
                }
              }
            }
          }
        }
      }
      .footer {
        padding-top: 0;
      }
    }
  }
  .mis-servicios {
    display: none;
  }
}
</style>
