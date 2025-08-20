<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            p.mb-4 La salud ambiental y sanitaria en la comunidad está determinada por múltiples factores que van más allá de la atención médica. Las condiciones del entorno, los determinantes sociales, el acceso a servicios básicos y las dinámicas comunitarias inciden directamente en el bienestar de la población. 
            .tarjeta.tarjeta--BGC02.p-3.mb-3(style="background-color:#E0F6E1; border-radius:none !important")
              .row.justify-content-center
                .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/introduccion/img-01.svg', alt='Imagen decorativa')
                .col-lg-10.col-12.mb-0.order-lg-2.order-2.mb-lg-0
                  p.mb-0 Este componente formativo tiene como propósito fortalecer la capacidad para diagnosticar riesgos ambientales y sanitarios presentes en el territorio, a través de la identificación de factores críticos, el análisis de las condiciones de vida y la aplicación de herramientas técnicas y metodologías participativas. Para ello, se abordan conceptos como salud ambiental, normativa vigente, determinantes sociales y técnicas de diagnóstico comunitario. 

          .col-lg-3.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/introduccion/img-02.svg', alt='Imagen decorativa')
    
    p.mb-5(data-aos="flip-up") A partir de este proceso, los aprendices desarrollan habilidades para recolectar, organizar e interpretar información, aplicar escalas de valoración y clasificar riesgos mediante matrices. Esta formación contribuye a una comprensión integral del entorno y a la toma de decisiones informadas en salud pública desde un enfoque participativo y contextualizado. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
