export default {
  global: {
    Name: 'Estrategias de prevención y atención en salud mental',
    Description:
      'Este componente explora estrategias de prevención y atención enfocadas en salud mental y violencia. Se abordan temas como la violencia intrafamiliar, maltrato infantil y violencia de género, además de proporcionar guías sobre cómo actuar en situaciones de riesgo y dónde buscar ayuda, resaltando la importancia de la acción proactiva y el apoyo profesional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: '¿Dónde y cómo denunciar?',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Acciones de prevención en salud mental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manejo de estrés y prevención de consumo',
        desarrolloContenidos: true,
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
        download: 'downloads/dist.pdf',
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
      tema: 'Casos de violencia y salud mental',
      referencia:
        'World Health Organization (WHO) (2016). OMS: Fortalecer la función del sistema de salud para abordar la violencia contra las mujeres. YouTube  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=NAlY-1KI6ts&ab_channel=WorldHealthOrganization%28WHO%29',
    },
    {
      tema: 'Acciones de prevención en salud mental',
      referencia:
        'Comunicaciones Asmet (2021). PREVENCIÓN DE TRASTORNOS Y PROBLEMAS DE LA SALUD MENTAL YouTube  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=KSEwfbGanDI&ab_channel=ComunicacionesAsmet',
    },
    {
      tema: 'Manejo de estrés y prevención de consumo',
      referencia:
        'Julio Rodríguez (2011). La receta para el estrés ( Parte 1 ). YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fxO0Ggfty4o',
    },
  ],
  glosario: [
    {
      termino: 'Atención profesional',
      significado:
        'servicios brindados por profesionales capacitados en áreas específicas como la psicología, medicina o trabajo social, dirigidos a tratar o mejorar problemas específicos de salud mental o situaciones de violencia.',
    },
    {
      termino: 'Autocuidado',
      significado:
        'prácticas individuales realizadas por la persona para preservar la salud y el bienestar general.',
    },
    {
      termino: 'Derechos de la víctima',
      significado:
        'derechos que asisten a las víctimas de un delito o abuso, como el derecho a ser escuchado, a recibir atención digna y protección legal.',
    },
    {
      termino: 'Maltrato infantil',
      significado:
        'forma de violencia que incluye abuso físico, emocional, sexual o negligencia hacia los menores.',
    },
    {
      termino: 'Prevención',
      significado:
        'estrategias y actividades diseñadas para prevenir la aparición de enfermedades y situaciones adversas antes de que ocurran.',
    },
    {
      termino: 'Salud mental',
      significado:
        'estado de bienestar emocional y psicológico donde el individuo es capaz de utilizar sus habilidades cognitivas y emocionales para funcionar en la sociedad y cumplir con los requerimientos ordinarios de la vida diaria.',
    },
    {
      termino: 'Violencia de género',
      significado:
        'violencia dirigida a una persona basada en su género o sexo, incluyendo abusos físicos, sexuales y psicológicos.',
    },
    {
      termino: 'Violencia intrafamiliar',
      significado:
        'actos de violencia física, psicológica o sexual que ocurren dentro del hogar, perpetrados por un miembro de la familia contra otro.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gutiérrez, M. Familia Buen Trato y Corresponsabilidad. Bogotá (2015). Asociación Afecto contra el maltrato Infantil. Presentación PPT.',
    },
    {
      referencia:
        'Instituto Nacional de Medicina Legal y Ciencias Forenses. (2015). Violencia intrafamiliar (primera parte).',
      link:
        'https://www.medicinalegal.gov.co/documents/20143/49523/Violencia+intrafamiliar+primera+parte.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2002). Informe mundial sobre la violencia y la salud. Recuperado de',
      link:
        'https://iris.who.int/bitstream/handle/10665/78545/924159215X_spa.pdf',
    },
    {
      referencia:
        'Alcaldía Mayor de Bogotá, Secretaría de Educación Distrital. (2014). Orientaciones para la acción en Cuidado y Autocuidado - Educación para la Ciudadanía y la Convivencia. ',
      link:
        'http://www.redacademica.edu.co/archivos/redacademica/proyectos/pecc/centro_documentacion/caja_de_herramientas/serie_1_orientaciones/09_orientaciones_para_la_accion_en_cuidado_y_autocuidado.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sonia Margarita Leal Cruzo',
          cargo: 'Experta Temática',
          centro: 'Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
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
