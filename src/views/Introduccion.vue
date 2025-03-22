<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5
          .row
            .col-12.mb-4(data-aos="fade-down")
              .p-4.bg-c2
                .row.align-items-center
                  .col.order-2.order-md-1
                    p.mb-0 Se ha realizado un recorrido que permite comprender la importancia de la salud mental y detectar los factores que pueden afectarla. Sin embargo, no basta con reconocer que se está en riesgo o que ciertas situaciones han impactado el bienestar personal; es crucial actuar, romper los círculos de violencia, alejarse de entornos perjudiciales y buscar la ayuda profesional necesaria.
                  .col-md-auto.order-1.order-md-2.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/intro/img1.svg', alt='', style='width: 140px').m-auto
            p.mb-3(data-aos="fade-right") No importa si no eres la víctima; si observas el hecho, la corresponsabilidad implica que, como testigo, tienes el deber de denunciar activamente y poner en marcha las rutas de atención disponibles. Esto es crucial para proteger a la persona afectada y garantizar su acceso a la ayuda que necesita. Aunque no seas el principal afectado, tu acción puede ser fundamental para una intervención rápida y eficaz.
            p.mb-4(data-aos="fade-right") #[b En este componente se profundiza en:]
            .row
              .col-12.mb-2(data-aos="fade-right")
                .p-4.bg-c4
                  .row.align-items-center
                    .col-md-3.mb-4.mb-md-0
                      figure
                        img(src='@/assets/curso/intro/img2.svg', alt='', style='width: 160px').m-auto
                    .col-md
                      .row.mb-3
                        .col-auto
                          .py-2.px-3.bg-c3
                            p.mb-0 #[b Rutas de atención]
                      ul.lista-ul--color.mb-0
                        li.d-flex
                          i.fas.fa-circle-check
                          |
                          p.mb-0 Se explorarán las rutas de atención disponibles en casos de violencia, trastornos mentales o consumo de sustancias psicoactivas (SPA).
                        li.d-flex
                          i.fas.fa-circle-check
                          |
                          p.mb-0 Se fomentará la acción asertiva y oportuna para reducir los niveles de afectación.
                        li.d-flex
                          i.fas.fa-circle-check
                          |
                          p.mb-0 Se generará conciencia sobre la importancia de denunciar situaciones propias o ajenas, esencial para la intervención de organismos competentes.
              .col-12.mb-2(data-aos="fade-left")
                .p-4.bg-c5
                  .row.align-items-center
                    .col-md-3.mb-4.mb-md-0
                      figure
                        img(src='@/assets/curso/intro/img3.svg', alt='', style='width: 160px').m-auto
                    .col-md
                      .row.mb-3
                        .col-auto
                          .py-2.px-3.bg-c3
                            p.mb-0 #[b Protección de la salud mental]
                      ul.lista-ul--color.mb-0
                        li.d-flex
                          i.fas.fa-circle-check
                          |
                          p.mb-0 Se abordarán los aspectos relacionados con la protección de la salud mental desde una perspectiva personal.
                        li.d-flex
                          i.fas.fa-circle-check
                          |
                          p.mb-0 Se enfatizará la responsabilidad individual en el propio desarrollo y bienestar mental.
                        li.d-flex
                          i.fas.fa-circle-check
                          |
                          p.mb-0 Relación entre hábitos de vida saludables y bienestar.
              .col-12(data-aos="fade-right")
                .p-4.bg-c4
                  .row.align-items-center
                    .col-md-3.mb-4.mb-md-0
                      figure
                        img(src='@/assets/curso/intro/img4.svg', alt='', style='width: 160px').m-auto
                    .col-md
                      .row.mb-3
                        .col-auto
                          .py-2.px-3.bg-c3
                            p.mb-0 #[b Psicológico]
                      ul.lista-ul--color.mb-0
                        li.d-flex
                          i.fas.fa-circle-check
                          |
                          p.mb-0 Se discutirá la relación entre los hábitos de vida saludables, el amor propio y la ética del cuidado.
                        li.d-flex
                          i.fas.fa-circle-check
                          |
                          p.mb-0 Estos factores son fundamentales para gestionar el estrés y protegerse de entornos dañinos que podrían conducir al consumo de sustancias psicoactivas.

</template>

<script>
export default {
  name: 'Introduccion',
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
