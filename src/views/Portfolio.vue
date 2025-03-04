<template>
  <div class="portfolio">
    <Card
      :images="[
        '/img/projects/LaTaula.webp',
        '/img/projects/LaTaula2.webp',
        '/img/projects/LaTaula3.webp',
      ]"
      title="La Taula"
      link="https://lataula.info/"
    />
    <Card
      :images="[
        '/img/projects/Psicoleg.webp',
        '/img/projects/Psicoleg2.webp',
        '/img/projects/Psicoleg3.webp',
        '/img/projects/Psicoleg4.webp',
      ]"
      title="David Gonzalez Psicoleg"
      link="https://davidgonzalez-psicoleg.com/"
    />
    <Card
      :images="[
        '/img/projects/Aensa.webp',
        '/img/projects/Aensa2.webp',
        '/img/projects/Aensa3.webp',
      ]"
      title="Aensa"
      link="https://www.aensa.es/"
    />
    <Card
      :images="[
        '/img/projects/Atleticlleida.webp',
        '/img/projects/Atleticlleida2.webp',
        '/img/projects/Atleticlleida3.webp',
        '/img/projects/Atleticlleida4.webp',
      ]"
      title="Atleticlleida"
      link="https://atleticlleida.com/"
    />
    <Card
      :images="['/img/projects/Athletic5.webp', '/img/projects/Athletic6.webp']"
      title="Athletic Lleida"
      link="https://play.google.com/store/apps/details?id=com.bbf.applleida&hl=es"
    />
  </div>
</template>

<script setup>
import Card from './../components/portfolio/Card.vue'
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
  padding: 0px 60px 60px 70px;
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
</style>
