import { ref } from 'vue'

const usePerfil = () => {
  const currentEmail = ref('rdejramirez@gmail.com')
  const currentPhone = ref('+51912569594')

  const cardsData = ref([
    {
      title: 'Diseño y Desarrollo de Sitios Web',
      text: 'Diseño y desarrollo sitios web modernos responsive y personalizados, adaptados a tus necesidades y objetivos. Me aseguro de que cada proyecto sea atractivo, funcional y optimizado para brindar una experiencia de usuario excepcional, logrando así un rendimiento eficiente y profesional.',
      image: '/img/web.webp',
      links: [
        `https://wa.me/${currentPhone}?text=Hola René, Me gustaría conocer más sobre tu servicio de diseño y desarrollo web`,
        `mailto:${currentEmail}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20diseño%20y%20desarrollo%20web%20`,
      ],
    },
    {
      title: 'Desarrollo de Aplicaciones Web',
      text: 'Creo aplicaciones web dinámicas y escalables, utilizando tecnologías de vanguardia para garantizar rapidez, seguridad y facilidad de uso. Cada aplicación está pensada para adaptarse a las necesidades específicas de tu negocio.',
      image: '/img/app-development.webp',
      links: [
        `https://wa.me/${currentPhone}?text=Hola René, Me gustaría conocer más sobre tu servicio de desarrollo de aplicaciones web`,
        `mailto:${currentEmail}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20desarrollo%20de%20aplicaciones%20web%20`,
      ],
    },
    {
      title: 'Optimización SEO',
      text: 'Mejoro de el posicionamiento de tu sitio web en los motores de búsqueda, aplicando estrategias SEO avanzadas. Desde la optimización de contenido hasta el aumento de la velocidad de carga y la estructura del sitio, te ayudo a atraer más visitantes y convertirlos en clientes potenciales.',
      image: '/img/seo.webp',
      links: [
        `https://wa.me/${currentPhone}?text=Hola René, Me gustaría conocer más sobre tu servicio de optimización SEO`,
        `mailto:${currentEmail}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20optimización%20SEO%20`,
      ],
    },
    {
      title: 'Web Scraping',
      text: 'Extraigo, analizo y estructuro datos valiosos de la web de manera eficiente y automatizada. Si necesitas obtener información clave para estudios de mercado, análisis de competencia o cualquier otro propósito, puedo desarrollar herramientas personalizadas para simplificar el proceso y brindarte datos precisos.',
      image: '/img/scraping.webp',
      links: [
        `https://wa.me/${currentPhone}?text=Hola René, Me gustaría conocer más sobre tu servicio de web scraping`,
        `mailto:${currentEmail}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20web%20scraping%20`,
      ],
    },
    {
      title: 'Desarrollo de Web API',
      text: 'Diseño y programo APIs seguras y eficientes que permiten la integración fluida entre diferentes plataformas y aplicaciones. Ya sea para conectar servicios, gestionar bases de datos o facilitar la comunicación entre sistemas, me aseguro de que la API sea escalable, segura y bien documentada.',
      image: '/img/api.webp',
      links: [
        `https://wa.me/${currentPhone}?text=Hola René, Me gustaría conocer más sobre tu servicio de desarrollo de APIs`,
        `mailto:${currentEmail}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20desarrollo%20de%20APIs%20`,
      ],
    },
    {
      title: 'Desarrollo de Aplicaciones Móviles',
      text: 'Desarrollo aplicaciones móviles innovadoras y personalizadas para iOS y Android, garantizando un diseño intuitivo, una navegación fluida y un rendimiento óptimo. Me enfoco en crear apps que brinden la mejor experiencia al usuario.',
      image: '/img/development.webp',
      links: [
        `https://wa.me/${currentPhone}?text=Hola René, Me gustaría conocer más sobre tu servicio de desarrollo de aplicaciones móviles`,
        `mailto:${currentEmail}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20desarrollo%20de%20aplicaciones%20móviles%20`,
      ],
    },
    {
      title: 'Detección y Solución de Errores',
      text: 'Analizo, identifico y soluciono errores en sitios web y aplicaciones para garantizar su correcto funcionamiento, me encargo de encontrar la causa raíz y aplicar las soluciones necesarias para que todo funcione.',
      image: '/img/debugging.webp',
      links: [
        `https://wa.me/${currentPhone}?text=Hola René, Me gustaría conocer más sobre tu servicio de detección y solución de errores`,
        `mailto:${currentEmail}?subject=Consulta%20desde%20portafolio%20web&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20detección%20y%20solución%20de%20errores%20`,
      ],
    },
  ])

  return {
    cardsData,
  }
}

export default usePerfil
