<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 ¿Dónde y cómo denunciar?
    .row.bg-c6
      .col-12
        .p-5
          .row
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c4
                p.mb-0 Una ruta de atención es el conjunto de procedimientos y recursos disponibles para responder a una situación de emergencia en salud mental, violencia, abuso o vulnerabilidad, con el objetivo de proporcionar la asistencia adecuada a la víctima o persona afectada. Estas rutas están diseñadas para guiar a las personas en la forma correcta de acceder a servicios de apoyo, protección y justicia, desde el momento en que ocurre el hecho hasta que se resuelve la situación.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img2.png', alt='', style='width: 350px').m-auto
          Separador
          #t_1_1
          .titulo-segundo.color-acento-contenido
            h2 1.1 Violencia intrafamiliar
          p.mb-4(data-aos="fade-down") La violencia dentro de la familia, en muchas ocasiones, se naturaliza. Esto significa que los comportamientos de agresión física, psicológica, económica, sexual, patrimonial, así como la negligencia y el abandono, terminan siendo vistos como normales. A pesar de que estos comportamientos causan daño en la salud mental, se perpetúan de generación en generación.
          .row.justify-content-center.mb-4
            .col-lg-10(data-aos="zoom-in")
              .row
                .col-lg-auto.bg-c8
                  .p-4
                    figure
                      img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 150px').m-auto
                .col-lg.bg-c4
                  .p-4
                    p.mb-4 Toda persona tiene la responsabilidad de denunciar cualquier acto en el que la vida o integridad de alguien esté en riesgo, especialmente si se trata de un miembro de su propia familia o de sí misma.
                    figure
                      img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 80px')
          p.mb-5(data-aos="fade-right") Cuando se produce un acto de violencia intrafamiliar y se vulneran los derechos de algún integrante, es importante conocer los derechos que amparan a la víctima: el derecho a ser escuchado, a recibir atención digna, a obtener asesoría jurídica y psicológica y a solicitar o recibir medidas de protección.
          .row.ms-0
            .col-auto.bg-c9(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.png', alt='', style='width: 50px; position: relative; left: -10px').m-auto
                .col.ps-0
                  h3.mb-0 Ruta de activación
    .row.bg-c10.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--gris1
            .p-4
              PasosB.color-primario(data-aos="zoom-in")
                .row.justify-content-center.align-items-center(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Detección de casos de violencia intrafamiliar:]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Sector salud.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Sector protección.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Comunidad (redes de apoyo, familia, vecindario).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Sector educación.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Víctima.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img5.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Servicios de apoyo:]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Instituciones prestadoras de servicios de salud:] atención médica y pericial.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Hogares de paso:] refugios temporales diseñados para ofrecer protección y apoyo a personas en situación de riesgo o vulnerabilidad.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img6.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Atención del caso:]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Comisaría de Familia local:] recepción de denuncias, protección inmediata, remisión a medicina legal para exámenes y periciales, atención psicosocial, remisión del caso a fiscalía.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Policía Nacional local:] recepción de denuncias y protección inmediata, remisión del caso a fiscalía y comisaría de familia.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Fiscalía local:] investigación, acción penal y medidas cautelares.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Centro de Atención Penal Integral a Víctimas (CAPIV).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Unidades de Reacción Inmediata (URI).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Ministerio Público:] en caso de que alguna institución o funcionario niegue o vulnera la atención, acudir al Ministerio Público.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img7.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b ¿Dónde denunciar?]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Comisaría de familia local.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Policía Nacional local.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Fiscalía local.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Centro de Atención Penal Integral a Víctimas (CAPIV).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Unidades de Reacción Inmediata (URI).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Ministerio Público.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img8.png', alt='', style='width: 400px').m-auto
    p.mb-5(data-aos="fade-right") #[b Ante casos de violencia, se deben tomar las siguientes acciones:]
    .row.bg-c11
      .col-12
        .px-5
          .row
            .col-12
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")(data-aos="zoom-in")
                .row(titulo="Rutas de atención")
                  .col-lg-8
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Línea 123 emergencia Distrital o la línea de su ciudad.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Línea de la fiscalía desde celular a la línea 122 o desde teléfono fijo al 018000919748.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Página web policía nacional: #[a(href="https://www.policia.gov.co" target="_blank") www.policia.gov.co]
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Línea 106 Secretaría Distrital de Salud.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Centro de Atención Penal Integral a Víctimas (CAPIV).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Unidades de Reacción Inmediata (URI) línea celular 155 o desde teléfono 018000112137.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Es importante que consulte los números de contacto de la comisaría de familia más cercana, especialmente si es testigo o víctima de violencia intrafamiliar.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema1/img10.png', alt='', style='width: 400px').m-auto
                .row(titulo="Atención medica integral")
                  .col-lg-8
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Hospitales locales.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 IPS.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 CAMI (Centro de Atención Médica Inmediata). UPA (Unidad Primaria de Atención).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 ABA (Unidad Básica de Atención).
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema1/img9.png', alt='', style='width: 400px').m-auto
          Separador
          #t_1_2
          .titulo-segundo.color-acento-contenido
            h2 1.2 Maltrato infantil
          p.mb-4(data-aos="fade-right") Cuando un niño, niña o adolescente sea víctima de prejuicios, castigos, humillaciones, descuido, maltrato, abuso o explotación sexual, ya sea por parte de sus padres, representantes legales o cualquier otra persona, es nuestro deber denunciar, independientemente de si somos la víctima directa o no.
          .row.justify-content-center.mb-5(data-aos="fade-left")
            .col-md-7.col-lg-3.px-0
              figure
                img(src='@/assets/curso/tema1/img4.svg', alt='', style='width: 400px').m-auto
            .col-md-7.col-lg-5.bg-c8
              .row.h-100.align-items-center
                .col-12
                  .p-4
                    i.fas.fa-quote-left(style='color: #35A064; font-size: 40px')
                    p.ms-3.mb-0.fs-5.txt-c1 #[b No estamos solos; es esencial buscar ayuda.]
            .col-lg-4
              .row.h-100.align-items-center
                .col-12
                  .p-4
                    p.mb-0 Las víctimas de maltrato infantil tienen derecho al restablecimiento de sus derechos. Esto implica ser protegidos y que se respete su vida e integridad, así como el derecho a recibir atención integral en salud y educación.
          .row.ms-0.mb-5
            .col-auto.bg-c9(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.png', alt='', style='width: 50px; position: relative; left: -10px').m-auto
                .col.ps-0
                  h3.mb-0 Ruta de activación
    .row.bg-c10.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--gris1
            .p-4
              PasosB.color-primario(data-aos="zoom-in")
                .row.justify-content-center.align-items-center(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Detección de casos de violencia intrafamiliar:]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Sector salud.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Sector protección.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Comunidad (redes de apoyo, familia, vecindario).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Sector educación.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Víctima.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img12.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b ¿Dónde denunciar?]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Comisaría de familia local.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Policía Nacional local.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Fiscalía local.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Centro de Atención Penal Integral a Víctimas (CAPIV).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Centro de Atención a Víctimas de abuso sexual - CAIVAS.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Unidades de Reacción Inmediata (URI).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Casas de justicia.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Instituto Colombiano de Bienestar Familiar (ICBF).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Ministerio Público.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img13.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center(titulo="")
                  .col-11
                    p #[b Atención del caso:]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Comisaría de Familia local:] recepción de denuncias, protección inmediata, remisión a medicina legal para exámenes y periciales, atención psicosocial, remisión del caso a fiscalía.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Policía Nacional local:] recepción de denuncias y protección inmediata, remisión a medicina legal para exámenes y periciales, remisión del caso a fiscalía y Comisaría de Familia.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Fiscalía local:] investigación, acción penal y medidas cautelares.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Centro de Atención Penal Integral a Víctimas (CAPIV).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Centro de Atención a Víctimas de abuso sexual - CAIVAS.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Casas de justicia:] recepción de denuncias, protección inmediata, remisión a medicina legal para exámenes y periciales, atención psicosocial, remisión del caso a fiscalía.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Unidades de Reacción Inmediata (URI).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Instituto Colombiano de Bienestar Familiar (ICBF):] recepción de denuncia, protección inmediata, intervención psicosocial, restablecimiento de derechos.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Ministerio Público:] en caso de que alguna institución o funcionario niegue o vulnera la atención acudir al Ministerio Público.
                .row.justify-content-center.align-items-center(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Servicios de apoyo:]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Instituciones prestadoras de servicios de salud:] atención médica y pericial.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Hogares de paso:] refugios temporales diseñados para ofrecer protección y apoyo a personas en situación de riesgo o vulnerabilidad.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Instituciones con modalidad de internado:] ofrecen protección y cuidado especializado a menores que necesitan ser separados de su entorno familiar de manera temporal o permanente.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img14.png', alt='', style='width: 400px').m-auto
    p.mb-5(data-aos="fade-right") #[b Ante casos de maltrato infantil se deben tomar las siguientes acciones:]
    .row
      .col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")(data-aos="zoom-in")
          .row(titulo="Rutas de atención")
            .col-lg-8
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Línea 123 emergencia distrital o la línea de su ciudad.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Línea de la fiscalía desde celular a la línea 122 o desde teléfono fijo al 018000919748.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Página web policía nacional: #[a(href="https://www.policia.gov.co" target="_blank") www.policia.gov.co]
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Línea ICBF 141.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Línea de prevención del abuso sexual - 01 8000 91 80 80.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Línea 106 Secretaría Distrital de Salud.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Centro de Atención Penal Integral a Víctimas (CAPIV).
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Centro de Atención a Víctimas de abuso sexual - CAIVAS.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Unidades de Reacción Inmediata (URI) línea celular 155 o desde teléfono 018000112137.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Es importante que consulte los números de contacto de la Comisaría de Familia más cercana, especialmente si es testigo o víctima de maltrato infantil o abuso sexual.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Atención medica integral.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img15.png', alt='', style='width: 400px').m-auto
          .row(titulo="Atención medica integral")
            .col-lg-8
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Hospitales locales.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 IPS.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 CAMI (Centro de Atención Médica Inmediata). UPA (Unidad Primaria de Atención).
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 ABA (Unidad Básica de Atención).
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img16.png', alt='', style='width: 400px').m-auto
    Separador
    #t_1_3
    .row.bg-c13.mb-5
      .col-12
        .px-5
          .titulo-segundo.color-acento-contenido
            h2 1.3 Violencia contra la mujer por razón de género
          .row.align-items-center
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              p Se presenta cuando #[b una mujer], ya sea en el ámbito familiar o fuera de él, es objeto de #[b violencia física, psicológica, abuso sexual, explotación o incluso homicidio], específicamente por su género. Este tipo de violencia representa un gran peligro ya que a menudo permanece oculta y, en algunas ocasiones, sólo se hace visible cuando ocurren hechos trágicos como la agresión física severa o el fallecimiento. Es fundamental que las mujeres reconozcan que no están solas, que existen mecanismos de protección y que nadie tiene derecho a infligirles daño.
              .row.justify-content-center
                .col-md-7.col-lg-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img5.svg', alt='', style='width: 390px').m-auto
                .col-md-7.col-lg.bg-c14
                  .row.h-100.align-items-center
                    .col-12
                      .p-5
                        p.fs-5.mb-4 #[b Una mujer que sufre maltrato por primera vez y lo tolera, se arriesga a caer en un ciclo de violencia que amenaza su vida e integridad.]
                        figure
                          img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 120px')
            .col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img18.png', alt='', style='width: 300px').m-auto
    .row.ms-0.mb-5
      .col-auto.bg-c9(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.png', alt='', style='width: 50px; position: relative; left: -10px').m-auto
          .col.ps-0
            h3.mb-0 Ruta de activación
    .row.bg-c10.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--gris1
            .p-4
              PasosB.color-primario(data-aos="zoom-in")
                .row.justify-content-center.align-items-center(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Detección de casos de violencia de género:]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Sector salud.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Sector protección.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Comunidad (redes de apoyo, familia, vecindario).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Sector educación.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Víctima.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img19.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b ¿Dónde denunciar?]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Comisaría de Familia local.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Inspección de Policía local.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Policía Nacional local.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Fiscalía local.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Centro de Atención Penal Integral a Víctimas (CAPIV).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Unidades de Reacción Inmediata (URI).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Centro de Atención a Víctimas de abuso sexual - CAIVAS.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Secretaría Distrital de Salud o Secretaría de mujeres.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Ministerio Público.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img20.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center(titulo="")
                  .col-11
                    p #[b Atención del caso:]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Comisaría de Familia local:] recepción de denuncias, protección inmediata, remisión a medicina legal para exámenes y periciales, atención psicosocial, remisión del caso a fiscalía.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Inspección de Policía local:] recepción de denuncias, protección inmediata, remisión a medicina legal para exámenes y periciales, atención psicosocial, remisión del caso a fiscalía.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Policía Nacional local:] recepción de denuncias y protección inmediata, remisión a medicina legal para exámenes y periciales, remisión del caso a fiscalía y comisaría de familia.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Fiscalía local:] investigación, acción penal y medidas cautelares.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Centro de Atención Penal Integral a Víctimas (CAPIV).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Unidades de Reacción Inmediata (URI).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Centro de Atención a Víctimas de abuso sexual - CAIVAS.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Ministerio Público:] en caso de que alguna institución o funcionario niegue o vulnera la atención acudir al Ministerio Público.
                .row.justify-content-center.align-items-center(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Servicios de apoyo:]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Instituciones prestadoras de servicios de salud:] atención médica y pericial.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Secretaría Distrital de Salud o Secretaría de mujeres:] orientación psicológica, intervención en crisis, asesoría jurídica, acompañamiento jurídico o acompañamiento psicosocial en campo.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Hogares de acogida:] son lugares seguros donde las mujeres pueden quedarse temporalmente si se encuentran en una situación de violencia que ponga en riesgo su vida, su integridad y su seguridad personal.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img21.png', alt='', style='width: 400px').m-auto
    p.mb-5(data-aos="fade-right") #[b Ante casos de violencia contra la mujer se deben tomar las siguientes acciones:]
    .row
      .col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")(data-aos="zoom-in")
          .row(titulo="Líneas y medios de denuncia y atención")
            .col-lg-8
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Línea 123 emergencia distrital o la línea de su ciudad.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Página web policía nacional: #[a(href="https://www.policia.gov.co" target="_blank") www.policia.gov.co]
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Línea 106 Secretaría Distrital de Salud.
                
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Línea 195.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Centro de Atención Penal Integral a Víctimas (CAPIV).
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Centro de Atención a Víctimas de abuso sexual - CAIVAS.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Unidades de Reacción Inmediata (URI) línea celular 155 o desde teléfono 018000112137.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Es importante que consulte los números de contacto de la comisaría de familia más cercana.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img22.png', alt='', style='width: 400px').m-auto
          .row(titulo="Atención medica integral")
            .col-lg-8
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Hospitales locales.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 IPS.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 CAMI (Centro de Atención Médica Inmediata). UPA (Unidad Primaria de Atención).
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 UPA (Unidad Primaria de Atención).
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 ABA (Unidad Básica de Atención).
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Casa de igualdad de oportunidades - Programa Justicia de Género.
                li.d-flex
                  i.fas.fa-circle-check
                  |
                  p.mb-0 Dirección de Derechos Humanos y apoyo a la justicia.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img23.png', alt='', style='width: 400px').m-auto
    Separador
    #t_1_4
    .row.bg-c13.mb-5
      .col-12
        .px-5
          .titulo-segundo.color-acento-contenido
            h2 1.4 Ideación/ conducta suicida, evento en crisis y trastornos mentales
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p Ante un evento de crisis causado por un determinante social, factor de riesgo o por un trastorno mental (o la sospecha de éste), en el que se experimenten afectaciones físicas, psicológicas o conductuales que requieran atención profesional especializada, la activación de esta ruta es esencial para abordar las secuelas emocionales y psicológicas derivadas del evento estresante y garantizar que las víctimas reciban el apoyo necesario para su recuperación.
              .row
                .col-12
                  .p-4.bg-c7
                    p.mb-0 Una persona que no recibe atención profesional especializada ante una crisis emocional o psicológica, puede desencadenar problemáticas y conductas de mayor gravedad.
            .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img6.svg', alt='', style='width: 370px').m-auto
          p(data-aos="fade-right") #[b Ante casos de crisis, trastornos mentales o sospecha de estos, se deben tomar las siguientes acciones:]
    .row.bg-c10.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--gris1
            .p-4
              PasosB.color-primario(data-aos="zoom-in")
                .row.justify-content-center.align-items-center(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Detección de casos:]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Sector salud.
                      li.d-flex
                        i.fas.fa-circle-check 
                        |
                        p.mb-0 Sector protección.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Comunidad (redes de apoyo, familia, vecindario).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Sector educación.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Victima.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img24.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b ¿Dónde acudir?]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Instituciones prestadoras de servicios de salud locales:] servicios de urgencias.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Secretarías de salud.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img25.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Atención del caso:]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Instituciones prestadoras de servicios de salud locales:] atención médica, atención psicológica y de seguimiento, remisión a medicina especializada (neuropsicólogo, psiquiatría, toxicología, entre otros).
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Secretaría de salud local:] remisión del caso a las instituciones prestadoras de servicios de salud.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Ministerio Público:] en caso de que alguna institución o funcionario niegue o vulnera la atención acudir al Ministerio Público.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img26.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Líneas de atención:]
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Nacional: 192 opción 4.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Línea 123 social.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Línea amiga: 4444 4448 - 3007231123.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img27.png', alt='', style='width: 400px').m-auto
    p.mb-5(data-aos="fade-right") Es importante que consulte los números de contacto de la Institución prestadora de servicios de salud más cercana, en caso de un evento en crisis.
    .row.mb-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c15
          p Es esencial abordar cualquier alteración de la salud mental que comprometa el bienestar individual, familiar o social de manera oportuna y por profesionales capacitados y especializados en este tipo de condiciones.
          p.mb-0 No hay motivo para sentir vergüenza al solicitar ayuda psicológica; no es un delito, sino una respuesta saludable y normal ante una enfermedad. Todo individuo tiene derecho a ser escuchado, recibir atención y obtener el tratamiento e intervenciones adecuadas que faciliten el manejo de su condición.
      .col-lg-3(data-aos="fade-left")
        .p-4.bg-c12
          figure
            img(src='@/assets/curso/tema1/img7.svg', alt='', style='width: 300px').m-auto
    p.mb-5(data-aos="fade-right") #[b Es crucial entender la distinción entre consumo, abuso y dependencia de sustancias psicoactivas.]
    .row.bg-c10.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--gris1
            .p-4
              SlyderA(tipo="b")(data-aos="zoom-in")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b El consumo de drogas]
                    p.mb-0 Se define como el uso de cualquier sustancia psicoactiva de manera habitual. No obstante, no todas las personas que consumen desarrollan dependencia o adicciones; es decir, pueden ser usuarios no problemáticos. Esto no implica que las drogas carezcan de efectos adversos en el organismo, pues los tienen. El consumo puede clasificarse como experimental, recreativo o habitual.
                  .col-lg-4
                    figure
                      img(src="@/assets/curso/tema1/img28.png", alt="", style="width: 400px").m-auto
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b El abuso de drogas]
                    p.mb-0 Se caracteriza por un consumo compulsivo, en el que, en ausencia de la sustancia, la persona siente una imperiosa necesidad de consumir, ya sea por presiones del entorno o para inhibir malestares físicos o emocionales. El abuso acarrea consecuencias notables en la salud física y mental.
                  .col-lg-4
                    figure
                      img(src="@/assets/curso/tema1/img29.png", alt="", style="width: 400px").m-auto
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b La dependencia]
                    p.mb-0 Se manifiesta cuando la persona es incapaz de cesar el consumo de la sustancia psicoactiva, lo cual se acompaña de alteraciones físicas como la ansiedad y cambios en el estado de ánimo, entre otros.
                  .col-lg-4
                    figure
                      img(src="@/assets/curso/tema1/img30.png", alt="", style="width: 400px").m-auto
    p.mb-5(data-aos="fade-right") #[b A continuación, conozca cómo se puede acceder a un tratamiento por consumo de sustancias psicoactivas.]
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-left")
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img8.svg', alt='')
          .tarjeta.color-acento-botones1.shadow.p-4(x="14%" y="85%" numero="1")
            p.mb-0 Pida una cita con médico general en el centro de salud donde siempre consulta. El motivo de la consulta es: consumo de sustancias psicoactivas.
          .tarjeta.color-acento-botones1.shadow.p-4(x="8%" y="50%" numero="2")
            p.mb-0 El médico general le entregará una remisión para la atención con el médico especialista, como: psiquiatría, especialista en adicciones o toxicólogo.
          .tarjeta.color-acento-botones1.shadow.p-4(x="25%" y="17%" numero="3")
            p.mb-0 Gestione con la EPS la autorización para la atención con el médico especialista.
          .tarjeta.color-acento-botones1.shadow.p-4(x="57%" y="10%" numero="4")
            p.mb-0 La EPS entregará la autorización de servicios. Luego será necesario pedir esta cita en la IPS asignada.
          .tarjeta.color-acento-botones1.shadow.p-4(x="92%" y="50%" numero="5")
            p.mb-0 En la cita con el especialista, él determinará el tratamiento a seguir, y entregará un documento para que la EPS autorice el servicio que requiera el usuario.
          .tarjeta.color-acento-botones1.shadow.p-4(x="86%" y="85%" numero="6")
            p.mb-0 Una vez se tenga esta aprobación, el usuario deberá contactar a la IPS para agendar la atención.
    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .p-4.bg-c7
          p.mb-0 La EPS (Entidades Prestadoras de Salud) cubre el costo del tratamiento. El usuario deberá pagar el copago y/o cuota moderadora asignada por el Estado.
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
