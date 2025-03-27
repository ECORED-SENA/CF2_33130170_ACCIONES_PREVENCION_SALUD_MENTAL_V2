<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Manejo de estrés y prevención de consumo
    .row.bg-c6
      .col-12
        .px-5.pt-5
          .row
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p La política pública en salud mental agrupa acciones intersectoriales orientadas a promover el desarrollo de capacidades individuales, colectivas y poblacionales. Estas acciones buscan que los sujetos reconozcan sus derechos y puedan vivir una salud mental que les permita afrontar los desafíos de la vida, trabajar, establecer relaciones significativas y contribuir a una comunidad basada en relaciones equitativas, dignas y justas para todos.
              p El estrés es una parte normal de la vida y puede ser útil en situaciones de emergencia; cuando no se maneja adecuadamente, puede tener efectos negativos graves en la salud. Aprender a reconocer los signos de estrés y utilizar estrategias de manejo, como la relajación, ejercicio físico o apoyo emocional, es crucial para mantener un bienestar óptimo.
              figure
                img(src='@/assets/curso/tema3/img1.svg', alt='', style='width: 90px')
            .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema3/img1.png', alt='', style='width: 390px').m-auto
          Separador
          #t_3_1
          .titulo-segundo.color-acento-contenido
            h2 3.1 Prevención del consumo de Sustancias Psicoactivas (SPA)
          .row.mb-5
            .col-lg-4(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema3/img2.png', alt='', style='width: 390px').m-auto
            .col-lg-8(data-aos="fade-left")
              p El consumo de SPA ha sido una problemática que se ha abordado desde diversas miradas: #[b individual, familiar, social y comunitaria]. Para el presente programa queremos realizar un abordaje desde la perspectiva individual y familiar, que permita delimitar acciones específicas que ayuden a mitigar los riesgos. Según la reacción que generan sobre el sistema nervioso, reciben una clasificación así:
              .row.mb-3
                .col-auto
                  .py-2.px-3.bg-c17
                    p.mb-0 #[b.txt-c2 Clasificación de riesgos]
                .col-auto
                  .py-2.px-3.bg-c17
                    p.mb-0 #[b.txt-c2 Estimulantes]
                .col-auto
                  .py-2.px-3.bg-c17
                    p.mb-0 #[b.txt-c2 Alteradores de la percepción]
              p Cada sustancia tiene un efecto particular y cada consumidor busca la sustancia de acuerdo con las necesidades individuales que requiera satisfacer.
              figure
                img(src='@/assets/curso/tema3/img1.svg', alt='', style='width: 90px')
          .row.mb-5(data-aos="fade-right")
            .col-auto
              .py-2.px-3.bg-c16
                p.mb-0 #[b ¿Cómo mitigar entonces estos riesgos?]
    .row.bg-c10
      .col-12
        .p-5
          .tarjeta.tarjeta--gris1
            .p-4
              SlyderA(tipo="b")(data-aos="zoom-in")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Fortalecimiento de entornos resilientes, saludables y protectores que promuevan estilos de vida saludables.]
                    p #[b a. Fortalecimiento de redes de apoyo:] se refiere a la creación de vínculos estrechos y seguros entre actores (instituciones, organizaciones, familias, personas) para compartir recursos y generar sinergias en beneficio de un objetivo común. 
                    p #[b b. Articulación intersectorial en salud:] implica la colaboración activa de sectores como educación, trabajo, vivienda y cultura para mejorar el bienestar y la calidad de vida de la población.
                  .col-lg-4
                    figure
                      img(src="@/assets/curso/tema3/img3.png", alt="", style="width: 400px").m-auto
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Involucramiento parental]
                    p Se refiere a la participación regular de los padres en la vida de sus hijos, que incluye:
                    p.mb-0 #[b a.] Diálogo constante para acompañar, apoyar y supervisar sus actividades. 
                    p #[b b.] Fomento de afecto, confianza y relaciones basadas en respeto y libertad.
                  .col-lg-4
                    figure
                      img(src="@/assets/curso/tema3/img4.png", alt="", style="width: 400px").m-auto
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Educación en habilidades psicosociales para la vida]
                    p Las competencias clave para afrontar la vida y fomentar el desarrollo del capital humano incluyen habilidades como:
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Autoconocimiento:] reconocer fortalezas, debilidades y recursos personales.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Empatía:] comprender los sentimientos de los demás y responder solidariamente.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Comunicación efectiva:] expresarse de manera clara y establecer límites en las relaciones.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Relaciones interpersonales:] interactuar positivamente y mantener relaciones significativas.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Toma de decisiones:] evaluar opciones considerando valores y consecuencias.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Solución de problemas y conflictos:] manejar conflictos de manera creativa y flexible.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Pensamiento creativo:] buscar respuestas innovadoras a desafíos.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Pensamiento crítico:] analizar la realidad desde diferentes perspectivas.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Manejo de emociones:] reconocer y gestionar emociones de manera positiva.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Manejo del estrés:] identificar y contrarrestar el estrés de forma saludable.
                  .col-lg-4
                    figure
                      img(src="@/assets/curso/tema3/img5.png", alt="", style="width: 400px").m-auto
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Fortalecimiento de la cultura propia como factor protector de la salud mental]
                    p El fortalecimiento de la cultura propia como factor protector de la salud mental implica reconocer y promover las cosmovisiones, valores y prácticas culturales que favorezcan la interacción comunitaria, familiar e individual, y fortalezcan la identidad de los grupos étnicos. Esto se implementará a través de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud en el Curso de Vida, que, con la participación de otros sectores, promueve la salud mental, previene trastornos y genera una cultura de cuidado en la población, incluyendo valoración integral, detección temprana, protección y educación en salud, con atención especial a los cuidadores.
                  .col-lg-4
                    figure
                      img(src="@/assets/curso/tema3/img6.png", alt="", style="width: 400px").m-auto
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 Guía para la realización del plan de acción personal
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .py-2.px-3.bg-c16
          p.mb-0 #[b Plan de acción en familia]
    p.mb-5(data-aos="fade-down") Lo siguiente es accionar; #[b (llevar a la práctica)] mediante un plan que oriente, por ello la invitación para desarrollar el #[b autodiagnóstico], que permitirá identificar las condiciones propias de la vida, la individualidad, el entorno familiar y social, y que puede estar afectando la salud y calidad de vida. Para orientar este autodiagnóstico, tenemos una serie de preguntas que responder, la invitación para que escriba en un texto y guarde sus respuestas:
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c18(data-aos="fade-left")
          .row.justify-content-center
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-3.bg-c19
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema3/img2.svg', alt='', style='width: 40px').m-auto
                  .col
                    .row.h-100.align-items-center
                      .col-12
                        p.mb-0 ¿Como me veo?
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-3.bg-c19
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema3/img3.svg', alt='', style='width: 40px').m-auto
                  .col
                    .row.h-100.align-items-center
                      .col-12
                        p.mb-0 ¿Cómo me siento conmigo?
            .col-md-6.col-lg-4
              .p-3.bg-c19
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema3/img4.svg', alt='', style='width: 40px').m-auto
                  .col
                    .row.h-100.align-items-center
                      .col-12
                        p.mb-0 ¿Qué pienso de mi?
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .py-2.px-3.bg-c16
          p.mb-0 #[b Mi mayor fortaleza]
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c18(data-aos="fade-down")
          .row.justify-content-center
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-3.bg-c19
                .row.align-items-center
                  .col-12
                    .p-3.bg-c19
                      p.text-center.mb-0 ¿Qué debo mejorar?
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-3.bg-c19
                .row.align-items-center
                  .col-12
                    .p-3.bg-c19
                      p.text-center.mb-0 ¿Soy seguro de mi mismo?
            .col-md-6.col-lg-4
              .p-3.bg-c19
                .row.align-items-center
                  .col-12
                    .p-3.bg-c19
                      p.text-center.mb-0 ¿Qué debo mejorar?
    p.mb-5(data-aos="fade-right") #[b Otras preguntas:]
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-left")
          p.mb-0 #[b Tabla 1.] Preguntas plan de acción personal
        .tabla-a.color-primario(data-aos="fade-right")
          table
            thead
              tr
                th Familia
                th Social
                th Hábitos
            tbody
              tr.bg-c20
                td ¿Cómo es mi familia?
                td ¿Cómo son mis amigos?
                td ¿Soy fumador? ¿Por qué lo hago?
              tr
                td ¿Cómo son las relaciones entre los miembros de mi familia?
                td ¿Qué tan importante es la vida social para mí?
                td ¿Consumo alcohol? ¿Por qué lo hago?
              tr.bg-c20
                td ¿He sido víctima de maltrato en mi familia?
                td ¿Cuál es el criterio con el que elijo mis amigos?
                td ¿Consumo drogas? Cuáles, ¿por qué?
              tr
                td ¿Soy una persona maltratante?
                td ¿En qué circunstancias me siento presionado por otros y cómo lo manejo?
                td ¿Cuál es mi rutina de alimentación?
              tr.bg-c20
                td ¿Cómo demuestro el afecto en mi familia?
                td ¿He hecho cosas que debo ocultar por mis amigos?
                td ¿Realizo ejercicio físico, con qué frecuencia?
    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido
      h2 3.3 Determinación de metas a corto y mediano plazo
    p.mb-5(data-aos="fade-right") Para determinar metas debemos dar claridad a la importancia de que estas sean medibles alcanzables. Para establecer objetivos a corto y mediano plazo, es necesario partir de la reflexión realizada en el autodiagnóstico.
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c17(data-aos="fade-down")
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema3/img5.svg', alt='', style='width: 80px').m-auto
            .col-md
              p.txt-c2 #[b Para ello tendremos en cuenta que:]
              p.text-white.mb-0 Un objetivo es una acción realizable y medible, que debe redactarse con un verbo en infinitivo. Deben responder a lo que se quiere cambiar, mejorar, dejar sentir en los diferentes aspectos de la vida.
    p.mb-5(data-aos="fade-right") #[b Algunas orientaciones:]
    .row.bg-c22
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-left")
              .row
                .col-lg-auto.bg-c8
                  .px-4.pt-4
                    figure
                      img(src='@/assets/curso/tema3/img6.svg', alt='', style='width: 280px').m-auto
                .col-lg.bg-c4
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.fas.fa-circle-check
                            |
                            p.mb-0 Patrones de crianza: forma en que cada familia levanta a los hijos según valores y conceptos propios.
                          li.d-flex
                            i.fas.fa-circle-check
                            |
                            p.mb-0 El apego, construcción de vínculos sanos.
                          li.d-flex
                            i.fas.fa-circle-check
                            |
                            p.mb-0 El rechazo a toda forma de abandono.
                          li.d-flex
                            i.fas.fa-circle-check
                            |
                            p.mb-0 Rechazo a toda forma de violencia.
                          li.d-flex
                            i.fas.fa-circle-check
                            |
                            p.mb-0 El tiempo libre.
                          li.d-flex
                            i.fas.fa-circle-check
                            |
                            p.mb-0 Roles y tareas.
          p.mb-4(data-aos="fade-right") #[b Acciones por seguir:]
          p.mb-5(data-aos="fade-right") Con esta actividad identificará todas aquellas acciones que permiten llegar para lograr objetivos propuestos.
          .row.justify-content-center.mb-4(data-aos="fade-down")
            .col-10.col-md-6.col-lg-2.mb-4.mb-lg-0
              .p-3.bg-c21.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema3/img7.svg', alt='', style='width: 100px').m-auto
                p.text-center.mb-0 En lo personal.
            .col-10.col-md-6.col-lg-2.mb-4.mb-lg-0
              .p-3.bg-c21.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema3/img8.svg', alt='', style='width: 100px').m-auto
                p.text-center.mb-0 En lo familiar.
            .col-10.col-md-6.col-lg-2.mb-4.mb-md-0
              .p-3.bg-c21.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema3/img9.svg', alt='', style='width: 100px').m-auto
                p.text-center.mb-0 En los hábitos de vida.
            .col-10.col-md-6.col-lg-2
              .p-3.bg-c21.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema3/img10.svg', alt='', style='width: 100px').m-auto
                p.text-center.mb-0 En lo social.
          .row.justify-content-center(data-aos="fade-left")
            .col-lg-8
              .p-4.bg-c17
                p.text-white Tenga en cuenta que estas acciones deben llevar a conseguir lo que se planteó en los objetivos.
                p.text-white.mb-0 #[b Ejemplo:] si un objetivo fue fortalecer el amor propio, para sentirse seguro, entonces debe plantear acciones para mejorar la estima.
    Separador
    #t_3_4
    .titulo-segundo.color-acento-contenido
      h2 3.4 Identificación de habilidades individuales
    p.mb-5(data-aos="fade-right") Este proceso le permitirá identificar las fortalezas y habilidades que le ayudaran a enfocar sus gustos y preferencias.  Cada persona desarrolla capacidades distintas, de esta manera, alguien que es muy bueno académicamente puede tener grandes problemas para relacionarse.
    .row.justify-content-center
      .col-lg-8.mb-4
        .p-4.bg-c7(data-aos="fade-right")
          p.mb-0 La teoría de la inteligencia única ha sido cuestionada por Howard Gardner, quien plantea que los seres humanos podemos tener diferentes inteligencias: #[b lingüística, lógico - matemática, espacial, musical, corporal, intrapersonal y naturalista].
      .col-lg-8.mb-4
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
          p.mb-0 #[b Figura 3.] eoría de las inteligencias múltiples
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema3/img11.svg', alt='El diagrama representa la Teoría de las inteligencias múltiples y clasifica ocho tipos de inteligencias distintas. Estas inteligencias son: corporal, intrapersonal, lingüística, lógico-matemática, naturalista, visual, espacial, y musical.', style='width: 700px').m-auto
    p.mb-0(data-aos="fade-right") En el marco de la preservación de la salud mental, saber cuáles son nuestras habilidades más fuertes, brindar herramientas para fortalecer la seguridad en sí mismo, pero también ayudar a canalizar acciones frente al manejo del tiempo libre. De esta forma, si mi inteligencia es artística, buscaré opciones para fortalecer esta capacidad y sentirme bueno en ello.

</template>

<script>
export default {
  name: 'Tema3',
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
