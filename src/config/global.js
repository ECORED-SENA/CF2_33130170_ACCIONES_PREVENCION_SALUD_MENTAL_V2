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
      tema: 'Violencia contra la mujer por razón de género',
      referencia:
        'World Health Organization (WHO). (2016). <i>OMS: Fortalecer la función del sistema de salud para abordar la violencia contra las mujeres</i> (video). YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=NAlY-1KI6ts&ab_channel=WorldHealthOrganization%28WHO%29',
    },
    {
      tema:
        'Ideación/ conducta suicida, evento en crisis y trastornos mentales',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). <i>Rutas de atención</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pV3a1wOOFYI&t=10s',
    },
    {
      tema: 'Acciones de prevención en salud mental',
      referencia:
        'Comunicaciones Asmet. (2021). <i>PREVENCIÓN DE TRASTORNOS Y PROBLEMAS DE LA SALUD MENTAL</i> (video). YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=KSEwfbGanDI&ab_channel=ComunicacionesAsmet',
    },
    {
      tema: 'Manejo de estrés y prevención de consumo',
      referencia:
        'Julio Rodríguez (2011). <i>La receta para el estrés (Parte 1)</i> (video). YouTube.',
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
      termino: 'Casa de justicia',
      significado:
        'organismos del estado encargados de impartir justicia a nivel local, de tal forma que se garantice el acceso a la justicia de manera efectiva a la comunidad.',
    },
    {
      termino: 'Comisaría de Familia',
      significado:
        'organismo estatal encargado de prevenir, garantizar y restablecer los derechos de los miembros de un grupo familiar o alguno de sus integrantes.',
    },
    {
      termino: 'Denuncia',
      significado:
        'se refiere a la acción de declarar, notificar o avisar que algo no está bien, que se está cometiendo un delito o alguien está en riesgo.',
    },
    {
      termino: 'Derechos de la víctima',
      significado:
        'derechos que asisten a las víctimas de un delito o abuso, como el derecho a ser escuchado, a recibir atención digna y protección legal.',
    },
    {
      termino: 'Líneas de emergencia',
      significado:
        'línea telefónica dispuesta para la comunidad a través de la cual pueden denunciar y buscar orientación para el acceso a servicios específicos.',
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
      termino: 'Red hospitalaria',
      significado:
        'conjunto de instituciones de diferentes niveles de atención, dispuestas para prestar los servicios de salud a la comunidad.',
    },
    {
      termino: 'Ruta de atención',
      significado:
        'herramientas dispuestas por el estado, que indican qué hacer para acceder a los servicios sociales, de atención en caso de violencias o en salud.',
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
        'Gutiérrez, M. Familia Buen Trato y Corresponsabilidad. Bogotá (2015). <i>Asociación Afecto contra el maltrato Infantil</i>. Presentación PPT.',
    },
    {
      referencia:
        'Instituto Nacional de Medicina Legal y Ciencias Forenses. (2015). <i>Violencia intrafamiliar (primera parte)</i>. ',
      link:
        'https://www.medicinalegal.gov.co/documents/20143/49523/Violencia+intrafamiliar+primera+parte.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). <i>Política Nacional de Salud Mental</i>. Ministerio de Salud y Protección Social. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/politica-nacional-salud-mental.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). <i>Resolución 3280 de 2018, por la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación</i>. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%203280%20de%2020183280.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2002). <i>Informe mundial sobre la violencia y la salud</i>. Recuperado de: ',
      link:
        'https://iris.who.int/bitstream/handle/10665/78545/924159215X_spa.pdf',
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
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
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
