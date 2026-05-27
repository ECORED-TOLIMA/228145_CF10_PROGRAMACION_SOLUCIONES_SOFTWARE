<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los fundamentos de las bases de datos y el modelado de datos, incluyendo conceptos, características, tipos y la construcción de modelos lógicos y relacionales, así como la organización de la información mediante diccionarios de datos, estándares de nombrado y procesos de normalización que optimizan la integridad y eficiencia en el manejo de los datos. También integra la gestión y seguridad de la información, considerando el control de acceso y el uso de <em>Big data</em> para el análisis de grandes volúmenes de datos en contextos de apoyo a la toma de decisiones.
    p Asimismo, se desarrollan los fundamentos del diseño de interfaces gráficas, incluyendo teoría del color, usabilidad, accesibilidad y estándares <em>web</em>, junto con el diseño de interfaces para aplicaciones <em>web</em> y móviles mediante <em>frameworks</em> <em>front-end</em> y <em>web</em> semántica. Finalmente, se aborda el prototipado de interfaces de usuario, sus conceptos, técnicas y herramientas de apoyo para distintas plataformas, destacando su función en la simulación, validación y mejora del diseño antes de su implementación.
    .row.justify-content-center
      .col.col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que organiza los principales componentes del desarrollo de sistemas de información, iniciando con los fundamentos de bases de datos y el modelado de datos como base para la estructuración de la información, seguido de la organización de los datos y la gestión de su seguridad para garantizar integridad, control y análisis eficiente. Posteriormente, integra los fundamentos del diseño de interfaces gráficas y el diseño de interfaces para aplicaciones <em>web</em> y móviles, considerando la usabilidad, accesibilidad y adaptación a diferentes plataformas. Finalmente, incorpora el prototipado de interfaces de usuario como etapa clave que permite simular, validar y optimizar el diseño antes de su implementación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
