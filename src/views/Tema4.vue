<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Fundamentos del diseño de interfaces gráficas
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C03.p-4.h-100.w-100
          .row.mb-0
            .col-lg-2.d-none.d-lg-block.mb-lg-3
              figure
                img(src='@/assets/curso/tema4/img02.svg', alt='Imagen decorativa')
            .col.col-12
              p.mb-0(data-aos="fade-down") El diseño de interfaces gráficas se orienta a la construcción de entornos visuales estructurados que permiten la interacción efectiva entre el usuario y el sistema. Esta disciplina establece los principios mediante los cuales se organizan, presentan y comportan los elementos visuales en pantalla, definiendo una lógica de funcionamiento que facilita la interpretación de la información y el control de las acciones. La interfaz no se limita a su apariencia visual, sino que integra aspectos funcionales y estructurales que determinan cómo los componentes responden a los eventos del usuario, garantizando coherencia, estabilidad y previsibilidad en la interacción dentro del sistema.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img01.jpg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img03.svg', alt='Imagen decorativa')
      .col-lg-9.col-12
        p.mb-0 Desde esta perspectiva, el diseño de interfaces articula criterios de organización visual, comportamiento interactivo, representación de la información y adaptación a distintos contextos de uso, con el fin de asegurar que el sistema mantenga claridad operativa y consistencia en su funcionamiento.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") Los fundamentos del diseño de interfaces gráficas se desarrollan a partir de un conjunto de ejes conceptuales que estructuran la relación entre el usuario y el sistema. Estos ejes integran aspectos espaciales, visuales, funcionales y dinámicos que permiten comprender cómo se organizan los elementos, cómo se gestionan las interacciones y cómo se garantiza una experiencia de uso coherente. 
    p.mb-4(data-aos="fade-down") A continuación, se presentan las principales acciones del diseño de interfaces:
    .tarjeta.tarjeta--BG03.p-md-5.p-4.mb-4(data-aos="flip-down")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Organización visual y jerarquía de la información
              p.mb-0 La organización visual define la disposición estructurada de los elementos dentro de la interfaz, permitiendo diferenciar, agrupar y jerarquizar la información presentada. Este eje integra la distribución espacial, la alineación, los márgenes y las proporciones, estableciendo relaciones visuales claras entre los componentes. La jerarquía visual orienta la percepción del usuario, destacando los elementos principales frente a los secundarios mediante tamaños, contrastes y posiciones, facilitando la interpretación inmediata del contenido y reduciendo ambigüedades en la interacción.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema4/img04.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Comportamiento interactivo y gestión de eventos
              p.mb-0 El comportamiento de los componentes interactivos se basa en la definición de reglas que determinan cómo responde la interfaz a las acciones del usuario. Acá se integra la gestión de eventos, los cambios de estado y las transiciones entre vistas, asegurando que cada interacción produzca una respuesta previsible y coherente. La correcta gestión de eventos permite mantener un flujo de interacción estructurado, evitando respuestas inconsistentes y garantizando que el sistema opere bajo condiciones controladas.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema4/img05.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Estados visuales y retroalimentación del sistema
              p.mb-0 Los estados visuales representan las distintas condiciones en las que pueden encontrarse los elementos de la interfaz, como activación, inactividad, selección o error. Este eje articula la retroalimentación visual como un mecanismo mediante el cual el sistema comunica al usuario el resultado de sus acciones. Los cambios visuales asociados a estos estados permiten interpretar el funcionamiento del sistema en tiempo real, fortaleciendo la comprensión del contexto y facilitando la toma de decisiones durante la interacción.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema4/img06.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Representación y estructuración de la información
              p.mb-0 La representación de la información se centra en la forma en que los datos son organizados y presentados dentro de la interfaz para garantizar su comprensión y accesibilidad. Este eje integra la selección de formatos, la agrupación de contenidos y la estructuración de formularios, permitiendo que la información sea registrada, visualizada y procesada de manera clara. Una representación adecuada evita la saturación visual y asegura que los datos puedan ser interpretados y utilizados de forma efectiva dentro del sistema.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema4/img07.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Consistencia y coherencia del diseño
              p.mb-0 La consistencia en el diseño de interfaces gráficas se refiere a la uniformidad en la apariencia, disposición y comportamiento de los elementos a lo largo del sistema. Este principio permite que el usuario reconozca patrones de interacción y anticipe el funcionamiento de la interfaz sin necesidad de reaprender su uso en cada sección. La aplicación de reglas homogéneas garantiza estabilidad visual y funcional, fortaleciendo la predictibilidad y el control del entorno interactivo.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema4/img08.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Arquitectura de navegación y adaptación a entornos
              p.mb-0 La arquitectura de navegación define los recorridos y conexiones entre las diferentes vistas o pantallas del sistema, estableciendo rutas claras y jerarquizadas para el acceso a la información. Este eje se articula con la adaptación de la interfaz a distintos entornos de uso, considerando variaciones de dispositivos, tamaños de pantalla y condiciones de interacción. La combinación de estructuras de navegación claras y diseños adaptables permite que la interfaz mantenga coherencia funcional y accesibilidad en diversos contextos sin alterar su lógica interna.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema4/img09.jpg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img10.svg', alt='Imagen decorativa')
      .col-lg-9.col-12
        p.mb-0 La siguiente imagen ilustra un entorno de interfaz gráfica donde se integran la organización visual, la jerarquía de la información, el comportamiento interactivo y la consistencia del diseño, reflejando cómo estos fundamentos se materializan en una experiencia de uso clara, predecible y estructurada dentro de un sistema de información:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Estructura de una interfaz gráfica interactiva
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema4/img11.svg', alt='Figura 2 que contiene una interfaz gráfica moderna con organización estructurada de elementos, jerarquía visual clara, componentes interactivos y distribución coherente de la información en un entorno digital.')
        .col-auto.movil
          a.anexo.mb-0(:href="obtenerLink('/downloads/Anexo_Estructura_de_una_interfaz_grafica_interactiva.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Estructura de una interfaz gráfica interactiva
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Conceptos, características y teoría del color
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img12.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-3 El color en el diseño de interfaces gráficas constituye un recurso estructural y funcional que organiza la información visual y orienta la interacción del usuario con el sistema. Su uso no responde únicamente a criterios estéticos, sino a decisiones que influyen en la jerarquía visual, la identificación de componentes, la interpretación de estados y la legibilidad de los contenidos. En este sentido, el color actúa como un lenguaje visual que transmite significado y regula la forma en que el usuario percibe y utiliza la interfaz.
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") Desde una perspectiva perceptual y técnica, el color se comprende como el resultado de la interacción entre la luz y los dispositivos de visualización, siendo interpretado por el usuario dentro de un contexto gráfico determinado. En el diseño de interfaces, esta percepción se traduce en reglas de combinación, distribución y control cromático que buscan mantener coherencia visual, estabilidad funcional y claridad comunicativa en todo el sistema.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Propiedades, modelos y aplicación del color en interfaces digitales
    p(data-aos="fade-down") Las propiedades del color permiten definir cómo se representa y controla cada elemento visual dentro de la interfaz. Su correcta aplicación facilita la diferenciación de componentes y contribuye a una experiencia visual clara y ordenada.
    p.mb-4(data-aos="fade-down") Basado en lo anterior, se indican las principales propiedades del color aplicadas al diseño de interfaces y su función dentro de la composición visual:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img13.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Tono
            p.mb-0(data-aos="fade-down") Define la identidad básica del color y permite distinguir visualmente unos elementos de otros. En interfaces se utiliza para asignar significados específicos, como categorías, acciones o estados.
          .col-xl.col-lg-6.tarjeta.tarjeta--C04.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img14.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Saturación
            p.mb-0(data-aos="fade-down") Determina la intensidad del color y su nivel de pureza. Una saturación adecuada evita la fatiga visual y permite resaltar información relevante sin generar sobrecarga.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img15.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Luminosidad
            p.mb-0(data-aos="fade-down") Regula el nivel de brillo de los colores y es clave para asegurar el contraste entre texto y fondo, favoreciendo la visibilidad y la lectura.
          .col-xl.col-lg-6.tarjeta.tarjeta--C06.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img16.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Opacidad
            p.mb-0(data-aos="fade-down") Controla el grado de transparencia y se utiliza para superponer elementos, jerarquizar capas visuales y representar estados secundarios o inactivos.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.p-4.mb-0
          p.mb-0(data-aos="fade-down") Los modelos de color, a su vez, establecen la forma en que los valores cromáticos son generados, interpretados y visualizados en los dispositivos digitales. Su uso está directamente relacionado con el contexto de aplicación de la interfaz.
    p.mb-4(data-aos="fade-down") A partir de estos modelos de color, se presentan los sistemas más utilizados en entornos digitales y su aplicación dentro del diseño y desarrollo de interfaces:
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure.desktop
              img(src='@/assets/curso/tema4/img17.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--C04.p-4(x="23%" y="81.5%" numero="+")
            p.mb-0 Basado en la mezcla aditiva de luz, es el modelo predominante en pantallas digitales.
          .tarjeta.tarjeta--C04.p-4(x="46.5%" y="81.5%" numero="+")
            p.mb-0 Facilita el ajuste perceptual del color, siendo útil en procesos de diseño visual.
          .tarjeta.tarjeta--C04.p-4(x="70%" y="81.5%" numero="+")
            p.mb-0 Permite una codificación precisa del color, ampliamente utilizada en desarrollo <em>web</em>.
          .tarjeta.tarjeta--C04.p-4(x="93.5%" y="81.5%" numero="+")
            p.mb-0 Aunque es orientado a impresión, es relevante para la conversión de interfaces a formatos físicos.
    .row.justify-content-center.col-12.mb-0
        figure.movil
          img(src='@/assets/curso/tema4/img18.svg', alt='Imagen decorativa')
    .row.BG01.justify-content-center.px-4.py-4.mb-0
      .col.col-lg-4.col-8.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img19.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .row.justify-content-center
          .col
            p.mb-1(data-aos="fade-down") Por su parte, las relaciones cromáticas permiten combinar colores de manera controlada, asegurando armonía y coherencia dentro de la interfaz. Estas relaciones ayudan a estructurar visualmente el sistema y a evitar inconsistencias, destacando las siguientes: 
            ul.lista-ul--color.mt-1(data-aos="fade-down")
              li
                i.fas.fa-computer
                p.mb-0 Monocromática, basada en variaciones de un mismo tono, favorece la uniformidad.
              li
                i.fas.fa-computer
                p.mb-0 Complementaria, utiliza colores opuestos para generar contraste y destacar elementos clave.
              li
                i.fas.fa-computer
                p.mb-0 Análoga, emplea tonos cercanos para lograr continuidad visual.
              li
                i.fas.fa-computer
                p.mb-0 Triádica, equilibra tres colores para una distribución armónica y dinámica.
            p.mb-1(data-aos="fade-down") Para realizar la aplicación en el color, este se aplica directamente sobre los componentes de la interfaz para comunicar acciones, estados y contextos de uso. Su función es reforzar la interacción y facilitar la comprensión del sistema. Además, su accionar se da en lo siguiente:
            ul.lista-ul--color.mt-1(data-aos="fade-down")
              li
                i.fas.fa-computer
                p.mb-0 En botones, indica acciones disponibles o estados activos.
              li
                i.fas.fa-computer
                p.mb-0 En formularios, comunica validación, error o confirmación.
              li
                i.fas.fa-computer
                p.mb-0 En mensajes, señala información, advertencias o eventos del sistema.
              li
                i.fas.fa-computer
                p.mb-0 En fondos y contenedores, organiza visualmente el contenido y delimita áreas funcionales.
    p.mb-4(data-aos="fade-down") Otro aspecto fundamental, es el contraste cromático, el cual es un factor clave para garantizar la legibilidad y accesibilidad de la interfaz. Su gestión adecuada permite distinguir elementos, jerarquizar información y asegurar que los contenidos sean comprensibles en distintos contextos de uso. Los tipos de contrastes son:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/img20.svg", alt="alt").img80.m-auto
          h5.text-center Altos
          p Facilitan la lectura de textos principales al generar un contraste fuerte con el fondo. Se emplean en títulos, encabezados y elementos clave de la interfaz, garantizando que la información más importante sea fácilmente identificable y accesible para el usuario.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/img21.svg", alt="alt").img80.m-auto
          h5.text-center Medios
          p Organizan elementos secundarios sin competir visualmente con el contenido principal. Se utilizan en subtítulos, textos descriptivos y componentes de apoyo informativo, manteniendo una jerarquía visual clara y equilibrada dentro de la interfaz.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/img22.svg", alt="alt").img80.m-auto
          h5.text-center Bajos
          p Se reservan para componentes decorativos o de apoyo, como fondos, separadores o detalles visuales sutiles. Su función es acompañar el diseño sin distraer, permitiendo que los elementos principales mantengan el protagonismo visual.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-0
          .row.justify-content-center.align-items-center.mb-0
            .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema4/img23.svg', alt='Imagen decorativa')
            .col.col-lg-10.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") La gestión del color implica establecer criterios que regulen su uso de forma consistente a lo largo del sistema. Esto permite mantener coherencia visual, reforzar la jerarquía de la información y asegurar que la interfaz sea adaptable y accesible en distintos entornos.
    p.mb-4(data-aos="fade-down") Como síntesis del uso del color en interfaces gráficas, la siguiente tabla integra sus principales funciones, condiciones de aplicación y efectos en la experiencia del usuario:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Función del color en el diseño de interfaces
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Dimensión
                th(data-aos="fade-down")(style= "width: 20%") Función del color
                th(data-aos="fade-down")(style= "width: 20%") Condición de uso
                th(data-aos="fade-down")(style= "width: 20%") Impacto visual
                th(data-aos="fade-down")(style= "width: 20%") Efecto en la interfaz
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Organización.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Agrupar información.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Distribución visual.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Orden.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Claridad estructural.
              tr
                td(data-aos="fade-down") Jerarquía.
                td(data-aos="fade-down") Destacar elementos.
                td(data-aos="fade-down") Diferenciación.
                td(data-aos="fade-down") Enfoque.
                td(data-aos="fade-down") Prioridad visual.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Interacción.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Representar estados.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Acción del usuario.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Retroalimentación.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Comprensión inmediata.
              tr
                td(data-aos="fade-down") Legibilidad.
                td(data-aos="fade-down") Facilitar lectura.
                td(data-aos="fade-down") Contraste adecuado.
                td(data-aos="fade-down") Visibilidad.
                td(data-aos="fade-down") Accesibilidad.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Consistencia.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Mantener coherencia.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Uso uniforme.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Estabilidad.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Experiencia predecible.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Usabilidad, accesibilidad y estándares <em>web</em>
    p.mb-4(data-aos="fade-down") En conjunto, la usabilidad, la accesibilidad y los estándares <em>web</em> constituyen pilares fundamentales en el diseño de interfaces digitales, ya que permiten garantizar sistemas funcionales, comprensibles y adaptables a diferentes usuarios y contextos tecnológicos. La integración de estos elementos asegura no solo una correcta interacción entre el usuario y la interfaz, sino también la coherencia estructural, la inclusión y la calidad global de la experiencia digital.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Usabilidad en interfaces digitales
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img24.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-secundario.p-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") La usabilidad en interfaces digitales se refiere a la capacidad de un sistema para ser comprendido y utilizado de forma eficiente por los usuarios. Este principio se basa en la coherencia entre la estructura de la interfaz y las acciones del usuario, garantizando que la navegación sea intuitiva, los elementos sean identificables y las tareas puedan ejecutarse sin ambigüedad.
        p La interacción dentro del sistema se basa en acciones fundamentales como navegar, seleccionar, ingresar datos y recibir retroalimentación. Estas acciones determinan el comportamiento de la interfaz y la forma en que el usuario percibe la respuesta del sistema.
        p.mb-0 La siguiente tabla relaciona el accionar que se tiene bajo cada condición:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Condiciones de interacción
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Condición
                th(data-aos="fade-down")(style= "width: 25%") Acción del usuario
                th(data-aos="fade-down")(style= "width: 25%") Respuesta del sistema
                th(data-aos="fade-down")(style= "width: 25%") Resultado
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Navegación.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Desplazamiento.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Cambio de vista.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Fluidez.
              tr
                td(data-aos="fade-down") Selección.
                td(data-aos="fade-down") Elección de opción.
                td(data-aos="fade-down") Activación.
                td(data-aos="fade-down") Ejecución.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Entrada.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Registro de datos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Validación.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Control.
              tr
                td(data-aos="fade-down") Retroalimentación.
                td(data-aos="fade-down") Confirmación.
                td(data-aos="fade-down") Respuesta visual.
                td(data-aos="fade-down") Claridad.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Accesibilidad en la interfaz
    p(data-aos="fade-down") La accesibilidad busca garantizar que cualquier usuario pueda interactuar con la interfaz sin barreras, independientemente de sus condiciones físicas, cognitivas o tecnológicas. Este enfoque se apoya en principios que aseguran la percepción, operación, comprensión y compatibilidad del sistema.
    p.mb-4(data-aos="fade-down") Estos principios permiten que la información sea accesible y comprensible en distintos contextos de uso, mejorando la inclusión dentro de los sistemas digitales. Dentro de ellos se destacan:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-2.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row(titulo="Perceptibilidad")
            .col-12.mb-0.mb-md-0
              p Hace referencia a la capacidad del sistema para que el contenido sea claramente visible y comprensible para el usuario. Su enfoque se centra en la visualización adecuada de la información, mediante ajustes visuales que permiten una mejor comprensión de los elementos de la interfaz.
          .row(titulo="Operabilidad")
            .col-12.mb-0.mb-md-0
              p Se orienta a la posibilidad de que los usuarios puedan interactuar sin restricciones con los controles del sistema. Su enfoque está en el uso de los componentes de navegación, asegurando que cada elemento responda correctamente a las acciones del usuario y facilite la interacción dentro de la interfaz.
          .row(titulo="Comprensibilidad")
            .col-12.mb-0.mb-md-0
              p Se refiere a la facilidad con la que el usuario puede interpretar la información presentada. Su enfoque se basa en la organización del contenido, permitiendo que la estructura de la interfaz sea clara y lógica para facilitar su entendimiento durante el uso.
          .row(titulo="Robustez")
            .col-12.mb-0.mb-md-0
              p Implica la capacidad del sistema para mantenerse funcional en diferentes entornos tecnológicos. Su enfoque está en la adaptación y compatibilidad del sistema, garantizando su correcto funcionamiento en diversas plataformas y condiciones de uso.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img25.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Estándares <em>web</em> y estructura tecnológica
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img26.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Los estándares <em>web</em> definen las reglas que permiten que una interfaz funcione correctamente en diferentes plataformas. HTML estructura el contenido, CSS define la presentación visual y JavaScript gestiona el comportamiento dinámico. En conjunto, estos elementos garantizan coherencia, estabilidad y compatibilidad en el entorno digital.
    p.mb-4(data-aos="fade-down") A partir de los estándares <em>web</em> y su función en la estructura tecnológica de las interfaces, es posible comprender el proceso mediante el cual un navegador interpreta y transforma los recursos digitales en elementos visuales interactivos. Este flujo describe cómo el contenido, los estilos y el comportamiento se integran para construir la representación final de una página <em>web</em> en el entorno del usuario, tal como se ilustra en la siguiente imagen:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Proceso de interpretación y renderizado de una página <em>web</em> en el navegador
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema4/img27.svg', alt='Figura 3 que relaciona un diagrama del proceso de renderizado <em>web</em>, desde los recursos HTML y CSS hasta la construcción del DOM y CSSOM, la generación del render tree y la visualización final de la página en el navegador.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/tema4/img28.svg', alt='Figura 3 que relaciona un diagrama del proceso de renderizado <em>web</em>, desde los recursos HTML y CSS hasta la construcción del DOM y CSSOM, la generación del render tree y la visualización final de la página en el navegador.')
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img29.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-2 Igualmente, es importante saber que la organización del contenido se basa en la jerarquía visual y la relación entre los elementos. Texto, imágenes, navegación y contenedores se distribuyen estratégicamente para guiar la atención del usuario y facilitar la comprensión de la información.
        p.mb-2 Esta organización permite mejorar la lectura, el acceso a la información y la coherencia visual dentro del sistema.
        .cajon.cajon.C01.color-primario.p-4.py-3.mb-2
          p.mb-0(data-aos="fade-down") Como proceso final, la experiencia de usuario se evalúa analizando la interacción real con el sistema, considerando tiempos de respuesta, errores, satisfacción y fluidez de uso. Este análisis permite identificar oportunidades de mejora en el diseño de la interfaz.
        p.mb-2 La interacción dentro del sistema se basa en acciones fundamentales como navegar, seleccionar, ingresar datos y recibir retroalimentación. Estas acciones determinan el comportamiento de la interfaz y la forma en que el usuario percibe la respuesta del sistema.
        p.mb-0 Por otro lado, la adaptación a estándares tecnológicos asegura que la interfaz funcione correctamente en distintos dispositivos y contextos. Esto implica ajustes en responsividad, compatibilidad, escalabilidad e interoperabilidad.
</template>

<script>
export default {
  name: 'Tema4',
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
