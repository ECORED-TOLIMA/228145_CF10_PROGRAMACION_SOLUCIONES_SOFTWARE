<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Gestión y seguridad de la información
    figure.mb-4
      img(src='@/assets/curso/tema3/img01.jpg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img02.svg', alt='Imagen decorativa')
      .col-lg-11.col-12
        p.mb-0 La gestión de la información dentro de un sistema comprende el conjunto de prácticas orientadas a administrar los datos de manera controlada a lo largo de su ciclo de vida. Este proceso define cómo se organizan, almacenan, acceden y procesan los datos, así como las responsabilidades asociadas a su manejo, con el fin de garantizar su disponibilidad, integridad y uso adecuado dentro del entorno tecnológico.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.px-3.py-4
          p.mb-0(data-aos="fade-down") En este contexto, la seguridad de la información se integra como un componente transversal de la gestión, orientado a proteger los datos frente a accesos no autorizados, modificaciones indebidas o pérdidas. Para ello, se aplican controles que regulan el comportamiento de la información durante todo su ciclo de vida, asegurando que su uso se mantenga dentro de condiciones previamente definidas.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Control de acceso y gestión de permisos
    p(data-aos="fade-down") El control de acceso constituye uno de los principales mecanismos de seguridad, ya que define bajo qué condiciones los usuarios o sistemas pueden interactuar con la información. A través de la asignación de permisos, se regulan las acciones permitidas sobre los datos, evitando manipulaciones indebidas y garantizando que cada actor acceda únicamente a la información que le corresponde.
    p.mb-4(data-aos="fade-down") Los principales enfoques de control de acceso pueden describirse de la siguiente manera:
    .row.mb-4
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          h5.text-center Control discrecional
          p Donde los permisos se asignan directamente a usuarios específicos, permitiendo un manejo detallado del acceso a la información.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          h5.text-center Control obligatorio
          p Basado en reglas definidas por el sistema, que imponen restricciones estructurales más estrictas sobre el uso de los datos.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h5.text-center Control basado en roles
          p Asigna permisos según perfiles o funciones, facilitando la organización y administración de los accesos.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.C01.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          h5.text-center Control basado en atributos
          p Considera condiciones dinámicas como el contexto, permitiendo un acceso flexible pero controlado.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Mecanismos de protección de la información
    p(data-aos="fade-down") La protección de la información se apoya en la aplicación de mecanismos que aseguran la confidencialidad, integridad y disponibilidad de los datos. Estos mecanismos actúan de forma complementaria para evitar accesos no autorizados y garantizar la estabilidad de la información dentro del sistema.
    p.mb-4(data-aos="fade-down") Entre los principales mecanismos se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img03.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Autenticación
            p.mb-0(data-aos="fade-down") Permite verificar de manera confiable la identidad de los usuarios antes de conceder acceso al sistema, asegurando que solo actores legítimos puedan interactuar con los datos y recursos disponibles.
          .col-xl.col-lg-6.tarjeta.tarjeta--C04.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img04.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Autorización
            p.mb-0(data-aos="fade-down") Regula el uso y alcance del acceso a los datos mediante la asignación de permisos previamente definidos, garantizando que cada usuario solo pueda realizar las acciones acordes con su rol o responsabilidad.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img05.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Cifrado
            p.mb-0(data-aos="fade-down") Protege la información tanto en reposo como en tránsito mediante técnicas criptográficas, evitando que los datos puedan ser interpretados o utilizados por terceros no autorizados incluso si son interceptados.
          .col-xl.col-lg-6.tarjeta.tarjeta--C06.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img06.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Auditoría
            p.mb-0(data-aos="fade-down") Registra de forma sistemática las actividades realizadas sobre los datos y el sistema, facilitando el seguimiento, la detección de anomalías y el control posterior de las operaciones realizadas.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Gestión del ciclo de vida de la información
    p.mb-0(data-aos="fade-down") La información dentro de un sistema atraviesa diferentes etapas desde su creación hasta su eliminación. La gestión del ciclo de vida permite controlar cada una de estas fases, asegurando que los datos sean tratados de forma coherente y bajo condiciones definidas en todo momento.
    .row.BG01.justify-content-center.px-4.py-4.mb-0
      .col.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Este proceso comprende:
        ol.lista-ol--cuadro.lista-ol--separador
          li.mb-3
            .lista-ol--cuadro__vineta
              span.text-bold 1
            p.mb-0 Autenticación orientada a la verificación confiable de la identidad de los usuarios antes de permitir el acceso al sistema
          li.mb-3
            .lista-ol--cuadro__vineta
              span.text-bold 2
            p.mb-0 Autorización enfocada en regular el uso y alcance de los datos mediante permisos definidos según roles
          li.mb-3
            .lista-ol--cuadro__vineta
              span.text-bold 3
            p.mb-0 Cifrado aplicado para proteger la información tanto en almacenamiento como en transmisión frente a accesos no autorizados
          li.mb-3
            .lista-ol--cuadro__vineta
              span.text-bold 4
            p.mb-0 Auditoría destinada al registro y seguimiento de las actividades realizadas sobre los datos y el sistema para fines de control y trazabilidad.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Monitoreo y control de la información
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img07.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El monitoreo de la información permite supervisar de manera continua el comportamiento de los datos dentro del sistema, identificando accesos indebidos, inconsistencias o desviaciones frente a las condiciones establecidas. Este proceso facilita la detección temprana de eventos que puedan afectar la integridad o seguridad de la información.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.p-4
          p.mb-0(data-aos="fade-down") Las acciones de monitoreo incluyen el registro de actividades, la generación de alertas ante comportamientos anómalos, el análisis de inconsistencias y la elaboración de reportes que apoyan la supervisión y toma de decisiones.
    p.mb-4(data-aos="fade-down") Basado en lo anterior, se presenta la siguiente tabla integrada de gestión y seguridad de la información:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Gestión, protección y control de la información en el sistema
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Dimensión
                th(data-aos="fade-down")(style= "width: 25%") Mecanismo principal
                th(data-aos="fade-down")(style= "width: 25%") Acción aplicada
                th(data-aos="fade-down")(style= "width: 25%") Resultado en el sistema
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Control de acceso.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Asignación de permisos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Regulación del uso de datos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Acceso controlado.
              tr
                td(data-aos="fade-down") Protección.
                td(data-aos="fade-down") Autenticación y cifrado.
                td(data-aos="fade-down") Verificación y resguardo.
                td(data-aos="fade-down") Seguridad de la información.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Ciclo de vida.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Gestión por etapas.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Tratamiento controlado.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Consistencia.
              tr
                td(data-aos="fade-down") Monitoreo.
                td(data-aos="fade-down") Registro y auditoria.
                td(data-aos="fade-down") Seguimiento continuo.
                td(data-aos="fade-down") Trazabilidad.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Control.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Alertas y análisis.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Detección de anomalías.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Estabilidad.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Seguridad de la información y control de acceso
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C03.p-4.h-100.w-100
          .row.mb-0
            .col-lg-2.d-none.d-lg-block.mb-lg-3
              figure
                img(src='@/assets/curso/tema3/img09.svg', alt='Imagen decorativa')
            .col.col-12
              p.mb-0(data-aos="fade-down") La seguridad de la información se orienta a establecer condiciones que regulan el acceso, uso y tratamiento de los datos dentro de un sistema, garantizando que la información permanezca bajo control en distintos escenarios operativos. Este enfoque integra mecanismos que permiten verificar la identidad de los usuarios, restringir las acciones que pueden realizar y supervisar el uso de los datos, asegurando que las operaciones se ejecuten conforme a reglas previamente definidas.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema3/img08.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") Dentro de este marco, el control de acceso determina quién puede interactuar con la información, bajo qué condiciones y con qué nivel de autorización. La correcta aplicación de estos controles permite segmentar el acceso, organizar los permisos y evitar la manipulación no autorizada de los datos, manteniendo una gestión estructurada de la información.
    p.mb-4(data-aos="fade-down") Para comprender cómo se implementan estos mecanismos, se presenta a continuación una organización técnica de los modelos de control de acceso, considerando su forma de asignación y el efecto que generan en la seguridad del sistema:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Modelos de control de acceso en sistemas de información
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Modelo de control
                th(data-aos="fade-down")(style= "width: 20%") Método de asignación
                th(data-aos="fade-down")(style= "width: 20%") Nivel de restricción
                th(data-aos="fade-down")(style= "width: 20%") Tipo de validación
                th(data-aos="fade-down")(style= "width: 20%") Resultado en la gestión
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Discrecional.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Definido por el usuario.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Bajo.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Permisos directos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Flexibilidad.
              tr
                td(data-aos="fade-down") Obligatorio.
                td(data-aos="fade-down") Definido por el sistema.
                td(data-aos="fade-down") Alto.
                td(data-aos="fade-down") Reglas estrictas.
                td(data-aos="fade-down") Control rígido.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Basado en roles.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Agrupación por perfiles.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Medio.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Asignación por función.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Organización.
              tr
                td(data-aos="fade-down") Basado en atributos.
                td(data-aos="fade-down") Condiciones dinámicas.
                td(data-aos="fade-down") Variable.
                td(data-aos="fade-down") Evaluación contextual.
                td(data-aos="fade-down") Adaptabilidad.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Validación, protección y gestión del acceso a la información
    p(data-aos="fade-down") La seguridad de la información no se limita al control de acceso, sino que incorpora mecanismos que permiten validar las acciones, proteger el contenido y supervisar el uso de los datos. Estos mecanismos operan de forma integrada para garantizar que cada interacción con la información sea coherente con las políticas establecidas y se realice dentro de un entorno controlado.
    p.mb-0(data-aos="fade-down") En este contexto, se consideran los siguientes mecanismos fundamentales:
    .row.BG01.justify-content-center.px-4.py-4.mb-0
      .col.col-12.order-lg-1.order-2
        ol.lista-ol--cuadro.lista-ol--separador
          li.mb-3
            .lista-ol--cuadro__vineta
              span.text-bold 1
            p.mb-0 Autenticación orientada a verificar de forma confiable la identidad de los usuarios antes de conceder acceso al sistema.
          li.mb-3
            .lista-ol--cuadro__vineta
              span.text-bold 2
            p.mb-0 Autorización enfocada en regular el uso de los datos mediante permisos definidos según roles, funciones o condiciones específicas.
          li.mb-3
            .lista-ol--cuadro__vineta
              span.text-bold 3
            p.mb-0 Cifrado aplicado para proteger la información durante su almacenamiento y transmisión, evitando su interpretación por terceros no autorizados.
          li.mb-3
            .lista-ol--cuadro__vineta
              span.text-bold 4
            p.mb-0 Auditoría destinada al registro y seguimiento de las actividades realizadas sobre los datos, permitiendo control y trazabilidad.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img10.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .row.justify-content-center.mb-2
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img11.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 La gestión de identidades permite definir y administrar las entidades que interactúan con el sistema, estableciendo cómo se representan los usuarios y cómo se verifica su identidad. A partir de esta gestión se estructuran los permisos y privilegios, asignando a cada usuario únicamente las capacidades necesarias para cumplir su función, lo que reduce la exposición innecesaria de la información.
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") De forma complementaria, el control de sesiones regula el tiempo y las condiciones bajo las cuales un usuario permanece activo. Este control permite supervisar la persistencia del acceso, establecer cierres automáticos y asegurar que las operaciones se realicen dentro de un contexto validado, evitando accesos prolongados sin supervisión.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Políticas, trazabilidad e integridad de la información
    p.mb-4(data-aos="fade-down") Las políticas de acceso establecen reglas que determinan cómo se concede y restringe el acceso a los datos, considerando factores como el rol del usuario, el contexto de uso o el tipo de recurso. Estas políticas permiten evaluar cada solicitud bajo criterios definidos, manteniendo coherencia en la gestión de accesos.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") El registro de actividades y la trazabilidad de las operaciones permiten documentar las acciones realizadas sobre la información, identificando quién accede, qué modifica y cuándo lo hace. Este historial contribuye al control del sistema y facilita la detección de comportamientos que se desvían de las condiciones establecidas.
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img12.svg', alt='Imagen decorativa')
      .col-lg-9.col-12
        p.mb-0 Finalmente, el control de integridad y la validación de operaciones aseguran que los datos se mantengan coherentes durante su manipulación. Estos mecanismos verifican que las relaciones entre los datos permanezcan correctas y que las modificaciones cumplan con las reglas definidas, garantizando estabilidad y confiabilidad en la estructura del sistema.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 <em>Big data</em> y aplicaciones en el manejo de datos
    p.mb-4(data-aos="fade-down") El <em>Big data</em> se refiere al tratamiento y gestión de grandes volúmenes de datos cuya magnitud, diversidad y velocidad de generación superan las capacidades de las herramientas tradicionales. Este tipo de información exige infraestructuras especializadas que permitan almacenar, procesar e integrar datos provenientes de múltiples fuentes, manteniendo su disponibilidad y utilidad en distintos contextos operativos.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img13.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La gestión de <em>Big data</em> se apoya en arquitecturas distribuidas que fragmentan los datos en múltiples nodos y habilitan el procesamiento paralelo, reduciendo tiempos de respuesta y mejorando la eficiencia del sistema. Estas arquitecturas permiten manejar información estructurada, semiestructurada y no estructurada, favoreciendo la flexibilidad y la adaptabilidad frente a escenarios cambiantes. En este entorno, el valor del <em>Big data</em> no reside únicamente en el almacenamiento, sino en la capacidad de transformar grandes volúmenes de datos en información significativa para el análisis y la toma de decisiones.
    p.mb-4(data-aos="fade-down") Igualmente, se poseen la siguiente dimensiones:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Las cinco dimensiones del <em>Big data</em>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema3/img14.svg', alt='Figura 1 que menciona las 5 dimensiones o 5 “V” del <em>Big data</em>, las cuales son: volumen, velocidad, variedad, veracidad y valor.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/tema3/img15.svg', alt='Figura 1 que menciona las 5 dimensiones o 5 “V” del <em>Big data</em>, las cuales son: volumen, velocidad, variedad, veracidad y valor.')
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        p.mb-0 Basado en la anterior imagen, se debe saber que el comportamiento del <em>Big data</em> dentro de los sistemas de información se comprende a partir de cinco dimensiones que definen sus exigencias técnicas y operativas: el volumen representa la cantidad masiva de datos que deben ser almacenados y gestionados; la velocidad se relaciona con la generación continua de información y la necesidad de procesamiento oportuno; la variedad alude a la coexistencia de múltiples formatos y fuentes de datos; la veracidad se vincula con la calidad y confiabilidad de la información; mientras que el valor se manifiesta cuando los datos procesados generan conocimiento útil para apoyar decisiones.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Componentes funcionales del <em>Big data</em>
    p.mb-4(data-aos="fade-down") A continuación, se presentan los principales componentes que articulan el funcionamiento del <em>Big data</em> dentro de los sistemas de información:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Almacenamiento distribuido")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite conservar grandes volúmenes de datos mediante su distribución en múltiples nodos, garantizando disponibilidad y tolerancia a fallos.
          .row(numero="2" titulo="Procesamiento a gran escala")
            .col-12.mb-4.mb-md-0
              p.mb-0 Facilita la ejecución simultánea de operaciones sobre conjuntos extensos de datos, ya sea en tiempo real o por lotes, optimizando el rendimiento del sistema.
          .row(numero="3" titulo="Integración de datos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Posibilita la unificación de información proveniente de diversas fuentes mediante procesos de extracción, transformación y carga, manteniendo coherencia estructural.
          .row(numero="4" titulo="Análisis de datos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Transforma los datos en información interpretable a través de enfoques descriptivos, diagnósticos, predictivos y prescriptivos.
          .row(numero="5" titulo="Gestión de la calidad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Aplica controles para asegurar que los datos sean consistentes, completos, precisos y actualizados antes de su uso.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img16.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Uso del <em>Big data</em> en los sistemas de información
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img17.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") En los sistemas de información, el <em>Big data</em> permite organizar, analizar y monitorear grandes conjuntos de datos de manera continua. Su aplicación fortalece el control de la información, facilita la generación de conocimiento y mejora la capacidad del sistema para responder a necesidades operativas y estratégicas. Al integrar procesamiento, análisis y control de calidad, el <em>Big data</em> se convierte en un elemento transversal que soporta la gestión eficiente de la información.
        p.mb-0 Con el fin de integrar de manera sintética los principales elementos abordados sobre el <em>Big data</em> en sistemas de información, se presenta a continuación una tabla integradora que articula las dimensiones técnicas, operativas y funcionales involucradas en su gestión. Esta organización permite identificar de forma conjunta cómo el almacenamiento, el procesamiento, la integración, el análisis y la calidad de los datos se relacionan dentro del sistema y contribuyen a una gestión eficiente de grandes volúmenes de información:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Integración del <em>Big data</em> en sistemas de información
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Dimensión global
                th(data-aos="fade-down")(style= "width: 20%") Descripción general
                th(data-aos="fade-down")(style= "width: 20%") Enfoque técnico
                th(data-aos="fade-down")(style= "width: 20%") Función operativa
                th(data-aos="fade-down")(style= "width: 20%") Impacto en el sistema
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Almacenamiento.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Gestión de grandes volúmenes de datos heterogéneos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Arquitecturas distribuidas y flexibles.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Conservación y acceso eficiente a la información.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Alta disponibilidad y tolerancia a fallos.
              tr
                td(data-aos="fade-down") Procesamiento.
                td(data-aos="fade-down") Ejecución de operaciones sobre datos a gran escala.
                td(data-aos="fade-down") Procesamiento paralelo, <em>batch</em> y <em>streaming</em>.
                td(data-aos="fade-down") Reducción de tiempos de respuesta.
                td(data-aos="fade-down") Mejora del rendimiento y la eficiencia.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Integración.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Unificación de datos provenientes de múltiples fuentes.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Procesos de extracción, transformación y carga.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Coherencia estructural de la información.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Consolidación y consistencia de los datos.
              tr
                td(data-aos="fade-down") Análisis.
                td(data-aos="fade-down") Interpretación de grandes conjuntos de datos.
                td(data-aos="fade-down") Técnicas descriptivas, predictivas y prescriptivas.
                td(data-aos="fade-down") Generación de conocimiento.
                td(data-aos="fade-down") Apoyo a la toma de decisiones.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Calidad de datos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Control de la confiabilidad de la información.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Validación, verificación y depuración.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Garantía de datos consistentes y actualizados.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Información confiable y utilizable.
              tr
                td(data-aos="fade-down") Gestión del sistema.
                td(data-aos="fade-down") Uso integral del <em>Big data</em> en entornos operativos.
                td(data-aos="fade-down") Coordinación de almacenamiento, procesamiento y análisis.
                td(data-aos="fade-down") Supervisión y control continuo.
                td(data-aos="fade-down") Fortalecimiento de la gestión de la información.
</template>

<script>
export default {
  name: 'Tema3',
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
