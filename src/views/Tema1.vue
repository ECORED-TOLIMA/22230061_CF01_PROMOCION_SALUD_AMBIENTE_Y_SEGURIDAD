<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Salud ambiental y normativa asociada

    p(data-aos="fade-right") La salud ambiental es un campo de estudio y acción interdisciplinaria que analiza la interacción entre las personas y su entorno, con el fin de identificar, prevenir y controlar los factores que pueden afectar la salud humana y la calidad de vida. Este enfoque integra disciplinas como la epidemiología ambiental, la toxicología, la ecología, la ingeniería sanitaria y la salud pública, lo que permite una comprensión integral de los determinantes ambientales que inciden en los perfiles de morbilidad y mortalidad de la población.

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La Organización Mundial de la Salud (OMS) define la salud ambiental como “aquellos aspectos de la salud humana, incluida la calidad de vida, que están determinados por factores físicos, químicos, biológicos, sociales y psicosociales del ambiente”. Esta definición destaca que los riesgos ambientales no se limitan a contaminantes visibles, sino que también incluyen condiciones estructurales, sociales y culturales que, desde el entorno, pueden comprometer la salud de los individuos y las comunidades.
        .row.justify-content-center.align-items-center
          .col-lg-2.d-lg-flex.d-none
            img.mx-auto(src='@/assets/curso/temas/tema1/icono.svg' alt="Imagen decorativa")
          .col-lg-10
            p.mb-0 La normativa en salud ambiental en Colombia establece lineamientos para la identificación, control y vigilancia de estos riesgos, promoviendo entornos saludables y la corresponsabilidad de los actores sociales e institucionales en la gestión del ambiente.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img-01.svg' alt="Imagen decorativa")

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Factores de riesgo en el entorno comunitario

    p(data-aos="fade-right") Un factor de riesgo es cualquier característica, condición o exposición del individuo o del entorno que incrementa la probabilidad de desarrollar una enfermedad o sufrir un daño a la salud. En el ámbito de la salud ambiental, estos factores están asociados a condiciones físicas, químicas, biológicas o sociales presentes en el entorno que pueden afectar negativamente el bienestar de las personas y las comunidades.
    p.mb-4(data-aos="fade-right") En el contexto colombiano, los factores de riesgo ambiental son múltiples y presentan una distribución desigual, reflejo de las profundas inequidades territoriales y sociales. Entre los más frecuentes se destacan:

    .bg-c1.px-md-5.px-4.mb-5
      .row.justify-content-center(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema1/icono-01.svg' alt='Imagen decorativa')
            p.mb-0 Contaminación del agua por vertimientos domésticos, industriales o agrícolas, que comprometen la potabilidad del recurso y generan enfermedades gastrointestinales, parasitarias e infecciones de origen hídrico.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema1/icono-02.svg' alt='Imagen decorativa')
            p.mb-0 Contaminación del aire, especialmente en centros urbanos e industriales, debido a la presencia de material particulado, ozono troposférico y compuestos orgánicos volátiles, que afectan la salud respiratoria y cardiovascular.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema1/icono-03.svg' alt='Imagen decorativa')
            p.mb-0 Manejo inadecuado de residuos sólidos y peligrosos, que propicia la proliferación de vectores, la contaminación del suelo y riesgos tóxicos para las comunidades cercanas.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema1/icono-04.svg' alt='Imagen decorativa')
            p.mb-0 Deficiencias en el saneamiento básico, como la falta de acceso a agua potable, la disposición inadecuada de excretas y la presencia de aguas estancadas, que aumentan la incidencia de enfermedades de origen ambiental.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema1/icono-05.svg' alt='Imagen decorativa')
            p.mb-0 Presencia de vectores transmisores de enfermedades, como el Aedes aegypti (dengue, zika y chikunguña), Anopheles (malaria), roedores (leptospirosis) o triatominos (enfermedad de Chagas).

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema1/icono-06.svg' alt='Imagen decorativa')
            p.mb-0 Degradación del suelo y pérdida de cobertura vegetal, que impactan la disponibilidad de alimentos, el ciclo hidrológico y la estabilidad de los ecosistemas locales.
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#E0F6E1")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-02.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Estos factores afectan con mayor intensidad a poblaciones vulnerables, como comunidades rurales dispersas, asentamientos informales en zonas periurbanas, pueblos indígenas y personas en condición de pobreza multidimensional. En estos territorios, la falta de infraestructura, las limitaciones en la gobernabilidad local y el acceso restringido a servicios básicos aumentan la exposición a riesgos ambientales y disminuyen la capacidad de respuesta comunitaria.

    .row.mb-4
      .col-1.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/icono-07.svg', alt='Imagen decorativa')
      .col-11
        p.mb-0(data-aos="fade-right") Por tanto, el abordaje de la salud ambiental en Colombia requiere estrategias intersectoriales con enfoque territorial, diferencial y participativo, que integren la vigilancia en salud pública, la planificación ambiental, la educación comunitaria y la promoción de entornos saludables. Esta perspectiva es fundamental para garantizar el derecho a un ambiente sano, consagrado en la Constitución, y avanzar hacia un modelo de desarrollo sostenible con justicia ambiental y social.
  
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Marco normativo de salud ambiental

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p(style="color:#000") El marco normativo colombiano establece una estructura legal sólida para la protección del ambiente y la promoción de la salud pública, con base en los principios de sostenibilidad, equidad, prevención del riesgo y participación social. Estas normas y políticas definen responsabilidades institucionales, fijan estándares sanitarios y orientan las acciones intersectoriales en los territorios.
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/icono-14.svg' alt='')
          .tarjeta.color-primario(style="background-color:#CCD9F8")
            .p-3
              p.mb-0 La Constitución Política de 1991, en su artículo 79, reconoce el derecho de todas las personas a gozar de un ambiente sano y el deber del Estado de proteger la diversidad, prevenir su deterioro y garantizar su conservación. Este principio se complementa con el artículo 49, que establece la salud como un servicio público a cargo del Estado y un derecho de obligatorio cumplimiento. Ambas disposiciones sustentan la acción estatal y comunitaria en salud ambiental.

        p.mb-0(style="color:#000") La legislación colombiana en salud ambiental establece los principios y lineamientos fundamentales para proteger la salud de la población frente a los riesgos derivados del entorno. A través de leyes marco, se definen competencias institucionales, estándares sanitarios y mecanismos de participación ciudadana en la gestión ambiental.

      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img-03.png' alt="Imagen decorativa")
    
    .row.justify-content-center.ali.mb-3(data-aos="fade-left")
      .col-lg-10(data-aos="fade-down")
        .tarjeta--container.row.mb-3
          .col-xl.col-md-6.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema1/icono-09.svg', alt='Imagen decorativa')
            
            h4.text-center Ley 9 de 1979 - Código Sanitario Nacional
            p.mb-0 Regula aspectos esenciales como la calidad del agua, el manejo de residuos sólidos y peligrosos, el control de vectores, la higiene ambiental y las condiciones sanitarias de establecimientos. Esta ley es implementada mediante decretos y resoluciones específicas.

          .col-xl.col-md-6.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema1/icono-09.svg', alt='Imagen decorativa')
            
            h4.text-center Ley 99 de 1993
            p.mb-0 Crea el Ministerio del Medio Ambiente (hoy Ministerio de Ambiente y Desarrollo Sostenible) y establece el Sistema Nacional Ambiental (SINA). Refuerza la descentralización del control ambiental, define funciones para las Corporaciones Autónomas Regionales (CAR) y promueve la participación ciudadana.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        p.mb-0 Además de las leyes generales, Colombia cuenta con un conjunto de normas técnicas y resoluciones específicas que regulan la inspección, vigilancia y control de factores de riesgo ambiental. Estas normas operativizan las acciones en el territorio, establecen criterios técnicos y determinan responsabilidades institucionales ante eventos que amenacen la salud pública:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/icono-10.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#C2EDC3")
            h4.text-center.mt-5(style="color:#12263F") Resolución 1229 de 2013
            p.text-center.mb-0(style="color:#12263F") Emitida por el Ministerio de Salud y Protección Social, establece los requisitos para las actividades de inspección, vigilancia y control (IVC) en salud ambiental. Incluye criterios de evaluación de riesgos, seguimiento a condiciones sanitarias del entorno y acciones correctivas ante factores ambientales que afectan la salud.
            
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/icono-11.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#C2EDC3")
            h4.text-center.mt-5(style="color:#12263F") Resolución 2063 de 2017
            p.text-center.mb-0(style="color:#12263F") Define procedimientos que deben seguir las entidades territoriales ante eventos ambientales que comprometan la salud pública (derrames, incendios, contaminación de agua o aire). Regula tiempos de respuesta y rutas de notificación a través del Sistema de Vigilancia en Salud Pública (Sivigila).

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/icono-12.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#C2EDC3")
            h4.text-center.mt-5(style="color:#12263F") Decreto 351 de 2014
            p.text-center.mb-0(style="color:#12263F") Reglamenta el modelo de gestión integral del riesgo en salud pública. Establece las fases de identificación, análisis, monitoreo, evaluación y control de riesgos sanitarios, articulando vigilancia epidemiológica con factores ambientales.

    p.mb-5(data-aos="fade-right") Las políticas públicas en salud ambiental articulan los esfuerzos intersectoriales para prevenir riesgos, promover entornos saludables y reducir las desigualdades territoriales. Documentos como la Política Nacional de Salud Ambiental y el Plan Decenal de Salud Pública orientan la acción colectiva con enfoque diferencial, participativo y territorial.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down") 
      .col-lg-10.col-md-10.col-12
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/icono-13.svg' alt='')
          .tarjeta.color-primario(style="background-color:#CCD9F8")
            .p-4
              p.mb-0 Política Nacional de Salud Ambiental (PNSA): adoptada en 2008 y actualizada en el Plan Decenal de Salud Pública (PDSP), promueve una gestión intersectorial de los riesgos, con enfoque diferencial, territorial y participativo. Estimula la formulación de planes territoriales, la comunicación del riesgo y la educación ambiental comunitaria.

    p.mb-5(data-aos="fade-right") Existen también normas y herramientas técnicas que fortalecen la vigilancia ambiental y sanitaria desde diferentes sectores. Estas incluyen leyes estatutarias, normas técnicas del ICONTEC, y protocolos emitidos por entidades como el Instituto Nacional de Salud y el IDEAM, que apoyan la toma de decisiones basadas en evidencia y datos ambientales confiables:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-04.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Ley 1751 de 2015 - Ley Estatutaria de Salud
            h5.t2.mb-2 Ley 1751 de 2015 - Ley Estatutaria de Salud
            p.mb-0 Reconoce la salud como un derecho fundamental de aplicación inmediata, y establece que las políticas públicas deben proteger este derecho. Reconoce además el ambiente sano como condición habilitante para garantizar la salud colectiva.
            
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-05.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Ley 1751 de 2015 - Ley Estatutaria de Salud
            h5.t2.mb-2 Ley 1751 de 2015 - Ley Estatutaria de Salud
            p.mb-0 Emitida por ICONTEC, establece directrices para el muestreo y monitoreo de aguas superficiales, residuales y subterráneas. Es esencial para la vigilancia de la calidad del agua y el control sanitario.
      
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-06.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Protocolos del INS e IDEAM
            h5.t2.mb-2 Protocolos del INS e IDEAM
            p.mb-0 El Instituto Nacional de Salud (INS) y el Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM) desarrollan guías técnicas, protocolos y reportes sobre variables ambientales críticas para la salud, como calidad del aire, presencia de vectores, temperaturas extremas o eventos climáticos.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        p.mb-0 En conjunto, este entramado normativo orienta la acción institucional y comunitaria, promueve la prevención de enfermedades de origen ambiental y garantiza el derecho de los colombianos a vivir en entornos saludables, seguros y sostenibles.


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
