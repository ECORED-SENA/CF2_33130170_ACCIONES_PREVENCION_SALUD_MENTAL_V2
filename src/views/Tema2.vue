<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Acciones de prevención en salud mental
    .row.bg-c6
      .col-12
        .px-5.pt-5
          .row
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p.mb-0 Las acciones de prevención en salud mental son fundamentales para fomentar el bienestar y la resiliencia en individuos y comunidades. Estas acciones incluyen promover estilos de vida saludables que integren una nutrición adecuada, actividad física regular y técnicas de manejo del estrés. La educación sobre la salud mental y la concientización acerca de los factores de riesgo y los signos de trastornos emocionales también son clave. Además, el fortalecimiento del amor propio y la autoestima, así como el desarrollo de redes de apoyo social, son esenciales para crear un ambiente propicio para la salud mental.
            .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 350px').m-auto
          Separador
          #t_2_1
          .titulo-segundo.color-acento-contenido
            h2 2.1 Estilos de vida saludables
          p.mb-4(data-aos="fade-down") Los estilos de vida pueden guiar a las personas hacia dos direcciones: una de enfermedad, adicciones, violencia, maltrato y muerte, o hacia una de #[b positividad, felicidad, respeto, nutrición adecuada, actividad física y bienestar].
          .row.justify-content-center
            .col-lg-8(data-aos="zoom-in")
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
    p.mb-4(data-aos="fade-right") La autoestima es una construcción psicológica que refleja cómo una persona se ve, se siente y está satisfecha con su vida. Se forma a partir de componentes actitudinales, cognitivos y afectivos. Por ejemplo, alguien que no se siente a gusto con su imagen personal puede sentirse y pensar que es menos atractivo y alimentar este sentimiento al compararse desfavorablemente con otros.
    .row.mb-4(data-aos="fade-left")
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
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Aunque ciertos riesgos incrementan la posibilidad de experimentar trastornos mentales, es posible salvaguardarse tanto a uno mismo como a otros de estos peligros. El concepto de autoestima se amplía para abarcar el amor propio, una idea que Fernando Savater introduce al definir #[b la ética como amor propio]. Esto implica #[b la capacidad y la responsabilidad de interactuar] con los demás a partir de un reconocimiento auténtico de lo que uno es, piensa y siente.
        p.mb-0 Esta perspectiva establece el amor propio como un límite ineludible en la interacción social, implicando que el respeto y amor por uno mismo son esenciales para el respeto y amor hacia los demás.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img4.svg', alt='', style='width: 380px').m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 ¿Cuál es el papel de la familia en el desarrollo del amor propio?
    p.mb-5(data-aos="fade-down") La familia está llamada a #[b enseñar a amar], esta es la #[b esencia de las relaciones humanas] y por sencillo que parezca, es la falla más común en las familias.
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .py-2.px-3.bg-c16
          p.mb-0 #[b ¿Por qué hay fallas en el sistema familiar?]
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-8.col-lg-6.col-xl-5.col-xxl-4.mb-4.mb-xxl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .row.justify-content-center.mb-3
                .col-auto
                  .px-3.py-2.bg-white
                    p.text-center.mb-0 #[b Experiencias propias]
              p.mb-0 Cuando las personas han tenido historias de violencia intrafamiliar, abuso y maltrato, los patrones e imaginarios que se crean están enmarcados en este tipo de relaciones y por lo general es el modelo que se sigue al construir una nueva familia. Sin embargo, esto no es una condena, lo contrario también sucede, es decir, que se trata de hacer lo opuesto a lo que se vivió.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img5.svg')})`}")
      .col-md-8.col-lg-6.col-xl-5.col-xxl-4.mb-4.mb-xxl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .row.justify-content-center.mb-3
                .col-auto
                  .px-3.py-2.bg-white
                    p.text-center.mb-0 #[b Entorno violento - historia como sociedad]
              p.mb-0 Colombia se ha vivido marcada por una historia de violencia social, que ha enseñado a solucionar los conflictos, vía eliminación del otro. Se han naturalizado estas prácticas y se asumen como normales en muchos entornos. Pelear, tratar mal a las personas, ser agresivos, decir malas palabras, son actitudes que no se cuestionan.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img6.svg')})`}")
      .col-md-8.col-lg-6.col-xl-5.col-xxl-4.mb-4.mb-xxl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .row.justify-content-center.mb-3
                .col-auto
                  .px-3.py-2.bg-white
                    p.text-center.mb-0 #[b Medios de comunicación]
              p.mb-0 Ejercen una influencia directa sobre la construcción de estereotipos, forma de hacer y ver las cosas. Noticias de violencia y abuso a diario, novelas que recrean formas de relación de pareja basadas en el desequilibrio y las marcadas relaciones de poder.
              br
              br
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img7.svg')})`}")
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .py-2.px-3.bg-c16
          p.mb-0 #[b ¿Qué se requiere de la familia para construir amor propio?]
    .row.bg-c10.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--gris1
            .p-4
              SlyderA(tipo="b")(data-aos="zoom-in")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Necesidades básicas de crecimiento]
                    p.mb-0 Cada individuo, especialmente los niños, requiere cuidados esenciales como alimentación, atención en la enfermedad y protección. Los niños necesitan la presencia de padres que los cuiden, se preocupen por ellos y les enseñen a alimentarse, a cuidar y respetar el cuerpo. Esto se aprende fundamentalmente en la familia.
                  .col-lg-4
                    figure
                      img(src="@/assets/curso/tema2/img1.png", alt="", style="width: 400px").m-auto
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Aprendizaje del amor y vínculos afectivos]
                    p.mb-0 El aprendizaje del amor se realiza a través del apego y vínculos afectivos y efectivos. La familia debe ser un modelo que fomente el amor, siendo este el propósito de su existencia. Se aprende a amar mediante el ejemplo de prácticas de buen trato, respeto, abrazos, palabras amables, sonrisas, protección, establecimiento de límites, diálogo para solucionar problemas, escucha y orientación.
                  .col-lg-4
                    figure
                      img(src="@/assets/curso/tema2/img2.png", alt="", style="width: 400px").m-auto
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-lg-7.mb-4.mb-lg-0
                    p #[b Responsabilidad familiar]
                    p.mb-0 Comprender la responsabilidad que cada acto tiene frente a otros miembros de la familia es crucial. Este aspecto es vital para el desarrollo del amor propio y el respeto mutuo dentro del entorno familiar. Si cada integrante fuera consciente del impacto de sus acciones, las conductas violentas o de maltrato serían inexistentes.
                  .col-lg-4
                    figure
                      img(src="@/assets/curso/tema2/img3.png", alt="", style="width: 400px").m-auto
    p.mb-5(data-aos="fade-down") #[b Algunos principios del buen trato son:]
    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 1.] Principios del buen trato
        figure
          img(src='@/assets/curso/tema2/img8.svg', alt='', style='width: 1200px').m-auto
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido
      h2 2.4 Aspectos claves para la consolidación del amor propio en la vida
    p.mb-5(data-aos="fade-down") Cada familia es un mundo distinto, con sus propios engranajes, las mismas familias en el proceso de reconstrucción permanente, van dando la pauta.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .row
          .col-lg-auto.bg-c8
            .px-4.pt-4
              figure
                img(src='@/assets/curso/tema2/img9.svg', alt='', style='width: 280px').m-auto
          .col-lg.bg-c4
            .row.h-100.align-items-center
              .col-12
                .p-4
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Patrones de crianza: forma que cada familia levanta a los hijos según valores y conceptos propios.
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
    p.mb-0(data-aos="fade-right") #[b Afrontamiento ante las crisis:] dentro de la familia se generan situaciones de crisis propias del ciclo vital de la misma o por duelos, problemas económicos, entre otras; sin embargo, sin estas situaciones no se lograría desarrollar la capacidad para enfrentarlas. Aprender a ser fuertes, a superar la adversidad, a acompañar y ser solidario y a generar formas sanas de superar los momentos difíciles para propiciar una vida más sana, es lo que llamamos resiliencia y se aprende en familia, con el afecto.
    Separador
    #t_2_5
    .titulo-segundo.color-acento-contenido
      h2 2.5 Ética del cuidado
    p.mb-5(data-aos="fade-down") Lo anterior nos lleva a pensar que los seres humanos #[b somos sujetos de cuidado permanente]. Requerimos cuidado materno, #[b cuidado en la familia, en la escuela] para garantizar los mínimos vitales. La ética del cuidado nos invita a hacer de esta práctica una forma de vida, cuidar de otros y preocuparse por su bienestar es una manifestación de solidaridad, de mejores formas de convivencia y sobre todo de prevención. #[b Prevención de violencias, prevención de abusos, prevención de seguridad individual y colectiva]. Desde esta perspectiva, la defensa y garantía de los derechos sería una responsabilidad de todos y para todos.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .p-4.bg-c17
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img10.svg', alt='', style='width: 80px').m-auto
            .col-md
              p.text-white.mb-0 Ética del cuidado significa entonces observar con atención, denunciar, dialogar, involucrarse en los asuntos del otro, para preservar la vida e integridad de la persona.
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .py-2.px-3.bg-c16
          p.mb-0 #[b ¿Qué debemos cuidar?]
    .row.mb-4(data-aos="fade-down")
      .col-lg-auto.pe-xxl-0.d-none.d-xxl-block
        figure
          img(src='@/assets/curso/tema2/img4.png', alt='', style='width: 400px').m-auto
      .col-lg.bg-c8
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.mb-0 En primera instancia debemos cuidar del cuerpo, como nuestro territorio más cercano, y esto nos lleva a desarrollar acciones y comportamientos de cuidado del cuerpo de los demás. Pero igualmente tenemos que cuidar la mente, que significa equilibrar nuestras pasiones para aplicarlas al desarrollo de un proyecto de vida coherente con nuestra condición humana. Igualmente cuidamos el espíritu, esa dimensión de nuestra vida que nos permite sentirnos parte de realidades abstractas como la humanidad y el universo, pero que en lo cotidiano se traduce en la vivencia de una ética autónoma. Finalmente, cuidamos el intelecto, mediante una actitud que nos permite desarrollar nuestros mejores talentos para ponerlos al servicio de nosotros mismos, de nuestra familia, nuestra comunidad, con una actitud solidaria y altruista. (Alcaldía Mayor de Bogotá, 2013. Orientaciones para la acción en cuidado y Autocuidado)
    p.mb-5(data-aos="fade-right") De esta forma, las prácticas de cuidado y autocuidado permitirán mantener una salud mental sana. Solamente quien cuida de sí mismo de forma responsable puede cuidar de otros, del entorno cercano y del medioambiente.
    .row.justify-content-center
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 2.] Hábitos de vida saludables
        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema2/img11.svg', alt='', style='width: 800px').m-auto
        figure.d-block.d-lg-none
          img(src='@/assets/curso/tema2/img11m.svg', alt='', style='width: 500px').m-auto

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
