<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/intro/img01.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/intro/img02.svg', alt='Imagen decorativa')
      .col-lg-11.col-12
        p.mb-0 El desarrollo de soluciones digitales exige una comprensión integral tanto de la gestión de la información como del diseño de interfaces que permitan su uso eficiente. En este contexto, el presente contenido aborda de manera estructurada los fundamentos de bases de datos y el modelado de datos, estableciendo las bases para la organización, almacenamiento y recuperación de la información mediante modelos lógicos y relacionales.
    .row.BG01.justify-content-center.px-4.py-4.mb-0
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-10.col-12
          .cajon.cajon.C01.color-primario.p-4
            p.mb-0 A partir de ello, se profundiza en la estructura y organización de los datos, incorporando conceptos clave como diccionarios de datos, estándares de nombrado y procesos de normalización, los cuales garantizan coherencia, integridad y eficiencia en los sistemas de información. Paralelamente, se analizan aspectos relacionados con la gestión y seguridad de la información, incluyendo mecanismos de control de acceso y el uso de tecnologías de <em>Big data</em> para el tratamiento de grandes volúmenes de datos en entornos actuales.
      .row.justify-content-center.align-items-center.mb-0
        .col.col-lg-6.col-12.mb-lg-0.mb-3.order-lg-2.order-2
          p.mb-4(data-aos="fade-down") En una segunda línea de desarrollo, el contenido integra los fundamentos del diseño de interfaces gráficas, considerando principios visuales como la teoría del color, así como criterios de usabilidad, accesibilidad y estándares <em>web</em>. Esto permite diseñar experiencias de usuario coherentes y funcionales tanto en entornos <em>web</em> como móviles, apoyadas en el uso de <em>frameworks</em> <em>front-end</em> y enfoques de <em>web</em> semántica.
          p.mb-0(data-aos="fade-down") Finalmente, se abordan técnicas de prototipado de interfaces, que permiten materializar y validar propuestas de diseño antes de su implementación, utilizando herramientas especializadas para la construcción de prototipos en aplicaciones <em>web</em>, móviles y <em>stand-alone</em>. En conjunto, estos elementos proporcionan una visión completa para el desarrollo de soluciones tecnológicas estructuradas, seguras y centradas en el usuario.
        .col.col-lg-4.col-8.order-lg-1.order-1
          figure
              img(src='@/assets/curso/intro/img03.jpg', alt='Imagen decorativa')
</template>

<script>
export default {
  name: 'Introduccion',
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
