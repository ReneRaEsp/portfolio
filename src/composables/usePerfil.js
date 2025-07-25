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
      image: '/misc/web.webp',
      links: [
        `https://wa.me/${currentPhone.value}?text=Hola René, Me gustaría conocer más sobre tu servicio de diseño y desarrollo web`,
        `mailto:${currentEmail.value}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20diseño%20y%20desarrollo%20web%20`,
      ],
    },
    {
      title: `${t('card-2-title')}`,
      text: `${t('card-2-text')}`,
      image: '/misc/app-development.webp',
      links: [
        `https://wa.me/${currentPhone.value}?text=Hola René, Me gustaría conocer más sobre tu servicio de desarrollo de aplicaciones web`,
        `mailto:${currentEmail.value}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20desarrollo%20de%20aplicaciones%20web%20`,
      ],
    },
    {
      title: `${t('card-3-title')}`,
      text: `${t('card-3-text')}`,
      image: '/misc/seo.webp',
      links: [
        `https://wa.me/${currentPhone.value}?text=Hola René, Me gustaría conocer más sobre tu servicio de optimización SEO`,
        `mailto:${currentEmail.value}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20optimización%20SEO%20`,
      ],
    },
    {
      title: `${t('card-4-title')}`,
      text: `${t('card-4-text')}`,
      image: '/misc/scraping.webp',
      links: [
        `https://wa.me/${currentPhone.value}?text=Hola René, Me gustaría conocer más sobre tu servicio de web scraping`,
        `mailto:${currentEmail.value}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20web%20scraping%20`,
      ],
    },
    {
      title: `${t('card-5-title')}`,
      text: `${t('card-5-text')}`,
      image: '/misc/api.webp',
      links: [
        `https://wa.me/${currentPhone.value}?text=Hola René, Me gustaría conocer más sobre tu servicio de desarrollo de APIs`,
        `mailto:${currentEmail.value}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20desarrollo%20de%20APIs%20`,
      ],
    },
    {
      title: `${t('card-6-title')}`,
      text: `${t('card-6-text')}`,
      image: '/misc/development.webp',
      links: [
        `https://wa.me/${currentPhone.value}?text=Hola René, Me gustaría conocer más sobre tu servicio de desarrollo de aplicaciones móviles`,
        `mailto:${currentEmail.value}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20desarrollo%20de%20aplicaciones%20móviles%20`,
      ],
    },
    {
      title: `${t('card-7-title')}`,
      text: `${t('card-7-text')}`,
      image: '/misc/debugging.webp',
      links: [
        `https://wa.me/${currentPhone.value}?text=Hola René, Me gustaría conocer más sobre tu servicio de detección y solución de errores`,
        `mailto:${currentEmail.value}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20detección%20y%20solución%20de%20errores%20`,
      ],
    },
  ])

  const principalSkills = ref([
    { name: 'HTML', img: '/icons/html.webp' },
    { name: 'CSS', img: '/icons/css.webp' },
    { name: 'Javascript', img: '/icons/javascript.webp' },
    { name: 'Typescript', img: '/icons/typescript.webp' },
    { name: 'PHP', img: '/icons/php.webp' },
    { name: 'Wordpress', img: '/icons/wordpress.webp' },
    { name: 'Elementor', img: '/icons/elementor.webp' },
    { name: 'Woocommerce', img: '/icons/woocommerce.webp' },
    { name: 'Node', img: '/icons/node.webp' },
    { name: 'Express', img: '/icons/express.webp' },
    { name: 'Laravel', img: '/icons/laravel.webp' },
    { name: 'Vue', img: '/icons/vue.webp' },
    { name: 'Nuxt', img: '/icons/nuxt.webp' },
    { name: 'Symfony', img: '/icons/symfony.webp' },
    { name: 'Linux', img: '/icons/linux.webp' },
    { name: 'Bash', img: '/icons/bash.webp' },
    { name: 'Cloud Computing', img: '/icons/cloud.svg' },
    { name: 'PostgreSQL', img: '/icons/postgresql.webp' },
    { name: 'MySQL', img: '/icons/mysql.webp' },
    { name: 'MongoDB', img: '/icons/mongo.webp' },
    { name: 'Docker', img: '/icons/docker.webp' },
    { name: 'Ionic', img: '/icons/ionic.webp' },
    { name: 'Capacitor', img: '/icons/capacitor.webp' },
    { name: 'Android', img: '/icons/android.webp' },
    { name: 'Python', img: '/icons/python.webp' },
    { name: 'Fast Api', img: '/icons/fastapi.webp' },
  ])

  const secondarySkills = ref([
    { name: 'Golang', img: '/icons/go.webp' },
    { name: 'React', img: '/icons/react.webp' },
    { name: 'NextJS', img: '/icons/next.webp' },
    { name: 'Angular', img: '/icons/angular.webp' },
    { name: 'JQuery', img: '/icons/jquery.webp' },
  ])

  return {
    principalSkills,
    secondarySkills,
    cardsData,
  }
}

export default usePerfil
