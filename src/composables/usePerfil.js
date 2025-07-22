import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const usePerfil = () => {
  const { t } = useI18n()
  const currentEmail = ref('rdejramirez@gmail.com')
  const currentPhone = ref('+51912569594')

  const cardsData = computed(() => [
    {
      title: `${t('card-1-title')}`,
      text: `${t('card-1-text')}`,
      image: '/img/web.webp',
      links: [
        `https://wa.me/${currentPhone.value}?text=Hola René, Me gustaría conocer más sobre tu servicio de diseño y desarrollo web`,
        `mailto:${currentEmail.value}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20diseño%20y%20desarrollo%20web%20`,
      ],
    },
    {
      title: `${t('card-2-title')}`,
      text: `${t('card-2-text')}`,
      image: '/img/app-development.webp',
      links: [
        `https://wa.me/${currentPhone.value}?text=Hola René, Me gustaría conocer más sobre tu servicio de desarrollo de aplicaciones web`,
        `mailto:${currentEmail.value}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20desarrollo%20de%20aplicaciones%20web%20`,
      ],
    },
    {
      title: `${t('card-3-title')}`,
      text: `${t('card-3-text')}`,
      image: '/img/seo.webp',
      links: [
        `https://wa.me/${currentPhone.value}?text=Hola René, Me gustaría conocer más sobre tu servicio de optimización SEO`,
        `mailto:${currentEmail.value}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20optimización%20SEO%20`,
      ],
    },
    {
      title: `${t('card-4-title')}`,
      text: `${t('card-4-text')}`,
      image: '/img/scraping.webp',
      links: [
        `https://wa.me/${currentPhone.value}?text=Hola René, Me gustaría conocer más sobre tu servicio de web scraping`,
        `mailto:${currentEmail.value}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20web%20scraping%20`,
      ],
    },
    {
      title: `${t('card-5-title')}`,
      text: `${t('card-5-text')}`,
      image: '/img/api.webp',
      links: [
        `https://wa.me/${currentPhone.value}?text=Hola René, Me gustaría conocer más sobre tu servicio de desarrollo de APIs`,
        `mailto:${currentEmail.value}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20desarrollo%20de%20APIs%20`,
      ],
    },
    {
      title: `${t('card-6-title')}`,
      text: `${t('card-6-text')}`,
      image: '/img/development.webp',
      links: [
        `https://wa.me/${currentPhone.value}?text=Hola René, Me gustaría conocer más sobre tu servicio de desarrollo de aplicaciones móviles`,
        `mailto:${currentEmail.value}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20desarrollo%20de%20aplicaciones%20móviles%20`,
      ],
    },
    {
      title: `${t('card-7-title')}`,
      text: `${t('card-7-text')}`,
      image: '/img/debugging.webp',
      links: [
        `https://wa.me/${currentPhone.value}?text=Hola René, Me gustaría conocer más sobre tu servicio de detección y solución de errores`,
        `mailto:${currentEmail.value}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20detección%20y%20solución%20de%20errores%20`,
      ],
    },
  ])

  const principalSkills = ref([
    { name: 'HTML', img: '/img/icons/tech/html.webp' },
    { name: 'CSS', img: '/img/icons/tech/css.webp' },
    { name: 'Javascript', img: '/img/icons/tech/javascript.webp' },
    { name: 'Typescript', img: '/img/icons/tech/typescript.webp' },
    { name: 'PHP', img: '/img/icons/tech/php.webp' },
    { name: 'Wordpress', img: '/img/icons/tech/wordpress.png' },
    { name: 'Elementor', img: '/img/icons/tech/elementor.webp' },
    { name: 'Woocommerce', img: '/img/icons/tech/woocommerce.webp' },
    { name: 'Node', img: '/img/icons/tech/node.webp' },
    { name: 'Express', img: '/img/icons/tech/express.webp' },
    { name: 'Laravel', img: '/img/icons/tech/laravel.webp' },
    { name: 'Vue', img: '/img/icons/tech/vue.webp' },
    { name: 'Nuxt', img: '/img/icons/tech/nuxt.webp' },
    { name: 'Symfony', img: '/img/icons/tech/symfony.webp' },
    { name: 'Linux', img: '/img/icons/tech/linux.webp' },
    { name: 'Bash', img: '/img/icons/tech/bash.webp' },
    { name: 'Cloud Computing', img: '/img/icons/tech/cloud.svg' },
    { name: 'PostgreSQL', img: '/img/icons/tech/postgresql.webp' },
    { name: 'MySQL', img: '/img/icons/tech/mysql.webp' },
    { name: 'MongoDB', img: '/img/icons/tech/mongo.webp' },
    { name: 'Docker', img: '/img/icons/tech/docker.webp' },
    { name: 'Ionic', img: '/img/icons/tech/ionic.webp' },
    { name: 'Capacitor', img: '/img/icons/tech/capacitor.webp' },
  ])

  const secondarySkills = ref([
    { name: 'Angular', img: '/img/icons/tech/angular.webp' },
    { name: 'JQuery', img: '/img/icons/tech/jquery.webp' },
    { name: 'React', img: '/img/icons/tech/react.webp' },
    { name: 'NextJS', img: '/img/icons/tech/next.webp' },
    { name: 'Python', img: '/img/icons/tech/python.webp' },
    { name: 'Golang', img: '/img/icons/tech/go.webp' },
  ])

  return {
    principalSkills,
    secondarySkills,
    cardsData,
  }
}

export default usePerfil
