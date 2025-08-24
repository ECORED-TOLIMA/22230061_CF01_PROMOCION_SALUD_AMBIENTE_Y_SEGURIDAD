<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Valoración y clasificación de riesgos ambientales

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8.order-2
        p La valoración de riesgos ambientales es un proceso técnico y metodológico que permite identificar, clasificar y priorizar las amenazas que pueden afectar la salud de las personas y la integridad de los ecosistemas en un territorio determinado. Este análisis constituye una herramienta fundamental para establecer el nivel de amenaza ambiental y sanitaria, y se convierte en un insumo clave para la planificación de acciones preventivas, la gestión integral del riesgo y la toma de decisiones coordinadas entre diferentes sectores.
        .tarjeta.tarjeta--BGC01.p-4
          p.mb-0 El riesgo ambiental se entiende como la probabilidad de que un factor o evento adverso, ya sea de origen químico, físico, biológico o social, genere un efecto negativo sobre la salud humana o sobre el equilibrio de los ecosistemas. Su valoración no se limita a una observación cualitativa, sino que requiere la aplicación de métodos sistemáticos que incorporan indicadores, matrices de evaluación y escalas de medición. Estos instrumentos permiten estimar tanto la probabilidad de ocurrencia como la magnitud y severidad de las consecuencias.
      .col-lg-4.col-md-6.col-8.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema4/img-01.png', alt='Imagen decorativa')
    
    .row.mb-4(data-aos="fade-left")
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema4/img-15.svg' alt="Imagen decorativa")
      .col-11
        p.mb-0 La clasificación del riesgo se realiza generalmente a partir de criterios como el tipo de amenaza, el grado de vulnerabilidad de la población o del ecosistema expuesto, y la capacidad de respuesta disponible. Este enfoque facilita la priorización de intervenciones, optimiza el uso de recursos y orienta la formulación de políticas y planes de manejo ambiental basados en evidencia.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Escalas de valoración de riesgos

    p(data-aos="fade-left") Las escalas de valoración son herramientas esenciales en la gestión del riesgo ambiental porque permiten estandarizar y objetivar la evaluación de variables relacionadas con peligros ambientales y su impacto potencial en la salud y el entorno. Su función es transformar datos cualitativos o cuantitativos en categorías comparables, facilitando así la clasificación y priorización de riesgos de manera sistemática, transparente y replicable.
    p.mb-5(data-aos="fade-left") En salud ambiental, estas escalas se utilizan para valorar factores como:  
    
    .row.justify-content-center.mb-4
      .col-lg-5.mb-4(data-aos="zoom-in-up")
        .tarjeta.custom-image-card.bg-color-3.p-3
          img.custom-image-card__image(src="@/assets/curso/temas/tema4/img-02.png" alt="")
          .custom-image-card__text.p-4
            h3.mb-3.text-center.titulo-1 Exposición
            p.mb-0 Grado de contacto de una población o ecosistema con el agente de riesgo. Por ejemplo, familias que cocinan con leña en espacios cerrados, comunidades que consumen agua de ríos contaminados, trabajadores expuestos a agroquímicos.
      
      .col-lg-5.mb-4(data-aos="zoom-in")
        .tarjeta.custom-image-card.bg-color-3.p-3
          img.custom-image-card__image(src="@/assets/curso/temas/tema4/img-03.png" alt="")
          .custom-image-card__text.p-4
            h3.mb-3.text-center.titulo-1 Vulnerabilidad
            p.mb-0 Condiciones físicas, sociales o económicas que aumentan la susceptibilidad al daño. Por ejemplo, asentamientos informales sin acceso a agua potable o alcantarillado.
      
      .col-lg-5.mb-4(data-aos="zoom-in")
        .tarjeta.custom-image-card.bg-color-3.p-3
          img.custom-image-card__image(src="@/assets/curso/temas/tema4/img-04.png" alt="")
          .custom-image-card__text.p-4
            h3.mb-3.text-center.titulo-1 Sensibilidad
            p.mb-0 Capacidad de respuesta biológica o social frente al riesgo. Por ejemplo, niños, adultos mayores o personas con enfermedades respiratorias previas.

      .col-lg-5.mb-4(data-aos="zoom-in")
        .tarjeta.custom-image-card.bg-color-3.p-3
          img.custom-image-card__image(src="@/assets/curso/temas/tema4/img-05.png" alt="")
          .custom-image-card__text.p-4
            h3.mb-3.text-center.titulo-1 Resiliencia
            p.mb-0 Habilidad del territorio o comunidad para afrontar, adaptarse y recuperarse tras un evento adverso. Por ejemplo, comunidades con planes de emergencia comunitarios y redes de apoyo activas.
    
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        p Estos factores pueden medirse con:

    .row.justify-content-center.mb-4
      .col-lg-5.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/icono-02.svg' alt='Imagen decorativa')
          .tarjeta.BGR01.p-4
            h4.ps-5 Escalas ordinales
            p.ps-5.mb-0 Baja, media y alta.

      .col-lg-5.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/icono-03.svg' alt='Imagen decorativa')
          .tarjeta.BGR01.p-4
            h4.ps-5 Escalas numéricas
            p.ps-5.mb-0 De 1 a 5 puntos.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        p Posteriormente, estas valoraciones se integran en matrices de riesgo o mapas de calor territorial que muestran gráficamente dónde se concentran los mayores problemas.
        p.mb-4 Con el fin de poner en práctica lo anteriormente dicho, se describe un ejemplo de escala para “Vulnerabilidad” en contextos territoriales:
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 5.
          i  Escala para vulnerabilidad
        .tabla-a.color-acento-contenido.mb-5
          table(data-aos="zoom-in"  alt="")
            thead
              tr
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 15%") Nivel
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 50%") Descripción
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 15%") Puntaje
            tbody
              tr(data-aos="fade-right")
                td Baja
                td Comunidad con servicios básicos completos y alta organización local.
                td.text-center 1
              tr(data-aos="fade-right")
                td Media
                td Algunas deficiencias en servicios y organización social limitada.
                td.text-center 2
              tr(data-aos="fade-right")
                td Alta
                td Viviendas precarias, sin agua potable ni alcantarillado, sin redes de apoyo.
                td.text-center 3

    .row.justify-content-center.mb-0
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p(style="color:#000") Si en un diagnóstico comunitario una vereda obtiene una vulnerabilidad “Alta” (puntaje 3) y alta exposición a un contaminante, se prioriza para acciones inmediatas como provisión de agua segura, control de vectores y capacitación comunitaria.
        p.mb-4(style="color:#000") En Colombia, el uso de escalas de valoración está incorporado en metodologías oficiales como:              
        .row.r8.bg-17.p-2.align-items-center.mb-2
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/temas/tema4/icono-04.svg", alt="", style="width: 70px").m-auto
          .col-lg-10
            p Sistema Nacional de Gestión del Riesgo de Desastres (SNGRD).
        .row.r8.bg-18.p-2.align-items-center.mb-2
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/temas/tema4/icono-05.svg", alt="", style="width: 70px").m-auto
          .col-lg-10
            p Planes Territoriales de Salud Ambiental (PTSA).
        .row.r8.bg-17.p-2.align-items-center.mb-4
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/temas/tema4/icono-06.svg", alt="", style="width: 70px").m-auto
          .col-lg-10
            p Programas del Ministerio de Salud, el Instituto Nacional de Salud (INS) y las Corporaciones Autónomas Regionales (CAR).

        p(style="color:#000") Estas escalas son útiles no solo para técnicos, sino también para líderes comunitarios, porque traducen la información técnica en un lenguaje claro, fomentando la participación, la vigilancia ciudadana y el seguimiento de planes de acción.

      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema4/img-06.png' alt="Imagen decorativa")

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Aplicación de matrices de riesgo

    p.mb-5(data-aos="fade-down") Las matrices de riesgo son herramientas clave en la gestión de riesgos ambientales. Su objetivo es clasificar los riesgos identificados a partir de dos variables principales:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5(data-aos="fade-right")
        .bg-color-2.px-4.py-3.mb-4
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema4/icono-07.svg', alt='', data-aos="zoom-in", style="width: 70px;").mx-auto.mx-lg-0
            .col
              p.mb-0(data-aos="fade-up") #[b Probabilidad de ocurrencia:] qué tan posible es que el evento suceda.

      .col-lg-5(data-aos="fade-left")
        .bg-color-2.px-4.py-3.mb-4
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema4/icono-08.svg', alt='', data-aos="zoom-in", style="width: 70px;").mx-auto.mx-lg-0
            .col
              p.mb-0(data-aos="fade-up") #[b Impacto o severidad:] qué tan graves serían las consecuencias para la salud y el ambiente.

    p.mb-5(data-aos="fade-down") Al cruzar estas dos variables en una tabla, se obtiene un nivel de riesgo que puede ir desde bajo hasta muy alto, lo que ayuda a establecer prioridades de intervención y orientar la toma de decisiones. A continuación, se describen los tipos de matrices según complejidad:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img-07.svg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Cualitativas
            h5.t2.mb-2 Cualitativas
            ul.lista-ul.mb-3(data-aos="fade-right")
              li
                i.lista-ul__vineta
                | Basadas en descripciones (baja, media y alta).
              li 
                i.lista-ul__vineta
                | Útiles cuando no se tienen datos numéricos exactos.
              li  
                i.lista-ul__vineta
                | Frecuentes en contextos comunitarios o rurales.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img-08.svg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Semicuantitativas
            h5.t2.mb-2 Semicuantitativas
            ul.lista-ul.mb-3(data-aos="fade-right")
              li
                i.lista-ul__vineta
                | Asignan valores numéricos a escalas cualitativas (Por ejemplo: baja = 1, media = 2 y alta = 3).
              li 
                i.lista-ul__vineta
                | Permiten calcular puntajes de riesgo y priorizar con mayor precisión.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img-09.svg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Cuantitativas
            h5.t2.mb-2 Cuantitativas
            ul.lista-ul.mb-3(data-aos="fade-right")
              li
                i.lista-ul__vineta
                | Usan mediciones exactas y modelos matemáticos (Por ejemplo: concentraciones de contaminantes, tasas de incidencia).
              li 
                i.lista-ul__vineta
                | Requieren personal técnico y datos confiables.

    p.mb-4(data-aos="fade-down") En este punto es importante aplicar un caso práctico, utilizando la matriz semicuantitativa. Por ejemplo: 

    .row.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-lg-10(data-aos="fade-right")
        .bg-color-2.px-4.py-3.mb-4
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema4/icono-14.svg' alt='', data-aos="zoom-in", style="width: 100px;").mx-auto.mx-lg-0
            .col
              p.mb-0(data-aos="fade-up") En una vereda rural se detecta un botadero de basuras a cielo abierto, cercano a una escuela y viviendas. Se busca valorar el riesgo de enfermedades transmitidas por vectores (mosquitos y roedores). 

    p.mb-4(data-aos="fade-down") A partir de la información recopilada, el primer paso consiste en establecer la probabilidad de ocurrencia del evento:

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 6.
          i Escala de probabilidad de la comunidad
        .tabla-a.color-acento-contenido.mb-4
          table(data-aos="zoom-in"  alt="")
            thead
              tr
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 15%") Probabilidad
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 50%") Descripción
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 15%") Valor
            tbody
              tr(data-aos="fade-right")
                td Alta.
                td Se presenta con frecuencia.
                td.text-center 3
              tr(data-aos="fade-right")
                td Media.
                td Se presenta ocasionalmente.
                td.text-center 2
              tr(data-aos="fade-right")
                td Baja.
                td Se presenta rara vez.
                td.text-center 1

    p.mb-4(data-aos="fade-down") El siguiente paso es determinar el nivel de afectación que tendría el evento:

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 7.
          i Escala de impacto en la comunidad
        .tabla-a.color-acento-contenido.mb-4
          table(data-aos="zoom-in"  alt="")
            thead
              tr
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 15%") Impacto
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 50%") Descripción
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 15%") Valor
            tbody
              tr(data-aos="fade-right")
                td Alto.
                td Afecta salud de niños y población vulnerable.
                td.text-center 3
              tr(data-aos="fade-right")
                td Medio.
                td Afecta a grupos específicos o interfiere en actividades.
                td.text-center 2
              tr(data-aos="fade-right")
                td Bajo.
                td Afectación leve, sin consecuencias significativas.
                td.text-center 1

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5(data-aos="fade-right")
        p.mb-3 Con ambas escalas definidas, se procede a la valoración:
        .bg-color-2.px-4.py-4.mb-4
          .row.justify-content-center.align-items-center
            .col
              p.mb-0(data-aos="fade-left") #[strong Probabilidad: Alta] (3) → vectores presentes de forma constante.
              p.mb-0(data-aos="fade-left") #[strong Impacto:] Alto (3) → población infantil en riesgo.
              p.mb-0(data-aos="fade-left") #[strong Nivel de riesgo:] 3 x 3 = 9 → Riesgo Muy Alto.

      .col-lg-5(data-aos="fade-left")
        p.mb-3 En este caso, las medidas a implementar serían:
        .bg-color-2.px-4.py-4.mb-4
          .row.justify-content-center.align-items-center
            .col
              ul.lista-ul.mb-0
                li.mb-0(data-aos="fade-down")
                  i.lista-ul__vineta
                  | Cierre del botadero.
                li.mb-0(data-aos="fade-down")
                  i.lista-ul__vineta
                  | Recolección y disposición segura de residuos.
                li.mb-0(data-aos="fade-down")
                  i.lista-ul__vineta
                  | Sensibilización comunitaria.
                li.mb-0(data-aos="fade-down")
                  i.lista-ul__vineta
                  | Control de vectores.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(style="background-color:#E0F6E1")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-10.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Las matrices de riesgo ofrecen ventajas significativas, ya que permiten sistematizar observaciones y datos de campo, facilitan la comunicación del nivel de riesgo tanto a la comunidad como a las instituciones, sirven para justificar técnicamente la urgencia de una intervención y fomentan la participación ciudadana al traducir la información técnica en un lenguaje comprensible para todos.

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Elaboración de mapas de riesgo

    .row.justify-content-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p(style="color:#000") Los mapas de riesgo son representaciones gráficas que muestran, de forma georreferenciada, las zonas de un territorio que presentan diferentes niveles de amenaza frente a factores ambientales y sanitarios. Son herramientas esenciales en la salud pública y la gestión ambiental, porque integran información espacial con datos sobre exposición, vulnerabilidad e impacto, facilitando así la toma de decisiones y la planificación de intervenciones.
        p(style="color:#000") A través de estos mapas es posible identificar con precisión:
        .tarjeta.tarjeta--BGC01.p-3.mb-4
          .col.mb-0
            ul.lista-ul--color.mt-2
              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Áreas propensas a inundaciones, deslizamientos o incendios forestales.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Zonas con presencia de vectores como Aedes aegypti (transmisor del dengue) o plagas urbanas y rurales.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Sectores con vertimientos de aguas residuales, contaminación hídrica o acumulación de residuos peligrosos.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Lugares con altos niveles de ruido, polución del aire o suelos contaminados.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Comunidades sin acceso a servicios básicos, que enfrentan riesgos múltiples y simultáneos.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema4/img-11.svg' alt="Imagen decorativa")

    p(data-aos="fade-down") Para su elaboración pueden utilizarse diversas fuentes de información:

    .row.mb-4(data-aos="fade-down")
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#E0F6E1")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/icono-10.svg' alt="Imagen decorativa")
        p.text-center.mb-0 Resultados de diagnósticos participativos y observación directa (como mapas parlantes o transectos comunitarios).

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#CCD9F8")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/icono-11.svg' alt="Imagen decorativa")
        p.text-center.mb-0 Registros institucionales de salud y ambiente (SIVIGILA, IDEAM, alcaldías, CAR, etc.).

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#E0F6E1")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/icono-12.svg' alt="Imagen decorativa")
        p.text-center.mb-0 Imágenes satelitales, fotografías aéreas o cartografía oficial (IGAC, SIGOT, etc.).

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#CCD9F8")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/icono-13.svg' alt="Imagen decorativa")
        p.text-center.mb-0 Información local aportada por la comunidad y actores del territorio.

    p(data-aos="fade-down") Los mapas de riesgo participativos tienen un valor pedagógico y político especial: permiten que la comunidad reconozca su territorio, identifique amenazas, priorice acciones y exija respuestas institucionales. Pueden elaborarse de manera análoga (en cartulina, con símbolos y leyendas locales) o digital, empleando herramientas como Google Earth, QGIS, la plataforma “Mapa Participativo Colombia” del DNP, o los SIG municipales.
    p.mb-4(data-aos="fade-down") Ejemplo práctico:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .row.justify-content-center.align-items-center.tarjeta.tarjeta--BGC01.p-4
          p En una comunidad periurbana, el equipo de salud ambiental, junto con líderes locales, elabora un mapa de riesgo que identifica:
          .col-lg-8
            ul.lista-ul--color
              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Tres puntos críticos de acumulación de basuras a cielo abierto.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Dos canales con aguas negras que cruzan cerca de un colegio.
              
              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Una zona baja que se inunda en temporada de lluvias.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Presencia de criaderos de zancudos en patios de viviendas sin control.
            p Este mapa se socializa en una mesa intersectorial y se convierte en insumo para:
            ul.lista-ul--color.mt-2
              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Planificar actividades del Plan de Intervenciones Colectivas (PIC).

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Solicitar apoyo de la alcaldía para limpieza y canalización.
              
              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Diseñar campañas educativas con las familias.
          .col-lg-4.d-none.d-lg-block
            figure
              img.mx-auto(src='@/assets/curso/temas/tema4/img-12.svg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-12
        .row.justify-content-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p En Colombia, el uso de mapas de riesgo está contemplado en los lineamientos del Sistema Nacional de Gestión del Riesgo de Desastres (SNGRD) y se integra en los Planes Territoriales de Salud Ambiental, PGIRS y ejercicios de planeación participativa. Además, es una herramienta clave en los procesos formativos del SENA para fortalecer las capacidades comunitarias en diagnóstico y gestión ambiental. Para su elaboración, se pueden emplear diversas herramientas, tanto digitales como analógicas, que facilitan la recolección, organización y visualización de la información:
          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema4/img-13.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 8.
          i Herramientas digitales y analógicas para la elaboración de mapas de riesgo
        .tabla-a.color-acento-contenido.mb-4
          table(data-aos="zoom-in"  alt="")
            thead
              tr
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 25%") Impacto
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 25%") Ejemplos
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 25%") Ventajas
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 25%") Limitaciones
            tbody
              tr(data-aos="fade-right")
                td Digital
                td ArcGIS, QGIS, Google Earth, MapInfo y herramientas SIG en línea (Mapbox y OpenStreetMap).
                td Alta precisión geográfica, integración de capas de información, facilidad para actualizar datos, generación automática de reportes y análisis espacial.
                td Requiere conexión a Internet o instalación de #[em software], capacitación técnica, posible costo de licencias.
              tr(data-aos="fade-right")
                td Digital
                td Aplicaciones móviles (Collector for ArcGIS, Survey123 y Mappt).
                td Recolección de datos en campo en tiempo real, georreferenciación automática, integración con bases de datos.
                td Dependencia de dispositivos y baterías, posible baja señal GPS en zonas remotas.
              tr(data-aos="fade-right")
                td Analógica
                td Mapas físicos impresos (topográficos, políticos y de uso del suelo).
                td Bajo costo, no requiere tecnología, útil en áreas sin electricidad ni Internet.
                td Menor precisión, difícil actualización y limitado para análisis avanzado.
              tr(data-aos="fade-right")
                td Analógica
                td Croquis y bocetos hechos a mano en papel o cartulina.
                td Permite participación comunitaria, facilita la comunicación visual, adaptable a cualquier contexto.
                td Escasa precisión geográfica y subjetividad en la representación.
              tr(data-aos="fade-right")
                td Analógica
                td Fotografías aéreas impresas o imágenes satelitales en papel.
                td Visión clara del terreno y sus características, apoyo visual para identificar riesgos.
                td Requiere impresión periódica para mantenerse actualizada y es limitado para escalas grandes.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(style="background-color: #E0F6E1")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-14.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 La combinación de herramientas digitales y análogas para la elaboración de mapas de riesgo permite aprovechar las ventajas de ambas metodologías. Mientras las soluciones digitales ofrecen precisión, facilidad de actualización y capacidad para integrar datos en tiempo real, las herramientas análogas favorecen la participación comunitaria y la comprensión directa del territorio. Integrar ambos enfoques garantiza un diagnóstico más completo y una gestión del riesgo más efectiva, adaptada a las condiciones técnicas y sociales de cada contexto.









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
