export default {
  global: {
    Name: 'Modelado de datos y diseño de interfaces gráficas',
    Description:
      'Este componente aborda fundamentos de bases de datos, modelado y organización de la información, incluyendo seguridad y análisis de datos. Integra principios de diseño de interfaces gráficas, usabilidad y desarrollo web y móvil, finalizando con técnicas y herramientas de prototipado para la construcción de soluciones digitales estructuradas y centradas en el usuario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de bases de datos y modelado de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos, características y tipos de bases de datos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Modelo lógico de datos y modelo relacional',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estructura y organización de los datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Diccionario de datos y estándares de nombrado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Normalización y formas normales en bases de datos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión y seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Seguridad de la información y control de acceso',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: '<em>Big data</em> y aplicaciones en el manejo de datos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Fundamentos del diseño de interfaces gráficas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Conceptos, características y teoría del color',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Usabilidad, accesibilidad y estándares web',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Diseño de interfaces para aplicaciones web y móviles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: '<em>Frameworks</em> <em>front-end</em> y web semántica',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Diseño de interfaces para dispositivos móviles',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Prototipado de interfaces de usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Conceptos y técnicas de prototipado',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Herramientas de apoyo y prototipos para aplicaciones web, <em>stand-alone</em> y móviles',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  // complementario: [
  //   {
  //     tema: '',
  //     referencia: '',
  //     tipo: 'Sitio web',
  //     link: '',
  //   },
  // ],
  glosario: [
    {
      termino: 'Base de datos',
      significado:
        'sistema estructurado que permite almacenar, organizar y gestionar información mediante estructuras definidas que facilitan su consulta, actualización y control dentro de un entorno digital.',
    },
    {
      termino: '<em>Big data</em>',
      significado:
        'conjunto de tecnologías y procesos orientados al manejo de grandes volúmenes de datos caracterizados por su variedad, velocidad y complejidad, que requieren procesamiento especializado.',
    },
    {
      termino: 'Control de acceso',
      significado:
        'mecanismo que regula quién puede acceder a la información y qué acciones puede realizar sobre ella, basado en permisos, roles o atributos definidos dentro del sistema.',
    },
    {
      termino: 'Diccionario de datos',
      significado:
        'repositorio que describe los elementos de datos de un sistema, incluyendo sus nombres, tipos, estructuras y restricciones, permitiendo mantener coherencia en su definición.',
    },
    {
      termino: 'Framework <em>front-end</em>',
      significado:
        'estructura de desarrollo que proporciona herramientas y componentes para construir interfaces de usuario, facilitando la organización del código y la interacción en aplicaciones web.',
    },
    {
      termino: 'Modelo lógico de datos',
      significado:
        'representación estructurada de los datos que define entidades, atributos y relaciones sin depender de una tecnología específica, permitiendo organizar la información de forma abstracta.',
    },
    {
      termino: 'Modelo relacional',
      significado:
        'estructura de organización de datos basada en tablas relacionadas entre sí mediante claves primarias y foráneas, donde la información se representa en filas y columnas.',
    },
    {
      termino: 'Normalización',
      significado:
        'proceso de organización de datos que busca eliminar redundancias y dependencias innecesarias mediante la aplicación de reglas conocidas como formas normales.',
    },
    {
      termino: 'Prototipado',
      significado:
        'proceso de creación de representaciones preliminares de una interfaz que permiten definir su estructura, comportamiento e interacción antes de su implementación final.',
    },
  ],
  referencias: [
    {
      referencia:
        'Date, C. J. (2004). <em>Introducción a los sistemas de bases de datos</em> (8.ª ed.). Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Elmasri, R. y Navathe, S. B. (2016). <em>Fundamentos de sistemas de bases de datos</em> (7.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Gamma, E., Helm, R., Johnson, R. y Vlissides, J. (1994). <em>Design Patterns: elementos de software reutilizable orientado a objetos</em>. Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Nielsen, J. (1994). <em>Usability Engineering</em>. Morgan Kaufmann.',
      link: '',
    },
    {
      referencia:
        'Pressman, R. S. y Maxim, B. R. (2020). <em>Ingeniería del software: un enfoque práctico</em> (9.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Shneiderman, B., Plaisant, C., Cohen, M., Jacobs, S. y Elmqvist, N. (2016). <em>Diseño de la interfaz de usuario</em> (6.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Silberschatz, A., Korth, H. F. y Sudarshan, S. (2019). <em>Database System Concepts</em> (7th ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Sommerville, I. (2016). <em>Ingeniería de software</em> (10.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'World Wide Web Consortium (W3C). (2018). <em>Web Content Accessibility Guidelines</em> (WCAG) 2.1.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador full stack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
