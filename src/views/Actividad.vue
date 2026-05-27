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
      tema: 'Arquitectura y diseño digital: desafío integral de sistemas',
      titulo: 'Cuestionario',
      introduccion:
        '<b><br> Objetivo:</b> evaluar la comprensión de los principios fundamentales del desarrollo de sistemas de información, integrando conocimientos técnicos y aplicados, con el fin de validar la capacidad de análisis, estructuración y construcción de soluciones digitales de manera coherente y funcional.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué define una base de datos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un sistema para almacenar, organizar y gestionar información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un conjunto de programas ejecutables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un lenguaje de programación.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Un sistema operativo.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Una base de datos organiza y gestiona información estructurada para su consulta y manipulación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Cuál es una característica clave de las bases de datos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ejecución de código.', esCorrecta: false },
            { id: 'b', texto: 'Consistencia de datos.', esCorrecta: true },
            { id: 'c', texto: 'Diseño gráfico.', esCorrecta: false },
            { id: 'd', texto: 'Compilación.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La consistencia asegura que los datos mantengan integridad en todas las operaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué representa el modelo lógico de datos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Implementación física.', esCorrecta: false },
            { id: 'b', texto: 'Código fuente.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'Estructura organizada de datos independiente del sistema.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Diseño visual.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El modelo lógico define la estructura sin depender de tecnología específica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué elemento es fundamental en el modelo relacional?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Archivos.', esCorrecta: false },
            { id: 'b', texto: 'Tablas.', esCorrecta: true },
            { id: 'c', texto: 'Interfaces.', esCorrecta: false },
            { id: 'd', texto: 'Scripts.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Las tablas organizan los datos en filas y columnas dentro del modelo relacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué función cumple el diccionario de datos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ejecutar consultas.', esCorrecta: false },
            { id: 'b', texto: 'Almacenar archivos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Describir elementos de datos.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Diseñar interfaces.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Documenta atributos, tipos y reglas de los datos dentro del sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué busca la normalización?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aumentar redundancia.', esCorrecta: false },
            { id: 'b', texto: 'Eliminar inconsistencias.', esCorrecta: true },
            { id: 'c', texto: 'Mejorar gráficos.', esCorrecta: false },
            { id: 'd', texto: 'Ejecutar código.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Reduce duplicidad y mejora la organización de los datos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué elimina la tercera forma normal (3FN)?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Dependencias funcionales.', esCorrecta: false },
            { id: 'b', texto: 'Dependencias parciales.', esCorrecta: false },
            { id: 'c', texto: 'Dependencias transitivas.', esCorrecta: true },
            { id: 'd', texto: 'Claves primarias.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La 3FN elimina dependencias entre atributos no clave.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué controla la seguridad de la información?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseño visual.', esCorrecta: false },
            { id: 'b', texto: 'Acceso y uso de datos.', esCorrecta: true },
            { id: 'c', texto: 'Desarrollo de código.', esCorrecta: false },
            { id: 'd', texto: 'Interfaces.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Regula quién accede y cómo se utilizan los datos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué define el control de acceso?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseño gráfico.', esCorrecta: false },
            { id: 'b', texto: 'Estructura de datos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Acciones permitidas sobre información.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Código fuente.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Determina permisos y restricciones en el uso de datos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué caracteriza al <em>Big data</em>?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Bajo volumen.', esCorrecta: false },
            { id: 'b', texto: 'Datos simples.', esCorrecta: false },
            { id: 'c', texto: 'Alta complejidad y volumen.', esCorrecta: true },
            { id: 'd', texto: 'Interfaces gráficas.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se refiere a grandes volúmenes de datos variados y dinámicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué permite el diseño de interfaces gráficas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ejecutar procesos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Interacción usuario-sistema.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Crear bases de datos.', esCorrecta: false },
            { id: 'd', texto: 'Compilar código.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Facilita la comunicación entre el usuario y el sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué propiedad define la intensidad del color?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tono.', esCorrecta: false },
            { id: 'b', texto: 'Saturación.', esCorrecta: true },
            { id: 'c', texto: 'Luminosidad.', esCorrecta: false },
            { id: 'd', texto: 'Opacidad.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La saturación indica la pureza o intensidad del color.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué evalúa la usabilidad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', text: 'Seguridad.', esCorrecta: false },
            { id: 'b', text: 'Código.', esCorrecta: false },
            { id: 'c', texto: 'Facilidad de uso.', esCorrecta: true },
            { id: 'd', text: 'Rendimiento.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Mide qué tan fácil es interactuar con un sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué garantiza la accesibilidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Rendimiento.', esCorrecta: false },
            { id: 'b', texto: 'Uso universal del sistema.', esCorrecta: true },
            { id: 'c', texto: 'Diseño técnico.', esCorrecta: false },
            { id: 'd', texto: 'Velocidad.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Permite que diferentes usuarios accedan al sistema sin restricciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué define el diseño <em>web</em>?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Código backend.', esCorrecta: false },
            { id: 'b', texto: 'Interfaces en navegadores.', esCorrecta: true },
            { id: 'c', texto: 'Bases de datos.', esCorrecta: false },
            { id: 'd', texto: 'Seguridad.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se enfoca en interfaces accesibles desde navegadores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué caracteriza a una interfaz móvil?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Uso de teclado.', esCorrecta: false },
            { id: 'b', texto: 'Pantallas grandes.', esCorrecta: false },
            { id: 'c', texto: 'Interacción táctil.', esCorrecta: true },
            { id: 'd', texto: 'Programación.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La interacción se realiza mediante gestos táctiles.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué permite un framework <em>front-end</em>?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ejecutar consultas.', esCorrecta: false },
            { id: 'b', texto: 'Diseñar bases de datos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Construir interfaces con componentes.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Compilar código.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Facilita el desarrollo de interfaces estructuradas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué define la <em>web</em> semántica?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseño visual.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Significado estructurado del contenido.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Código backend.', esCorrecta: false },
            { id: 'd', texto: 'Rendimiento.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Usa etiquetas que describen el significado del contenido.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué es el prototipado?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Código final.', esCorrecta: false },
            { id: 'b', texto: 'Diseño visual.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Representación previa de la interfaz.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Base de datos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Permite visualizar la interfaz antes de desarrollarla.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué permiten las herramientas de prototipado?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ejecutar programas.', esCorrecta: false },
            { id: 'b', texto: 'Diseñar hardware.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Simular interacción de usuario.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Crear servidores.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Simulan cómo el usuario interactúa con la interfaz.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
