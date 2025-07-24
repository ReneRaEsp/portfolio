const usePortfolio = () => {
  const projects = [
    {
      title: {
        es: 'App de gestion de citas',
        en: 'Appointment management app',
        eo: 'Rendervua administrado-app',
      },
      links: {
        view: {
          text: {
            es: 'Ver en linea',
            en: 'View online',
            eo: '',
          },
          url: 'https://jitime-api.onrender.com',
        },
        repo: '',
        video: { es: '', en: '', eo: '' },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: [
        '/img/projects/jitime1.webp',
        '/img/projects/jitime2.webp',
        '/img/projects/jitime3.webp',
      ],
      technologies: [
        { name: 'Vue', img: 'img/icons/tech/vue.webp' },
        { name: 'Ionic', img: 'img/icons/tech/ionic.webp' },
        { name: 'Capacitor', img: 'img/icons/tech/capacitor.webp' },
        { name: 'Android', img: 'img/icons/tech/android.webp' },
        { name: 'Node', img: 'img/icons/tech/node.webp' },
        { name: 'Typescript', img: 'img/icons/tech/typescript.webp' },
        { name: 'Express', img: 'img/icons/tech/express.webp' },
        { name: 'MongoDB', img: 'img/icons/tech/mongo.webp' },
      ],
      description: {
        es: 'Prototipo de aplicación en la cual un proveedor de un servicio o más puede crear servicios profecionales, seleccionar rangos horarios y semanales disponibles y sus clientes pueden agendar citas a traves de la Aplicación web oficial.',
        en: 'Prototype of an application where one or more service providers can create professional services, select available hourly and weekly time slots, and their clients can schedule appointments through the official web application.',
        eo: 'Prototipo de aplikaĵo, en kiu unu aŭ pliaj servoprestantoj povas krei profesionalajn servojn, elekti disponeblajn horajn kaj semajnajn tempintervalojn, kaj iliaj klientoj povas rezervi rendevuojn tra la oficiala reta aplikaĵo.',
      },
      instructions: {
        es: '',
        en: '',
        eo: '',
      },
      instructionsPage: {
        es: '',
        en: '',
        eo: '',
      },
    },
    {
      title: {
        es: 'Backoffice para gestionar mis proyectos',
        en: 'Backoffice to manage my projects',
        eo: 'Backoffice por administri miajn projektojn',
      },
      links: {
        view: {
          text: {
            es: 'Ver en linea',
            en: 'View online',
            eo: '',
          },
          url: 'https://portfoliobackoffice.netlify.app/',
        },
        repo: '',
        video: { es: '', en: '', eo: '' },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: [
        '/img/projects/Portfolio1.webp',
        '/img/projects/Portfolio2.webp',
        '/img/projects/Portfolio3.webp',
      ],
      technologies: [
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'Vue', img: 'img/icons/tech/vue.webp' },
        { name: 'Veutify', img: 'img/icons/tech/veutify.webp' },
        { name: 'Vite', img: 'img/icons/tech/vite.webp' },
        { name: 'PHP', img: 'img/icons/tech/php.webp' },
        { name: 'Laravel', img: 'img/icons/tech/laravel.webp' },
        { name: 'PostgreSQL', img: 'img/icons/tech/postgresql.webp' },
      ],
      description: {
        es: '',
        en: '',
        eo: '',
      },
      instructions: {
        es: '',
        en: '',
        eo: '',
      },
      instructionsPage: {
        es: '',
        en: '',
        eo: '',
      },
    },
    {
      title: {
        es: 'Carwash fidelización web app consulta',
        en: 'Loyalty program web app for car washes',
        eo: 'Konsulto pri aŭtolaveja fideleca retaplikaĵo',
      },
      links: {
        view: {
          text: {
            es: 'Ver en linea',
            en: 'View online',
            eo: '',
          },
          url: 'https://carwash-fidelidad-back.onrender.com/',
        },
        repo: '',
        video: { es: '', en: '', eo: '' },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: ['/img/projects/carwash-consulta.webp'],
      technologies: [
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'Vue', img: 'img/icons/tech/vue.webp' },
        { name: 'Node', img: 'img/icons/tech/node.webp' },
        { name: 'Express', img: 'img/icons/tech/express.webp' },
        { name: 'MongoDB', img: 'img/icons/tech/mongo.webp' },
      ],
      description: {
        es: '',
        en: '',
        eo: '',
      },
      instructions: {
        es: '',
        en: '',
        eo: '',
      },
      instructionsPage: {
        es: '',
        en: '',
        eo: '',
      },
    },
    {
      title: {
        es: 'Carwash fidelización web app',
        en: 'Loyalty program web app for car washes',
        eo: 'Aŭtolaveja fideleca retaplikaĵo',
      },
      links: {
        view: {
          text: {
            es: 'Ver en linea',
            en: 'View online',
            eo: '',
          },
          url: 'https://carwash-fidelidad-back.onrender.com/carwash',
        },
        download: {
          text: {
            es: 'Descargar',
            en: 'Download',
            eo: '',
          },
          url: 'https://www.dropbox.com/scl/fi/7tm76t6lsvj1n429hme99/carwash-demo.apk?rlkey=b6slb0qbicjpbxk9eir98g3gj&st=x5o488lq&dl=0',
        },
      },
      isDownloadable: true,
      isActive: true,
      isLive: true,
      images: ['/img/projects/carwash-app.webp', '/img/projects/carwash-app2.webp'],
      technologies: [
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'Vue', img: 'img/icons/tech/vue.webp' },
        { name: 'Node', img: 'img/icons/tech/node.webp' },
        { name: 'Express', img: 'img/icons/tech/express.webp' },
        { name: 'MongoDB', img: 'img/icons/tech/mongo.webp' },
        { name: 'Ionic', img: 'img/icons/tech/ionic.webp' },
        { name: 'Android', img: 'img/icons/tech/android.webp' },
        { name: 'Ios', img: 'img/icons/tech/ios.webp' },
      ],
      description: {
        es: '',
        en: '',
        eo: '',
      },
      instructions: {
        es: '',
        en: '',
        eo: '',
      },
      instructionsPage: {
        es: '',
        en: '',
        eo: '',
      },
    },
    {
      title: {
        es: 'E-commerce - Bombas de agua, aceite y gasolina',
        en: 'E-commerce – Water, Oil, and Fuel Pumps',
        eo: 'Retbutiko – Akvopumpiloj, Oleopumpiloj kaj Benzinpumpiloj',
      },
      links: {
        view: {
          text: {
            es: 'Ver en linea',
            en: 'View online',
            eo: '',
          },
          url: 'https://matbombas.es',
        },
        repo: '',
        video: { es: '', en: '', eo: '' },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: [
        '/img/projects/MatBombas1.webp',
        '/img/projects/MatBombas.webp',
        '/img/projects/MatBombas2.webp',
      ],
      technologies: [
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'PHP', img: 'img/icons/tech/php.webp' },
        { name: 'Wordpress', img: 'img/icons/tech/wordpress.webp' },
        { name: 'Woocommerce', img: 'img/icons/tech/woocommerce.webp' },
        { name: 'Elementor', img: 'img/icons/tech/elementor.webp' },
      ],
      description: {
        es: '',
        en: '',
        eo: '',
      },
      instructions: {
        es: '',
        en: '',
        eo: '',
      },
      instructionsPage: {
        es: '',
        en: '',
        eo: '',
      },
    },
    {
      title: {
        es: 'Atletic Lleida Web',
        en: 'Atletic Lleida Web',
        eo: 'Atletic Lleida Web',
      },
      links: {
        view: {
          text: {
            es: 'Ver en linea',
            en: 'View online',
            eo: '',
          },
          url: 'https://atleticlleida.com/',
        },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: [
        '/img/projects/Atleticlleida.webp',
        '/img/projects/Atleticlleida2.webp',
        '/img/projects/Atleticlleida3.webp',
        '/img/projects/Atleticlleida4.webp',
      ],
      technologies: [
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'PHP', img: 'img/icons/tech/php.webp' },
        { name: 'Laravel', img: 'img/icons/tech/laravel.webp' },
        { name: 'Wordpress', img: 'img/icons/tech/wordpress.png' },
        { name: 'JQuery', img: 'img/icons/tech/jquery.webp' },
      ],
    },
    {
      title: {
        es: 'Atletic Lleida App',
        en: 'Atletic Lleida App',
        eo: 'Atletic Lleida App',
      },
      links: {
        view: {
          text: {
            es: 'Ver en la Play Store',
            en: 'View online',
            eo: '',
          },
          url: 'https://play.google.com/store/apps/details?id=com.bbf.applleida&hl=es',
        },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: ['/img/projects/Athletic5.webp', '/img/projects/Athletic6.webp'],
      technologies: [
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
      ],
      description: {
        es: '',
        en: '',
        eo: '',
      },
      instructions: {
        es: '',
        en: '',
        eo: '',
      },
      instructionsPage: {
        es: '',
        en: '',
        eo: '',
      },
    },
    {
      title: {
        es: 'Cocina Sinfonia (Web App Hosteleria)',
        en: '"Symphony Kitchen" (keeps the musical metaphor)',
        eo: '"Sinfonia Kuirmanaĝilo" – Reta Aplikaĵo por Gastigado',
      },
      links: {
        view: {
          text: {
            es: 'Ver en linea',
            en: 'View online',
            eo: '',
          },
          url: 'https://renegade.alwaysdata.net',
        },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: [
        '/img/projects/Simoft.webp',
        //'/img/projects/Hosteleria.webp',
        //'/img/projects/Hosteleria2.webp',
        //'/img/projects/Hosteleria3.webp',
      ],
      technologies: [
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'VueJS', img: 'img/icons/tech/vue.webp' },
        { name: 'PHP', img: 'img/icons/tech/php.webp' },
        { name: 'Symfony', img: 'img/icons/tech/symfony.webp' },
        { name: 'MySQL', img: 'img/icons/tech/mysql.webp' },
      ],
      description: '',
      instructions: '',
      instructionsPage: '',
    },
    {
      title: {
        es: 'Aensa',
        en: 'Aensa',
        eo: 'Aensa',
      },
      links: {
        view: {
          text: {
            es: 'Ver en linea',
            en: 'View online',
            eo: '',
          },
          url: 'https://www.aensa.es/',
        },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: [
        '/img/projects/Aensa.webp',
        '/img/projects/Aensa2.webp',
        '/img/projects/Aensa3.webp',
      ],
      technologies: [
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'PHP', img: 'img/icons/tech/php.webp' },
        { name: 'Wordpress', img: 'img/icons/tech/wordpress.png' },
        { name: 'Elementor', img: 'img/icons/tech/elementor.webp' },
      ],
      description: {
        es: '',
        en: '',
        eo: '',
      },
      instructions: {
        es: '',
        en: '',
        eo: '',
      },
      instructionsPage: {
        es: '',
        en: '',
        eo: '',
      },
    },
    {
      title: {
        es: 'El Click Artistico',
        en: '"El Click Artistico" (The Artistic click)',
        eo: 'El Click Artistico',
      },
      links: {
        view: {
          text: {
            es: 'Ver en linea',
            en: 'View online',
            eo: '',
          },
          url: 'https://elclickartistico.com/',
        },
      },
      images: ['/img/projects/Elclickartistico.webp', '/img/projects/Elclickartistico2.webp'],
      technologies: [
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'PHP', img: 'img/icons/tech/php.webp' },
        { name: 'Wordpress', img: 'img/icons/tech/wordpress.png' },
        { name: 'Elementor', img: 'img/icons/tech/elementor.webp' },
      ],
      description: '',
      instructions: '',
      instructionsPage: '',
    },
    {
      title: {
        es: 'Calvari Pizza',
        en: 'Calvari Pizza',
        eo: 'Calvari Pizza',
      },
      links: {
        view: {
          text: {
            es: 'Ver en linea',
            en: 'View online',
            eo: '',
          },
          url: 'https://calvaripizza.com/',
        },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: [
        '/img/projects/CalvariPizza.webp',
        '/img/projects/CalvariPizza2.webp',
        '/img/projects/CalvariPizza3.webp',
      ],
      technologies: [
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'PHP', img: 'img/icons/tech/php.webp' },
        { name: 'Wordpress', img: 'img/icons/tech/wordpress.png' },
        { name: 'Elementor', img: 'img/icons/tech/elementor.webp' },
      ],
      description: {
        es: '',
        en: '',
        eo: '',
      },
      instructions: {
        es: '',
        en: '',
        eo: '',
      },
      instructionsPage: {
        es: '',
        en: '',
        eo: '',
      },
    },
    {
      title: {
        es: 'Barcelona Art Of Travel',
        en: 'Barcelona Art Of Travel',
        eo: 'Barcelona Art Of Travel',
      },
      links: {
        view: {
          text: {
            es: 'Ver en linea',
            en: 'View online',
            eo: '',
          },
          url: 'https://barcelonaartoftravel.com/',
        },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: [
        '/img/projects/BarcelonaArtOfTravel.webp',
        '/img/projects/barcelonaartoftravel2.webp',
        '/img/projects/barcelonaartoftravel3.webp',
      ],
      technologies: [
        { name: 'HTML', img: 'img/icons/tech/html.webp' },
        { name: 'CSS', img: 'img/icons/tech/css.webp' },
        { name: 'Javascript', img: 'img/icons/tech/javascript.webp' },
        { name: 'PHP', img: 'img/icons/tech/php.webp' },
        { name: 'Wordpress', img: 'img/icons/tech/wordpress.png' },
        { name: 'Elementor', img: 'img/icons/tech/elementor.webp' },
      ],
      description: {
        es: '',
        en: '',
        eo: '',
      },
      instructions: {
        es: '',
        en: '',
        eo: '',
      },
      instructionsPage: {
        es: '',
        en: '',
        eo: '',
      },
    },
  ]

  return { projects }
}

export default usePortfolio
