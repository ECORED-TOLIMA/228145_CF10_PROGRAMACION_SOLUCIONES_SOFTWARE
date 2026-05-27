<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Estructura y organización de los datos
    figure.mb-4
      img(src='@/assets/curso/tema2/img01.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") La estructura y organización de los datos corresponde al proceso mediante el cual la información es definida y dispuesta bajo un esquema lógico que permite su manejo dentro de un sistema. Este proceso establece criterios claros para identificar los elementos, agruparlos de forma coherente y regular su uso, asegurando una representación consistente y evitando ambigüedades en su interpretación.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img02.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") Los datos no se gestionan de manera aislada, sino integrados en estructuras que permiten su diferenciación, caracterización y control. Esta organización facilita su manipulación dentro del sistema y garantiza que las operaciones se ejecuten de forma ordenada y coherente.
        .row.justify-content-center.mb-4
          .col.col-12
            .row.align-items-center.mb-0(data-aos="flip-down")
              .col-auto.pe-0(style="z-index:2")
                figure
                  img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
              .col-lg-auto.col-9.titulo01(style="z-index:1")
                .p-2
                  h3.mb-0.ms-lg-2.ms-md-3.ms-1 Componentes fundamentales de la organización de los datos
        .row.justify-content-center.mb-0
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img03.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 La organización de los datos se apoya en un conjunto reducido de componentes que permiten definir cómo la información es representada y gestionada dentro del sistema. Estos componentes establecen la base lógica que orienta la disposición de los datos y su comportamiento frente a las operaciones del sistema.
    p.mb-4(data-aos="fade-down") Con el propósito de detallar cómo se estructuran estos elementos dentro del sistema, se presenta una organización técnica que describe los componentes principales involucrados, junto con su función y el efecto que generan en la estructura de los datos:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img04.svg' alt='AvatarTop')
          h4.text-center Identificación
          p Consiste en la definición de las unidades de datos que conforman el sistema, permitiendo distinguir cada elemento de manera clara y generar una adecuada diferenciación dentro de la estructura.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img05.svg' alt='AvatarTop')
          h4.text-center Clasificación
          p Corresponde a la agrupación de los datos según características comunes, lo que facilita el orden y la organización coherente de la información.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img06.svg' alt='AvatarTop')
          h4.text-center Atributos
          p Describen las propiedades y características de cada elemento, aportando precisión y detalle en la representación de los datos.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img07.svg' alt='AvatarTop')
          h4.text-center Relaciones
          p Establecen los vínculos entre los distintos elementos del sistema, posibilitando la integración de la información dentro de la estructura de datos.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img08.svg' alt='AvatarTop')
          h4.text-center Reglas
          p Definen las condiciones de uso y validación de los datos, asegurando el control y la consistencia de la información almacenada.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Organización lógica de los datos en el sistema
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img09.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-3 Una vez definidos los componentes básicos, los datos se disponen dentro de estructuras lógicas que permiten su interpretación, manipulación y gestión bajo criterios uniformes. Esta organización define la forma en que los datos se relacionan, cómo pueden ser modificados y bajo qué condiciones se accede a ellos, manteniendo estabilidad en la estructura del sistema.
        .cajon.cajon.C01.color-primario.px-4.py-4.mb-0
          p.mb-0(data-aos="fade-down") El control de los datos se ejerce mediante la aplicación de reglas que aseguran su validez y coherencia a lo largo del tiempo. Estas condiciones evitan inconsistencias, preservan la integridad de la información y garantizan que las operaciones realizadas no alteren la estructura definida.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Preparación estructural previa a la implementación
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img10.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Antes de ser incorporados a un sistema de bases de datos, los datos deben pasar por un proceso de preparación estructural que permita validar su organización y asegurar su correcta integración. Esta etapa se orienta a revisar las estructuras definidas, ajustar la organización de la información y aplicar criterios que reduzcan errores en etapas posteriores.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.p-4.mb-0
          p.mb-0(data-aos="fade-down") Este proceso contribuye a que los datos sean implementados de manera ordenada, manteniendo coherencia en su estructura y facilitando su uso dentro del sistema.
    p.mb-4(data-aos="fade-down") Con el propósito de describir cómo se desarrolla este proceso de preparación, se presenta una organización técnica que detalla las etapas involucradas, las acciones que se realizan en cada una y el resultado que se obtiene en términos de preparación de los datos para su implementación:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/img11.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center A. Análisis
            p.mb-0(data-aos="fade-down") En esta etapa se identifican los datos que serán incorporados al sistema, estableciendo una base estructural que permite una organización inicial de la información.
          .col-xl.col-lg-6.tarjeta.tarjeta--C04.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/img12.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center B. Diseño
            p.mb-0(data-aos="fade-down") A partir de los datos identificados, se definen las estructuras necesarias para su organización, dando como resultado un modelo lógico que prepara la información para su posterior uso.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/img13.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center C. Ajuste
            p.mb-0(data-aos="fade-down") En esta fase se aplican reglas y restricciones sobre las estructuras definidas, permitiendo el control de los datos y la optimización de su organización.
          .col-xl.col-lg-6.tarjeta.tarjeta--C06.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/img14.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center D. Validación
            p.mb-0(data-aos="fade-down") Finalmente, se realiza una verificación estructural que asegura la consistencia de los datos, dejando la información lista para su implementación dentro del sistema.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Diccionario de datos y estándares de nombrado
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C03.p-4.h-100.w-100
          .row.mb-0
            .col-lg-2.d-none.d-lg-block.mb-lg-3
              figure
                img(src='@/assets/curso/tema2/img16.svg', alt='Imagen decorativa')
            .col.col-12
              p.mb-0(data-aos="fade-down") La correcta gestión de la información dentro de un sistema requiere no solo estructuras de almacenamiento adecuadas, sino también mecanismos que permitan definir, documentar y mantener consistencia en la forma en que los datos son interpretados y utilizados. En este contexto, el diccionario de datos y los estándares de nombrado cumplen un rol fundamental al proporcionar un marco común que regula la definición de los elementos de información y asegura uniformidad en su identificación a lo largo del sistema.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img15.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Con el fin de presentar una visión sintética de los elementos que intervienen en este proceso, a continuación, se relaciona una tabla que integra los componentes clave del diccionario de datos y los criterios asociados a los estándares de nombrado, junto con su propósito dentro del sistema:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Síntesis del diccionario de datos y estándares de nombrado
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Elemento
                th(data-aos="fade-down")(style= "width: 35%") Función principal
                th(data-aos="fade-down")(style= "width: 35%") Aporte a la estructura
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Diccionario de datos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Documentar formalmente los elementos de información.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Claridad y coherencia.
              tr
                td(data-aos="fade-down") Atributos.
                td(data-aos="fade-down") Describir propiedades de los datos.
                td(data-aos="fade-down") Precisión.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Metadatos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Especificar características técnicas.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Control.
              tr
                td(data-aos="fade-down") Estándares de nombrado.
                td(data-aos="fade-down") Regular la asignación de nombres.
                td(data-aos="fade-down") Uniformidad.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Reglas y dominios.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Validar valores permitidos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Consistencia.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Diccionario de datos como estructura de referencia
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img17.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-3 El diccionario de datos es una estructura organizada que permite documentar de manera formal los elementos que componen un sistema de información. Su función principal es definir qué representa cada dato, cómo se estructura y bajo qué condiciones debe ser utilizado, actuando como un repositorio técnico que aporta claridad y coherencia a la gestión de la información.
        .cajon.cajon.C01.color-primario.px-4.py-4.mb-0
          p.mb-0(data-aos="fade-down") Este recurso no se limita a listar datos, sino que establece un nivel de detalle que garantiza una interpretación uniforme, evitando ambigüedades y facilitando la integración de la información dentro de los distintos componentes del sistema.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Definición y formalización de los elementos de datos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img18.svg', alt='Imagen decorativa')
      .col-lg-11.col-12
        p.mb-0 La formalización de los datos implica describir atributos como el tipo de dato, la longitud, los valores permitidos y las relaciones existentes entre los elementos. Esta definición permite que cada dato tenga una identidad clara y un comportamiento controlado dentro del sistema, asegurando consistencia en su uso y facilitando su administración a lo largo del tiempo.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.p-4.mb-0
          p.mb-0(data-aos="fade-down") Asimismo, la incorporación de metadatos proporciona información adicional sobre las características y restricciones de los datos, fortaleciendo el control y la calidad de la estructura de información.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img19.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .row.justify-content-center.mb-4
          .col.col-12
            .row.align-items-center.mb-0(data-aos="flip-down")
              .col-auto.pe-0(style="z-index:2")
                figure
                  img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
              .col-lg-auto.col-9.titulo01(style="z-index:1")
                .p-2
                  h3.mb-0.ms-lg-2.ms-md-3.ms-1 Estándares de nombrado y consistencia de la información
        .row.justify-content-center.mb-3
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img20.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 Los estándares de nombrado establecen reglas que regulan la forma en que se asignan los nombres a los elementos del sistema. Estas reglas buscan mantener uniformidad, evitar duplicidades y asegurar que los nombres reflejen el propósito del dato de manera clara y comprensible.
        p.mb-0(data-aos="fade-down") La aplicación consistente de estos estándares facilita la identificación de los datos, mejora la comprensión de la estructura de información y contribuye al mantenimiento del sistema, ya que los elementos conservan una nomenclatura coherente a lo largo del tiempo.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Componentes del diccionario de datos
    p.mb-4(data-aos="fade-down") El diccionario de datos integra componentes que permiten describir técnica y funcionalmente cada elemento de información, entre los cuales se destacan:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img21.svg' alt='AvatarTop')
          h4.text-center Nombre del dato
          p Identifica el elemento dentro del sistema bajo una convención definida, permitiendo reconocerlo de forma clara y consistente en los distintos procesos donde se utiliza.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img22.svg' alt='AvatarTop')
          h4.text-center Tipo de dato
          p Clasifica la naturaleza de la información y define su forma de almacenamiento, determinando el formato y las operaciones que pueden aplicarse sobre el dato.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img23.svg' alt='AvatarTop')
          h4.text-center Longitud
          p Establece límites y restricciones de tamaño para el dato, contribuyendo al control de la información almacenada y a la eficiencia de la estructura de datos.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img24.svg' alt='AvatarTop')
          h4.text-center Dominio
          p Define los valores permitidos para el dato y valida su uso, asegurando que la información registrada cumpla con las condiciones establecidas en el sistema.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img25.svg' alt='AvatarTop')
          h4.text-center Descripción
          p Documenta el significado y el contexto del dato, facilitando su correcta interpretación y uso por parte de los diferentes actores del sistema.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img26.svg' alt='AvatarTop')
          h4.text-center Convención
          p Regula la forma de nombrar los elementos, estableciendo criterios comunes que garantizan uniformidad y coherencia en la nomenclatura de los datos.
    p.mb-4(data-aos="fade-down") Estos componentes permiten mantener una estructura ordenada, comprensible y controlada.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Aplicación y mantenimiento del diccionario de datos
    p.mb-4(data-aos="fade-down") El uso del diccionario de datos fortalece la organización del sistema al proporcionar una referencia centralizada para la gestión de la información. Esto reduce errores de interpretación, mejora la coherencia en el uso de los datos y facilita su reutilización en diferentes procesos.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-0(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img27.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Dado que los sistemas evolucionan, el diccionario de datos debe mantenerse actualizado, incorporando nuevos elementos y ajustando definiciones o estándares cuando sea necesario. Este mantenimiento continuo garantiza que la estructura de datos conserve su consistencia y calidad a lo largo del tiempo.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Normalización y formas normales en bases de datos
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img28.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-3 La normalización es un proceso técnico orientado a organizar la información dentro de una base de datos bajo criterios formales que permiten eliminar inconsistencias, evitar redundancias y asegurar una representación ordenada de los datos. Este proceso se apoya en un conjunto de reglas que guían la descomposición de estructuras complejas en unidades más simples, garantizando que cada dato cumpla una función específica dentro del sistema y que su gestión se realice de forma coherente.
        .cajon.cajon.C02.color-secundario.px-4.py-4.mb-0
          p.mb-0(data-aos="fade-down") La aplicación de la normalización no se concibe como una acción aislada, sino como una estructuración progresiva de los datos. A través de distintos niveles, se revisa y ajusta la forma en que los datos se agrupan y se relacionan, transformando esquemas iniciales que pueden contener duplicidades o dependencias innecesarias en estructuras más claras, consistentes y controladas. Este enfoque permite que las operaciones sobre la información se ejecuten bajo condiciones estables y previsibles.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Formas normales y organización de los datos
    p(data-aos="fade-down") Las formas normales representan niveles específicos dentro del proceso de normalización, cada uno asociado a condiciones que deben cumplirse para mejorar la organización de los datos. Estas formas permiten evaluar la estructura de la base de datos y determinar si presenta redundancias, dependencias incorrectas o relaciones inadecuadas. A medida que se avanza entre formas normales, la estructura se vuelve más depurada y coherente.
    p.mb-4(data-aos="fade-down") De manera general, las principales formas normales se caracterizan por los siguientes criterios:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Primera forma normal (1FN)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Elimina grupos repetitivos dentro de las estructuras de datos y asegura que cada atributo contenga valores atómicos, es decir, no divisibles, estableciendo una organización básica y uniforme de la información.
          .row(numero="2" titulo="Segunda forma normal (2FN)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Elimina dependencias parciales respecto de la clave primaria, garantizando que todos los atributos no clave dependan completamente de la clave y evitando redundancias derivadas de relaciones incompletas.
          .row(numero="3" titulo="Tercera forma normal (3FN)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Elimina dependencias transitivas entre atributos no clave, asegurando que estos dependan únicamente de la clave primaria y no de otros atributos, lo que mejora la coherencia y estabilidad de la estructura.
          .row(numero="4" titulo="Forma normal de Boyce-Codd (BCNF)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Refuerza el control de las dependencias funcionales, exigiendo que todo determinante sea una clave candidata, lo que permite una organización más rigurosa y precisa de las relaciones entre los datos.
          .row(numero="5" titulo="Formas superiores (4FN y 5FN)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Abordan dependencias multivaluadas y dependencias de unión, respectivamente, permitiendo una descomposición más avanzada de las estructuras y un control estructural más estricto para garantizar la integridad del modelo de datos.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img29.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Dependencias, redundancia y control estructural
    p.mb-0(data-aos="fade-down") Un elemento central en la normalización es la identificación de las dependencias entre los datos. Estas dependencias determinan cómo un atributo se relaciona con otro y bajo qué condiciones puede ser derivado. Un análisis adecuado permite detectar relaciones incorrectas que generan duplicidades o inconsistencias y ajustar la estructura para que cada dato dependa únicamente de los elementos necesarios para su definición.
    .row.BG01.justify-content-center.px-4.py-4.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img30.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Como resultado de este proceso, se logra una organización sin redundancia, donde cada dato se almacena una sola vez y se vincula con otros mediante relaciones bien definidas. Esta disposición facilita la actualización de la información, mejora la eficiencia del almacenamiento y reduce el riesgo de inconsistencias cuando se realizan modificaciones en el sistema.
        p.mb-0 Una base de datos normalizada presenta un mayor control estructural, ya que las reglas que regulan el almacenamiento, la relación y la modificación de los datos se aplican de manera consistente. Esto permite mantener la coherencia de la información frente a diferentes operaciones y evita errores derivados de una organización deficiente.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Descomposición y preservación del esquema
    p.mb-4(data-aos="fade-down") La normalización implica la descomposición de relaciones que presentan múltiples dependencias en subconjuntos más simples, sin pérdida de información y conservando la capacidad de reconstrucción mediante operaciones de unión. Esta descomposición se realiza siguiendo criterios formales basados en dependencias funcionales, garantizando que cada relación resultante sea coherente y manejable.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img31.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Durante este proceso, es fundamental asegurar la preservación de dependencias, de modo que las reglas que describen las relaciones entre atributos sigan siendo válidas después de la transformación del esquema. Asimismo, la verificación del esquema permite confirmar la correcta asignación de claves, la ausencia de redundancias y la consistencia general de la estructura, asegurando que el modelo resultante sea técnicamente sólido y operativo.
    p.mb-4(data-aos="fade-down") Para finalizar, se presentan los elementos que permiten evaluar de manera más técnica cómo se comporta la normalización en distintos niveles, considerando no solo las condiciones de cada forma normal, sino también aspectos operativos como el tipo de dependencia tratada, el nivel de descomposición aplicado y el impacto estructural que se genera en el esquema de datos:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Evaluación técnica del proceso de normalización en bases de datos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 15%") Nivel de normalización
                th(data-aos="fade-down")(style= "width: 17%") Tipo de dependencia tratada
                th(data-aos="fade-down")(style= "width: 17%") Acción de descomposición
                th(data-aos="fade-down")(style= "width: 17%") Criterio de validación
                th(data-aos="fade-down")(style= "width: 17%") Resultado estructural
                th(data-aos="fade-down")(style= "width: 17%") Impacto en la gestión
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") 1FN.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Dependencias básicas.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Separación de grupos repetitivos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Atomicidad de atributos.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Estructura uniforme.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Mejora en organización inicial.
              tr
                td(data-aos="fade-down") 2FN.
                td(data-aos="fade-down") Dependencias parciales.
                td(data-aos="fade-down") División de atributos no dependientes de la clave completa.
                td(data-aos="fade-down") Dependencia total de clave primaria.
                td(data-aos="fade-down") Relación depurada.
                td(data-aos="fade-down") Reducción de redundancia.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") 3FN.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Dependencias transitivas.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Eliminación de atributos derivados.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Independencia entre atributos no clave.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Esquema optimizado.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Mayor coherencia en datos.
              tr
                td(data-aos="fade-down") BCNF.
                td(data-aos="fade-down") Dependencias funcionales complejas.
                td(data-aos="fade-down") Reestructuración basada en determinantes.
                td(data-aos="fade-down") Determinantes como claves.
                td(data-aos="fade-down") Control estructural avanzado.
                td(data-aos="fade-down") Precisión en relaciones.
              tr
                td(data-aos="fade-down")(style="background-color: #F3F9FF") 4FN.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Dependencias multivaluadas.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Separación de atributos independientes.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Eliminación de multivalores.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Estructura especializada.
                td(data-aos="fade-down")(style="background-color: #F3F9FF") Mejora en consistencia.
              tr
                td(data-aos="fade-down") 5FN.
                td(data-aos="fade-down") Dependencias de unión.
                td(data-aos="fade-down") Fragmentación de relaciones complejas.
                td(data-aos="fade-down") Reconstrucción sin pérdida.
                td(data-aos="fade-down") Máxima descomposición.
                td(data-aos="fade-down") Integridad avanzada del modelo.
</template>

<script>
export default {
  name: 'Tema2',
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
