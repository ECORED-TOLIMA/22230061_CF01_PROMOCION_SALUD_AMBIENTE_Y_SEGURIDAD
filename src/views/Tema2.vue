<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Determinantes sociales y condiciones de vida

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#E0F6E1")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-01.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La salud de las personas no depende únicamente de factores biológicos, sino también de las condiciones sociales en las que nacen, crecen, viven, trabajan y envejecen. Estos factores, conocidos como determinantes sociales de la salud, incluyen aspectos como el acceso a servicios básicos, la calidad de la vivienda, el nivel educativo, las condiciones laborales, el entorno ambiental y el acceso a servicios de salud. Cuando estas condiciones son desfavorables, aumentan las probabilidades de exposición a riesgos sanitarios y ambientales, afectando de manera desproporcionada a las poblaciones más vulnerables. Comprender los determinantes sociales permite abordar la salud desde una perspectiva integral y promover políticas públicas orientadas a la equidad.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Relación entre ambiente, condiciones de vida y salud

    p(data-aos="fade-right") El entorno en el que las personas viven influye directamente sobre su salud física y mental. Factores ambientales como la calidad del aire, el acceso a agua potable, la disponibilidad de servicios públicos, la seguridad alimentaria, la vivienda digna y las condiciones laborales conforman lo que se conoce como determinantes sociales de la salud. Los principales factores que afectan esta relación son:

    .bg-c1.px-md-5.px-4.py-4
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema2/icono-01.svg' alt='Imagen decorativa')
            h4.text-center Vivienda inadecuada
            p.mb-0 La falta de ventilación, hacinamiento o materiales tóxicos como el asbesto pueden causar enfermedades respiratorias y afectar la salud mental.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema2/icono-02.svg' alt='Imagen decorativa')
            h4.text-center Contaminación ambiental
            p.mb-0 La exposición prolongada a contaminantes del aire (como PM2.5 o dióxido de nitrógeno) aumenta el riesgo de asma, cáncer y enfermedades cardiovasculares.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema2/icono-03.svg' alt='Imagen decorativa')
            h4.text-center Acceso limitado al agua potable y saneamiento básico
            p.mb-0 Está asociado con enfermedades diarreicas, parasitosis e infecciones de la piel.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema2/icono-04.svg' alt='Imagen decorativa')
            h4.text-center Condiciones laborales precarias
            p.mb-0 Ambientes laborales sin control de riesgos ocupacionales pueden generar lesiones, fatiga crónica o exposición a sustancias peligrosas.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema2/icono-05.svg' alt='Imagen decorativa')
            h4.text-center Inseguridad alimentaria
            p.mb-0 La desnutrición o el sobrepeso son dos caras de una misma problemática relacionada con el acceso desigual a alimentos saludables.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema2/icono-06.svg' alt='Imagen decorativa')
            h4.text-center Servicios de salud deficientes
            p.mb-0 La falta de cobertura, atención oportuna y medicamentos básicos perpetúa enfermedades prevenibles.
    
    .row.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/icono-07.svg' alt='')
          .tarjeta.color-primario(style="background-color:#CCD9F8")
            .p-4
              p.mb-0 En Colombia, un estudio del Departamento Administrativo Nacional de Estadística (DANE, 2023) indicó que el 14,4 % de los hogares no cuenta con acceso a servicios de acueducto y el 20,7 % carece de saneamiento básico. Esta situación se refleja en que las enfermedades gastrointestinales siguen siendo una de las principales causas de morbilidad infantil en zonas rurales.

    .row.justify-content-center.mb-0
      .col-lg-10(data-aos="fade-down")
        p.mb-5 Cuando las condiciones de vida no son adecuadas, la probabilidad de enfermar aumenta significativamente. Por ejemplo:

        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          i Relación causa-efecto
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr(data-aos="fade-right")
                th(style="background-color: #E0F6E1") Condición
                th(style="background-color: #E0F6E1") Posible consecuencia en salud
            tbody
              tr(data-aos="fade-right")
                td Contaminación del agua.
                td Enfermedades diarreicas agudas.
              tr(data-aos="fade-right")
                td Vivienda precaria.
                td Infecciones respiratorias agudas.
              tr(data-aos="fade-right")
                td Baja escolaridad.
                td Menor acceso a información sobre autocuidado.
              tr(data-aos="fade-right")
                td Trabajo informal.
                td Mayor exposición a riesgos sin protección social.
        
        .row.mb-4(data-aos="fade-right")  
          .col-1.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/icono.svg' alt="Imagen decorativa")
          .col-11
            p.mb-0 Mejorar el ambiente y las condiciones de vida no solo reduce la carga de enfermedades, sino que también aumenta la calidad de vida, la productividad y el bienestar colectivo. Por ello, las políticas públicas deben integrar el enfoque de determinantes sociales para garantizar el derecho a la salud.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Análisis de situaciones de salud pública en el territorio

    .bg-c1.px-md-5.px-4
      .row.justify-content-center.mb-5
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p El análisis de salud pública en un territorio debe partir de la identificación de los Determinantes Sociales de la Salud (DSS), ya que estos explican en gran medida las diferencias en la carga de enfermedad, el acceso a servicios y la capacidad de respuesta comunitaria.
          p En contextos como zonas rurales, periferias urbanas o territorios afectados por conflicto armado, los determinantes sociales tienden a combinarse y acumularse, generando escenarios de alta vulnerabilidad sanitaria.
          p.mb-0 A continuación, se presentan los principales DSS identificados en Colombia:
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema2/img-02.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 2.
          i  Principales determinantes sociales de la salud en Colombia
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 15%") Determinante
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 50%") Explicación breve
            tbody
              tr(data-aos="fade-right")
                td Ingreso y situación socioeconómica.
                td Determina la capacidad de las personas para satisfacer necesidades básicas, acceder a servicios y tener condiciones dignas de vida.
              tr(data-aos="fade-right")
                td Nivel educativo y acceso a formación.
                td La educación facilita el acceso al empleo, la comprensión de la información en salud y el ejercicio de derechos.
              tr(data-aos="fade-right")
                td Condiciones laborales y tipo de empleo.
                td La estabilidad, seguridad y legalidad del empleo afectan la salud física y mental, así como el acceso a seguridad social.
              tr(data-aos="fade-right")
                td Acceso a servicios públicos básicos.
                td La disponibilidad de agua potable, saneamiento, recolección de residuos y electricidad es esencial para la salud y prevención de enfermedades.
              tr(data-aos="fade-right")
                td Condiciones de vivienda.
                td Viviendas en mal estado, con hacinamiento o ubicadas en zonas de riesgo incrementan la exposición a enfermedades y accidentes.
              tr(data-aos="fade-right")
                td Acceso a servicios de salud.
                td La oportunidad, calidad y continuidad de la atención en salud impactan directamente la prevención, diagnóstico y tratamiento de enfermedades.
              tr(data-aos="fade-right")
                td Alimentación y seguridad alimentaria.
                td El acceso a alimentos saludables y suficientes previene la malnutrición, enfermedades crónicas y vulnerabilidad inmunológica.
              tr(data-aos="fade-right")
                td Entorno físico y ambiental.
                td Factores como contaminación del aire, agua o suelo, y presencia de vectores afectan directamente la salud de las comunidades.
              tr(data-aos="fade-right")
                td Redes de apoyo familiar y comunitario.
                td El acompañamiento social, familiar y comunitario influye en la salud mental, el autocuidado y la resiliencia ante crisis.
              tr(data-aos="fade-right")
                td Participación social y control ciudadano.
                td La capacidad de incidir en decisiones públicas fortalece la equidad, empodera a las comunidades y mejora las respuestas institucionales.
              tr(data-aos="fade-right")
                td Situación geográfica y ruralidad.
                td Las zonas rurales y de difícil acceso suelen tener menos servicios, infraestructura y oferta institucional, aumentando la inequidad.
              tr(data-aos="fade-right")
                td Pertenencia étnica o cultural.
                td Los grupos étnicos pueden enfrentar barreras estructurales, racismo o exclusión, y tienen saberes que deben ser reconocidos en salud.
              tr(data-aos="fade-right")
                td Discriminación, género e inequidades estructurales.
                td La discriminación por razones de género, orientación sexual, discapacidad, etnia u otras, afecta el acceso a oportunidades y salud.
              tr(data-aos="fade-right")
                td Conflicto armado y desplazamiento forzado.
                td La violencia y el desplazamiento generan traumas, desarraigo, pérdida de redes, inseguridad alimentaria y barreras de acceso.
              tr(data-aos="fade-right")
                td Acceso a tecnologías de información y comunicación.
                td La brecha digital limita el acceso a información, educación y servicios virtuales, profundizando desigualdades.
              tr(data-aos="fade-right")
                td Políticas públicas y gobernanza local.
                td Las decisiones políticas y la gestión territorial determinan la asignación de recursos y la implementación de programas de salud.
              tr(data-aos="fade-right")
                td Estilos de vida y comportamientos individuales.
                td Hábitos como el consumo de sustancias psicoactivas, el sedentarismo o el uso adecuado de servicios de salud inciden en el bienestar.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-8.order-2
        p En zonas rurales de Colombia, estudios del Ministerio de Salud han evidenciado que la falta de acceso a agua potable y servicios sanitarios adecuados se relaciona con altos índices de enfermedades gastrointestinales en niños menores de 5 años.
        p.mb-0 Este tipo de situaciones demuestra cómo los determinantes sociales y ambientales influyen directamente en los resultados de salud. Por ello, es fundamental que las estrategias de promoción, prevención y atención en salud incluyan acciones intersectoriales que mejoren las condiciones de vida de las comunidades, con especial atención en las poblaciones más vulnerables.
      .col-lg-4.col-md-6.col-8.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img-03.png', alt='Imagen decorativa')

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
