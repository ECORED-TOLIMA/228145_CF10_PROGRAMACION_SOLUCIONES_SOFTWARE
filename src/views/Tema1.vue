<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de bases de datos y modelado de datos
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img01.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .row.justify-content-center.mb-2
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img02.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 Los fundamentos de bases de datos y del modelado de datos proporcionan el marco conceptual para estructurar, representar y gestionar la información dentro de un sistema. Este proceso implica transformar datos dispersos en estructuras coherentes que permitan su almacenamiento, acceso y manipulación de forma controlada. El modelado de datos actúa como un mecanismo de abstracción que posibilita representar la realidad del negocio mediante estructuras formales, facilitando su comprensión y su posterior implementación en sistemas de bases de datos.
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") La organización de la información se apoya en la identificación de los elementos relevantes del sistema, la definición de sus características y el establecimiento de relaciones entre ellos, junto con la aplicación de reglas que garantizan coherencia y consistencia. Estos elementos se articulan a lo largo de distintos niveles de representación —conceptual, lógico y físico— que permiten avanzar desde una visión general del dominio hacia su ejecución técnica, reduciendo ambigüedades y errores en el diseño.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Proceso y niveles del modelado de datos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img03.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El modelado de datos sigue una secuencia estructurada que inicia con la comprensión del contexto y los requerimientos del sistema, continúa con la organización formal de la información y finaliza con su implementación y operación. Este proceso permite eliminar redundancias, definir reglas de integridad y preparar los datos para su uso eficiente. En este marco, los datos interactúan dinámicamente con el sistema de información, siendo capturados, procesados, almacenados y consultados para generar información significativa que apoye la toma de decisiones.
    p.mb-4(data-aos="fade-down") La siguiente tabla sintetiza los componentes esenciales del modelo de datos, los niveles de abstracción y las formas básicas de interacción con el sistema, integrando los elementos clave del diseño y la gestión de la información:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Clasificación estructural de bases de datos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Aspecto clave
                th(data-aos="fade-down")(style= "width: 25%") Elemento
                th(data-aos="fade-down")(style= "width: 25%") Función principal
                th(data-aos="fade-down")(style= "width: 25%") Resultado esperado
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Estructura de datos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Entidades y atributos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Representar los elementos y sus características.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Identificación clara.
              tr
                td(data-aos="fade-down") Estructura de datos.
                td(data-aos="fade-down") Relaciones.
                td(data-aos="fade-down") Conectar los datos de forma coherente.
                td(data-aos="fade-down") Integración.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Estructura de datos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Reglas y dominios.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Controlar valores y condiciones.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Consistencia.
              tr
                td(data-aos="fade-down") Modelos de datos.
                td(data-aos="fade-down") Conceptual.
                td(data-aos="fade-down") Comprender la realidad del negocio.
                td(data-aos="fade-down") Visión global.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Modelos de datos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Lógico.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Organizar los datos sin dependencia técnica.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Preparación del diseño.
              tr
                td(data-aos="fade-down") Modelos de datos.
                td(data-aos="fade-down") Físico.
                td(data-aos="fade-down") Implementar el modelo en la base de datos.
                td(data-aos="fade-down") Operación.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Interacción sistema.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Entrada y proceso.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Capturar y transformar los datos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Información útil.
              tr
                td(data-aos="fade-down") Interacción sistema.
                td(data-aos="fade-down") Consulta y control.
                td(data-aos="fade-down") Acceder y validar la información.
                td(data-aos="fade-down") Uso confiable.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Conceptos, características y tipos de bases de datos
    figure.mb-0
      img(src='@/assets/curso/tema1/img04.jpg', alt='Imagen decorativa')
    .row.BG01.justify-content-center.px-4.py-4.mb-0
      .col.col-lg-12.col-12.mb-lg-0.mb-3.order-lg-2.order-2
        p(data-aos="fade-down") Las bases de datos constituyen el núcleo de los sistemas de información modernos, al proporcionar los mecanismos necesarios para almacenar, organizar y gestionar grandes volúmenes de datos de manera estructurada y controlada. Su importancia radica en que permiten transformar datos aislados en información coherente, accesible y confiable, facilitando su uso en distintos contextos organizacionales y tecnológicos. A través de reglas, estructuras y procesos definidos, una base de datos garantiza la consistencia de la información, el acceso concurrente de múltiples usuarios y la protección de los datos frente a errores o accesos no autorizados. Comprender sus conceptos fundamentales, características técnicas y tipos resulta esencial para analizar cómo se diseñan, implementan y utilizan dentro de un sistema de información.
        p.mb-0(data-aos="fade-down") A partir de este marco general, se presenta un enfoque integrado de las bases de datos como componentes esenciales para la organización, gestión y uso controlado de la información dentro de los sistemas de información:
    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C02" data-aos="zoom-in")
      .row.justify-content-center(titulo="Bases de datos como sistemas de gestión de información")
        .col-12.col-lg-6.order-lg-1.order-2
          p Una base de datos es un sistema estructurado que permite almacenar, organizar y gestionar información de forma ordenada dentro de un entorno definido. Su función no se limita a conservar datos, sino que los dispone bajo una lógica que facilita su consulta, modificación y control de manera eficiente y consistente. Este funcionamiento se sustenta en un conjunto de reglas internas que determinan cómo se almacenan los datos, cómo se accede a ellos y bajo qué condiciones pueden ser modificados, garantizando la coherencia de la información a lo largo del tiempo.
          p.mb-0 En este sentido, la base de datos actúa como un componente fundamental en la gestión de la información, ya que posibilita el uso controlado de los datos dentro de un sistema, evitando la desorganización, la redundancia y la pérdida de información. Su operación se articula a través de un sistema gestor que coordina las interacciones entre los usuarios y los datos almacenados.
        .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema1/img05.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Conceptos fundamentales y características técnicas")
        .col-12.col-lg-6.order-lg-1.order-2
          p Desde una perspectiva conceptual, una base de datos organiza la información en conjuntos de datos estructurados bajo un esquema definido, administrados por un sistema que controla el almacenamiento, el acceso y la manipulación de los datos. Este sistema se apoya en estructuras que permiten la consulta eficiente de la información y en reglas que garantizan la integridad, la consistencia y el control de concurrencia en entornos donde múltiples usuarios interactúan de manera simultánea.
          p.mb-0 Entre las principales características técnicas de una base de datos se encuentran la persistencia de los datos para su almacenamiento a largo plazo, la integridad mediante la aplicación de reglas que evitan inconsistencias, la concurrencia que permite el acceso simultáneo de varios usuarios, la seguridad a través del control de accesos y permisos, y la capacidad de recuperación que garantiza la restauración de la información ante fallos o errores del sistema.
        .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema1/img06.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Funcionamiento interno y gestión del acceso a los datos")
        .col-12.col-lg-6.order-lg-1.order-2
          p El funcionamiento interno de una base de datos se fundamenta en un conjunto de procesos controlados por el sistema gestor de bases de datos, encargado de ejecutar operaciones sobre la información almacenada. Estas operaciones incluyen la inserción de nuevos datos, la consulta de información existente, la actualización de registros y la eliminación de datos cuando es necesario, todas ellas reguladas por reglas que aseguran la coherencia y estabilidad del sistema.
          p.mb-0 De manera complementaria, la gestión del acceso a los datos regula quién puede interactuar con la información y qué acciones puede ejecutar. Para ello, se definen usuarios, roles y permisos que restringen el acceso según niveles de autorización, garantizando la seguridad y el control dentro del sistema de bases de datos.
        .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema1/img07.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Tipos de bases de datos y su comportamiento")
        .col-12.col-lg-6.order-lg-1.order-2
          p Las bases de datos pueden clasificarse según distintos criterios, entre ellos su estructura y su uso. Según su estructura, se distinguen modelos que organizan la información en tablas, jerarquías, redes o esquemas flexibles, lo que influye directamente en la forma en que los datos se relacionan, se consultan y se modifican. Según su uso, existen bases de datos orientadas a la gestión transaccional en tiempo real, al análisis de grandes volúmenes de información, a entornos distribuidos o a escenarios que priorizan la velocidad de acceso.
          p.mb-0 El comportamiento de una base de datos varía en función del modelo adoptado, afectando aspectos como el nivel de estructuración de los datos, la adaptabilidad frente a cambios, la escalabilidad del sistema y el grado de control sobre la consistencia de la información. Estas diferencias permiten seleccionar el tipo de base de datos más adecuado según los requerimientos del entorno y las necesidades del sistema.
        .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema1/img08.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img09.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .row.justify-content-center.mb-2
          .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
            p.mb-0(data-aos="fade-down") En conjunto, las bases de datos proporcionan una infraestructura esencial para la gestión eficiente de la información, al integrar estructuras, reglas y procesos que aseguran la coherencia, disponibilidad y seguridad de los datos. El análisis de sus conceptos, características y tipos permite comprender cómo se articulan los distintos modelos y enfoques en el diseño de sistemas de información robustos y confiables.
          p.mb-0(data-aos="fade-down") Con el fin de consolidar los elementos abordados —estructura, funcionamiento interno, tipos y comportamiento de las bases de datos—, la siguiente tabla presenta una síntesis integrada que reúne los aspectos más relevantes, ofreciendo una perspectiva global del papel que desempeñan las bases de datos dentro de un sistema de información:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Síntesis integrada de bases de datos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Enfoque
                th(data-aos="fade-down")(style= "width: 20%") Tipo / Elemento
                th(data-aos="fade-down")(style= "width: 20%") Organización / Operación
                th(data-aos="fade-down")(style= "width: 20%") Característica clave
                th(data-aos="fade-down")(style= "width: 20%") Resultado principal
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Estructura.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Relacional.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Tablas y relaciones.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Consistencia alta.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Datos estructurados.
              tr
                td(data-aos="fade-down") Estructura.
                td(data-aos="fade-down") No relacional (NoSQL).
                td(data-aos="fade-down") Documentos / claves.
                td(data-aos="fade-down") Flexibilidad.
                td(data-aos="fade-down") Escalabilidad.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Estructura.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Jerárquica / red.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Árbol / grafo.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Dependencia estructural.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Navegación eficiente.
              tr
                td(data-aos="fade-down") Uso.
                td(data-aos="fade-down") Transaccional.
                td(data-aos="fade-down") Operaciones en tiempo real.
                td(data-aos="fade-down") Respuesta inmediata.
                td(data-aos="fade-down") Registro confiable.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Uso.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Analítica.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Procesamiento masivo.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Análisis de datos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Información estratégica.
              tr
                td(data-aos="fade-down") Funcionamiento.
                td(data-aos="fade-down") Inserción y consulta.
                td(data-aos="fade-down") Escritura / lectura.
                td(data-aos="fade-down") Persistencia.
                td(data-aos="fade-down") Almacenamiento y acceso.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Funcionamiento.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Actualización y control.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Modificación / validación.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Integridad.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Consistencia.
              tr
                td(data-aos="fade-down") Comportamiento.
                td(data-aos="fade-down") Distribuida.
                td(data-aos="fade-down") Datos fragmentados.
                td(data-aos="fade-down") Alta disponibilidad.
                td(data-aos="fade-down") Escalabilidad.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Modelo lógico de datos y modelo relacional
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img10.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El modelo lógico de datos define la forma en que la información se organiza y representa dentro de un sistema a partir de una estructura clara y formal, manteniendo independencia respecto a la implementación física o a la tecnología utilizada. En este nivel, se establecen las bases que permiten ordenar los datos de manera coherente, identificando cómo se agrupan, cómo se relacionan entre sí y bajo qué condiciones pueden interactuar. Asimismo, se determinan las reglas que controlan el comportamiento de la información, incluyendo los vínculos entre los diferentes elementos y las restricciones que aseguran su consistencia dentro del sistema. Este enfoque permite construir una representación estructurada que facilita la comprensión del diseño y prepara la información para su posterior desarrollo en un entorno de bases de datos.
    p.mb-4(data-aos="fade-down") A continuación, se da una explicación de ambos modelos:
    TabsC.color-acento-botones.mb-4(data-aos="flip-up")
      .py-3.py-md-4(titulo="Modelo lógico de datos")
        .row.justify-content-center.p-4
          .col-lg-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img11.jpg', alt='Imagen decorativa')
          .col-lg-8.order-lg-2.order-2
            p.mb-2 El modelo lógico de datos define la estructura organizada de la información mediante una representación formal e independiente de la tecnología. En este nivel se establecen entidades, atributos y relaciones de forma abstracta, permitiendo organizar los datos en estructuras coherentes antes de su implementación física. Asimismo, se asignan tipos y restricciones a los atributos, se determinan asociaciones que reflejan dependencias entre los datos y se aplican reglas de integridad que permiten validar la coherencia del modelo.
            p.mb-0 Este modelo cumple una función clave dentro del diseño de bases de datos, ya que permite estructurar la información desde una perspectiva general, facilitando su análisis, validación y ajuste previo a su traducción a un esquema específico de almacenamiento.
      .py-3.py-md-4(titulo="Modelo relacional")
        .row.justify-content-center.p-4
          .col-lg-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img12.jpg', alt='Imagen decorativa')
          .col-lg-8.order-lg-2.order-2
            p.mb-4 El modelo relacional organiza la información a partir de estructuras tabulares, donde cada conjunto de datos se representa en tablas compuestas por filas y columnas. En este modelo, las claves permiten identificar de manera única cada registro, mientras que las referencias controladas establecen relaciones entre las tablas, garantizando la coherencia de los datos.
            p.mb-0 Este enfoque incorpora reglas operativas que regulan el comportamiento de la información, tales como la unicidad de los registros, la integridad referencial y la aplicación de restricciones que aseguran la consistencia del sistema. Gracias a estas reglas, el modelo relacional permite gestionar, consultar y mantener los datos de forma controlada dentro de un sistema de bases de datos.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Componentes y reglas comunes en el diseño de datos
    p.mb-4(data-aos="fade-down") Tanto el modelo lógico como el modelo relacional se apoyan en componentes que permiten organizar y controlar la información dentro del sistema. Estos componentes incluyen la definición de estructuras formales para agrupar los datos, la asignación de atributos con tipos y restricciones, el establecimiento de relaciones que integran la información y la aplicación de reglas que garantizan la consistencia y validez de los datos.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-0
          .row.justify-content-center.align-items-center.mb-0
            .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema1/img13.svg', alt='Imagen decorativa')
            .col.col-lg-10.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") En el caso del modelo relacional, estas reglas adquieren un carácter más operativo, al materializarse en restricciones formales que controlan la unicidad, los dominios permitidos, la obligatoriedad de los datos y la coherencia entre estructuras relacionadas.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Procesos de transformación y estructuración del modelo
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img14.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") El desarrollo del modelo lógico y su posterior adaptación al modelo relacional implica una secuencia de procesos orientados a transformar la información desde una representación inicial hasta una organización formal lista para su implementación. Este flujo inicia con la abstracción de los datos relevantes, continúa con su organización en estructuras lógicas, avanza con el establecimiento de relaciones y finaliza con la aplicación de restricciones que aseguran la consistencia del modelo.
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img15.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 Este proceso progresivo permite validar la coherencia de la información en cada etapa, reducir errores en el diseño y establecer una base sólida para la construcción del sistema dentro de un entorno de bases de datos.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C03.p-4.h-100.w-100
          .row.mb-0
            .col-lg-2.d-none.d-lg-block.mb-lg-3
              figure
                img(src='@/assets/curso/tema1/img17.svg', alt='Imagen decorativa')
            .col.col-12
              p.mb-0(data-aos="fade-down") En conjunto, el modelo lógico y el modelo relacional representan niveles complementarios dentro del diseño de bases de datos. Mientras el primero se orienta a la organización estructural de la información desde una perspectiva general, el segundo traduce esa estructura en un esquema operativo que permite la manipulación directa de los datos. Comprender la relación y diferenciación entre ambos modelos resulta fundamental para diseñar sistemas de información coherentes, consistentes y preparados para su implementación.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema1/img16.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Basado en lo anterior, se presenta una tabla comparativa que sintetiza las principales diferencias operativas entre ambos modelos, permitiendo apreciar de forma clara su nivel de abstracción, tipo de representación, enfoque y mecanismos de validación:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Modelo lógico vs. modelo relacional
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Criterio
                th(data-aos="fade-down")(style= "width: 35%") Modelo lógico
                th(data-aos="fade-down")(style= "width: 35%") Modelo relacional
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Nivel de abstracción.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Alto.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Medio.
              tr
                td(data-aos="fade-down") Tipo de representación.
                td(data-aos="fade-down") Estructural.
                td(data-aos="fade-down") Tabular.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Enfoque principal.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Organización de la información.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Manipulación de los datos.
              tr
                td(data-aos="fade-down") Componentes clave.
                td(data-aos="fade-down") Entidades, atributos y relaciones.
                td(data-aos="fade-down") Tablas, claves y restricciones.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Validación.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Reglas conceptuales.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Restricciones formales.
              tr
                td(data-aos="fade-down") Resultado en el diseño.
                td(data-aos="fade-down") Preparación del modelo.
                td(data-aos="fade-down") Esquema operativo.
</template>

<script>
export default {
  name: 'Tema1',
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
