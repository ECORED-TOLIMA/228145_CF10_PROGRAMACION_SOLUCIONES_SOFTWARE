<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Prototipado de interfaces de usuario
    figure.mb-0
      img(src='@/assets/curso/tema6/img01.jpg', alt='Imagen decorativa')
    .row.BG01.justify-content-center.px-4.py-4.mb-0
      .col.col-lg-11.col-12
        p El prototipado de interfaces de usuario constituye un proceso de representación anticipada mediante el cual se definen la estructura, organización visual e interacción de un sistema antes de su implementación definitiva. A través de este proceso se construyen modelos que permiten visualizar la disposición de los componentes, la relación entre los elementos y los comportamientos esperados dentro de la interfaz. El prototipado facilita la evaluación temprana de la coherencia estructural, permitiendo identificar ajustes en la organización del contenido y en la lógica de interacción, manteniendo control sobre la evolución progresiva del diseño desde representaciones iniciales hasta versiones más cercanas al producto final.
        p.mb-0 A partir de esta visión general, el prototipado se presenta como un proceso clave para explorar, organizar y refinar la interfaz de usuario antes de su implementación. A continuación, se abordan las principales dimensiones que intervienen en su construcción, evaluación y evolución:
    AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta tarjeta--C02" data-aos="zoom-in")
      .row.justify-content-center(titulo="Estructuración inicial de la interfaz")
        .col-12.col-lg-6.order-lg-1.order-2
          p La estructuración inicial de la interfaz se realiza mediante representaciones que permiten organizar los elementos sin incorporar todavía definiciones visuales avanzadas. En esta etapa se establecen las bases de la disposición espacial de los componentes, definiendo áreas de interacción, jerarquías de contenido y relaciones funcionales entre los elementos. Esta fase permite visualizar la arquitectura general de la interfaz, facilitando la identificación de inconsistencias en la organización de la información y asegurando que la estructura mantenga coherencia antes de avanzar hacia etapas de mayor detalle.
          p.mb-0 Además, esta estructuración preliminar actúa como un marco de referencia para las decisiones posteriores de diseño, ya que define cómo se distribuye la información dentro del espacio disponible. Al centrarse en la organización lógica más que en la apariencia visual, se favorece una comprensión clara del sistema y se reduce el riesgo de realizar ajustes estructurales en etapas avanzadas del desarrollo.
        .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema6/img02.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Definición de interacción y comportamiento")
        .col-12.col-lg-6.order-lg-1.order-2
          p La definición de la interacción en los prototipos permite establecer cómo responden los elementos de la interfaz frente a las acciones del usuario. Este proceso incluye la simulación de gestos, cambios de estado y respuestas del sistema, permitiendo representar de manera anticipada el comportamiento de los componentes. La incorporación de estas interacciones facilita la validación de la lógica del sistema, asegurando que las acciones generen resultados claros y consistentes.
          p.mb-0 Asimismo, la definición del comportamiento contribuye a anticipar la experiencia de uso, permitiendo evaluar si la respuesta del sistema resulta comprensible y coherente desde la perspectiva del usuario. Al simular la interacción en etapas tempranas, es posible ajustar el flujo de acciones y mejorar la claridad de las respuestas antes de la implementación definitiva.
        .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema6/img03.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Representación de flujos y recorridos del usuario")
        .col-12.col-lg-6.order-lg-1.order-2
          p El prototipado permite modelar los recorridos que el usuario realiza dentro de la interfaz, estableciendo conexiones entre las distintas vistas del sistema. Esta representación facilita la comprensión de cómo se accede a la información, cómo se produce la navegación entre secciones y cómo se mantiene el contexto durante la interacción. La definición de estos flujos contribuye a detectar posibles interrupciones o inconsistencias en la navegación.
          p.mb-0 De igual forma, la visualización de los recorridos del usuario permite analizar la secuencia de acciones necesarias para completar tareas específicas. Este análisis favorece la optimización de la estructura de navegación, asegurando que los desplazamientos dentro de la interfaz sean lógicos, continuos y acordes con los objetivos del sistema.
        .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema6/img04.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Iteración y ajuste progresivo del diseño")
        .col-12.col-lg-6.order-lg-1.order-2
          p El diseño de prototipos se desarrolla mediante un proceso iterativo en el que las representaciones se ajustan de manera progresiva a partir de su revisión y evaluación. Este enfoque permite refinar la disposición de los elementos, modificar la organización del contenido y mejorar los comportamientos definidos en etapas previas. La iteración constituye un mecanismo esencial para la mejora continua del diseño.
          p.mb-0 A través de este proceso, cada versión del prototipo incorpora ajustes que responden a observaciones concretas, manteniendo control sobre los cambios realizados. La iteración progresiva permite que el diseño evolucione de forma estructurada, evitando modificaciones abruptas y asegurando consistencia en la organización general de la interfaz.
        .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema6/img05.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Validación estructural previa a la implementación")
        .col-12.col-lg-6.order-lg-1.order-2
          p El prototipado cumple una función clave en la validación de la estructura de la interfaz antes de su desarrollo definitivo. Este proceso implica revisar la organización de los componentes, la coherencia en la navegación y la consistencia en los comportamientos definidos. La validación temprana permite identificar errores o áreas de mejora en una etapa donde los cambios resultan menos costosos.
          p.mb-0 Además, esta validación proporciona una base sólida para la fase de implementación, ya que asegura que la estructura del sistema ha sido analizada y ajustada previamente. Al reducir la necesidad de correcciones posteriores, se optimiza el proceso de desarrollo y se mejora la calidad final de la interfaz.
        .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema6/img06.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Niveles de fidelidad en el prototipado")
        .col-12.col-lg-6.order-lg-1.order-2
          p Los prototipos se desarrollan en distintos niveles de fidelidad que determinan el grado de detalle con el que se representa la interfaz. En las etapas iniciales, el énfasis se sitúa en la disposición de los elementos y en la estructura general del sistema, sin incorporar detalles visuales complejos. Estos niveles permiten concentrarse en la organización y la lógica de la interfaz.
          p.mb-0 En fases más avanzadas, se incorporan aspectos visuales, interacciones detalladas y comportamientos cercanos al producto final. Esta progresión gradual facilita el control del proceso de diseño, permitiendo que cada nivel se aborde con objetivos específicos y evitando definiciones prematuras que puedan limitar la flexibilidad del diseño.
        .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema6/img07.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Escenarios de uso, estados y retroalimentación")
        .col-12.col-lg-6.order-lg-1.order-2
          p El prototipado permite representar escenarios de uso que reflejan situaciones reales de interacción, incorporando distintos estados del sistema y transiciones entre vistas. Esta simulación facilita la evaluación del comportamiento de la interfaz frente a diversas condiciones, como carga de información, validación de datos o respuesta a eventos del usuario.
          p.mb-0 De manera complementaria, la retroalimentación obtenida durante la evaluación del prototipo se integra como parte del proceso de ajuste del diseño. Este aporte permite refinar la estructura y la interacción de la interfaz de forma controlada, asegurando que las modificaciones mantengan coherencia y contribuyan a una experiencia de uso más clara y funcional.
        .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema6/img08.jpg', alt='Imagen decorativa')
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Conceptos y técnicas de prototipado
    p.mb-4(data-aos="fade-down") El prototipado se define como un proceso de construcción de representaciones de una interfaz que permiten modelar su estructura, comportamiento y flujo de interacción antes de su implementación definitiva. Estas representaciones se elaboran con el objetivo de anticipar la organización de los componentes, la disposición del contenido y la respuesta del sistema frente a las acciones del usuario, facilitando la evaluación temprana del diseño.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img09.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") A diferencia de una maqueta puramente visual, el prototipo integra aspectos estructurales y funcionales que permiten simular la interacción y el comportamiento del sistema. De este modo, el prototipado se convierte en una herramienta que apoya la toma de decisiones durante el diseño, permitiendo analizar la coherencia de la interfaz y realizar ajustes progresivos antes de avanzar hacia etapas de desarrollo más complejas.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Técnicas de prototipado y niveles de detalle
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema6/img10.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Las técnicas de prototipado se diferencian según el nivel de detalle con el que representan la interfaz y el tipo de interacción que permiten simular. En etapas iniciales, se emplean técnicas orientadas a definir la estructura general del sistema, priorizando la disposición de los elementos y la organización de la información. A medida que el diseño avanza, se incorporan técnicas que permiten representar comportamientos más complejos y una interacción más cercana a la versión final.
        .cajon.cajon.C01.color-primario.p-4
          .row.justify-content-center
            .col.col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema6/img11.svg', alt='Imagen decorativa')
            .col.col-lg-10.col-12
              p.mb-0(data-aos="fade-down") Esta progresión facilita una construcción gradual del prototipo, permitiendo seleccionar la técnica más adecuada según los objetivos de cada fase. La elección del nivel de detalle responde a la necesidad de evaluar aspectos específicos del diseño sin introducir definiciones prematuras que limiten la flexibilidad del proceso.
    p.mb-4(data-aos="fade-down") Con el fin de sintetizar la relación entre las técnicas de prototipado y el nivel de detalle con el que representan la interfaz, la siguiente tabla organiza las principales características de cada enfoque, considerando su propósito dentro del proceso de diseño y el tipo de evaluación que permiten realizar en cada fase:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Técnicas de prototipado según nivel de detalle
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Técnica de prototipado
                th(data-aos="fade-down")(style= "width: 25%") Nivel de detalle
                th(data-aos="fade-down")(style= "width: 25%") Propósito principal
                th(data-aos="fade-down")(style= "width: 25%") Enfoque de evaluación
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Prototipos de baja fidelidad.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Bajo.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Definir la estructura general de la interfaz y la organización de la información.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Evaluación de jerarquía, disposición espacial y coherencia estructural.
              tr
                td(data-aos="fade-down") Prototipos de fidelidad media.
                td(data-aos="fade-down") Medio.
                td(data-aos="fade-down") Representar interacciones básicas y relaciones entre componentes.
                td(data-aos="fade-down") Evaluación de flujos de navegación y comportamientos generales.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Prototipos de alta fidelidad.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Alto.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Simular una experiencia cercana a la versión final del sistema.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Evaluación de interacción, comportamiento y respuesta del sistema.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Simulación de interacción y navegación
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema6/img12.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-3(data-aos="fade-down") El prototipado permite simular la interacción del usuario con la interfaz mediante la definición de eventos, estados y transiciones. Esta simulación facilita la representación del comportamiento del sistema frente a distintas acciones, permitiendo evaluar la coherencia del flujo de navegación y la respuesta de los elementos interactivos.
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") Asimismo, el modelado de la navegación permite establecer las rutas entre vistas y representar los recorridos que realiza el usuario dentro del sistema. Esta representación anticipada contribuye a identificar inconsistencias en la estructura de navegación y a ajustar el diseño para garantizar que las transiciones sean claras y mantengan el contexto de uso.
    p.mb-4(data-aos="fade-down") Para complementar la explicación sobre la simulación de interacción y navegación, a continuación, se presenta una representación que permite determinar cómo se estructuran los recorridos del usuario dentro de una interfaz. Esta imagen ilustra la relación entre pantallas, acciones y transiciones, facilitando la comprensión del flujo de navegación y del comportamiento del sistema antes de su implementación:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span Flujo de navegación y simulación de interacción en un prototipo de interfaz
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema6/img13.svg', alt='Figura 7 que representa un diagrama de navegación en un prototipo de interfaz móvil, mostrando la secuencia de pantallas, las acciones del usuario, las transiciones entre vistas y los distintos estados del sistema, con el fin de visualizar el recorrido del usuario y la lógica de interacción dentro de la aplicación.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/tema6/img13.svg', alt='Figura 7 que representa un diagrama de navegación en un prototipo de interfaz móvil, mostrando la secuencia de pantallas, las acciones del usuario, las transiciones entre vistas y los distintos estados del sistema, con el fin de visualizar el recorrido del usuario y la lógica de interacción dentro de la aplicación.')
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Organización de la información y definición de alcance
    p.mb-4(data-aos="fade-down") La organización de la información en los prototipos implica establecer jerarquías claras, agrupar elementos relacionados y definir relaciones funcionales entre los componentes. Esta estructuración permite que el contenido sea interpretado de manera ordenada, facilitando la comprensión de la interfaz y la identificación de posibles problemas en la disposición de los elementos.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") De manera complementaria, la definición del alcance del prototipo establece qué funcionalidades, vistas y componentes se incluyen en cada iteración. Esta delimitación permite enfocar el diseño en aspectos específicos del sistema, evitando una complejidad innecesaria y asegurando que el prototipo responda a los objetivos de evaluación definidos.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Iteración, validación y control del diseño
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img14.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El prototipado se desarrolla mediante un enfoque iterativo que permite revisar y ajustar la interfaz de forma progresiva. Cada iteración incorpora modificaciones basadas en la evaluación del prototipo, permitiendo refinar la estructura, la interacción y la navegación sin comprometer la coherencia general del diseño.
        br
        br
        p Este proceso se apoya en la validación técnica del prototipo, que analiza la consistencia estructural, la lógica de interacción y el comportamiento del sistema. El control de versiones facilita el seguimiento de los cambios realizados, permitiendo comparar ajustes y mantener un registro de la evolución del diseño hasta su consolidación.
    p.mb-4(data-aos="fade-down") Para finalizar, se relacionan los aspectos clave en la aplicación de técnicas de prototipado:
    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Simulación de interacción")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite anticipar la respuesta del sistema frente a las acciones del usuario, validando el comportamiento de los componentes y detectando posibles problemas de usabilidad antes de la implementación final.
          .row(numero="2" titulo="Modelado de navegación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Define rutas, transiciones y recorridos dentro de la interfaz, asegurando coherencia en el flujo de uso y facilitando una experiencia más intuitiva y consistente para el usuario.
          .row(numero="3" titulo="Iteración controlada")
            .col-12.mb-4.mb-md-0
              p.mb-0 Facilita la mejora progresiva del diseño a partir de la evaluación del prototipo, incorporando ajustes basados en pruebas, retroalimentación y validación funcional.
          .row(numero="4" titulo="Definición de alcance")
            .col-12.mb-4.mb-md-0
              p.mb-0 Delimita funcionalidades, pantallas y vistas incluidas en cada etapa del prototipado, estableciendo con claridad qué elementos se incluyen y cuáles quedan fuera, lo que permite una planificación más precisa, una mejor organización del trabajo y una gestión más eficiente del desarrollo del sistema.
          .row(numero="5" titulo="Transición a implementación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Utiliza el prototipo como referencia estructural y funcional para el desarrollo final, sirviendo como guía para la construcción del sistema, la integración de componentes y la validación de que lo diseñado se traduzca correctamente en el producto implementado.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/img15.jpg', alt='Imagen decorativa')
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Herramientas de apoyo y prototipos para aplicaciones <em>web</em>, <em>stand-alone</em> y móviles
    p.mb-4(data-aos="fade-down") Las herramientas de apoyo en el prototipado permiten construir representaciones de interfaces mediante entornos que integran funciones para diseñar, organizar y simular la interacción del usuario. Estas herramientas proporcionan componentes predefinidos, sistemas de organización visual y mecanismos para definir comportamientos sin necesidad de implementar código funcional completo. Su uso permite estructurar la interfaz bajo condiciones controladas, facilitando la creación de modelos que reflejan tanto la disposición de los elementos como la lógica de interacción dentro del sistema. La integración de estas herramientas en el proceso de diseño permite mantener coherencia en la construcción del prototipo y asegurar que los elementos se representen de manera uniforme.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Herramientas, entornos y recursos de prototipado
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C03.p-4.h-100.w-100
          .row.mb-0
            .col-lg-2.d-none.d-lg-block.mb-lg-3
              figure
                img(src='@/assets/curso/tema6/img17.svg', alt='Imagen decorativa')
            .col.col-12
              p.mb-0(data-aos="fade-down") La configuración de entornos de prototipado implica definir las condiciones técnicas bajo las cuales se desarrollan las representaciones de la interfaz, estableciendo herramientas, formatos de trabajo y estructuras de organización que permitan mantener coherencia en el proceso. Este entorno incluye espacios de trabajo, bibliotecas de componentes y parámetros que regulan la construcción de los prototipos.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema6/img16.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") Las herramientas de prototipado incorporan bibliotecas de componentes reutilizables, lo que permite construir interfaces de manera eficiente. La gestión de estas bibliotecas asegura consistencia visual y funcional en el diseño, facilitando la reutilización de elementos sin alterar su estructura original.
    p.mb-4(data-aos="fade-down") El uso de estas herramientas permite integrar diferentes etapas del diseño dentro de un mismo entorno, facilitando la transición entre la definición de la estructura, la simulación de la interacción y la evaluación del prototipo.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Prototipado según tipo de aplicación y plataforma
    p.mb-4(data-aos="fade-down") El prototipado varía según el tipo de aplicación y el entorno en el que será implementado:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema6/img18.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Aplicaciones <em>web</em>
            p.mb-0(data-aos="fade-down") Se enfoca en la representación de interfaces que operan en navegadores, considerando la estructura de páginas, navegación entre secciones y componentes dinámicos. Este tipo de prototipo define la organización del contenido, la jerarquía de la información y las rutas entre vistas.
          .col-xl.col-lg-6.tarjeta.tarjeta--C04.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema6/img19.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Aplicaciones <em>stand-alone</em>
            p.mb-0(data-aos="fade-down") El prototipado contempla interfaces que funcionan de manera independiente del navegador, operando directamente sobre el sistema operativo. Aquí se representan ventanas, menús y componentes propios de entornos de escritorio, definiendo la interacción mediante teclado y ratón.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema6/img20.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Aplicaciones móviles
            p.mb-0(data-aos="fade-down") El prototipado se orienta a interfaces táctiles, considerando tamaño de pantalla, orientación y gestos. Se simulan desplazamientos, cambios de vista y respuestas a eventos propios de dispositivos móviles.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C02.p-4.mb-0
          p.mb-0(data-aos="fade-down") Además, los prototipos pueden adaptarse a diferentes plataformas, manteniendo coherencia estructural para garantizar su funcionamiento en diversos entornos sin perder su lógica de interacción.
    .row.BG01.justify-content-center.px-4.py-4.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema6/img21.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .row.justify-content-center.mb-4
          .col.col-12
            .row.align-items-center.mb-0(data-aos="flip-down")
              .col-auto.pe-0(style="z-index:2")
                figure
                  img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
              .col-lg-auto.col-9.titulo01(style="z-index:1")
                .p-2
                  h3.mb-0.ms-lg-2.ms-md-3.ms-1 Simulación y validación del comportamiento del prototipo
        p.mb-4(data-aos="fade-down") Las herramientas de prototipado permiten simular la interacción del usuario mediante la definición de eventos, estados y transiciones entre vistas. Esta simulación permite anticipar el comportamiento del sistema antes de su implementación.
        p.mb-4(data-aos="fade-down") La simulación de interacción facilita la validación de la respuesta del sistema frente a acciones del usuario, permitiendo identificar inconsistencias en la lógica de uso.
        p.mb-0(data-aos="fade-down") Este proceso apoya la evaluación temprana del diseño, asegurando que la interfaz responda de forma coherente en diferentes escenarios de interacción.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Integración, colaboración y gestión del proceso de prototipado
    p(data-aos="fade-down") El prototipado se integra con el desarrollo mediante mecanismos que permiten trasladar la estructura del diseño al sistema final, asegurando coherencia entre lo diseñado y lo implementado. Esta sincronización facilita la transición entre diseño y desarrollo, reduciendo inconsistencias en la construcción del producto.
    p.mb-4(data-aos="fade-down") Las herramientas de prototipado también permiten la colaboración entre múltiples actores, posibilitando la edición compartida, la retroalimentación y la aplicación conjunta de ajustes sobre el mismo modelo.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img22.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La gestión de versiones permite registrar cambios en el prototipo, comparar iteraciones y mantener un historial del diseño, facilitando su evolución controlada.
        br
        br
        p Finalmente, los prototipos pueden ser documentados y exportados en distintos formatos, lo que permite su uso como referencia técnica en etapas posteriores del proyecto.
    p.mb-4(data-aos="fade-down") Para sintetizar los principales aspectos relacionados con las herramientas de apoyo y los procesos de prototipado en aplicaciones <em>web</em>, <em>stand-alone</em> y móviles, se presenta la siguiente tabla. En ella se organizan los bloques temáticos abordados, junto con su descripción general y los elementos clave que los componen, facilitando una visión global e integrada del contenido desarrollado:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 12.
          span Herramientas y procesos de prototipado
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Componente del prototipado
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Elementos clave
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Herramientas, entornos y recursos de prototipado.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Define el entorno técnico y las herramientas que permiten construir, organizar y gestionar prototipos de interfaces.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Configuración del entorno, bibliotecas de componentes, reutilización de elementos, coherencia del diseño.
              tr
                td(data-aos="fade-down") Prototipado según tipo de aplicación y plataforma.
                td(data-aos="fade-down") Describe cómo se construyen prototipos según el tipo de sistema y su entorno de ejecución.
                td(data-aos="fade-down") <em>web</em> (navegadores, navegación), <em>stand-alone</em> (escritorio), móvil (táctil, gestos), adaptación multiplataforma.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Simulación y validación del comportamiento.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Permite representar la interacción del usuario para anticipar el funcionamiento del sistema antes del desarrollo.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Eventos, estados, transiciones, simulación de interacción, validación de usabilidad.
              tr
                td(data-aos="fade-down") Integración, colaboración y gestión del proceso.
                td(data-aos="fade-down") Relaciona el prototipo con el desarrollo y la evolución del proyecto mediante trabajo colaborativo y control de versiones.
                td(data-aos="fade-down") Sincronización diseño-desarrollo, colaboración, control de versiones, documentación, exportación.
</template>

<script>
export default {
  name: 'Tema6',
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
