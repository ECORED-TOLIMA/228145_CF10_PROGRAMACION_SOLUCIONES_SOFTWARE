<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Diseño de interfaces para aplicaciones <em>web</em> y móviles
    figure.mb-0
      img(src='@/assets/curso/tema5/img01.jpg', alt='Imagen decorativa')
    .row.BG01.justify-content-center.px-4.py-4.mb-0
      .col.col-lg-11.col-12
        p El diseño de interfaces para aplicaciones <em>web</em> y móviles se enfoca en la construcción de entornos digitales que permiten la interacción del usuario a través de dispositivos con características técnicas distintas. Este proceso implica definir estructuras visuales y funcionales que respondan a condiciones variables como el tamaño de pantalla, el tipo de interacción y la capacidad de procesamiento. La interfaz se organiza mediante componentes que mantienen coherencia en su comportamiento, lo que permite presentar la información de forma estructurada y garantizar que las acciones del usuario sean interpretadas de manera consistente en distintos entornos. La integración de estos elementos permite que el sistema opere de forma uniforme independientemente del dispositivo en el que se ejecute. 
        p.mb-0 Con el fin de sintetizar estos conceptos, a continuación, se presenta una representación visual que integra los principales elementos del diseño de interfaces para aplicaciones <em>web</em> y móviles, destacando la relación entre dispositivos, componentes, interacción y adaptación del sistema:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Diseño de interfaces para aplicaciones <em>web</em> y móviles
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema5/img02.svg', alt='Figura 4 que representa de manera infográfica el diseño de interfaces para aplicaciones <em>web</em> y móviles, mostrando la relación entre dispositivos, componentes de la interfaz, interacción del usuario y adaptación del diseño a diferentes entornos tecnológicos.')
        .col-auto.movil
          a.anexo.mb-0(:href="obtenerLink('/downloads/Anexo_ Diseño_de_interface_para_aplicaciones_<em>web</em>_y moviles.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Diseño de interfaces para aplicaciones <em>web</em> y móviles
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Estructura, organización y adaptación de la interfaz
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C03.p-4.h-100.w-100
          .row.mb-0
            .col-lg-2.d-none.d-lg-block.mb-lg-3
              figure
                img(src='@/assets/curso/tema5/img04.svg', alt='Imagen decorativa')
            .col.col-12
              p.mb-0(data-aos="fade-down") Las interfaces <em>web</em> se diseñan bajo una lógica que organiza el contenido en estructuras jerárquicas accesibles desde navegadores, donde la información se distribuye en páginas interconectadas. Esta estructuración se basa en contenedores, secciones y componentes que agrupan los elementos de forma coherente, facilitando la navegación y el acceso a la información. Asimismo, el diseño de <em>layouts</em> define la distribución de los elementos dentro del espacio disponible, estableciendo áreas funcionales como encabezados, menús y zonas de contenido, lo que permite mantener consistencia visual y funcional.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema5/img03.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Interacción, navegación y flujo del usuario
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img05.svg', alt='Imagen decorativa')
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") El flujo de interacción define la manera en que el usuario se desplaza dentro del sistema y se relaciona con los diferentes elementos de la interfaz. Este flujo se establece mediante rutas que permiten acceder a la información y ejecutar acciones de forma secuencial o dinámica, asegurando que el usuario pueda navegar sin perder el contexto.
    p.mb-4(data-aos="fade-down") La navegación en aplicaciones móviles se organiza mediante los siguientes patrones, adaptados a las condiciones del dispositivo:
    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
            img(src='@/assets/curso/tema5/img06.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.w-100.h-100
              .p-4
                h5.text-center Menús de navegación
                p.text-center Estructuras que agrupan las secciones principales de la aplicación y facilitan el acceso organizado a sus funcionalidades.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
            img(src='@/assets/curso/tema5/img07.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.w-100.h-100
              .p-4
                h5.text-center Barras de navegación
                p.text-center Elementos que permiten el acceso rápido a funciones clave del sistema.
      .col-lg-4
        .tarjeta-avatar
            img(src='@/assets/curso/tema5/img08.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.w-100.h-100
              .p-4
                h5.text-center Gestos táctiles
                p.text-center Acciones como deslizar, tocar o mantener presión que permiten una interacción directa con la interfaz.
    p.mb-4(data-aos="fade-down") Esto permite un desplazamiento claro entre secciones y mantiene una estructura funcional dentro de la aplicación.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Componentes, estados y reutilización en la interfaz
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img09.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La interfaz se compone de múltiples elementos que interactúan entre sí bajo una estructura definida. Estos componentes pueden ser reutilizables en distintas partes del sistema, manteniendo propiedades, estados y comportamientos consistentes. Esta reutilización permite optimizar el diseño y garantizar uniformidad en la experiencia del usuario.
    p.mb-4(data-aos="fade-down") Los estados de la interfaz representan las diferentes condiciones en las que pueden encontrarse los componentes durante la interacción, entre las cuales se incluyen:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema5/img10.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Estado de carga
            p.mb-0(data-aos="fade-down") Indica que el sistema se encuentra procesando información o ejecutando una operación, informando al usuario que la acción solicitada está en curso y que la interfaz aún no ha mostrado el resultado final.
          .col-xl.col-lg-6.tarjeta.tarjeta--C04.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema5/img11.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Estado de validación
            p.mb-0(data-aos="fade-down") Refleja el proceso mediante el cual el sistema verifica los datos ingresados por el usuario, indicando si cumplen con los criterios establecidos o si requieren corrección antes de continuar.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema5/img12.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Estado de respuesta
            p.mb-0(data-aos="fade-down") Muestra los cambios generados como resultado de acciones del usuario o eventos internos del sistema, permitiendo visualizar el efecto de una interacción o de una operación completada.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.p-4.mb-0
          p.mb-0(data-aos="fade-down") La gestión de estos estados permite reflejar cambios en el sistema y proporcionar retroalimentación clara al usuario.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Optimización y coherencia del sistema
    p.mb-4(data-aos="fade-down") El rendimiento visual de la interfaz está relacionado con la forma en que los elementos se cargan y se representan dentro del sistema. La optimización implica gestionar adecuadamente los recursos visuales, evitando sobrecargas que afecten la fluidez de la interacción. Esto incluye la organización de elementos gráficos, la carga progresiva de contenido y la gestión eficiente de estados.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") Finalmente, el diseño de interfaces en entornos <em>web</em> y móviles requiere mantener coherencia entre plataformas, asegurando que los elementos y patrones de interacción sean reconocibles en ambos contextos. Esta coherencia permite que el usuario tenga una experiencia consistente, facilitando la transición entre dispositivos y garantizando estabilidad en el comportamiento del sistema.
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-10
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Proceso general de diseño de una interfaz (integrado dentro del flujo)
        p.mb-0(data-aos="fade-down") El diseño de una interfaz puede entenderse como un proceso metodológico estructurado en etapas progresivas que permiten organizar su construcción de manera coherente:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema5/img13.svg", alt="alt").img80.m-auto
          h5.text-center A. Análisis
          p En primer lugar, se realiza el análisis de requisitos del sistema y de los usuarios, con el fin de comprender las necesidades funcionales y contextuales de la interfaz. A partir de ello, se define la estructura general, estableciendo la organización del <em>layout</em>, la jerarquía de información y los patrones de navegación.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema5/img14.svg", alt="alt").img80.m-auto
          h5.text-center B. Diseño
          p Posteriormente, se diseñan los componentes reutilizables y se determina cómo interactúan dentro del sistema, definiendo sus estados y comportamientos. Luego, se establecen los flujos de interacción que permiten al usuario desplazarse entre vistas de manera controlada y coherente.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema5/img15.svg", alt="alt").img80.m-auto
          h5.text-center C. Adaptación
          p Finalmente, se realiza la adaptación a diferentes dispositivos, asegurando la consistencia visual y funcional, y se lleva a cabo la optimización del rendimiento para garantizar una experiencia fluida y estable.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 <em>Frameworks</em> <em>front-end</em> y <em>web</em> semántica
    p.mb-4(data-aos="fade-down") Los <em>frameworks</em> <em>front-end</em> constituyen estructuras de desarrollo que permiten construir interfaces de usuario mediante componentes organizados y reutilizables. Estos entornos establecen convenciones claras para la estructuración del código, la gestión del estado de la interfaz y el control de la interacción con el usuario, lo que facilita el desarrollo de aplicaciones <em>web</em> bajo esquemas consistentes. Su adopción implica organizar archivos, definir componentes y controlar la actualización de la interfaz dentro de una arquitectura que asigna funciones específicas a cada elemento del sistema.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img16.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La arquitectura basada en componentes permite construir interfaces a partir de unidades independientes que encapsulan estructura, comportamiento y presentación. Cada componente cumple una función específica y puede reutilizarse en diferentes contextos sin alterar su lógica interna, lo que facilita la construcción de interfaces complejas mediante la composición de elementos más simples. Esta organización favorece la actualización controlada de la interfaz, asegurando que los cambios se reflejen únicamente en las partes necesarias del sistema.
    p.mb-4(data-aos="fade-down") Basado en lo anterior se invita a revisar la siguiente imagen que detalla la estructura de los componentes:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Arquitectura de componentes
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema5/img17.svg', alt='Figura 5 que relaciona cómo es la estructura de los componentes en el diseño de interfaces, representando la jerarquía entre componentes visuales, contenedores y elementos funcionales, así como la organización de <em>layouts</em>, la adaptación a distintos dispositivos y la reutilización de patrones de diseño. La interacción entre estos componentes asegura la coherencia visual, consistencia operativa y una experiencia de usuario uniforme en aplicaciones <em>web</em> y móviles.')
        .col-auto.movil
          a.anexo.mb-0(:href="obtenerLink('/downloads/Anexo_Arquitectura_de_componentes.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Arquitectura de componentes
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Organización del código, estado e interacción dinámica
    p.mb-4(data-aos="fade-down") En los <em>frameworks</em> modernos, la organización del código responde a una separación clara de responsabilidades. Las aplicaciones se estructuran en módulos que agrupan funcionalidades relacionadas, lo que facilita su mantenimiento y evolución. Esta modularidad permite definir componentes, gestionar eventos y coordinar la interacción con otros elementos del sistema bajo patrones que evitan dependencias innecesarias.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C03.p-4.h-100.w-100
          .row.mb-0
            .col-lg-2.d-none.d-lg-block.mb-lg-3
              figure
                img(src='@/assets/curso/tema5/img19.svg', alt='Imagen decorativa')
            .col.col-12
              p.mb-0(data-aos="fade-down") El estado de una aplicación <em>front-end</em> representa la información que determina el comportamiento de la interfaz en un momento dado. Su gestión implica controlar el almacenamiento de datos, su actualización y su impacto sobre los componentes dependientes. Los <em>frameworks</em> sincronizan los cambios del estado con la representación visual, permitiendo que la interfaz responda de forma inmediata a las acciones del usuario sin necesidad de recargar la aplicación completa.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema5/img18.jpg', alt='Imagen decorativa')
    p(data-aos="fade-down") La interacción dinámica se construye mediante la definición de eventos y la actualización controlada del estado, permitiendo modificar partes específicas de la interfaz de forma continua y manteniendo fluidez en la experiencia del usuario.
    p.mb-4(data-aos="fade-down") Los elementos clave en la gestión de interfaces <em>front-end</em> son:
    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
            img(src='@/assets/curso/tema5/img20.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.w-100.h-100
              .p-4
                h5.text-center Gestión del estado
                p.text-center Controla la información que define el comportamiento de la interfaz y su sincronización con los componentes visuales.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
            img(src='@/assets/curso/tema5/img21.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.w-100.h-100
              .p-4
                h5.text-center Interacción dinámica
                p.text-center Permite responder a eventos del usuario mediante actualizaciones parciales de la interfaz.
      .col-lg-4
        .tarjeta-avatar
            img(src='@/assets/curso/tema5/img22.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.w-100.h-100
              .p-4
                h5.text-center Modularidad
                p.text-center Organiza el sistema en unidades independientes que facilitan mantenimiento y escalabilidad.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Enrutamiento, vistas y vinculación de datos
    p.mb-4(data-aos="fade-down") El enrutamiento define cómo una aplicación cambia entre vistas sin recargar completamente el entorno. Cada ruta representa un estado específico de la interfaz y se asocia a componentes concretos que se renderizan según la navegación del usuario. Este mecanismo permite mantener coherencia en las transiciones, preservar el estado cuando es necesario y estructurar aplicaciones con múltiples secciones bajo un esquema organizado.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema5/img23.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") La vinculación de datos establece la relación entre la información del modelo y los elementos visuales que la representan. Este proceso asegura que los cambios en los datos se reflejen en la interfaz de forma controlada, evitando inconsistencias y permitiendo una sincronización estable entre el estado y la presentación visual.
        p.mb-0(data-aos="fade-down") La relación entre <em>frameworks</em> y semántica se da así:
        ul.lista-ul--color.mt-4(data-aos="fade-down")
          li
            i.fas.fa-computer
            p.mb-0 Estructura semántica: define el significado del contenido y su jerarquía dentro del documento.
          li
            i.fas.fa-computer
            p.mb-0 Componentes del framework: encapsulan lógica e interacción respetando la organización semántica.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Optimización, interoperabilidad y accesibilidad
    p.mb-4(data-aos="fade-down") La optimización de carga y entrega de recursos se basa en técnicas que reducen el tiempo de respuesta de la interfaz y mejoran la experiencia de uso. Estas incluyen la carga diferida de módulos, la compresión de archivos, la eliminación de código no utilizado y la gestión eficiente de caché. El proceso de construcción define cómo se generan los recursos finales, asegurando una distribución eficiente de la aplicación.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.px-3.py-4
          p.mb-0(data-aos="fade-down") Las aplicaciones <em>front-end</em> interactúan con servicios externos mediante mecanismos que permiten el consumo e intercambio de datos bajo protocolos definidos. Esta interoperabilidad requiere gestionar formatos de datos, manejar errores de comunicación y mantener coherencia en la interfaz frente a múltiples fuentes de información.
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img24.svg', alt='Imagen decorativa')
      .col-lg-9.col-12
        p.mb-0 La accesibilidad semántica complementa la estructura del documento mediante atributos que describen roles, estados y comportamientos de los elementos interactivos. Su correcta implementación permite que tecnologías de asistencia interpreten la interfaz de forma adecuada, garantizando el acceso a la información bajo diferentes condiciones de uso.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Diseño de interfaces para dispositivos móviles
    p.mb-4(data-aos="fade-down") El diseño de interfaces para dispositivos móviles se orienta a la construcción de entornos visuales que operan bajo condiciones específicas de interacción táctil, tamaño reducido de pantalla y variabilidad en el contexto de uso. Este enfoque implica definir estructuras que permitan presentar la información de forma organizada dentro de espacios limitados, manteniendo coherencia en la disposición de los elementos y en su comportamiento frente a las acciones del usuario. La interfaz móvil se construye mediante componentes que responden a gestos como desplazamiento, selección y presión, estableciendo una lógica de interacción propia de este entorno y diferenciada de otros sistemas digitales.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Organización y jerarquización del contenido en pantallas móviles
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img25.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La distribución del contenido en dispositivos móviles se basa en la segmentación de la información en bloques organizados y jerarquizados, lo que facilita su visualización en espacios reducidos. Esta jerarquización permite priorizar los elementos más relevantes en cada vista, evitando la saturación visual y asegurando que el usuario identifique con claridad la información principal. La disposición de los componentes se adapta a la orientación del dispositivo y a las condiciones de uso, permitiendo reorganizar los elementos sin alterar su estructura lógica ni su funcionalidad.
    p.mb-4(data-aos="fade-down") Para comprender de manera puntual cómo se presenta y organiza la información en una interfaz móvil, la siguiente imagen relaciona una pantalla de aplicación donde se evidencia la disposición de los elementos, la jerarquía del contenido y la adaptación del diseño a las dimensiones reducidas del dispositivo:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Interfaz de usuario en dispositivo móvil
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema5/img26.svg', alt='Figura 6 que representa una interfaz de usuario visualizada en un dispositivo móvil, donde se detalla la organización del contenido, la jerarquía visual de los elementos y su adaptación al espacio limitado de la pantalla, evidenciando principios de diseño orientados a la usabilidad en entornos móviles.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/tema5/img27.svg', alt='Figura 6 que representa una interfaz de usuario visualizada en un dispositivo móvil, donde se detalla la organización del contenido, la jerarquía visual de los elementos y su adaptación al espacio limitado de la pantalla, evidenciando principios de diseño orientados a la usabilidad en entornos móviles.')
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Interacción táctil y patrones de navegación
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema5/img28.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") La interacción en dispositivos móviles se fundamenta en el uso de gestos que permiten manipular directamente los elementos de la interfaz. Esto requiere definir comportamientos específicos para acciones como toques simples, deslizamientos o pulsaciones prolongadas, asegurando que cada interacción genere una respuesta clara y predecible. La correcta gestión de estos gestos permite mantener un flujo de navegación estructurado, donde el usuario puede desplazarse entre vistas sin perder contexto y comprender con facilidad los cambios de estado dentro del sistema.
        .cajon.cajon.C01.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") El flujo de navegación se organiza mediante rutas que conectan las diferentes pantallas de la aplicación, estableciendo relaciones claras entre secciones y niveles de información. La definición de transiciones coherentes contribuye a que el usuario interprete adecuadamente los cambios de contexto y mantenga continuidad durante la interacción.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Adaptación, rendimiento y contexto de uso móvil
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema5/img29.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") El diseño de interfaces móviles contempla la adaptación a múltiples resoluciones, tamaños de pantalla y capacidades técnicas de los dispositivos. Esta adaptación se logra mediante estructuras flexibles que permiten reorganizar los elementos sin afectar su funcionalidad, garantizando que la información se mantenga accesible en diferentes condiciones. Paralelamente, la optimización del rendimiento implica gestionar la carga de componentes, el uso de recursos y la actualización controlada de la interfaz, evitando sobrecargas que puedan afectar la fluidez de la interacción.
        .cajon.cajon.C02.color-secundario.p-4.mb-0
          p.mb-0(data-aos="fade-down") El contexto de uso móvil introduce variables como movilidad, interrupciones frecuentes y periodos cortos de atención. Por ello, la interfaz debe permitir ejecutar acciones de forma rápida y directa, reducir la complejidad de los flujos y facilitar la continuidad de la interacción, incluso cuando el uso del dispositivo se ve interrumpido.
    p.mb-4(data-aos="fade-down") Los siguientes son los aspectos clave del diseño de interfaces móviles:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Jerarquización del contenido")
            .col-12.mb-4.mb-md-0
              p.mb-0 Organiza la información en niveles visuales claros que permitan identificar rápidamente los elementos prioritarios de cada pantalla. La distribución debe destacar acciones principales, reducir la sobrecarga cognitiva y facilitar una lectura progresiva mediante títulos, contrastes, tamaños y agrupaciones coherentes.
          .row(numero="2" titulo="Interacción táctil definida")
            .col-12.mb-4.mb-md-0
              p.mb-0 Establece patrones de interacción consistentes mediante gestos y respuestas previsibles del sistema. Cada acción táctil debe contar con retroalimentación inmediata, zonas de contacto adecuadas y comportamientos uniformes que reduzcan errores y eviten ambigüedades durante la navegación.
          .row(numero="3" titulo="Navegación estructurada")
            .col-12.mb-4.mb-md-0
              p.mb-0 Conecta vistas y pantallas a través de recorridos claros y continuos que permitan al usuario comprender su ubicación dentro de la aplicación. La arquitectura de navegación debe mantener coherencia entre secciones, facilitar el retorno a pantallas previas y minimizar pasos innecesarios.
          .row(numero="4" titulo="Adaptabilidad y rendimiento")
            .col-12.mb-4.mb-md-0
              p.mb-0 Ajusta la interfaz a diferentes tamaños de pantalla, resoluciones y capacidades de hardware para garantizar una experiencia consistente. La optimización de recursos, tiempos de carga y transiciones contribuye a mantener fluidez y estabilidad en distintos dispositivos y condiciones de uso.
          .row(numero="5" titulo="Atención al contexto de uso")
            .col-12.mb-4.mb-md-0
              p.mb-0 Diseña considerando escenarios de movilidad, interrupciones frecuentes y periodos de interacción breves. La interfaz debe permitir retomar tareas fácilmente, priorizar acciones rápidas y asegurar legibilidad y accesibilidad en entornos cambiantes.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img30.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Para comprender la anterior temática, se presenta el siguiente video donde se realiza una comparación entre el diseño de interfaces <em>web</em> y móviles, con el propósito de evidenciar cómo los principios de estructura, interacción y adaptación se aplican de manera distinta según el tipo de dispositivo:
    .row.justify-content-center.align-items-center.mb-0       
      .col.col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/sdHDf9hFABw?si=5drasZJfF7DWfbKv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
