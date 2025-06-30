const usePortfolio = () => {
  const projects = [
    {
      title: 'Carwash Fidelización Web App Consulta',
      links: {
        view: {
          text: {
            es: 'Ver en linea',
            en: 'View online',
            eo: '',
          },
          url: 'https://carwash-fidelidad-back.onrender.com/',
        },
      },
      isDownloadable: false,
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
    },
    {
      title: 'Carwash Fidelización App',
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
    },
    {
      title: 'Atletic Lleida Web',
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
      title: 'Athletic Lleida App',
      links: {
        view: {
          text: {
            es: 'Ver en la appStore',
            en: 'View online',
            eo: '',
          },
          url: 'https://play.google.com/store/apps/details?id=com.bbf.applleida&hl=es',
        },
      },
      isDownloadable: false,
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
    },
    {
      title: 'Cocina Sinfonia (Web App Hosteleria)',
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
      images: [
        '/img/projects/Simoft.webp',
        '/img/projects/Hosteleria.webp',
        '/img/projects/Hosteleria2.webp',
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
    },
    {
      title: 'Aensa',
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
    },
    {
      title: 'El Click Artistico',
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
    },
    {
      title: 'Calvari Pizza',
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
    },
    {
      title: 'Barcelona Art Of Travel',
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
    },
  ]

  return { projects }
}

export default usePortfolio
