<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El componente formativo aborda la salud ambiental y la normativa asociada, incluyendo los factores de riesgo presentes en el entorno comunitario y el marco normativo que regula esta área. También se estudian los determinantes sociales y las condiciones de vida, analizando la relación entre el ambiente, las condiciones de vida y la salud, así como situaciones específicas de salud pública en el territorio. Se profundiza en el diagnóstico participativo en salud ambiental, revisando sus principios, las técnicas aplicadas y los procesos de organización e interpretación de la información recolectada. Finalmente, se examina la valoración y clasificación de riesgos ambientales mediante el uso de escalas, la aplicación de matrices de riesgo y la elaboración de mapas que permitan identificar y priorizar las amenazas existentes.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se describe el proceso para valorar y clasificar riesgos ambientales, desde el uso de escalas y matrices para medir y priorizar amenazas, hasta la elaboración de mapas de riesgo que representan gráficamente las áreas vulnerables y facilitan una gestión preventiva y efectiva.")
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
