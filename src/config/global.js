export default {
  global: {
    componenteFormativo: 'Riesgos ambientales y sanitarios en la comunidad',
    descripcionCurso:
      'Este componente aborda la identificación de factores de riesgo ambientales y sanitarios en la comunidad, a través del estudio de la salud ambiental, los determinantes sociales, las metodologías participativas y la valoración técnica de riesgos. Se promueve el análisis crítico del entorno para generar información útil en la toma de decisiones en salud pública.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Salud ambiental y normativa asociada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Factores de riesgo en el entorno comunitario',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Marco normativo de salud ambiental',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Determinantes sociales y condiciones de vida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Relación entre ambiente, condiciones de vida y salud',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis de situaciones de salud pública en el territorio',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diagnóstico participativo en salud ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Principios del diagnóstico participativo en salud ambiental',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas aplicadas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Organización e interpretación de la información recolectada',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Valoración y clasificación de riesgos ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Escalas de valoración de riesgos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Aplicación de matrices de riesgo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Elaboración de mapas de riesgo',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Salud ambiental y normativa asociada',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Actividades en salud ambiental y seguridad sanitaria [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Q8D_SrW58wg',
    },
    {
      tema: '1.2. Marco normativo de salud ambiental',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Normativa vigente para la gestión de la salud ambiental [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pys9gE4JUWk',
    },
    {
      tema: '4. Valoración y clasificación de riesgos ambientales',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Prevención de riesgo [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=diusJCOpKxo',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente',
      significado:
        'conjunto de condiciones físicas, biológicas, sociales y culturales que rodean a los seres humanos e influyen en su vida y salud.',
    },
    {
      termino: 'Determinantes sociales',
      significado:
        'condiciones en las que las personas nacen, crecen, trabajan y envejecen, que afectan directamente su bienestar y acceso a servicios básicos.',
    },
    {
      termino: 'Diagnóstico participativo',
      significado:
        'proceso que involucra a la comunidad en la identificación y análisis de problemas que afectan su salud y su entorno.',
    },
    {
      termino: 'Escalas de valoración',
      significado:
        'herramientas que permiten clasificar variables (como vulnerabilidad o exposición) en niveles cualitativos o cuantitativos.',
    },
    {
      termino: 'Factores de riesgo ambiental',
      significado:
        'elementos del entorno que pueden generar efectos negativos en la salud, como contaminación, vectores o saneamiento deficiente.',
    },
    {
      termino: 'Matriz de riesgo',
      significado:
        'instrumento que cruza variables como probabilidad e impacto para clasificar niveles de riesgo en un territorio o situación.',
    },
    {
      termino: 'Normatividad ambiental',
      significado:
        'conjunto de leyes, resoluciones y políticas que regulan la protección del ambiente y la salud pública en Colombia.',
    },
    {
      termino: 'Participación comunitaria',
      significado:
        'involucramiento activo de la población en la toma de decisiones sobre asuntos que afectan su salud y entorno.',
    },
    {
      termino: 'Salud ambiental',
      significado:
        'campo interdisciplinario que estudia la relación entre el ambiente y la salud humana, con enfoque en prevención y control de riesgos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Función Pública. (1991). Constitución Política de Colombia 1991.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125 ',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación - ICONTEC. (1995). NTC-ISO 5667-2: Gestión ambiental. Calidad del agua. Muestreo. Técnicas generales de muestreo. (Norma Técnica Colombiana).',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2021). Informe nacional de salud ambiental.',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2022). Política nacional de educación ambiental.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/Politica-Nacional-Educacion-Ambiental.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Resolución 1229 de 2013: Requisitos técnicos y sanitarios para actividades de inspección, vigilancia y control sanitario.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resolución%201229%20de%202013.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2014). Decreto 351 de 2014: Reglamenta la gestión integral del riesgo en salud pública.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Resolución 2063 de 2017: Adopta la Política de Participación Social en Salud (PPSS).',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (s. f.). Environmental health: Overview',
      link: 'https://www.who.int/health-topics/environmental-health',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (s. f.). Determinantes sociales de la salud.',
      link: 'https://www.paho.org/es/temas/determinantes-sociales-salud',
    },
    {
      referencia:
        'República de Colombia. Congreso de la República. (1979). Ley 9 de 1979: Código Sanitario Nacional',
    },
    {
      referencia:
        'República de Colombia. Congreso de la República. (1993). Ley 99 de 1993: Por la cual se crea el Ministerio del Medio Ambiente y se organiza el Sistema Nacional Ambiental.',
    },
    {
      referencia:
        'República de Colombia. Congreso de la República. (2015). Ley Estatutaria 1751 de 2015: Derecho fundamental a la salud.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Christian Llano Villegas',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
