<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 2
      h1 Acciones de prevención en salud mental
    .row.bg-c6
      .col-12
        .px-5.pt-5
          .row
            .col-lg-8.order-2.order-lg-1
              p.mb-0 Las acciones de prevención en salud mental son fundamentales para fomentar el bienestar y la resiliencia en individuos y comunidades. Estas acciones incluyen promover estilos de vida saludables que integren una nutrición adecuada, actividad física regular y técnicas de manejo del estrés. La educación sobre la salud mental y la concientización acerca de los factores de riesgo y los signos de trastornos emocionales también son clave. Además, el fortalecimiento del amor propio y la autoestima, así como el desarrollo de redes de apoyo social, son esenciales para crear un ambiente propicio para la salud mental.
            .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 350px').m-auto
          Separador
          #t_2_1
          .titulo-segundo.color-acento-contenido
            h2 2.1 Estilos de vida saludables
          p.mb-4 Los estilos de vida pueden guiar a las personas hacia dos direcciones: una de enfermedad, adicciones, violencia, maltrato y muerte, o hacia una de #[b positividad, felicidad, respeto, nutrición adecuada, actividad física y bienestar].
          .row.justify-content-center
            .col-lg-8
              .row
                .col-lg-auto.bg-c8
                  .p-4
                    figure
                      img(src='@/assets/curso/tema2/img2.svg', alt='', style='width: 260px').m-auto
                .col-lg.bg-c4
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        p #[b ¿Qué determina el camino que una persona seguirá?]
                        p.mb-0 Depende exclusivamente de la persona. Aunque ciertos riesgos aumentan la probabilidad de desarrollar trastornos mentales, también existe la posibilidad real de protegerse a sí mismo y a tros de estos peligros.
          Separador
          #t_2_2
          .titulo-segundo.color-acento-contenido
            h2 2.2 Autoestima, amor propio y familia
    p.mb-4 La autoestima es una construcción psicológica que refleja cómo una persona se ve, se siente y está satisfecha con su vida. Se forma a partir de componentes actitudinales, cognitivos y afectivos. Por ejemplo, alguien que no se siente a gusto con su imagen personal puede sentirse y pensar que es menos atractivo y alimentar este sentimiento al compararse desfavorablemente con otros.
    .row.mb-4
      .col-lg-3.bg-c8
        .row.h-100.align-items-center
          .col-12
            .p-3
              figure
                img(src='@/assets/curso/tema2/img3.svg', alt='', style='width: 260px').m-auto
      .col-lg-4.bg-c4
        .row.h-100.align-items-center
          .col-12
            .p-3
              p.mb-0 El problema radica en la falta de autoaceptación, la subvaloración y el consecuente deterioro de la autoestima.
      .col-lg-5
        .row.h-100.align-items-center
          .col-12
            .p-3
              p.mb-0 Es importante reconocer que #[b la familia y los entornos sociales] desempeñan un papel esencial en la construcción de nuestra autoestima. Sin embargo, #[b el control sobre nuestros propios pensamientos y sentimientos recae en nosotros], y debemos aprender a gestionarlos adecuadamente.
    .row
      .col-lg-8.order-2.order-lg-1
        p Aunque ciertos riesgos incrementan la posibilidad de experimentar trastornos mentales, es posible salvaguardarse tanto a uno mismo como a otros de estos peligros. El concepto de autoestima se amplía para abarcar el amor propio, una idea que Fernando Savater introduce al definir #[b la ética como amor propio]. Esto implica #[b la capacidad y la responsabilidad de interactuar] con los demás a partir de un reconocimiento auténtico de lo que uno es, piensa y siente.
        p.mb-0 Esta perspectiva establece el amor propio como un límite ineludible en la interacción social, implicando que el respeto y amor por uno mismo son esenciales para el respeto y amor hacia los demás.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img4.svg', alt='', style='width: 380px').m-auto

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
