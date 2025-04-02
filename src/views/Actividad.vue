<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión sobre la prevención, atención y estrategias de intervención en salud mental y bienestar social.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de las rutas de atención en salud mental?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Brindar atención médica general.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Guiar a las personas en el acceso a servicios de apoyo, protección y justicia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ofrecer apoyo psicológico únicamente a las víctimas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Proporcionar información sobre salud pública.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué institución NO está incluida dentro de las opciones para denunciar un caso de violencia intrafamiliar?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comisaría de Familia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fiscalía local.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Instituto Nacional de Salud.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Policía Nacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes opciones es una acción de prevención en salud mental?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Esperar a que una persona solicite ayuda profesional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aplicar tratamientos farmacológicos sin diagnóstico previo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evitar la denuncia para no involucrarse en problemas legales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Promover estilos de vida saludables y fortalecer redes de apoyo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué estrategia se recomienda para el manejo del estrés según el material de estudio?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Suprimir las emociones para evitar conflictos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evitar toda situación que genere presión o responsabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Practicar actividades de relajación y ejercicio físico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aislarse de las relaciones interpersonales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes factores puede ser un determinante en la ideación suicida?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factores de riesgo psicosocial y crisis emocionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un estilo de vida saludable y redes de apoyo consolidadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Altos niveles de autoestima y amor propio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estrategias de afrontamiento eficaces y resiliencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué institución es responsable de brindar protección y restablecimiento de derechos a menores de edad víctimas de maltrato?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ministerio de Educación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Instituto Colombiano de Bienestar Familiar (ICBF).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Policía Nacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ministerio de Salud.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es un elemento clave en la prevención del consumo de sustancias psicoactivas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aislar a las personas con antecedentes de consumo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fomentar la educación en habilidades psicosociales para la vida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Evitar el contacto con cualquier sustancia de manera absoluta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incrementar sanciones legales sin programas de prevención.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué concepto describe la capacidad de reconocer y gestionar emociones de manera positiva?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manejo de emociones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Autoestima.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Empatía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pensamiento crítico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué recurso puede ofrecer refugio temporal a víctimas de violencia de género?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Instituciones prestadoras de salud.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hogares de acogida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Unidades de Reacción Inmediata (URI).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Centros de justicia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la importancia del fortalecimiento de la cultura propia en la salud mental?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite establecer normas más estrictas en la comunidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reduce la necesidad de buscar apoyo profesional en salud mental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Refuerza la identidad y la interacción comunitaria como factores protectores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Limita la intervención de agentes externos en la educación y prevención.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
