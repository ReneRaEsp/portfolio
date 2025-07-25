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
            eo: 'Vidu rete',
          },
          url: 'https://jitime-api.onrender.com',
        },
        repo: '',
        video: { es: '', en: '', eo: '' },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: ['/projects/jitime1.webp', '/projects/jitime2.webp', '/projects/jitime3.webp'],
      technologies: [
        { name: 'Vue', img: '/icons/vue.webp' },
        { name: 'Ionic', img: '/icons/ionic.webp' },
        { name: 'Capacitor', img: '/icons/capacitor.webp' },
        { name: 'Android', img: '/icons/android.webp' },
        { name: 'Node', img: '/icons/node.webp' },
        { name: 'Typescript', img: '/icons/typescript.webp' },
        { name: 'Express', img: '/icons/express.webp' },
        { name: 'MongoDB', img: '/icons/mongo.webp' },
      ],
      description: {
        es: 'Debido a acuerdos de confidencialidad con algunos clientes, no puedo mostrar en mi portafolio los sistemas desarrollados para uso interno. Sin embargo, he creado este prototipo funcional con características similares a las que implementé previamente. Esta aplicación permite a proveedores de servicios (como consultorios, barberías o asesores) crear perfiles profesionales, definir su disponibilidad semanal y ofrecer distintos tipos de servicios. Los clientes pueden registrarse y agendar citas de manera sencilla a través de la aplicación web. Estoy trabajando activamente en nuevas funcionalidades que se irán incorporando de forma periódica.',
        en: 'Due to confidentiality agreements with some clients, I’m unable to showcase the internal systems I’ve developed for them. However, I’ve built this fully functional prototype based on similar requirements I’ve worked on previously. This application allows service providers (such as clinics, barbershops, or consultants) to create professional profiles, set weekly availability, and offer different types of services. Clients can register and easily book appointments through the web app. I’m actively working on new features, which will be added periodically.',
        eo: 'Pro konfidencaj interkonsentoj kun kelkaj klientoj, mi ne povas montri en mia portofolio la internajn sistemojn, kiujn mi evoluigis por ili. Tamen mi kreis ĉi tiun funkciantan prototipon kun similaj trajtoj al tiuj, kiujn mi antaŭe efektivigis. Ĉi tiu aplikaĵo ebligas al servoprovizantoj (kiel klinikoj, barbirejoj aŭ konsultistoj) krei profesiajn profilojn, difini semajnan disponeblon kaj proponi diversajn tipojn de servoj. Klientoj povas registriĝi kaj facile rezervi rendevuojn per la interreta aplikaĵo. Mi aktive laboras pri novaj funkcioj, kiuj estos aldonataj periode.',
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
        es: 'Carwash fidelización mobile app',
        en: 'Loyalty program web app for car washes',
        eo: 'Aŭtolaveja fideleca retaplikaĵo',
      },
      links: {
        view: {
          text: {
            es: 'Ver en linea',
            en: 'View online',
            eo: 'Vidu rete',
          },
          url: 'https://carwash-fidelidad-back.onrender.com/carwash',
        },
        download: {
          text: {
            es: 'Descargar',
            en: 'Download',
            eo: 'Elŝutu',
          },
          url: 'https://www.dropbox.com/scl/fi/7tm76t6lsvj1n429hme99/carwash-demo.apk?rlkey=b6slb0qbicjpbxk9eir98g3gj&st=x5o488lq&dl=0',
        },
      },
      isDownloadable: true,
      isActive: true,
      isLive: true,
      images: ['/projects/carwash-app.webp', '/projects/carwash-app2.webp'],
      technologies: [
        { name: 'Vue', img: '/icons/vue.webp' },
        { name: 'Ionic', img: '/icons/ionic.webp' },
        { name: 'Capacitor', img: '/icons/capacitor.webp' },
        { name: 'Android', img: '/icons/android.webp' },
        { name: 'Ios', img: '/icons/ios.webp' },
        { name: 'Node', img: '/icons/node.webp' },
        { name: 'Express', img: '/icons/express.webp' },
        { name: 'MongoDB', img: '/icons/mongo.webp' },
      ],
      description: {
        es: 'Debido a acuerdos de confidencialidad con algunos clientes, no puedo mostrar en mi portafolio los sistemas desarrollados para uso interno. Sin embargo, he creado este prototipo funcional con características similares a las que implementé previamente.               Aplicación móvil orientada a la fidelización de clientes para servicios de lavado de autos. Los usuarios acumulan visitas en cada servicio y obtienen un lavado gratis por cada cierta cantidad alcanzada. Además, al alcanzar determinados hitos, suben de rango y acceden a beneficios exclusivos como descuentos en productos y servicios. Los administradores pueden gestionar promociones, visualizar estadísticas de uso y fortalecer la relación con sus clientes más leales.',
        en: 'Due to confidentiality agreements with some clients, I’m unable to showcase the internal systems I’ve developed for them. However, I’ve built this fully functional prototype based on similar requirements I’ve worked on previously. Mobile application focused on customer retention for car wash services. Users collect visit points with each service and receive a free car wash after reaching a certain number. As they accumulate more visits, they level up through loyalty tiers that unlock exclusive benefits like discounts on products and services. Admins can manage promotions, track usage statistics, and build stronger relationships with their most loyal customers.',
        eo: 'Pro konfidencaj interkonsentoj kun kelkaj klientoj, mi ne povas montri en mia portofolio la internajn sistemojn, kiujn mi evoluigis por ili. Tamen mi kreis ĉi tiun funkciantan prototipon kun similaj trajtoj al tiuj, kiujn mi antaŭe efektivigis.  Poŝtelefona aplikaĵo celita al fideligo de klientoj por aŭtolavejaj servoj. Uzantoj akumulas vizitojn per ĉiu servo kaj ricevas senpagan lavon post certa kvanto. Krome, per pli da vizitoj ili progresas tra rangoj, kiuj malŝlosas ekskluzivajn avantaĝojn kiel rabatojn por produktoj kaj servoj. Administrantoj povas administri promociojn, analizi uzajn statistikojn kaj plifortigi la rilaton kun siaj plej fidelaj klientoj.',
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
            eo: 'Vidu rete',
          },
          url: 'https://carwash-fidelidad-back.onrender.com/',
        },
        repo: '',
        video: { es: '', en: '', eo: '' },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: ['/projects/carwash-consulta.webp'],
      technologies: [
        { name: 'Vue', img: '/icons/vue.webp' },
        { name: 'Node', img: '/icons/node.webp' },
        { name: 'Express', img: '/icons/express.webp' },
        { name: 'MongoDB', img: '/icons/mongo.webp' },
      ],
      description: {
        es: 'Sitio web complementario donde los clientes pueden consultar su estado dentro del programa de fidelización. Al ingresar su número de celular, el sistema muestra la cantidad de visitas acumuladas, el rango actual alcanzado y los beneficios disponibles según dicho rango. Una forma rápida y sencilla para que los usuarios sigan su progreso y se mantengan motivados a volver.',
        en: 'Companion web app where customers can check their current status in the loyalty program. By entering their phone number, they can view how many visits they’ve accumulated, what tier they’re currently in, and which benefits they have unlocked. A simple and effective way to keep users engaged and coming back.',
        eo: 'Komplementa retejo kie klientoj povas konsulti sian staton en la fideliga programo. Post enigo de sia telefona numero, la sistemo montras la akumulitan nombron da vizitoj, la nunan atingitan rangon, kaj la haveblajn avantaĝojn laŭ tiu rango. Facila kaj rapida maniero por ke uzantoj sekvu sian progreson kaj restu instigitaj reveni.',
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
            eo: 'Vidu rete',
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
        '/projects/MatBombas1.webp',
        '/projects/MatBombas.webp',
        '/projects/MatBombas2.webp',
      ],
      technologies: [
        { name: 'HTML', img: '/icons/html.webp' },
        { name: 'CSS', img: '/icons/css.webp' },
        { name: 'Javascript', img: '/icons/javascript.webp' },
        { name: 'PHP', img: '/icons/php.webp' },
        { name: 'Wordpress', img: '/icons/wordpress.webp' },
        { name: 'Woocommerce', img: '/icons/woocommerce.webp' },
        { name: 'Elementor', img: '/icons/elementor.webp' },
      ],
      description: {
        es: 'Tienda en línea especializada en bombas de agua, aceite y gasolina, accesible únicamente para usuarios registrados. Los visitantes pueden explorar el catálogo, utilizar el buscador y aplicar filtros por tipo de bomba o características técnicas, pero los precios y detalles comerciales solo se revelan tras registrarse e iniciar sesión. El sitio también cuenta con un sistema de newsletter para mantener informados a los clientes sobre novedades, disponibilidad y promociones exclusivas.',
        en: 'An online store focused on water, oil, and fuel pumps, accessible only to registered users. Visitors can browse the catalog, use the search bar, and filter products by type or technical features, but prices and commercial details are visible only after registration and login. A newsletter system is available to keep customers updated on new products, stock availability, and exclusive deals.',
        eo: 'Retejo por interreta vendo de akvo-, oleo- kaj benzinpumpiloj, kun aliro nur por registritaj uzantoj. Vizitantoj povas trarigardi la katalogon, uzi serĉilon kaj apliki filtrilojn laŭ tipo aŭ teknikaj ecoj, sed prezoj kaj komercaj detaloj videblas nur post registriĝo kaj ensaluto. Novaĵletero estas disponebla por teni klientojn informitaj pri novaĵoj, stoko kaj ekskluzivaj ofertoj.',
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
            eo: 'Vidu rete',
          },
          url: 'https://atleticlleida.com/',
        },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: [
        '/projects/Atleticlleida.webp',
        '/projects/Atleticlleida2.webp',
        '/projects/Atleticlleida3.webp',
        '/projects/Atleticlleida4.webp',
      ],
      technologies: [
        { name: 'HTML', img: '/icons/html.webp' },
        { name: 'CSS', img: '/icons/css.webp' },
        { name: 'Javascript', img: '/icons/javascript.webp' },
        { name: 'PHP', img: '/icons/php.webp' },
        { name: 'Laravel', img: '/icons/laravel.webp' },
        { name: 'Wordpress', img: '/icons/wordpress.webp' },
        { name: 'JQuery', img: '/icons/jquery.webp' },
      ],
      description: {
        es: 'Sitio web dinámico y funcional diseñado para centralizar la comunicación y gestión digital del club Atletic Lleida. Incluye un calendario interactivo de partidos y eventos, clasificaciones actualizadas, una sección exclusiva para la compra y gestión de abonos, y un blog con noticias oficiales del club. Todo pensado para mejorar la experiencia de los socios, mantener informada a la comunidad y reforzar el vínculo con la institución.,',
        en: 'Dynamic and functional website built to centralize digital communication and operations for the Atletic Lleida sports club. It features an interactive calendar of matches and events, up-to-date league standings, a dedicated section for members to purchase and manage season tickets, and a blog with official club news. Designed to improve the fan experience, keep the community informed, and strengthen the connection with the club.',
        eo: 'Dinamika kaj funkcia retejo kreita por centralizi la ciferecan komunikadon kaj administradon de la sportklubo Atletic Lleida. Ĝi enhavas interagan kalendaron de matĉoj kaj eventoj, ĝisdatigitajn klasifiko-tabulojn, sekcion por abonitaj membroj por aĉeti kaj administri siajn sezonbiletojn, kaj blogon kun oficialaj novaĵoj de la klubo. Ĉio celas plibonigi la sperton de membroj, informi la komunumon kaj fortigi la rilaton kun la klubo.',
      },
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
            eo: 'Vidu rete',
          },
          url: 'https://play.google.com/store/apps/details?id=com.bbf.applleida&hl=es',
        },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: ['/projects/Athletic5.webp', '/projects/Athletic6.webp'],
      technologies: [
        { name: 'Typescript', img: '/icons/typescript.webp' },
        { name: 'Angular', img: '/icons/angular.webp' },
        { name: 'Node', img: '/icons/node.webp' },
        { name: 'Express', img: '/icons/express.webp' },
        { name: 'PostgreSQL', img: '/icons/postgresql.webp' },
        { name: 'Ionic', img: '/icons/ionic.webp' },
        { name: 'Capacitor', img: '/icons/capacitor.webp' },
        { name: 'iOS', img: '/icons/ios.webp' },
        { name: 'Android', img: '/icons/android.webp' },
      ],
      description: {
        es: 'Aplicación móvil desarrollada como red social interna para los patrocinadores del club deportivo Atletic Lleida. Cada patrocinador puede crear un perfil, publicar contenido con imágenes, interactuar con otros mediante comentarios y abrir chats privados entre miembros. Aunque se incluye el enlace público a la app en la App Store, esta es de uso exclusivo para los miembros autorizados y no puede ser utilizada libremente por quienes acceden desde mi portafolio.',
        en: 'Mobile app developed as an internal social network for the official sponsors of the sports club Atletic Lleida. Sponsors can create profiles, share posts with images, interact through comments, and start private chats with each other. While a public link to the app is provided via the App Store, access is restricted to authorized users only and cannot be freely used by visitors coming from my portfolio.',
        eo: 'Poŝtelefona aplikaĵo evoluigita kiel interna socia reto por la sponsoroj de la sportklubo Atletic Lleida. Ĉiu sponsoro povas krei profilon, afiŝi enhavon kun bildoj, interagi per komentoj kaj komenci privatajn babiladojn kun aliaj membroj. Kvankam publika ligilo al la aplikaĵo estas disponebla per la App Store, aliro estas limigita nur al rajtigitaj uzantoj kaj ne estas malferma al vizitantoj el mia retejo.',
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
            eo: 'Vidu rete',
          },
          url: 'https://renegade.alwaysdata.net',
        },
      },
      isDownloadable: false,
      isActive: false,
      isLive: true,
      images: [
        '/projects/Simoft.webp',
        //'/projects/Hosteleria.webp',
        //'/projects/Hosteleria2.webp',
        //'/projects/Hosteleria3.webp',
      ],
      technologies: [
        { name: 'HTML', img: '/icons/html.webp' },
        { name: 'CSS', img: '/icons/css.webp' },
        { name: 'Javascript', img: '/icons/javascript.webp' },
        { name: 'VueJS', img: '/icons/vue.webp' },
        { name: 'PHP', img: '/icons/php.webp' },
        { name: 'Symfony', img: '/icons/symfony.webp' },
        { name: 'MySQL', img: '/icons/mysql.webp' },
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
            eo: 'Vidu rete',
          },
          url: 'https://www.aensa.es/',
        },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: ['/projects/Aensa.webp', '/projects/Aensa2.webp', '/projects/Aensa3.webp'],
      technologies: [
        { name: 'HTML', img: '/icons/html.webp' },
        { name: 'CSS', img: '/icons/css.webp' },
        { name: 'Javascript', img: '/icons/javascript.webp' },
        { name: 'PHP', img: '/icons/php.webp' },
        { name: 'Wordpress', img: '/icons/wordpress.webp' },
        { name: 'Elementor', img: '/icons/elementor.webp' },
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
            eo: 'Vidu rete',
          },
          url: 'https://elclickartistico.com/',
        },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: ['/projects/Elclickartistico.webp', '/projects/Elclickartistico2.webp'],
      technologies: [
        { name: 'HTML', img: '/icons/html.webp' },
        { name: 'CSS', img: '/icons/css.webp' },
        { name: 'Javascript', img: '/icons/javascript.webp' },
        { name: 'PHP', img: '/icons/php.webp' },
        { name: 'Wordpress', img: '/icons/wordpress.webp' },
        { name: 'Elementor', img: '/icons/elementor.webp' },
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
            eo: 'Vidu rete',
          },
          url: 'https://calvaripizza.com/',
        },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: [
        '/projects/CalvariPizza.webp',
        '/projects/CalvariPizza2.webp',
        '/projects/CalvariPizza3.webp',
      ],
      technologies: [
        { name: 'HTML', img: '/icons/html.webp' },
        { name: 'CSS', img: '/icons/css.webp' },
        { name: 'Javascript', img: '/icons/javascript.webp' },
        { name: 'PHP', img: '/icons/php.webp' },
        { name: 'Wordpress', img: '/icons/wordpress.webp' },
        { name: 'Elementor', img: '/icons/elementor.webp' },
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
            eo: 'Vidu rete',
          },
          url: 'https://barcelonaartoftravel.com/',
        },
      },
      isDownloadable: false,
      isActive: true,
      isLive: true,
      images: [
        '/projects/BarcelonaArtOfTravel.webp',
        '/projects/barcelonaartoftravel2.webp',
        '/projects/barcelonaartoftravel3.webp',
      ],
      technologies: [
        { name: 'HTML', img: '/icons/html.webp' },
        { name: 'CSS', img: '/icons/css.webp' },
        { name: 'Javascript', img: '/icons/javascript.webp' },
        { name: 'PHP', img: '/icons/php.webp' },
        { name: 'Wordpress', img: '/icons/wordpress.webp' },
        { name: 'Elementor', img: '/icons/elementor.webp' },
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
        es: 'Backoffice para gestionar mis proyectos',
        en: 'Backoffice to manageprojects',
        eo: 'Backoffice por administri miajn projektojn',
      },
      links: {
        view: {
          text: {
            es: 'Ver en linea',
            en: 'View online',
            eo: 'Vidu rete',
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
        '/projects/Portfolio1.webp',
        '/projects/Portfolio2.webp',
        '/projects/Portfolio3.webp',
      ],
      technologies: [
        { name: 'Javascript', img: '/icons/javascript.webp' },
        { name: 'Vue', img: '/icons/vue.webp' },
        { name: 'Veutify', img: '/icons/veutify.webp' },
        { name: 'Vite', img: '/icons/vite.webp' },
        { name: 'PHP', img: '/icons/php.webp' },
        { name: 'Laravel', img: '/icons/laravel.webp' },
        { name: 'PostgreSQL', img: '/icons/postgresql.webp' },
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

  return {
    projects,
  }
}

export default usePortfolio
