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
      :technologies="[
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'PHP', img: 'img/icons/tech/php.webp' },
        { name: 'Wordpress', img: 'img/icons/tech/wordpress.png' },
        { name: 'Elementor', img: 'img/icons/tech/elementor.webp' },
      ]"
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
      :technologies="[
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'PHP', img: 'img/icons/tech/php.webp' },
        { name: 'Wordpress', img: 'img/icons/tech/wordpress.png' },
        { name: 'Elementor', img: 'img/icons/tech/elementor.webp' },
      ]"
    />
    <Card
      :images="[
        '/img/projects/Aensa.webp',
        '/img/projects/Aensa2.webp',
        '/img/projects/Aensa3.webp',
      ]"
      title="Aensa"
      link="https://www.aensa.es/"
      :technologies="[
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'PHP', img: 'img/icons/tech/php.webp' },
        { name: 'Wordpress', img: 'img/icons/tech/wordpress.png' },
        { name: 'Elementor', img: 'img/icons/tech/elementor.webp' },
      ]"
    />
    <Card
      :images="[
        '/img/projects/Atleticlleida.webp',
        '/img/projects/Atleticlleida2.webp',
        '/img/projects/Atleticlleida3.webp',
        '/img/projects/Atleticlleida4.webp',
      ]"
      title="Atletic Lleida Web"
      link="https://atleticlleida.com/"
      :technologies="[
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'PHP', img: 'img/icons/tech/php.webp' },
        { name: 'Laravel', img: 'img/icons/tech/laravel.webp' },
        { name: 'JQuery', img: 'img/icons/tech/jquery.webp' },
      ]"
    />
    <Card
      :images="['/img/projects/Athletic5.webp', '/img/projects/Athletic6.webp']"
      title="Athletic Lleida App"
      link="https://play.google.com/store/apps/details?id=com.bbf.applleida&hl=es"
      :technologies="[
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Typescript', img: 'img/icons/tech/typescript.webp' },
        { name: 'Angular', img: 'img/icons/tech/angular.webp' },
        { name: 'Node', img: 'img/icons/tech/node.webp' },
        { name: 'Express', img: 'img/icons/tech/express.webp' },
        { name: 'PostgreSQL', img: 'img/icons/tech/postgresql.webp' },
        { name: 'Ionic', img: 'img/icons/tech/ionic.webp' },
        { name: 'Capacitor', img: 'img/icons/tech/capacitor.webp' },
        { name: 'iOS', img: 'img/icons/tech/ios.webp' },
        { name: 'Android', img: 'img/icons/tech/android.webp' },
      ]"
    />
    <Card
      :images="[
        '/img/projects/Hosteleria.webp',
        '/img/projects/Hosteleria2.webp',
        '/img/projects/Hosteleria3.webp',
      ]"
      title="Web App Hosteleria"
      link="#"
      :technologies="[
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'VueJS', img: 'img/icons/tech/vue.webp' },
        { name: 'PHP', img: 'img/icons/tech/php.webp' },
        { name: 'Symfony', img: 'img/icons/tech/symfony.webp' },
        { name: 'MySQL', img: 'img/icons/tech/mysql.webp' },
      ]"
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

@media screen and (max-width: 400px) {
  .portfolio {
    width: 100%;
    padding: 0px;
  }
}
</style>
