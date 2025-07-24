<template>
  <div class="portfolio">
    <!--<Card
      :images="[
        '/img/projects/LaTaula.webp',
        '/img/projects/LaTaula2.webp',
        '/img/projects/LaTaula3.webp',
      ]"
      title="La Taula"
      link="https://lataula.info/"
      :technologies="[
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'PHP', img: 'img/icons/tech/php.webp' },
        { name: 'Wordpress', img: 'img/icons/tech/wordpress.png' },
        { name: 'Elementor', img: 'img/icons/tech/elementor.webp' },
      ]"
    />-->
    <Card
      v-for="(project, index) in projects"
      :key="index"
      :images="project.images"
      :title="project.title"
      :link="project.links"
      :isDowladable="project.isDownloadable"
      :technologies="project.technologies"
      :project="project"
    />
  </div>
</template>

<script setup>
import Card from './../components/portfolio/Card.vue'

import usePortfolio from '@/composables/usePortfolio'
import usePreload from '@/composables/usePreload'

const { projects } = usePortfolio()
const { preloadSleep } = usePreload()
preloadSleep()
</script>

<style lang="scss" scope>
.portfolio {
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 90%;
  height: 100%;
  overflow-y: auto;
  padding: 0px 7px 7px 7px;
}

.portfolio::-webkit-scrollbar-track {
  background: rgba(200, 200, 200, 00.35) !important;
}

.portfolio::-webkit-scrollbar-thumb {
  background: rgba(53, 191, 165, 00.4) !important;
}

.portfolio::-webkit-scrollbar-thumb:hover {
  background: rgba(53, 191, 165, 00.9) !important;
}

@media screen and (max-width: 400px) {
  .portfolio {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 70px;
  }
}
</style>
