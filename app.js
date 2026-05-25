/* ==========================================================================
   JAGÜI - AVENTURA IA: LÓGICA DE LA APLICACIÓN (VERSIÓN EXPANDIDA - 30 NIVELES)
   ========================================================================== */

// --- MUNDOS TEMÁTICOS ---
const WORLDS_DATA = [
  { id: 1, name: "Mundo 1: Conceptos Básicos", desc: "El origen de la Inteligencia Artificial 🌲", color: "green" },
  { id: 2, name: "Mundo 2: ¿Cómo Aprende la IA?", desc: "El entrenamiento y los datos 🏜️", color: "orange" },
  { id: 3, name: "Mundo 3: El Cerebro de la IA", desc: "Las redes neuronales digitales 🌌", color: "purple" },
  { id: 4, name: "Mundo 4: Los Sentidos de la IA", desc: "Visión, voz y lenguajes ciber ⚡", color: "blue" },
  { id: 5, name: "Mundo 5: Robótica y Espacio", desc: "Asistentes, autos y viajes a Marte 🤖", color: "red" },
  { id: 6, name: "Mundo 6: IA Generativa y Ética", desc: "Creación de arte y reglas del bien 🏆", color: "yellow" }
];

// --- CURRICULUM DE IA PARA NIÑOS (30 NIVELES) ---
const LESSONS_DATA = {
  // === MUNDO 1: CONCEPTOS BÁSICOS (Niveles 1-5) ===
  1: {
    id: 1,
    title: "¿Qué es la IA?",
    subtitle: "Enseña trucos a una computadora",
    badge: "🧠",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Qué hace que una computadora tenga 'Inteligencia Artificial' (IA)?",
        options: [
          { text: "Que tiene una pantalla super brillante", isCorrect: false },
          { text: "Que puede aprender de ejemplos y mejorar sola", isCorrect: true },
          { text: "Que sigue reglas fijas sin cambiar nunca", isCorrect: false }
        ],
        hint: "¡La IA imita el aprendizaje de los seres vivos!",
        speech: "¡Hola! Para empezar nuestro viaje: ¿Qué hace que una computadora tenga Inteligencia Artificial?",
        successDesc: "¡Excelente! La IA aprende sola usando datos y ejemplos, igual que tú cuando aprendes cosas nuevas.",
        failDesc: "¡Uy! Una computadora normal sigue reglas fijas. ¡La IA aprende y mejora sola!"
      },
      {
        type: "boolean",
        question: "¿Una tostadora de pan común y corriente usa Inteligencia Artificial?",
        options: [
          { text: "¡Sí, claro!", value: true },
          { text: "No, solo calienta pan", value: false }
        ],
        correctValue: false,
        hint: "¿La tostadora aprende trucos nuevos o hace siempre lo mismo?",
        speech: "Pensemos en los electrodomésticos comunes. ¿Una tostadora normal usa Inteligencia Artificial?",
        successDesc: "¡Correcto! Una tostadora normal no aprende de sus errores, solo sigue un botón físico para calentar el pan.",
        failDesc: "¡Nop! La tostadora siempre hace exactamente lo mismo. No tiene la capacidad de aprender, así que no usa IA."
      }
    ]
  },
  2: {
    id: 2,
    title: "Computadoras vs. Humanos",
    subtitle: "Velocidad contra Creatividad",
    badge: "⚡",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿En qué son mejores y más rápidas las computadoras que los seres humanos?",
        options: [
          { text: "Haciendo millones de cálculos matemáticos en segundos", isCorrect: true },
          { text: "Sintiendo cariño y emociones por los amigos", isCorrect: false },
          { text: "Teniendo imaginación para inventar juegos nuevos", isCorrect: false }
        ],
        hint: "Las computadoras aman los números.",
        speech: "¡Comparemos! ¿En qué son más rápidas las computadoras que nosotros los humanos?",
        successDesc: "¡Exacto! Las computadoras son velocistas de las matemáticas, pero no tienen sentimientos ni imaginación natural.",
        failDesc: "¡Nop! El cariño y la imaginación son cualidades humanas. Las computadoras nos ganan en velocidad de cálculo."
      },
      {
        type: "boolean",
        question: "¿Los humanos somos más creativos y empáticos que cualquier Inteligencia Artificial?",
        options: [
          { text: "Sí, nuestra mente siente y crea de verdad", value: true },
          { text: "No, la IA es más creativa y tiene sentimientos", value: false }
        ],
        correctValue: true,
        hint: "¿Una máquina puede llorar de felicidad de verdad?",
        speech: "¡Una pregunta sobre nosotros! ¿Los humanos somos más creativos y empáticos?",
        successDesc: "¡Maravilloso! Las máquinas imitan patrones, pero los sentimientos y la creatividad verdadera son súper humanos.",
        failDesc: "¡Cuidado! La IA puede imitar dibujos o textos, pero no siente emociones reales. ¡Los humanos somos únicos!"
      }
    ]
  },
  3: {
    id: 3,
    title: "El Alimento de la IA",
    subtitle: "Los datos de entrenamiento",
    badge: "📊",
    rewardXP: 100,
    questions: [
      {
        type: "drag_classify",
        question: "¡Minijuego de Datos! Clasifica los alimentos arrastrándolos a su cesta correcta para entrenar a Jagüi.",
        speech: "¡Ayúdame a clasificar los datos! Arrastra la comida saludable a la cesta verde y la comida no saludable a la cesta roja.",
        items: [
          { id: "apple", emoji: "🍎", type: "healthy" },
          { id: "banana", emoji: "🍌", type: "healthy" },
          { id: "donut", emoji: "🍩", type: "junk" },
          { id: "pizza", emoji: "🍕", type: "junk" }
        ],
        successDesc: "¡Impecable! Los datos de entrenamiento están clasificados y listos para alimentar a la IA.",
        failDesc: "¡Uy! Acomoda todos los alimentos en sus cestas correctas para que la IA no aprenda mal."
      }
    ]
  },
  4: {
    id: 4,
    title: "Sensores y Actuadores",
    subtitle: "Cómo ve y actúa el robot",
    badge: "👁️",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Qué utiliza un robot o una IA para 'ver' y sentir el mundo físico a su alrededor?",
        options: [
          { text: "Cámaras, micrófonos y sensores", isCorrect: true },
          { text: "Ojos biológicos de jaguar", isCorrect: false },
          { text: "Su imaginación digital", isCorrect: false }
        ],
        hint: "Son dispositivos electrónicos que capturan luz, sonidos y calor.",
        speech: "¿Cómo hace un robot para saber si hay una pared enfrente?",
        successDesc: "¡Fantástico! Las cámaras son sus ojos y los micrófonos sus oídos. ¡Esos son los sensores!",
        failDesc: "¡Nop! No tienen ojos biológicos. Usan 'sensores' (como cámaras y láseres) para medir el entorno."
      },
      {
        type: "boolean",
        question: "¿Los motores que mueven los brazos de un robot se llaman 'Actuadores'?",
        options: [
          { text: "¡Sí, porque actúan y se mueven!", value: true },
          { text: "No, se llaman sensores corporales", value: false }
        ],
        correctValue: true,
        hint: "Diferencia entre recibir información (sentir) y reaccionar (moverse).",
        speech: "¿Cómo se llaman las partes que hacen mover los engranes?",
        successDesc: "¡Correcto! Los sensores sienten (reciben datos) y los actuadores actúan (mueven motores y ruedas).",
        failDesc: "¡Oh no! Los sensores capturan información. Las partes que hacen el movimiento físico se llaman actuadores."
      }
    ]
  },
  5: {
    id: 5,
    title: "¿Tiene Vida la IA?",
    subtitle: "Software vs. Naturaleza",
    badge: "🌱",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Una computadora con Inteligencia Artificial está viva como un jaguar de la selva?",
        options: [
          { text: "Sí, porque habla y piensa sola", isCorrect: false },
          { text: "No, es solo una herramienta tecnológica hecha de código y electricidad", isCorrect: true },
          { text: "Sí, come hojas virtuales de árbol", isCorrect: false }
        ],
        hint: "La vida requiere biología, respirar y crecer.",
        speech: "¡Una duda filosófica! ¿Una IA está viva como tú o como yo?",
        successDesc: "¡Exacto! Aunque imite acciones humanas, la IA es un programa de software, no respira, no siente ni crece biológicamente.",
        failDesc: "¡Cuidado! Que hable o juegue no significa que tenga vida. Es un conjunto de fórmulas matemáticas y código."
      },
      {
        type: "boolean",
        question: "¿La IA puede aburrirse o cansarse de hacer la tarea?",
        options: [
          { text: "Sí, a veces se cansa y duerme", value: true },
          { text: "No, las computadoras no se cansan ni se aburren", value: false }
        ],
        correctValue: false,
        hint: "¿Las máquinas tienen emociones o fatiga muscular?",
        speech: "Si le pedimos a una IA que resuelva mil tareas... ¿se aburrirá?",
        successDesc: "¡Perfecto! Al ser código matemático, puede trabajar sin parar y sin aburrirse. ¡Por eso nos ayuda tanto!",
        failDesc: "¡Nop! El aburrimiento es una emoción. Las computadoras pueden calcular día y noche sin cansarse."
      }
    ]
  },

  // === MUNDO 2: MACHINE LEARNING (Niveles 6-10) ===
  6: {
    id: 6,
    title: "Aprendizaje Automático",
    subtitle: "El secreto del Machine Learning",
    badge: "🔄",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Qué es el 'Machine Learning' o Aprendizaje Automático?",
        options: [
          { text: "Una máquina que hace ropa sola", isCorrect: false },
          { text: "La habilidad de la IA para aprender de los datos sin ser reprogramada", isCorrect: true },
          { text: "Un control remoto para apagar robots", isCorrect: false }
        ],
        hint: "Permite que la computadora mejore sus respuestas por sí misma.",
        speech: "Entramos al Mundo 2. ¿Qué significa 'Machine Learning'?",
        successDesc: "¡Excelente! En lugar de escribir reglas fijas, le damos ejemplos y la computadora ajusta su código para aprender sola.",
        failDesc: "¡Uy! No hace ropa. Es la rama de la IA que permite a las computadoras 'aprender' de la experiencia."
      },
      {
        type: "boolean",
        question: "¿El Machine Learning necesita miles o millones de ejemplos para aprender bien?",
        options: [
          { text: "Sí, necesita muchísimos datos", value: true },
          { text: "No, aprende todo con un solo ejemplo", value: false }
        ],
        correctValue: true,
        hint: "Para que un bebé jaguar reconozca una presa, debe verla muchas veces.",
        speech: "¿Cuántos datos necesita una IA de Machine Learning para volverse experta?",
        successDesc: "¡Magnífico! Entre más datos variados le des, más patrones encontrará y menos errores cometerá.",
        failDesc: "¡No! Con un solo dato la IA se confundiría fácilmente. Necesita bases de datos gigantes."
      }
    ]
  },
  7: {
    id: 7,
    title: "El Profesor de la IA",
    subtitle: "Aprendizaje Supervisado",
    badge: "👩‍🏫",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Cómo aprende una IA en el 'Aprendizaje Supervisado'?",
        options: [
          { text: "Buscando comida en la selva sola", isCorrect: false },
          { text: "Con ejemplos etiquetados por humanos que le dicen cuál es la respuesta correcta", isCorrect: true },
          { text: "Leyendo libros a oscuras", isCorrect: false }
        ],
        hint: "Es como cuando un maestro te califica y te dice si tu respuesta fue correcta.",
        speech: "¡Hablemos de profesores! ¿Cómo funciona el aprendizaje supervisado?",
        successDesc: "¡Brillante! Le damos una foto etiquetada como 'Gato' y otra como 'Perro'. La IA aprende asociando la imagen con la etiqueta.",
        failDesc: "¡Nop! Ocurre cuando un humano le proporciona las respuestas correctas ('etiquetas') para que la IA se guíe."
      },
      {
        type: "boolean",
        question: "¿El quiz de Duolingo que estás haciendo ahora mismo es un ejemplo de cómo un sistema supervisado te evalúa?",
        options: [
          { text: "Sí, porque me dice si mi respuesta es correcta", value: true },
          { text: "No, porque no hay ningún profesor físico", value: false }
        ],
        correctValue: true,
        hint: "El sistema tiene las respuestas correctas precargadas por programadores.",
        speech: "¿Este juego interactivo tiene un sistema de supervisión?",
        successDesc: "¡Correcto! Te mostramos la pregunta, eliges, y el código (tu profesor JagÜi) te valida si es correcto.",
        failDesc: "¡Cuidado! Sí es un sistema supervisado porque hay reglas digitales previas que te indican si acertaste."
      }
    ]
  },
  8: {
    id: 8,
    title: "Aprendiendo sin Ayuda",
    subtitle: "Aprendizaje No Supervisado",
    badge: "🕵️",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Qué hace la IA en el 'Aprendizaje NO Supervisado'?",
        options: [
          { text: "Intenta adivinar sin que nadie le dé etiquetas ni respuestas correctas", isCorrect: true },
          { text: "Se apaga porque no sabe qué hacer", isCorrect: false },
          { text: "Llama a un programador por teléfono", isCorrect: false }
        ],
        hint: "La IA busca grupos de cosas parecidas en los datos por sí misma.",
        speech: "¿Y si no le damos respuestas correctas a la IA? ¿Cómo funciona el aprendizaje no supervisado?",
        successDesc: "¡Espectacular! La IA explora los datos y los agrupa por similitudes (ejemplo: agrupa juguetes rojos a un lado y azules al otro).",
        failDesc: "¡Nop! La IA no se apaga. Analiza los datos y busca patrones para clasificar las cosas en grupos o 'clusters' sola."
      },
      {
        type: "builder",
        question: "Completa la misión de la IA sin supervisor:",
        sentence: "La IA agrupa datos parecidos usando un método llamado {blank} o {blank}.",
        blanksCount: 2,
        wordBank: ["agrupación", "clustering", "canto", "vuelo"],
        correctAnswers: ["agrupación", "clustering"],
        hint: "Viene del inglés 'cluster' (grupo).",
        speech: "¡Acomodemos los conceptos de la IA detective!",
        successDesc: "¡Excelente! 'Clustering' o agrupación es la base de las recomendaciones de películas que te gustan.",
        failDesc: "¡Casi! Se agrupan usando técnicas de 'agrupación' o 'clustering'."
      }
    ]
  },
  9: {
    id: 9,
    title: "Premios y Puntos",
    subtitle: "Aprendizaje por Refuerzo",
    badge: "🎮",
    rewardXP: 100,
    questions: [
      {
        type: "reinforcement",
        question: "¡Minijuego de Refuerzo! Entrena a Jagüi dándole galletas 🍪 justo después de saltar para superar los obstáculos.",
        speech: "¡Es hora de entrenar por refuerzo! Presiona el botón de Galleta cuando yo esquive un obstáculo para enseñarme qué hacer.",
        successDesc: "¡Maravilloso! Jagüi ha aprendido por refuerzo positivo a saltar todos los obstáculos de forma perfecta.",
        failDesc: "¡Cuidado! Dale la galleta justo cuando salte bien para reforzar la acción correcta."
      }
    ]
  },
  10: {
    id: 10,
    title: "Datos Buenos y Malos",
    subtitle: "El peligro de la mala información",
    badge: "⚠️",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Qué pasa si alimentamos a nuestra IA con datos incompletos, malos o con errores?",
        options: [
          { text: "La IA se arregla sola en la noche", isCorrect: false },
          { text: "La IA aprenderá mal y tomará decisiones equivocadas o injustas", isCorrect: true },
          { text: "La computadora se derretirá", isCorrect: false }
        ],
        hint: "Recuerda: si le enseñas matemáticas incorrectas a un niño, sumará mal.",
        speech: "¿Qué pasa si los datos de entrenamiento son malos?",
        successDesc: "¡Brillante! A esto en computación se le conoce como 'basura entra, basura sale'. Los buenos datos hacen buenas IAs.",
        failDesc: "¡Nop! No se derrite. La IA simplemente aprenderá los errores de los datos y fallará constantemente."
      },
      {
        type: "boolean",
        question: "¿Los científicos de datos pasan la mayor parte del tiempo limpiando y ordenando los datos de entrenamiento?",
        options: [
          { text: "Sí, limpiar datos es la tarea más importante", value: true },
          { text: "No, solo escriben código matemático todo el día", value: false }
        ],
        correctValue: true,
        hint: "Sin datos limpios, los algoritmos matemáticos no sirven.",
        speech: "¿La limpieza de datos es vital para los científicos?",
        successDesc: "¡Correcto! Limpiar y preparar los datos (quitar duplicados, fotos borrosas, textos raros) es el 80% del trabajo en IA.",
        failDesc: "¡No! Escribir el modelo es fácil. Lo verdaderamente difícil y crucial es tener datos limpios y ordenados."
      }
    ]
  },

  // === MUNDO 3: REDES NEURONALES (Niveles 11-15) ===
  11: {
    id: 11,
    title: "La Neurona Artificial",
    subtitle: "El bloque básico del cerebro digital",
    badge: "🕸️",
    rewardXP: 100,
    questions: [
      {
        type: "neural_connect",
        question: "¡Minijuego Neuronal! Haz clic en los cables grises para conectar los impulsos eléctricos entre la Entrada y la Salida.",
        speech: "¡Conecta las neuronas! Pulsa los cables rotos para activar la red neuronal y hacer que el robot salude.",
        successDesc: "¡Espectacular! La energía digital fluye por la red neuronal y activa la salida con éxito.",
        failDesc: "¡Oh! Conecta todos los cables para encender el camino de luz eléctrica."
      }
    ]
  },
  12: {
    id: 12,
    title: "El Cerebro de la IA",
    subtitle: "Qué es una Red Neuronal",
    badge: "🧠",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Qué es una 'Red Neuronal Artificial'?",
        options: [
          { text: "Una malla de pesca hecha con fibra de carbono", isCorrect: false },
          { text: "Muchas neuronas artificiales conectadas entre sí para resolver retos complejos", isCorrect: true },
          { text: "Un grupo de científicos que platican en la oficina", isCorrect: false }
        ],
        hint: "Se conectan de forma similar a los billones de conexiones de tu propio cerebro.",
        speech: "¿Qué es una red neuronal en computación?",
        successDesc: "¡Excelente! Al conectar miles de neuronas sencillas en capas, juntas pueden reconocer patrones increíbles como caras o voces.",
        failDesc: "¡Nop! Es un sistema tecnológico compuesto por múltiples neuronas artificiales conectadas en red."
      },
      {
        type: "builder",
        question: "Completa la estructura de una Red Neuronal:",
        sentence: "La información entra por la capa de {blank} y sale con una respuesta por la capa de {blank}.",
        blanksCount: 2,
        wordBank: ["entrada", "salida", "cables", "pantalla"],
        correctAnswers: ["entrada", "salida"],
        hint: "Piensa en el inicio y el fin del camino.",
        speech: "¡Armemos las capas del cerebro digital!",
        successDesc: "¡Grandioso! Entra por la entrada, se procesa en medio, y la respuesta final sale por la capa de salida.",
        failDesc: "¡Casi! Entra por la capa de 'entrada' y sale por la de 'salida'."
      }
    ]
  },
  13: {
    id: 13,
    title: "Capas de Pensamiento",
    subtitle: "Deep Learning o Aprendizaje Profundo",
    badge: "🧮",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Por qué se llama 'Deep Learning' (Aprendizaje Profundo)?",
        options: [
          { text: "Porque se inventó bajo el agua del mar", isCorrect: false },
          { text: "Porque la red neuronal tiene muchas capas intermedias ocultas para procesar datos", isCorrect: true },
          { text: "Porque es un tema muy aburrido y difícil", isCorrect: false }
        ],
        hint: "Tiene que ver con la 'profundidad' o cantidad de capas de la red.",
        speech: "¿Por qué los científicos hablan de aprendizaje profundo?",
        successDesc: "¡Increíble! Cada capa intermedia resuelve algo: una detecta líneas, otra formas, otra texturas, hasta reconocer el objeto completo.",
        failDesc: "¡Oh no! Se llama así por las numerosas capas 'ocultas' intermedias de neuronas que forman una estructura profunda de procesamiento."
      },
      {
        type: "boolean",
        question: "¿El Deep Learning es la tecnología detrás del reconocimiento facial y los traductores automáticos de voz?",
        options: [
          { text: "Sí, es el motor de los sistemas más avanzados", value: true },
          { text: "No, esas tecnologías usan código básico de calculadora", value: false }
        ],
        correctValue: true,
        hint: "Esos sistemas requieren procesar imágenes y audios súper complejos.",
        speech: "¿El Deep Learning controla el reconocimiento facial?",
        successDesc: "¡Excelente! El aprendizaje profundo es el rey actual de la IA avanzada gracias a su enorme precisión.",
        failDesc: "¡Nop! Una simple calculadora no podría reconocer una cara. El Deep Learning es indispensable para estos retos."
      }
    ]
  },
  14: {
    id: 14,
    title: "Cómo Decide la IA",
    subtitle: "La predicción final",
    badge: "🔮",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Qué nos entrega la capa de salida de una red neuronal cuando le damos la foto de una manzana?",
        options: [
          { text: "Una probabilidad o predicción (ej. 98% Manzana)", isCorrect: true },
          { text: "Una manzana real en la mesa", isCorrect: false },
          { text: "Un jugo de fruta virtual", isCorrect: false }
        ],
        hint: "La IA calcula qué tan segura está de su respuesta.",
        speech: "¿Cómo expresa su decisión una red neuronal?",
        successDesc: "¡Súper! La IA nunca está '100% segura' mágicamente; calcula estadísticas y nos da una predicción basada en probabilidades.",
        failDesc: "¡Ojalá diera manzanas reales! Nos da un porcentaje de probabilidad que representa su mejor predicción digital."
      },
      {
        type: "boolean",
        question: "¿Si el porcentaje de una predicción es muy bajo (ej. 15%), significa que la IA está muy confundida?",
        options: [
          { text: "Sí, significa que tiene muchas dudas", value: true },
          { text: "No, la IA nunca tiene dudas", value: false }
        ],
        correctValue: true,
        hint: "Un número bajo de confianza indica que los datos no son claros para su red.",
        speech: "¿Una IA puede tener dudas?",
        successDesc: "¡Exacto! Si le muestras un borrón y dice '15% Perro', la IA te está avisando que no está nada segura de su respuesta.",
        failDesc: "¡Nop! Las probabilidades bajas indican confusión. La IA duda cuando el dato no se parece a sus ejemplos."
      }
    ]
  },
  15: {
    id: 15,
    title: "Corrigiendo Errores",
    subtitle: "Ajustando los pesos con Backpropagation",
    badge: "🛠️",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Cómo hace la red neuronal para aprender de sus equivocaciones durante el entrenamiento?",
        options: [
          { text: "Llora y se apaga sola", isCorrect: false },
          { text: "Calcula el error y viaja hacia atrás ajustando los pesos neuronales (Backpropagation)", isCorrect: true },
          { text: "Borra toda la memoria de la computadora", isCorrect: false }
        ],
        hint: "Es como cuando fallas un tiro a la canasta y ajustas la fuerza de tus brazos en el siguiente intento.",
        speech: "¿Cómo corrige sus errores el cerebro artificial?",
        successDesc: "¡Magistral! Se llama retropropagación o 'Backpropagation'. Mide qué tan lejos estuvo del acierto y ajusta los pesos de reversa.",
        failDesc: "¡No! No borra nada. Viaja de salida a entrada ajustando los pesos matemáticos para fallar menos la próxima vez."
      },
      {
        type: "boolean",
        question: "¿El entrenamiento de una red neuronal requiere repetir este proceso miles de veces?",
        options: [
          { text: "Sí, requiere muchísima repetición (épocas)", value: true },
          { text: "No, solo se hace una sola vez en un segundo", value: false }
        ],
        correctValue: true,
        hint: "La práctica constante hace al maestro ciber-jaguar.",
        speech: "¿El entrenamiento se repite muchas veces?",
        successDesc: "¡Exacto! A cada pasada completa por todos los datos se le llama 'Época'. Entrenar requiere cientos de épocas.",
        failDesc: "¡Nop! En una sola vez la IA seguiría cometiendo errores. Necesita miles de ajustes repetitivos."
      }
    ]
  },

  // === MUNDO 4: LOS SENTIDOS DE LA IA (Niveles 16-20) ===
  16: {
    id: 16,
    title: "Visión por Computadora",
    subtitle: "Cómo ven las máquinas",
    badge: "📷",
    rewardXP: 100,
    questions: [
      {
        type: "bounding_box",
        question: "¡Minijuego de Visión! Dibuja una caja delimitadora (rectángulo) arrastrando el ratón sobre la cabeza del jaguar.",
        speech: "¡Es hora de la visión artificial! Usa tu dedo o ratón para dibujar un rectángulo justo sobre mi cabeza y entrenar el detector de rostros.",
        successDesc: "¡Increíble! La visión artificial ha detectado el rostro del jaguar de forma 100% precisa.",
        failDesc: "¡Uy! Asegúrate de dibujar la caja delimitadora exactamente cubriendo la cara de Jagüi."
      }
    ]
  },
  17: {
    id: 17,
    title: "Reconocimiento de Voz",
    subtitle: "De ondas sonoras a texto",
    badge: "🗣️",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Qué hace el algoritmo de 'Reconocimiento de Voz'?",
        options: [
          { text: "Traduce las vibraciones de tu voz (ondas) en texto que la computadora comprende", isCorrect: true },
          { text: "Graba tu voz y la sube a Spotify", isCorrect: false },
          { text: "Hace que la computadora hable con eco", isCorrect: false }
        ],
        hint: "Es lo que usa JagÜi para saber qué le dices cuando activas la voz.",
        speech: "¿Cómo nos escucha y entiende la Inteligencia Artificial?",
        successDesc: "¡Espectacular! Convierte el audio de un micrófono en palabras escritas de forma veloz.",
        failDesc: "¡Nop! Convierte las ondas sonoras en texto plano para que el procesador pueda buscar su significado."
      },
      {
        type: "builder",
        question: "Completa la gran utilidad de la voz en IA:",
        sentence: "El reconocimiento de voz nos ayuda a dictar {blank} y controlar asistentes con nuestra {blank}.",
        blanksCount: 2,
        wordBank: ["mensajes", "voz", "pantalla", "comida"],
        correctAnswers: ["mensajes", "voz"],
        hint: "Piensa en el manos libres.",
        speech: "¡Ordenemos las palabras de la voz digital!",
        successDesc: "¡Lo lograste! Dictamos mensajes y controlamos dispositivos usando nuestra voz sin tocar botones.",
        failDesc: "¡Casi! Nos ayuda a dictar 'mensajes' y controlar asistentes con nuestra 'voz'."
      }
    ]
  },
  18: {
    id: 18,
    title: "Entendiendo Palabras (NLP)",
    subtitle: "El lenguaje de los humanos",
    badge: "📚",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Qué significan las siglas 'NLP' o Procesamiento de Lenguaje Natural?",
        options: [
          { text: "Naturaleza y Limpieza de Plantas", isCorrect: false },
          { text: "La tecnología que ayuda a la IA a comprender y hablar el idioma de los humanos", isCorrect: true },
          { text: "Nuevas Lógicas de Programación", isCorrect: false }
        ],
        hint: "Se refiere a nuestro lenguaje 'natural' (español, inglés) en contraste con el código de programación.",
        speech: "¿Qué es el Procesamiento de Lenguaje Natural?",
        successDesc: "¡Brillante! El NLP ayuda a la IA a entender el humor, el sarcasmo, las preguntas y redactar respuestas coherentes.",
        failDesc: "¡Nop! Significa 'Natural Language Processing' (Procesamiento de Lenguaje Natural) y estudia cómo entienden textos."
      },
      {
        type: "boolean",
        question: "¿Es fácil para una computadora entender los chistes de doble sentido o el sarcasmo de los humanos?",
        options: [
          { text: "Sí, la IA entiende los chistes al instante", value: true },
          { text: "No, el sarcasmo y el contexto humano son muy difíciles para la IA", value: false }
        ],
        correctValue: false,
        hint: "Un chiste requiere cultura, picardía y contexto de la vida real.",
        speech: "¿La IA tiene buen sentido del humor?",
        successDesc: "¡Correcto! El lenguaje humano está lleno de sutilezas. El sarcasmo es de los retos más difíciles de programar.",
        failDesc: "¡No! Para una IA, el doble sentido es súper confuso porque analiza palabras de forma literal."
      }
    ]
  },
  19: {
    id: 19,
    title: "Traductores Inteligentes",
    subtitle: "Superando barreras con IA",
    badge: "🌐",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Cómo traducen los sistemas modernos de IA una frase de un idioma a otro?",
        options: [
          { text: "Buscando palabra por palabra en un diccionario de papel", isCorrect: false },
          { text: "Entendiendo el significado completo de la frase y adaptándolo al otro idioma", isCorrect: true },
          { text: "Inventando palabras graciosas", isCorrect: false }
        ],
        hint: "Traducir palabra por palabra a veces suena muy extraño.",
        speech: "¿Cómo traduce la IA de español a inglés hoy en día?",
        successDesc: "¡Súper! Usan redes neuronales llamadas 'Transformers' que analizan el contexto completo de la oración.",
        failDesc: "¡Nop! Palabra por palabra daba traducciones malísimas en el pasado. Hoy usan el contexto y significado completo."
      },
      {
        type: "boolean",
        question: "¿Un traductor moderno de IA puede ajustar el tono de una frase para que suene formal o amigable?",
        options: [
          { text: "Sí, puede adaptar el estilo de hablar", value: true },
          { text: "No, la IA solo habla como robot serio", value: false }
        ],
        correctValue: true,
        hint: "Puedes pedirle a una IA moderna que te traduzca algo 'como si fueras un pirata'.",
        speech: "¿La IA puede cambiar su estilo al traducir?",
        successDesc: "¡Fabuloso! Puede reescribir la traducción para que suene infantil, profesional, alegre o poética.",
        failDesc: "¡Oh no! Sí pueden adaptar el tono gracias a los avanzados modelos de procesamiento de lenguaje."
      }
    ]
  },
  20: {
    id: 20,
    title: "Filtros Divertidos",
    subtitle: "Rastreo facial y filtros de jaguar",
    badge: "🎭",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Cómo sabe un filtro de fotos de redes sociales dónde poner las orejas de JagÜi en tu cabeza?",
        options: [
          { text: "Utiliza visión por computadora para detectar puntos clave de tu rostro (ojos, nariz, frente)", isCorrect: true },
          { text: "Toma fotos de tu cabeza al azar", isCorrect: false },
          { text: "Hay una persona real acomodándolo a mano por internet", isCorrect: false }
        ],
        hint: "Detecta la geometría y la forma de tu cara en tiempo real.",
        speech: "¿Cómo funcionan los filtros divertidos que te ponen máscaras?",
        successDesc: "¡Excelente! La IA crea un 'mapa de malla' en tu cara con decenas de puntos clave para que el filtro se mueva contigo.",
        failDesc: "¡Nop! No hay nadie acomodándolo. Es un algoritmo de visión artificial que detecta tus rasgos faciales en milisegundos."
      },
      {
        type: "boolean",
        question: "¿Los filtros avanzados pueden estimar tu edad o si estás sonriendo analizando tu rostro?",
        options: [
          { text: "¡Sí, la IA puede detectar expresiones!", value: true },
          { text: "No, los filtros no saben si estás feliz o triste", value: false }
        ],
        correctValue: true,
        hint: "Las comisuras de tus labios suben cuando sonríes.",
        speech: "¿La IA puede saber si sonríes?",
        successDesc: "¡Maravilloso! Mide la distancia de tus cejas, ojos y labios para adivinar tus emociones básicas. ¡Impresionante!",
        failDesc: "¡Oh! Sí pueden estimarlo rastreando los vectores de movimiento de tu boca y ojos."
      }
    ]
  },

  // === MUNDO 5: ROBÓTICA Y APLICACIONES (Niveles 21-25) ===
  21: {
    id: 21,
    title: "Asistentes de Voz",
    subtitle: "Inteligencia en la nube",
    badge: "📟",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Dónde vive el 'cerebro' de los asistentes de voz como Siri, Alexa o Google Assistant?",
        options: [
          { text: "Dentro de una bocina sin internet", isCorrect: false },
          { text: "En computadoras gigantes conectadas a internet llamadas 'La Nube'", isCorrect: true },
          { text: "En un chip de pila infinita", isCorrect: false }
        ],
        hint: "Requieren internet porque el procesamiento de voz es demasiado pesado para una bocina pequeña.",
        speech: "¡Mundo 5! ¿Dónde vive el cerebro de tu asistente virtual?",
        successDesc: "¡Brillante! Tu bocina captura tu voz, la manda por internet a la nube, procesa la respuesta en milisegundos y te responde.",
        failDesc: "¡Nop! Una pequeña bocina no tiene espacio para semejante cerebro digital. Todo se procesa en supercomputadoras en la nube."
      },
      {
        type: "boolean",
        question: "¿Los asistentes de voz pueden aprender tu tono específico de voz para saber quién les habla?",
        options: [
          { text: "Sí, reconocen el perfil de voz único", value: true },
          { text: "No, todos los humanos sonamos igual para ellos", value: false }
        ],
        correctValue: true,
        hint: "Se llama 'huella de voz' o reconocimiento de locutor.",
        speech: "¿Un asistente de voz puede reconocerte solo al hablar?",
        successDesc: "¡Súper! Analizan las frecuencias físicas de tu voz y pueden decir: 'Hola Jovan' o 'Hola Científico/a'.",
        failDesc: "¡No! Tu voz es tan única como tu huella digital. La IA tiene la capacidad de diferenciar perfiles sonoros."
      }
    ]
  },
  22: {
    id: 22,
    title: "Autos Autónomos",
    subtitle: "Vehículos inteligentes",
    badge: "🚗",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Qué hace que un auto sea 'autónomo'?",
        options: [
          { text: "Que vuela por los aires", isCorrect: false },
          { text: "Que puede conducirse, frenar y esquivar obstáculos solo usando cámaras e IA", isCorrect: true },
          { text: "Que tiene un motor eléctrico muy ruidoso", isCorrect: false }
        ],
        hint: "Significa que se maneja de forma independiente sin chofer humano.",
        speech: "¿Cómo definimos a los autos autónomos?",
        successDesc: "¡Fabuloso! Cuentan con un cerebro de IA que analiza cámaras, láseres (LiDAR) y mapas para avanzar de forma segura.",
        failDesc: "¡Nop! No vuelan. Son autos equipados con sistemas autónomos de sensores e IA para conducirse solos."
      },
      {
        type: "builder",
        question: "Completa la regla de seguridad del auto inteligente:",
        sentence: "El auto autónomo usa {blank} para detectar si un {blank} cruza la calle y frenar.",
        blanksCount: 2,
        wordBank: ["cámaras", "peatón", "cables", "perro-robot"],
        correctAnswers: ["cámaras", "peatón"],
        hint: "Es su sentido de la vista.",
        speech: "¡Ordenemos los elementos del auto ciber!",
        successDesc: "¡Lo lograste! El auto detecta peatones en milisegundos con visión artificial y frena antes que un humano.",
        failDesc: "¡Casi! Usa 'cámaras' para detectar si un 'peatón' cruza."
      }
    ]
  },
  23: {
    id: 23,
    title: "Robots Inteligentes",
    subtitle: "Máquinas que aprenden física",
    badge: "🤖",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Todos los robots de las fábricas tienen Inteligencia Artificial?",
        options: [
          { text: "No, algunos solo repiten movimientos mecánicos; los inteligentes usan IA para aprender y adaptarse", isCorrect: true },
          { text: "Sí, todos los robots piensan y conversan en secreto", isCorrect: false },
          { text: "No, los robots odian la IA", isCorrect: false }
        ],
        hint: "Repetir un movimiento exacto mil veces no requiere inteligencia, solo precisión física.",
        speech: "¿Un brazo robótico común tiene Inteligencia Artificial?",
        successDesc: "¡Exacto! Un robot tradicional es ciego y repetitivo. Un robot inteligente con IA usa visión y sensores para reaccionar ante cambios.",
        failDesc: "¡Oh no! La mayoría de robots industriales solo repiten comandos de posición. Solo los equipados con IA pueden aprender."
      },
      {
        type: "boolean",
        question: "¿Los científicos entrenan a los robots humanoides en simulaciones 3D antes de ponerlos a caminar en el mundo real?",
        options: [
          { text: "Sí, simular es más seguro y rápido para que la IA aprenda", value: true },
          { text: "No, los ponen a caminar en la calle directo y si se rompen no importa", value: false }
        ],
        correctValue: true,
        hint: "Caerse mil veces en una simulación de física virtual no daña al robot real.",
        speech: "¿Es útil simular el aprendizaje de un robot?",
        successDesc: "¡Excelente! La IA del robot camina millones de veces en mundos virtuales. Cuando ya es experta, se instala en el metal real.",
        failDesc: "¡Cuidado! Los robots de metal son caros. Primero entrenan en simulaciones de física digital para evitar accidentes."
      }
    ]
  },
  24: {
    id: 24,
    title: "IA en la Medicina",
    subtitle: "El doctor digital aliado",
    badge: "🏥",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Cómo ayuda la Inteligencia Artificial a los médicos humanos?",
        options: [
          { text: "Operando pacientes sola mientras los doctores duermen", isCorrect: false },
          { text: "Analizando miles de radiografías para detectar anomalías o enfermedades de forma veloz", isCorrect: true },
          { text: "Barriendo el piso del hospital", isCorrect: false }
        ],
        hint: "Actúa como un copiloto de súper vista.",
        speech: "¿Cuál es el gran valor de la IA en los hospitales?",
        successDesc: "¡Fantástico! Al comparar una placa con millones de ejemplos previos, la IA puede alertar al doctor de un problema diminuto.",
        failDesc: "¡Nop! No opera sola. Actúa como un asistente ultra preciso detectando patrones ocultos en imágenes médicas."
      },
      {
        type: "boolean",
        question: "¿La IA puede ayudar a diseñar nuevas medicinas analizando las moléculas químicas en segundos?",
        options: [
          { text: "¡Sí, acelera los descubrimientos médicos!", value: true },
          { text: "No, las medicinas solo se inventan por accidente", value: false }
        ],
        correctValue: true,
        hint: "Se llama bioinformática y plegamiento de proteínas.",
        speech: "¿La IA puede crear fórmulas médicas?",
        successDesc: "¡Brillante! Redes como AlphaFold analizan proteínas en minutos, algo que a los humanos les tomaba décadas. ¡Salvará millones de vidas!",
        failDesc: "¡Oh! La IA es una experta en química digital, acelerando la creación de tratamientos para bacterias y virus."
      }
    ]
  },
  25: {
    id: 25,
    title: "IA en el Espacio",
    subtitle: "Guiando rovers en Marte",
    badge: "🚀",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Por qué los rovers exploradores de Marte (como Perseverance) usan IA para esquivar rocas en lugar de ser controlados por control remoto desde la Tierra?",
        options: [
          { text: "Porque la señal tarda muchos minutos en viajar por el espacio, por lo que el rover debe decidir solo", isCorrect: true },
          { text: "Porque a los científicos les da flojera controlarlos", isCorrect: false },
          { text: "Porque Marte tiene calles marcadas", isCorrect: false }
        ],
        hint: "La distancia entre la Tierra y Marte causa un retraso gigante en las comunicaciones.",
        speech: "¿Por qué los rovers espaciales necesitan un cerebro con IA?",
        successDesc: "¡Maravilloso! Si el rover fuera a chocar, la orden de frenado terrestre llegaría 20 minutos tarde. ¡La IA decide en vivo!",
        failDesc: "¡No! La señal de radio a Marte tarda hasta 20 minutos. El rover necesita IA para 'ver' el camino y no atascarse solo."
      },
      {
        type: "boolean",
        question: "¿La IA ayuda a los telescopios a buscar planetas lejanos analizando el parpadeo de las estrellas?",
        options: [
          { text: "¡Sí, descubre mundos distantes!", value: true },
          { text: "No, los planetas se ven con binoculares simples", value: false }
        ],
        correctValue: true,
        hint: "Esos datos requieren buscar caídas del 0.01% de luz estelar.",
        speech: "¿La IA ayuda a buscar extraterrestres o planetas?",
        successDesc: "¡Genial! La IA procesa terabytes de datos de luz estelar y descubre planetas orbitando soles lejanos en segundos.",
        failDesc: "¡Nop! Los telescopios capturan datos masivos que solo algoritmos avanzados de IA pueden filtrar para hallar planetas."
      }
    ]
  },

  // === MUNDO 6: IA GENERATIVA Y ÉTICA (Niveles 26-30) ===
  26: {
    id: 26,
    title: "IA Artista",
    subtitle: "El nacimiento de la IA Generativa",
    badge: "🎨",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Cómo hace una IA Generativa para crear un dibujo digital a partir de tu texto?",
        options: [
          { text: "Copia y pega un dibujo exacto que robó de Google", isCorrect: false },
          { text: "Crea una imagen pixel a pixel basada en los millones de estilos de arte que estudió", isCorrect: true },
          { text: "Llama a un artista real y le pide que dibuje rápido", isCorrect: false }
        ],
        hint: "Es un proceso generativo creativo (como un pintor digital).",
        speech: "¡Llegamos al Mundo 6! ¿Cómo crea arte la Inteligencia Artificial?",
        successDesc: "¡Súper! Entiende tus palabras, crea 'ruido digital' y va ordenando los píxeles hasta formar un cuadro único.",
        failDesc: "¡Nop! No copia y pega. Diseña una imagen totalmente nueva combinando las texturas y estilos que aprendió de sus datos."
      },
      {
        type: "boolean",
        question: "¿La imagen de bienvenida de JagÜi en esta app fue generada con IA mediante la herramienta Nano Banana?",
        options: [
          { text: "¡Sí, Nano Banana la dibujó pixel a pixel!", value: true },
          { text: "No, la pintó un jaguar de verdad con acuarelas", value: false }
        ],
        correctValue: true,
        hint: "¡La herramienta de Nano Banana de Gemini creó esa obra de arte!",
        speech: "¿Nuestra imagen de JagÜi en la portada es de IA?",
        successDesc: "¡Exactamente! Es el poder de la IA Generativa en acción. Creó una ilustración premium siguiendo instrucciones escritas.",
        failDesc: "¡Oh! Ojalá los jaguares pintaran acuarelas. Fue generada por nuestra avanzada IA generadora de imágenes."
      }
    ]
  },
  27: {
    id: 27,
    title: "Escribiendo Historias",
    subtitle: "Modelos de Lenguaje Masivos (LLMs)",
    badge: "✍️",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Cómo hace una IA de chat (como Gemini) para responder tus preguntas y escribir cuentos?",
        options: [
          { text: "Predice palabra por palabra cuál es la siguiente palabra más probable basándose en tus textos", isCorrect: true },
          { text: "Lee una lista de respuestas grabadas por programadores", isCorrect: false },
          { text: "Adivina letras al azar", isCorrect: false }
        ],
        hint: "Es como el autocorrector inteligente de tu celular pero con esteroides.",
        speech: "¿Cómo escribe un cuento un Modelo de Lenguaje?",
        successDesc: "¡Brillante! Lee tu instrucción, y su gigantesca red matemática calcula la palabra más adecuada para continuar la frase.",
        failDesc: "¡No! No hay respuestas grabadas. Redacta en vivo estimando probabilidades de palabras secuenciales."
      },
      {
        type: "boolean",
        question: "¿Los Modelos de Lenguaje saben todo y nunca mienten ni se equivocan?",
        options: [
          { text: "Sí, son perfectos e infalibles", value: true },
          { text: "No, a veces inventan cosas llamadas 'alucinaciones'", value: false }
        ],
        correctValue: false,
        hint: "A veces la IA escribe datos históricos falsos con mucha seguridad.",
        speech: "¿Podemos confiar ciegamente en todo lo que escribe la IA?",
        successDesc: "¡Excelente! La IA predice palabras, no verdades absolutas. A veces se equivoca o 'alucina', por lo que hay que verificar.",
        failDesc: "¡Cuidado! Nunca confíes al 100%. La IA comete errores y puede alucinar datos. ¡Siempre investiga!"
      }
    ]
  },
  28: {
    id: 28,
    title: "¿Qué es la Ética?",
    subtitle: "Reglas para el bien de la IA",
    badge: "⚖️",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Qué es la 'Ética de la Inteligencia Artificial'?",
        options: [
          { text: "El costo en dinero de la computadora", isCorrect: false },
          { text: "El conjunto de reglas y valores para asegurar que la IA ayude a las personas y no les cause daño", isCorrect: true },
          { text: "Una contraseña secreta para apagar internet", isCorrect: false }
        ],
        hint: "Tiene que ver con la moral, la justicia y el bienestar humano.",
        speech: "¿Por qué los científicos hablan sobre la Ética de la IA?",
        successDesc: "¡Espectacular! La ética nos guía a crear IAs seguras, justas, transparentes y amables con todas las personas de la Tierra.",
        failDesc: "¡Nop! Son principios éticos que buscan que los programadores construyan sistemas responsables y benéficos."
      },
      {
        type: "boolean",
        question: "¿Los creadores de la IA deben asumir la responsabilidad si su software comete un daño grave?",
        options: [
          { text: "Sí, la responsabilidad es siempre de los creadores humanos", value: true },
          { text: "No, la culpa es de la computadora física", value: false }
        ],
        correctValue: true,
        hint: "Las computadoras son herramientas; los humanos decidimos cómo programarlas y usarlas.",
        speech: "¿La responsabilidad de un error de IA es humana?",
        successDesc: "¡Correcto! Una máquina no tiene moral ni leyes. Los seres humanos somos responsables de su diseño, datos y acciones.",
        failDesc: "¡Oh! Una máquina no va a la cárcel. La responsabilidad legal y moral recae siempre en los ingenieros y empresas humanas."
      }
    ]
  },
  29: {
    id: 29,
    title: "Sesgo en la IA",
    subtitle: "El peligro de la injusticia digital",
    badge: "🚫",
    rewardXP: 100,
    questions: [
      {
        type: "choice",
        question: "¿Qué es el 'Sesgo' en un algoritmo de Inteligencia Artificial?",
        options: [
          { text: "Que la pantalla del celular se ponga chueca", isCorrect: false },
          { text: "Cuando la IA favorece injustamente a un grupo de personas y daña a otro debido a datos de entrenamiento injustos o incompletos", isCorrect: true },
          { text: "Un truco para tener vidas infinitas", isCorrect: false }
        ],
        hint: "Piensa en prejuicios humanos reflejados en el código.",
        speech: "¿Qué es el temido sesgo en los algoritmos?",
        successDesc: "¡Brillante! Si entrenas una IA para contratar ingenieros solo con datos de hombres en el pasado, la IA discriminará a las mujeres. ¡Hay que evitarlo!",
        failDesc: "¡No! El sesgo es la injusticia algorítmica. Ocurre cuando los datos de entrenamiento reflejan prejuicios históricos."
      },
      {
        type: "builder",
        question: "Completa la regla de oro contra el sesgo:",
        sentence: "Para evitar el sesgo debemos entrenar la IA con datos muy {blank} e {blank}.",
        blanksCount: 2,
        wordBank: ["variados", "inclusivos", "feos", "secretos"],
        correctAnswers: ["variados", "inclusivos"],
        hint: "Piensa en representar a todo el mundo de forma justa.",
        speech: "¡Diseñemos una IA libre de prejuicios!",
        successDesc: "¡Excelente! La variedad e inclusión de datos evita que la IA sea ciega ante diferencias culturales o físicas.",
        failDesc: "¡Casi! Los datos deben ser sumamente 'variados' e 'inclusivos'."
      }
    ]
  },
  30: {
    id: 30,
    title: "El Futuro y los Humanos",
    subtitle: "Aliados para cuidar el planeta",
    badge: "🤝",
    rewardXP: 200,
    questions: [
      {
        type: "choice",
        question: "¿Cuál es el mejor futuro para la relación entre los humanos y la Inteligencia Artificial?",
        options: [
          { text: "Que la IA sea nuestra aliada y herramienta inteligente para resolver el cambio climático y las enfermedades", isCorrect: true },
          { text: "Que los robots nos hagan prisioneros", isCorrect: false },
          { text: "Que borremos toda la tecnología y volvamos a las cavernas", isCorrect: false }
        ],
        hint: "La IA debe ser una extensión de nuestra capacidad, no un enemigo.",
        speech: "¡Última lección del viaje! ¿Cómo ves nuestro futuro con la IA?",
        successDesc: "¡Rugido supremo de victoria! Has completado el viaje. La IA potencia nuestra inteligencia para lograr un mundo mejor. ¡El futuro está en tus manos!",
        failDesc: "¡Nop! El mejor camino es la colaboración: los humanos aportamos corazón, ética y creatividad; la IA aporta velocidad y datos."
      },
      {
        type: "ai_open",
        question: "¡Desafío AI Native! Explícale a Jagüi con tus propias palabras: ¿Por qué crees que es muy importante que los humanos usemos la Inteligencia Artificial de forma ética y para ayudar al planeta? 🌍",
        speech: "¡Científico/a! Llegamos al final del viaje de 30 niveles. Háblame de corazón: ¿Por qué crees que debemos usar la Inteligencia Artificial para el bien del planeta?",
        successDesc: "¡Soberbio rugido de sabiduría! Tu respuesta es ética, humana y demuestra que estás 100% listo para cambiar el futuro. ¡Felicidades, Maestro de la IA! 🐆🎓",
        failDesc: "¡Casi! Cuéntame un poco más sobre cómo ayudar al planeta o a las personas para que tu respuesta sea súper brillante."
      }
    ]
  }
};

// --- MEDALLAS / LOGROS ---
const ACHIEVEMENTS_DATA = [
  { id: "first-roar", title: "Primer Rugido", desc: "Completaste la lección 1 de IA", icon: "🦁", unlocked: false },
  { id: "ml-trainer", title: "Entrenador Experto", desc: "Completaste el laboratorio de ML", icon: "🧠", unlocked: false },
  { id: "perfect-brain", title: "Cerebro Dorado", desc: "Lograste una lección perfecta (3 vidas)", icon: "🏆", unlocked: false },
  { id: "xp-master", title: "Cazador de XP", desc: "Alcanzaste más de 300 puntos de XP", icon: "⭐", unlocked: false },
  { id: "future-scientist", title: "Científico del Futuro", desc: "Desbloqueaste todas las lecciones de IA", icon: "🚀", unlocked: false }
];

// --- ESTADO GLOBAL DE LA APP ---
let appState = {
  xp: 0,
  hearts: 3,
  completedLessons: [], // ej. [1, 2]
  streak: 1,
  lastPlayedDate: null,
  username: "Científico/a de IA",
  achievements: JSON.parse(JSON.stringify(ACHIEVEMENTS_DATA)), // copia profunda
  
  // Estado de lección en curso
  currentLessonId: null,
  currentQuestionIndex: 0,
  selectedOptionIndex: null,
  builderAnswers: [], // Respuestas seleccionadas en word builder
  isChecking: false, // true cuando muestra banner de feedback
  
  // Estado del Laboratorio ML
  healthyBin: [],
  junkBin: [],
  mlActiveItem: null,
  isMLTrained: false,

  // Tienda IA
  inventory: [],
  equippedAccessory: null
};

// --- CONFIGURACIÓN DE FIREBASE (CLUB DE CIENTÍFICOS JAGÜI) ---
const firebaseConfig = {
  projectId: "jagui-copiloto-ia",
  appId: "1:1053611529364:web:66bbf4a1645c5a360e1081",
  storageBucket: "jagui-copiloto-ia.firebasestorage.app",
  apiKey: "AIzaSyAaZdfKrznyC52w6vz6L4W-9PTp8gx6bOI",
  authDomain: "jagui-copiloto-ia.firebaseapp.com",
  messagingSenderId: "1053611529364"
};

let db = null;
let auth = null;
let isFirebaseConnected = false;

function initFirebase() {
  try {
    if (typeof firebase !== 'undefined') {
      firebase.initializeApp(firebaseConfig);
      db = firebase.firestore();
      auth = firebase.auth();
      isFirebaseConnected = true;
      console.log("Firebase inicializado con éxito! 🐆☁️");
      
      // Escuchar cambios de estado de autenticación
      auth.onAuthStateChanged(user => {
        if (user) {
          console.log("Usuario autenticado:", user.email);
          appState.username = user.displayName || "Científico/a";
          loadProfileFromFirebase(user.uid);
        } else {
          console.log("Modo Invitado activo.");
        }
      });
    } else {
      console.warn("Librerías de Firebase no detectadas. Degradando a almacenamiento local.");
    }
  } catch (e) {
    console.error("Fallo al conectar con Firebase:", e);
  }
}

// --- LOGROS Y ACCESOS A LA NUBE ---
function loadProfileFromFirebase(uid) {
  if (!db) return;
  db.collection("users").doc(uid).get()
    .then(doc => {
      if (doc.exists) {
        const data = doc.data();
        appState.xp = data.xp || 0;
        appState.streak = data.streak || 1;
        appState.completedLessons = data.completedLessons || [];
        appState.inventory = data.inventory || [];
        appState.equippedAccessory = data.equippedAccessory || null;
        
        // Guardar localmente
        saveLocalProgress();
        updateHeaderStats();
        applyAccessory();
        console.log("Perfil sincronizado desde la nube Firebase! ⭐");
      } else {
        // Guardar perfil nuevo en Firestore
        saveProfileToFirebase(uid);
      }
    })
    .catch(err => console.warn("Error al cargar perfil de Firestore:", err));
}

function saveProfileToFirebase(uid) {
  if (!db) return;
  db.collection("users").doc(uid).set({
    username: appState.username,
    xp: appState.xp,
    streak: appState.streak,
    completedLessons: appState.completedLessons,
    inventory: appState.inventory,
    equippedAccessory: appState.equippedAccessory,
    lastActiveDate: new Date().toISOString()
  }, { merge: true })
  .then(() => console.log("Progreso respaldado en Firebase! ☁️"))
  .catch(err => console.warn("Error al respaldar en Firestore:", err));
}

// --- ACCIONES DE AUTENTICACIÓN ---
function openAuthDialog() {
  playAudioSynth('click');
  document.getElementById('dialog-auth').showModal();
}

function closeAuthDialog(isGuest = false) {
  playAudioSynth('click');
  document.getElementById('dialog-auth').close();
  if (isGuest) {
    appState.username = "Invitado/a 🐆";
    document.getElementById('nav-username-display').innerText = "Invitado/a";
  }
}

function toggleAuthForm(form) {
  playAudioSynth('click');
  const loginBox = document.getElementById('auth-login-box');
  const registerBox = document.getElementById('auth-register-box');
  if (form === 'register') {
    loginBox.classList.add('hidden');
    registerBox.classList.remove('hidden');
  } else {
    loginBox.classList.remove('hidden');
    registerBox.classList.add('hidden');
  }
}

function loginWithFirebase() {
  playAudioSynth('click');
  const email = document.getElementById('auth-email-login').value.trim();
  const pass = document.getElementById('auth-pass-login').value.trim();
  const errorMsg = document.getElementById('login-error-msg');
  
  if (!email || !pass) {
    errorMsg.innerText = "¡Por favor escribe tu correo y contraseña! 🔑";
    return;
  }
  
  if (!auth) {
    errorMsg.innerText = "Error: El servidor de Firebase no está en línea.";
    return;
  }
  
  auth.signInWithEmailAndPassword(email, pass)
    .then(result => {
      errorMsg.innerText = "";
      playAudioSynth('correct');
      closeAuthDialog();
      triggerConfetti();
    })
    .catch(err => {
      console.warn("Fallo de inicio de sesión:", err);
      errorMsg.innerText = "¡Oh no! Contraseña incorrecta o correo no registrado.";
      playAudioSynth('incorrect');
    });
}

function registerWithFirebase() {
  playAudioSynth('click');
  const name = document.getElementById('auth-name-register').value.trim();
  const email = document.getElementById('auth-email-register').value.trim();
  const pass = document.getElementById('auth-pass-register').value.trim();
  const errorMsg = document.getElementById('register-error-msg');
  
  if (!name || !email || !pass) {
    errorMsg.innerText = "¡Escribe tu nombre, correo y contraseña! 📝";
    return;
  }
  
  if (pass.length < 6) {
    errorMsg.innerText = "¡Tu contraseña secreta debe medir al menos 6 letras! 🔒";
    return;
  }
  
  if (!auth) {
    errorMsg.innerText = "Error: El servidor de Firebase no está en línea.";
    return;
  }
  
  auth.createUserWithEmailAndPassword(email, pass)
    .then(result => {
      result.user.updateProfile({ displayName: name })
        .then(() => {
          appState.username = name;
          document.getElementById('nav-username-display').innerText = name;
          saveProfileToFirebase(result.user.uid);
          errorMsg.innerText = "";
          playAudioSynth('correct');
          closeAuthDialog();
          triggerConfetti();
        });
    })
    .catch(err => {
      console.warn("Fallo de registro:", err);
      errorMsg.innerText = "¡Uy! Ese correo ya está en uso o no es válido.";
      playAudioSynth('incorrect');
    });
}


// --- CONFIGURACIÓN DE AUDIO SINTETIZADO ---
let audioCtx = null;
let bgMusicInterval = null;
let isMusicPlaying = false;
let musicNodes = [];

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playBackgroundMusic() {
  if (isMusicPlaying) return;
  initAudio();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  isMusicPlaying = true;
  
  // Melodía cíclica alegre de 16 notas pentatónicas (C4, E4, G4, A4, C5...)
  const melody = [
    261.63, 329.63, 392.00, 440.00, 523.25, 440.00, 392.00, 329.63,
    293.66, 392.00, 493.88, 587.33, 493.88, 392.00, 293.66, 261.63
  ];
  
  let step = 0;
  const tempo = 350; // ms por nota (tempo tranquilo)
  
  bgMusicInterval = setInterval(() => {
    try {
      if (audioCtx.state === 'suspended') return;
      const now = audioCtx.currentTime;
      
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine'; // Onda suave
      osc.frequency.setValueAtTime(melody[step], now);
      
      // Volumen muy bajito para que sea música de fondo relajante
      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.32);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start(now);
      osc.stop(now + 0.35);
      
      musicNodes.push(osc);
      if (musicNodes.length > 20) {
        musicNodes.shift();
      }
      
      step = (step + 1) % melody.length;
    } catch (e) {
      console.warn("Música generativa detenida:", e);
    }
  }, tempo);
}

function stopBackgroundMusic() {
  isMusicPlaying = false;
  if (bgMusicInterval) {
    clearInterval(bgMusicInterval);
    bgMusicInterval = null;
  }
  musicNodes.forEach(node => {
    try { node.stop(); } catch (e) {}
  });
  musicNodes = [];
}

function toggleMusic() {
  const btnText = document.getElementById('music-toggle-text');
  if (isMusicPlaying) {
    stopBackgroundMusic();
    if (btnText) btnText.innerText = "Música: OFF";
    localStorage.setItem('jagui_music', 'off');
  } else {
    playBackgroundMusic();
    if (btnText) btnText.innerText = "Música: ON";
    localStorage.setItem('jagui_music', 'on');
  }
}

// --- INTELIGENCIA ARTIFICIAL NATIVA (GEMINI API CHATBOT & DICTADO POR VOZ) ---
let recognitionInstance = null;
let isRecognitionActive = false;

function toggleVoiceRecognition() {
  const btn = document.getElementById('btn-chat-mic');
  const input = document.getElementById('chat-user-input');
  
  if (isRecognitionActive) {
    if (recognitionInstance) {
      recognitionInstance.stop();
    }
    return;
  }
  
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    speakText("¡Uy! Tu navegador no soporta dictado por voz. ¡Prueba en Google Chrome!");
    return;
  }
  
  try {
    recognitionInstance = new SpeechRecognition();
    recognitionInstance.lang = 'es-MX';
    recognitionInstance.interimResults = false;
    recognitionInstance.maxAlternatives = 1;
    
    recognitionInstance.onstart = () => {
      isRecognitionActive = true;
      if (btn) {
        btn.classList.add('btn-equipped');
        btn.innerHTML = '<span>🔴 Rec</span>';
        btn.style.animation = 'float 1s infinite ease-in-out';
      }
      playAudioSynth('click');
    };
    
    recognitionInstance.onend = () => {
      isRecognitionActive = false;
      if (btn) {
        btn.classList.remove('btn-equipped');
        btn.innerHTML = '<span>🎙️</span>';
        btn.style.animation = '';
      }
    };
    
    recognitionInstance.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (input) {
        input.value = transcript;
        sendChatMessage(); // Enviar automáticamente
      }
    };
    
    recognitionInstance.onerror = (err) => {
      console.warn("Speech recognition error:", err);
      playAudioSynth('incorrect');
    };
    
    recognitionInstance.start();
  } catch (e) {
    console.error("Speech recognition failed to start:", e);
  }
}

// Dictado por voz interactivo en los Quizzes
let quizRecognitionInstance = null;
let isQuizRecognitionActive = false;

function toggleQuizSpeechRecognition() {
  const btn = document.getElementById('btn-ai-open-mic');
  const input = document.getElementById('ai-open-input');
  
  if (isQuizRecognitionActive) {
    if (quizRecognitionInstance) {
      quizRecognitionInstance.stop();
    }
    return;
  }
  
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    speakText("¡Uy! Tu navegador no soporta dictado por voz. ¡Prueba en Google Chrome!");
    return;
  }
  
  try {
    quizRecognitionInstance = new SpeechRecognition();
    quizRecognitionInstance.lang = 'es-MX';
    quizRecognitionInstance.interimResults = false;
    quizRecognitionInstance.maxAlternatives = 1;
    
    quizRecognitionInstance.onstart = () => {
      isQuizRecognitionActive = true;
      if (btn) {
        btn.classList.add('btn-equipped');
        btn.innerHTML = '<span>🔴 Recibiendo voz...</span>';
      }
      playAudioSynth('click');
    };
    
    quizRecognitionInstance.onend = () => {
      isQuizRecognitionActive = false;
      if (btn) {
        btn.classList.remove('btn-equipped');
        btn.innerHTML = '<span>🎙️ Dictar por Voz</span>';
      }
    };
    
    quizRecognitionInstance.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (input) {
        input.value = transcript;
        playAudioSynth('correct');
      }
    };
    
    quizRecognitionInstance.onerror = (err) => {
      console.warn("Quiz Speech recognition error:", err);
      playAudioSynth('incorrect');
    };
    
    quizRecognitionInstance.start();
  } catch (e) {
    console.error("Quiz Speech recognition failed to start:", e);
  }
}

function saveGeminiApiKey() {
  const key = document.getElementById('gemini-api-key-input').value.trim();
  const status = document.getElementById('api-key-status');
  if (key) {
    localStorage.setItem('gemini_api_key', key);
    if (status) status.innerText = "¡API Key conectada con éxito! 🚀";
  } else {
    localStorage.removeItem('gemini_api_key');
    if (status) status.innerText = "Usando API Key por defecto de la Suite 🐆";
  }
}

function handleChatKeydown(event) {
  if (event.key === 'Enter') {
    sendChatMessage();
  }
}

function sendChatMessage() {
  const input = document.getElementById('chat-user-input');
  const text = input.value.trim();
  if (!text) return;
  
  input.value = ""; // Limpiar
  playAudioSynth('click');
  
  // Agregar mensaje del usuario en pantalla
  appendChatMessage("Científico/a", text, "user-msg");
  
  // Animación de Jagüi pensando
  setMascotExpression('jagui-welcome', 'thinking');
  appendChatMessage("Jagüi", "Mmm... ¡Déjame pensarlo! Raaaawr... 🧠⚡", "jagui-msg", true);
  
  const defaultApiKey = "AIzaSyCpbAxrs6y89rF5NvFTJ7CYUASi8Jr1ACI";
  const apiKey = localStorage.getItem('gemini_api_key') || defaultApiKey;
  
  if (apiKey) {
    callGeminiAPI(text, apiKey);
  } else {
    // Simulador inteligente de Jagüi con respuestas divertidas para niños
    setTimeout(() => {
      let reply = "";
      const lower = text.toLowerCase();
      
      if (lower.includes("hola") || lower.includes("quien eres") || lower.includes("saludo")) {
        reply = "¡Hola! ¡Raaaawr! Soy Jagüi, tu copiloto tecnológico. Estoy aquí para enseñarte cómo las computadoras pueden aprender como jaguares salvajes. ¿Qué quieres descubrir hoy? 🐆";
      } else if (lower.includes("red") || lower.includes("neuronal") || lower.includes("cerebro")) {
        reply = "¡Wow! Una red neuronal es como una telaraña digital dentro de la computadora. Imita las conexiones de tu propio cerebro para clasificar fotos o voces. ¡Cada bolita es una neurona de código! 🕸️🧠";
      } else if (lower.includes("machine learning") || lower.includes("aprendizaje") || lower.includes("entrenar")) {
        reply = "El Aprendizaje Automático o Machine Learning es darle superpoderes a la computadora. En lugar de escribir reglas aburridas, le damos miles de fotos y ella aprende sola a diferenciar gatos de perros. ¡Es lo que hacemos en mi Laboratorio! 🍏🍩";
      } else if (lower.includes("vision") || lower.includes("camara") || lower.includes("ver")) {
        reply = "¡La visión por computadora es increíble! Permite que un robot o auto autónomo 'vea' el mundo usando cámaras. Convierte las fotos en una cuadrícula gigante de números de colores (píxeles) para detectar obstáculos. 📷🚗";
      } else if (lower.includes("gemini") || lower.includes("chat") || lower.includes("ia")) {
        reply = "¡La Inteligencia Artificial es una gran herramienta hecha con matemáticas y código! Nos ayuda a resolver problemas gigantes, pero recuerda: ¡las máquinas no tienen sentimientos reales ni creatividad como tú! ⚡🧑‍🔬";
      } else {
        reply = "¡Qué excelente pregunta! Raaaawr. Para responder preguntas tan avanzadas y platicar de cualquier tema del universo tecnológico conmigo, ¡pídele a tus papás que coloquen mi API Key secreta de Gemini en el menú de abajo! Mientras tanto, ¡sigamos jugando en mi Ruta de Aprendizaje! 🌟🔑";
      }
      
      removeThinkingMessage();
      appendChatMessage("Jagüi", reply, "jagui-msg");
      setMascotExpression('jagui-welcome', 'happy');
      speakText(reply);
    }, 1500);
  }
}

function appendChatMessage(username, text, className, isThinking = false) {
  const container = document.getElementById('chat-messages');
  if (!container) return;
  
  if (isThinking) {
    const thinkingMsg = document.createElement('div');
    thinkingMsg.id = "chat-thinking-msg";
    thinkingMsg.className = `chat-message ${className}`;
    thinkingMsg.innerHTML = `
      <div class="msg-avatar">🐆</div>
      <div class="msg-content-wrapper">
        <span class="msg-username">${username}</span>
        <p class="msg-text" style="font-style: italic; color: var(--text-muted);">${text}</p>
      </div>
    `;
    container.appendChild(thinkingMsg);
  } else {
    const msg = document.createElement('div');
    msg.className = `chat-message ${className}`;
    msg.innerHTML = `
      <div class="msg-avatar">${className === 'user-msg' ? '🧑‍🔬' : '🐆'}</div>
      <div class="msg-content-wrapper">
        <span class="msg-username">${username}</span>
        <p class="msg-text">${text}</p>
      </div>
    `;
    container.appendChild(msg);
  }
  
  container.scrollTop = container.scrollHeight;
}

function removeThinkingMessage() {
  const thinking = document.getElementById('chat-thinking-msg');
  if (thinking) thinking.remove();
}

function callGeminiAPI(prompt, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  
  const systemInstruction = "Eres Jagüi, el adorable jaguar tecnológico copiloto de Inteligencia Artificial para niños. Habla siempre con un lenguaje sumamente sencillo, lúdico, infantil, amigable y muy motivador. Utiliza emojis con frecuencia, haz analogías con la selva, los animales y los árboles. Tu rugido característico es '¡Raaaawr!'. Responde de forma breve y concisa (máximo 3 frases) para que sea fácil y divertido de leer para niños.";
  
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: { parts: [{ text: systemInstruction }] }
  };
  
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(data => {
    removeThinkingMessage();
    let reply = "¡Ups! Raaaawr. Algo falló en mi red neuronal espacial. ¡Vuelve a intentarlo!";
    
    if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts) {
      reply = data.candidates[0].content.parts[0].text;
    }
    
    appendChatMessage("Jagüi", reply, "jagui-msg");
    setMascotExpression('jagui-welcome', 'happy');
    speakText(reply);
  })
  .catch(err => {
    console.error("Error calling Gemini API:", err);
    removeThinkingMessage();
    const reply = "¡Oh no! No pude conectar con mi cerebro en la nube Gemini. ¿Tienes internet activo en la selva? 📡🌳";
    appendChatMessage("Jagüi", reply, "jagui-msg");
    setMascotExpression('jagui-welcome', 'sad');
    speakText(reply);
  });
}

function playAudioSynth(type) {
  try {
    initAudio();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    
    const now = audioCtx.currentTime;
    
    if (type === 'click') {
      // Sonido corto de burbuja/clic
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.1);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    } 
    else if (type === 'correct') {
      // Arpegio alegre ascendente (Dings de victoria)
      const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.15, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.3);
      });
    } 
    else if (type === 'incorrect') {
      // Sonido descendente grave (Buzzer triste)
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(110, now + 0.3);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      
      // Filtro para suavizar el sonido del diente de sierra
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, now);
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start(now);
      osc.stop(now + 0.4);
    } 
    else if (type === 'victory') {
      // Fanfarria triunfal retro
      const sequence = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C4, E4, G4, C5, E5, G5, C6
      sequence.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.15, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.07 + 0.35);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.4);
      });
    }
  } catch (e) {
    console.warn("Error al reproducir audio web sintetizado:", e);
  }
}

// --- TEXT TO SPEECH (VOCALIZACIÓN DE JAGÜI) ---
let currentUtterance = null;

function speakText(text) {
  const isVoiceEnabled = document.getElementById('voice-synthesis-toggle').checked;
  if (!isVoiceEnabled || !('speechSynthesis' in window)) return;
  
  try {
    window.speechSynthesis.cancel(); // Detener cualquier voz previa
    
    currentUtterance = new SpeechSynthesisUtterance(text);
    
    // Buscar voces premium neuronales generadas por la IA de Google en el navegador
    const voices = window.speechSynthesis.getVoices();
    let selectedVoice = voices.find(v => v.name.includes('Google') && v.lang.startsWith('es'));
    if (!selectedVoice) {
      selectedVoice = voices.find(v => v.lang.startsWith('es-MX') || v.lang.startsWith('es-US'));
    }
    if (!selectedVoice) {
      selectedVoice = voices.find(v => v.lang.startsWith('es'));
    }
    
    if (selectedVoice) {
      currentUtterance.voice = selectedVoice;
    }
    
    currentUtterance.lang = 'es-MX'; // Idioma preferido (Español Latinoamericano)
    currentUtterance.rate = 1.08;  // Velocidad de voz alegre y fluida
    currentUtterance.pitch = 1.25; // Tono juguetón infantil idóneo para Jagüi
    
    window.speechSynthesis.speak(currentUtterance);
  } catch (e) {
    console.warn("Error en síntesis de voz nativa:", e);
  }
}

function speakInstructorText() {
  const bubble = document.getElementById('instructor-bubble');
  if (bubble) {
    speakText(bubble.innerText);
  }
}

// --- CONFETTI CANVAS ENGINE ---
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let confettiParticles = [];
let confettiAnimationId = null;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class ConfettiParticle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height - 20;
    this.size = Math.random() * 8 + 6;
    this.color = `hsl(${Math.random() * 360}, 85%, 60%)`;
    this.speedY = Math.random() * 3 + 2;
    this.speedX = Math.random() * 2 - 1;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 4 - 2;
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.rotation += this.rotationSpeed;
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let stillActive = false;
  confettiParticles.forEach(p => {
    p.update();
    p.draw();
    if (p.y < canvas.height) stillActive = true;
  });
  if (stillActive) {
    confettiAnimationId = requestAnimationFrame(animateConfetti);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(confettiAnimationId);
    confettiAnimationId = null;
  }
}

function triggerConfetti() {
  if (confettiAnimationId) {
    cancelAnimationFrame(confettiAnimationId);
  }
  confettiParticles = [];
  for (let i = 0; i < 100; i++) {
    confettiParticles.push(new ConfettiParticle());
  }
  animateConfetti();
}

// --- NAVEGACIÓN Y CAMBIO DE PANTALLAS CON VIEW TRANSITIONS API ---
function switchScreen(screenId) {
  playAudioSynth('click');
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  
  const updateDOM = () => {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
    }
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if (screenId === 'map-screen') {
      const btn = document.getElementById('btn-nav-map');
      if (btn) btn.classList.add('active');
      renderLessonMap();
    } else if (screenId === 'lab-screen') {
      const btn = document.getElementById('btn-nav-lab');
      if (btn) btn.classList.add('active');
      initMLSandbox();
    } else if (screenId === 'profile-screen') {
      const btn = document.getElementById('btn-nav-profile');
      if (btn) btn.classList.add('active');
      renderProfileView();
    } else if (screenId === 'store-screen') {
      const btn = document.getElementById('btn-nav-store');
      if (btn) btn.classList.add('active');
      renderStoreView();
    }
    
    document.querySelector('.main-content').scrollTop = 0;
  };

  // Uso de la API moderna View Transitions para transiciones suaves y cero cortes bruscos
  if (!document.startViewTransition) {
    updateDOM();
  } else {
    document.startViewTransition(updateDOM);
  }
}

// --- TEMA CLARO / OSCURO ("SELVA SOLEADA" VS "NOCHE TECNOLÓGICA") ---
function toggleTheme() {
  playAudioSynth('click');
  const body = document.body;
  const btnText = document.getElementById('theme-toggle-text');
  
  if (body.classList.contains('theme-light')) {
    body.classList.remove('theme-light');
    if (btnText) btnText.innerText = "Tema Día";
    localStorage.setItem('jagui_theme', 'dark');
  } else {
    body.classList.add('theme-light');
    if (btnText) btnText.innerText = "Tema Noche";
    localStorage.setItem('jagui_theme', 'light');
  }
}

// --- TIENDA IA DE ACCESORIOS PARA JAGÜI ---
const STORE_ITEMS = [
  { id: "glasses", name: "Gafas Futuristas", emoji: "🕶️", desc: "¡Jagüi las usa para analizar píxeles y patrones a súper velocidad!", cost: 100 },
  { id: "hat", name: "Gorra de Explorador", emoji: "🤠", desc: "¡Perfecta para adentrarse en la selva profunda de los macrodatos (Big Data)!", cost: 200 },
  { id: "headphones", name: "Auriculares Gamer", emoji: "🎧", desc: "¡Para escuchar sinapsis artificiales y música lo-fi de IA!", cost: 300 }
];

function applyAccessory() {
  const equipped = appState.equippedAccessory;
  const item = STORE_ITEMS.find(i => i.id === equipped);
  const emojiStr = item ? item.emoji : "";
  
  const wOverlay = document.getElementById('welcome-jagui-accessory');
  const iOverlay = document.getElementById('instructor-jagui-accessory');
  const lOverlay = document.getElementById('lab-jagui-accessory');
  
  if (wOverlay) wOverlay.innerText = emojiStr;
  if (iOverlay) iOverlay.innerText = emojiStr;
  if (lOverlay) lOverlay.innerText = emojiStr;
}

function renderStoreView() {
  document.getElementById('store-xp-display').innerText = `${appState.xp} XP`;
  
  const container = document.getElementById('store-items-container');
  container.innerHTML = ""; // Limpiar
  
  STORE_ITEMS.forEach(item => {
    const isOwned = appState.inventory.includes(item.id);
    const isEquipped = appState.equippedAccessory === item.id;
    
    let btnHTML = "";
    if (!isOwned) {
      const canAfford = appState.xp >= item.cost;
      btnHTML = `
        <button class="btn-3d btn-primary btn-sm" onclick="buyStoreItem('${item.id}')" ${canAfford ? "" : "disabled"}>
          <span>Comprar 💰</span>
        </button>
      `;
    } else {
      if (isEquipped) {
        btnHTML = `
          <button class="btn-3d btn-equipped btn-sm" onclick="equipStoreItem(null)">
            <span>Equipado 🤩</span>
          </button>
        `;
      } else {
        btnHTML = `
          <button class="btn-3d btn-secondary btn-sm" onclick="equipStoreItem('${item.id}')">
            <span>Equipar 🤠</span>
          </button>
        `;
      }
    }
    
    container.innerHTML += `
      <div class="store-card glass">
        <div class="store-item-emoji">${item.emoji}</div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="store-card-footer">
          <span class="item-cost">${item.cost} XP</span>
          ${btnHTML}
        </div>
      </div>
    `;
  });
}

function buyStoreItem(itemId) {
  const item = STORE_ITEMS.find(i => i.id === itemId);
  if (!item || appState.inventory.includes(itemId) || appState.xp < item.cost) return;
  
  appState.xp -= item.cost;
  appState.inventory.push(itemId);
  playAudioSynth('correct');
  
  saveToLocalStorage();
  updateNavStats();
  renderStoreView();
}

function equipStoreItem(itemId) {
  appState.equippedAccessory = itemId;
  playAudioSynth('click');
  
  applyAccessory();
  saveToLocalStorage();
  renderStoreView();
}

// --- PERSISTENCIA (LOCAL STORAGE) ---
function saveToLocalStorage() {
  localStorage.setItem('jagui_game_state', JSON.stringify({
    xp: appState.xp,
    hearts: appState.hearts,
    completedLessons: appState.completedLessons,
    streak: appState.streak,
    lastPlayedDate: appState.lastPlayedDate,
    username: appState.username,
    achievements: appState.achievements,
    inventory: appState.inventory,
    equippedAccessory: appState.equippedAccessory
  }));
}

function loadFromLocalStorage() {
  const data = localStorage.getItem('jagui_game_state');
  if (data) {
    try {
      const parsed = JSON.parse(data);
      appState.xp = parsed.xp || 0;
      appState.hearts = parsed.hearts !== undefined ? parsed.hearts : 3;
      appState.completedLessons = parsed.completedLessons || [];
      appState.streak = parsed.streak || 1;
      appState.lastPlayedDate = parsed.lastPlayedDate || null;
      appState.username = parsed.username || "Científico/a de IA";
      appState.achievements = parsed.achievements || JSON.parse(JSON.stringify(ACHIEVEMENTS_DATA));
      appState.inventory = parsed.inventory || [];
      appState.equippedAccessory = parsed.equippedAccessory || null;
      
      document.getElementById('btn-resume-game').classList.remove('hidden');
      updateNavStats();
      calculateStreak();
      applyAccessory(); // Aplicar el accesorio al iniciar
    } catch (e) {
      console.error("Error al cargar estado:", e);
    }
  }
}

function calculateStreak() {
  if (!appState.lastPlayedDate) return;
  const today = new Date().toDateString();
  const lastPlayed = new Date(appState.lastPlayedDate).toDateString();
  
  if (today === lastPlayed) return;
  
  const diffTime = Math.abs(new Date(today) - new Date(lastPlayed));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) {
    appState.streak += 1;
  } else if (diffDays > 1) {
    appState.streak = 1;
  }
  saveToLocalStorage();
}

function updateNavStats() {
  document.getElementById('nav-username-display').innerText = appState.username;
  document.getElementById('nav-xp-display').innerText = `${appState.xp} XP`;
  
  // Actualizar racha en la barra del mapa
  const streakVal = document.getElementById('map-streak');
  const streakIcon = document.getElementById('map-streak-icon');
  if (streakVal) {
    streakVal.innerText = `${appState.streak} ${appState.streak === 1 ? 'Día' : 'Días'}`;
  }
  if (streakIcon) {
    if (appState.streak > 0) {
      streakIcon.classList.add('streak-flame-active');
    } else {
      streakIcon.classList.remove('streak-flame-active');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initFirebase();
  loadFromLocalStorage();
  
  // Sincronizar el username si ya está autenticado en Firebase
  if (auth && auth.currentUser) {
    appState.username = auth.currentUser.displayName || "Científico/a";
    document.getElementById('nav-username-display').innerText = appState.username;
  }
  
  // Arrancar música de fondo si estaba activa
  const musicPref = localStorage.getItem('jagui_music');
  const btnMusic = document.getElementById('music-toggle-text');
  if (musicPref === 'on') {
    playBackgroundMusic();
    if (btnMusic) btnMusic.innerText = 'Música: ON';
  } else {
    if (btnMusic) btnMusic.innerText = 'Música: OFF';
  }

  // Cargar tema
  const themePref = localStorage.getItem('jagui_theme');
  const body = document.body;
  const btnTheme = document.getElementById('theme-toggle-text');
  if (themePref === 'light') {
    body.classList.add('theme-light');
    if (btnTheme) btnTheme.innerText = "Tema Noche";
  } else {
    body.classList.remove('theme-light');
    if (btnTheme) btnTheme.innerText = "Tema Día";
  }

  // Agregar saludito por voz inicial
  setTimeout(() => {
    speakText("¡Hola! Soy Jagüi, tu primer copiloto. ¿Listo para el viaje de 30 niveles para aprender Inteligencia Artificial? ¡Raaaawr!");
  }, 1000);
});

function startGame(isResume) {
  playAudioSynth('click');
  if (!isResume) {
    appState.hearts = 3;
    saveToLocalStorage();
  }
  switchScreen('map-screen');
}

// --- DIBUJAR MAPA MULTI-MUNDO DE 30 NIVELES ---
function renderLessonMap() {
  const container = document.getElementById('islands-container');
  container.innerHTML = ""; // Limpiar
  
  document.getElementById('map-xp').innerText = `${appState.xp} XP`;
  document.getElementById('map-hearts').innerText = appState.hearts;
  
  // Progreso hacia el siguiente gran nivel (rango)
  const levelProgress = (appState.xp % 500) / 5;
  document.getElementById('map-xp-progress').style.width = `${levelProgress}%`;

  // Renderizar mundos secuencialmente
  WORLDS_DATA.forEach((world) => {
    // 1. Agregar banner divisor de Mundo
    const worldHeaderHTML = `
      <div class="world-header world-${world.id}">
        <h3><span>🌍</span> ${world.name}</h3>
        <span>${world.desc}</span>
      </div>
    `;
    container.innerHTML += worldHeaderHTML;

    // 2. Filtrar lecciones del Mundo correspondiente
    const worldLessons = Object.values(LESSONS_DATA).filter(l => {
      if (world.id === 1) return l.id <= 5;
      if (world.id === 2) return l.id > 5 && l.id <= 10;
      if (world.id === 3) return l.id > 10 && l.id <= 15;
      if (world.id === 4) return l.id > 15 && l.id <= 20;
      if (world.id === 5) return l.id > 20 && l.id <= 25;
      return l.id > 25;
    });

    // 3. Dibujar islas de este mundo
    worldLessons.forEach((lesson) => {
      const isCompleted = appState.completedLessons.includes(lesson.id);
      const isUnlocked = lesson.id === 1 || appState.completedLessons.includes(lesson.id - 1);
      const isActive = isUnlocked && !isCompleted;
      
      let stateClass = "locked";
      if (isCompleted) stateClass = "completed";
      else if (isActive) stateClass = "active";
      else if (isUnlocked) stateClass = "unlocked";

      const islandHTML = `
        <div class="lesson-island ${stateClass}" data-lesson-id="${lesson.id}">
          <div class="island-floating-body" onclick="handleIslandClick(${lesson.id}, ${isUnlocked})">
            <div class="island-badge">${lesson.badge}</div>
            <div class="island-number">${lesson.id}</div>
          </div>
          <div class="island-info">
            <h3>Nivel ${lesson.id}: ${lesson.title}</h3>
            <p>${lesson.subtitle}</p>
            ${isUnlocked 
              ? `<button class="btn-3d ${isCompleted ? 'btn-secondary' : 'btn-primary'} btn-sm" onclick="startLesson(${lesson.id})">
                   <span>${isCompleted ? '¡Repasar! 🔄' : '¡Jugar! 🚀'}</span>
                 </button>`
              : '<span style="font-size:0.9rem;color:var(--text-muted);font-weight:600;">🔒 Bloqueado</span>'
            }
          </div>
        </div>
      `;
      container.innerHTML += islandHTML;
    });
  });
  
  // Calcular y dibujar la línea de camino dinámica y fluida
  setTimeout(drawDynamicMapPath, 100);
}

function drawDynamicMapPath() {
  const svg = document.querySelector('.map-connector-line');
  const container = document.querySelector('.map-container');
  const islands = document.querySelectorAll('.lesson-island');
  
  if (!svg || !container || !islands.length) return;
  
  const animatedPath = document.querySelector('.animated-path-flow');
  const staticPath = svg.querySelector('path:not(.animated-path-flow)');
  
  // Medir y ajustar el SVG a píxeles 1:1 para evitar estiramientos desproporcionados
  const containerRect = container.getBoundingClientRect();
  svg.setAttribute('width', containerRect.width);
  svg.setAttribute('height', containerRect.height);
  svg.removeAttribute('viewBox');
  
  let pathD = "";
  
  islands.forEach((island, idx) => {
    const body = island.querySelector('.island-floating-body');
    if (!body) return;
    const rect = body.getBoundingClientRect();
    
    // Coordenadas del centro de cada isla relativo al contenedor
    const x = rect.left - containerRect.left + rect.width / 2;
    const y = rect.top - containerRect.top + rect.height / 2;
    
    if (idx === 0) {
      pathD += `M ${x},${y}`;
    } else {
      const prevBody = islands[idx - 1].querySelector('.island-floating-body');
      if (!prevBody) return;
      const prevRect = prevBody.getBoundingClientRect();
      const prevX = prevRect.left - containerRect.left + prevRect.width / 2;
      const prevY = prevRect.top - containerRect.top + prevRect.height / 2;
      
      // Curva Bezier cúbica súper suave (serpenteante)
      const cpY1 = prevY + (y - prevY) / 3;
      const cpY2 = prevY + (y - prevY) * 2 / 3;
      pathD += ` C ${prevX},${cpY1} ${x},${cpY2} ${x},${y}`;
    }
  });
  
  if (pathD) {
    staticPath.setAttribute('d', pathD);
    if (animatedPath) animatedPath.setAttribute('d', pathD);
  }
}

// Escuchar cambios de tamaño para re-ajustar el camino de las islas dinámicamente
window.addEventListener('resize', () => {
  const mapScreen = document.getElementById('map-screen');
  if (mapScreen && mapScreen.classList.contains('active')) {
    drawDynamicMapPath();
  }
});

function handleIslandClick(lessonId, isUnlocked) {
  if (isUnlocked) {
    startLesson(lessonId);
  } else {
    playAudioSynth('incorrect');
    speakText("¡Raaawr! Nivel cerrado por ahora. ¡Completa los niveles anteriores para desbloquearlo!");
  }
}

// --- SISTEMA DE LECCIONES (EL QUIZ) ---
function startLesson(lessonId) {
  playAudioSynth('click');
  initAudio();
  
  appState.currentLessonId = lessonId;
  appState.currentQuestionIndex = 0;
  appState.hearts = 3;
  appState.isChecking = false;
  appState.selectedOptionIndex = null;
  appState.builderAnswers = [];
  
  switchScreen('lesson-screen');
  renderQuestion();
}

function setMascotExpression(mascotId, expression) {
  const mascotSvg = document.getElementById(mascotId);
  if (mascotSvg) {
    mascotSvg.className.baseVal = `jagui-svg state-${expression}`;
  }
}

function renderQuestion() {
  const lesson = LESSONS_DATA[appState.currentLessonId];
  const question = lesson.questions[appState.currentQuestionIndex];
  
  appState.selectedOptionIndex = null;
  appState.builderAnswers = [];
  appState.isChecking = false;
  
  // Actualizar corazones
  for (let i = 1; i <= 3; i++) {
    const heart = document.getElementById(`heart-${i}`);
    if (i <= appState.hearts) {
      heart.classList.add('active');
    } else {
      heart.classList.remove('active');
    }
  }

  // Barra de progreso
  const progressPercent = (appState.currentQuestionIndex / lesson.questions.length) * 100;
  document.getElementById('lesson-progress-fill').style.width = `${progressPercent}%`;
  document.getElementById('lesson-progress-jagui').style.left = `${progressPercent}%`;

  setMascotExpression('jagui-instructor', 'normal');

  document.getElementById('instructor-bubble').innerHTML = question.speech;
  speakText(question.speech);

  document.getElementById('quiz-feedback-banner').className = "quiz-feedback-banner hidden";
  
  document.getElementById('btn-quiz-action').className = "btn-3d btn-primary";
  document.getElementById('btn-quiz-action').innerHTML = "<span>Comprobar 🔍</span>";

  document.getElementById('question-title').innerText = question.question;

  const area = document.getElementById('question-area');
  area.innerHTML = ""; // Limpiar

  if (question.type === 'choice') {
    let optionsHTML = '<div class="options-grid">';
    question.options.forEach((opt, idx) => {
      const char = String.fromCharCode(65 + idx);
      optionsHTML += `
        <button class="option-card" onclick="selectChoiceOption(${idx})">
          <div class="option-badge">${char}</div>
          <div class="option-text">${opt.text}</div>
        </button>
      `;
    });
    optionsHTML += '</div>';
    area.innerHTML = optionsHTML;
  } 
  
  else if (question.type === 'boolean') {
    let boolHTML = '<div class="options-grid">';
    question.options.forEach((opt, idx) => {
      const char = idx === 0 ? "✓" : "✗";
      boolHTML += `
        <button class="option-card" onclick="selectChoiceOption(${idx})">
          <div class="option-badge">${char}</div>
          <div class="option-text">${opt.text}</div>
        </button>
      `;
    });
    boolHTML += '</div>';
    area.innerHTML = boolHTML;
  } 
  
  else if (question.type === 'builder') {
    let sentenceHTML = `
      <div class="sentence-builder-container">
        <div class="fill-sentence">
          ${question.sentence.replace(/{blank}/g, '<span class="blank-slot">¿?</span>')}
        </div>
        <div class="word-bank">
    `;
    question.wordBank.forEach((word, idx) => {
      sentenceHTML += `
        <button class="word-pill" id="word-pill-${idx}" onclick="selectWordBuilder('${word}', ${idx})">
          ${word}
        </button>
      `;
    });
    sentenceHTML += `
        </div>
      </div>
    `;
    area.innerHTML = sentenceHTML;
  }
  
  else if (question.type === 'drag_classify') {
    let html = `
      <div class="minigame-container">
        <span class="minigame-title">🐾 ¡Minijuego: Ordena la Comida! 🐾</span>
        <div class="drag-classify-board">
          <div class="draggable-items-pool" id="drag-items-pool">
    `;
    question.items.forEach((item, idx) => {
      html += `
        <div class="draggable-item" id="drag-item-${item.id}" draggable="true" ondragstart="handleMinigameDragStart(event, '${item.id}')" style="touch-action: none;">
          <span>${item.emoji}</span>
        </div>
      `;
    });
    html += `
          </div>
          <div class="baskets-grid">
            <div class="basket-bin healthy-basket" id="basket-healthy" ondragover="allowMinigameDrop(event)" ondrop="handleMinigameDrop(event, 'healthy')">
              <div class="basket-header">🍏 Saludable</div>
              <div class="basket-items" id="basket-healthy-items"></div>
            </div>
            <div class="basket-bin junk-basket" id="basket-junk" ondragover="allowMinigameDrop(event)" ondrop="handleMinigameDrop(event, 'junk')">
              <div class="basket-header">🍩 No Saludable</div>
              <div class="basket-items" id="basket-junk-items"></div>
            </div>
          </div>
        </div>
      </div>
    `;
    area.innerHTML = html;
    initDragMinigameTouchSupport(); // Soporte para toques en celulares
  }
  
  else if (question.type === 'bounding_box') {
    let html = `
      <div class="minigame-container">
        <span class="minigame-title">📷 ¡Minijuego: Escáner de Visión! 📷</span>
        <div class="bounding-box-game" id="bbox-game-board">
          <img src="assets/jagui_mascot_hero.png" class="bbox-target-img" alt="Jagüi">
          <div class="bbox-laser"></div>
          <div class="bbox-rect hidden" id="bbox-rect-element">
            <span class="bbox-label">Jagüi Detectado</span>
          </div>
          <div class="bbox-canvas-overlay" id="bbox-canvas" onmousedown="startBBoxDraw(event)" onmousemove="drawBBox(event)" onmouseup="endBBoxDraw(event)"></div>
        </div>
        <p class="bbox-hint-text">¡Haz clic y arrastra un rectángulo neón para encerrar la cabeza de Jagüi!</p>
      </div>
    `;
    area.innerHTML = html;
    initBBoxMinigameTouchSupport(); // Soporte para móviles
  }
  
  else if (question.type === 'neural_connect') {
    let html = `
      <div class="minigame-container">
        <span class="minigame-title">🕸️ ¡Minijuego: Conectores Ciber! 🕸️</span>
        <div class="neural-connect-game">
          <div class="neural-sandbox-svg-container">
            <svg class="neural-sandbox-svg" viewBox="0 0 320 220">
              <!-- Cables / Conexiones -->
              <path class="wire-link" id="wire-1" d="M 60,60 L 160,110" onclick="toggleNeuralWire(1)"></path>
              <path class="wire-link" id="wire-2" d="M 60,160 L 160,110" onclick="toggleNeuralWire(2)"></path>
              <path class="wire-link" id="wire-3" d="M 160,110 L 260,60" onclick="toggleNeuralWire(3)"></path>
              <path class="wire-link" id="wire-4" d="M 160,110 L 260,160" onclick="toggleNeuralWire(4)"></path>
              
              <!-- Nodos de Entrada -->
              <circle cx="60" cy="60" r="10" fill="cyan" class="node-btn" onclick="playAudioSynth('click')"></circle>
              <text x="60" y="85" class="node-label-svg">📷 Ver</text>
              
              <circle cx="60" cy="160" r="10" fill="cyan" class="node-btn" onclick="playAudioSynth('click')"></circle>
              <text x="60" y="185" class="node-label-svg">🎙️ Oír</text>
              
              <!-- Nodo Intermedio (Oculto) -->
              <circle cx="160" cy="110" r="10" fill="magenta" class="node-btn" onclick="playAudioSynth('click')"></circle>
              <text x="160" y="135" class="node-label-svg">🧠 Pensar</text>
              
              <!-- Nodos de Salida -->
              <circle cx="260" cy="60" r="10" fill="yellow" class="node-btn" onclick="playAudioSynth('click')"></circle>
              <text x="260" y="85" class="node-label-svg">🚶 Mover</text>
              
              <circle cx="260" cy="160" r="10" fill="yellow" class="node-btn" onclick="playAudioSynth('click')"></circle>
              <text x="260" y="185" class="node-label-svg">🗣️ Hablar</text>
            </svg>
          </div>
          <p class="bbox-hint-text">¡Haz clic en los 4 cables de energía grises para encender la red neuronal!</p>
        </div>
      </div>
    `;
    area.innerHTML = html;
    appState.connectedWires = []; // Reiniciar estado de cables
  }
  
  else if (question.type === 'reinforcement') {
    let html = `
      <div class="minigame-container">
        <span class="minigame-title">🎮 ¡Minijuego: Entrena a Jagüi! 🎮</span>
        <div class="reinforcement-game">
          <div class="runway-sandbox" id="runway-board">
            <div class="runway-ground"></div>
            <div class="runway-mascot walking" id="runway-jagui"></div>
            <div class="runway-obstacle" id="runway-obstacle">🌵</div>
          </div>
          <div class="reinforcement-stats">
            <span class="stat-group">Confianza IA: <strong id="val-conf">0%</strong></span>
            <span class="stat-group">Premio: <strong id="val-cookies">0 🍪</strong></span>
          </div>
          <div class="reinforcement-controls">
            <button class="btn-3d btn-primary" onclick="reinforcementAction('cookie')">
              <span>Dar Galleta 🍪</span>
            </button>
            <button class="btn-3d btn-secondary" onclick="reinforcementAction('whistle')">
              <span>Tocar Silbato 🔔</span>
            </button>
          </div>
        </div>
      </div>
    `;
    area.innerHTML = html;
    initReinforcementGame();
  }
  
  else if (question.type === 'ai_open') {
    let html = `
      <div class="minigame-container" style="width: 100%;">
        <div class="ai-open-panel" style="width: 100%; display: flex; flex-direction: column; gap: 1rem;">
          <textarea id="ai-open-input" class="chat-input" rows="4" placeholder="Escribe tu respuesta aquí o pulsa el micro para dictársela a Jagüi..." style="width: 100%; box-sizing: border-box; resize: none;"></textarea>
          <div style="display: flex; gap: 1rem; justify-content: center;">
            <button class="btn-3d btn-secondary" id="btn-ai-open-mic" onclick="toggleQuizSpeechRecognition()" style="padding: 0.8rem 1.5rem;">
              <span>🎙️ Dictar por Voz</span>
            </button>
          </div>
        </div>
      </div>
    `;
    area.innerHTML = html;
  }
}

function selectChoiceOption(idx) {
  if (appState.isChecking) return;
  playAudioSynth('click');
  appState.selectedOptionIndex = idx;
  
  document.querySelectorAll('.option-card').forEach((card, cidx) => {
    if (cidx === idx) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });
}

function selectWordBuilder(word, idx) {
  if (appState.isChecking) return;
  
  const lesson = LESSONS_DATA[appState.currentLessonId];
  const question = lesson.questions[appState.currentQuestionIndex];
  
  if (appState.builderAnswers.includes(word)) {
    playAudioSynth('click');
    const aidx = appState.builderAnswers.indexOf(word);
    appState.builderAnswers.splice(aidx, 1);
    document.getElementById(`word-pill-${idx}`).classList.remove('used');
  } else {
    if (appState.builderAnswers.length >= question.blanksCount) return;
    playAudioSynth('click');
    appState.builderAnswers.push(word);
    document.getElementById(`word-pill-${idx}`).classList.add('used');
  }
  
  const slots = document.querySelectorAll('.blank-slot');
  slots.forEach((slot, sidx) => {
    if (sidx < appState.builderAnswers.length) {
      slot.innerText = appState.builderAnswers[sidx];
      slot.classList.add('filled');
    } else {
      slot.innerText = "¿?";
      slot.classList.remove('filled');
    }
  });
}

// ==========================================================================
// CONTROLADORES LÓGICOS DE LOS 4 MINIJUEGOS INTERACTIVOS (JAGÜI IA)
// ==========================================================================

// --- MINIJUEGO 1: CLASIFICACIÓN POR ARRASTRE (DRAG CLASSIFY) ---
let minigameClassified = {}; // Almacena { itemId: 'healthy' | 'junk' }

function handleMinigameDragStart(event, itemId) {
  if (appState.isChecking) return;
  event.dataTransfer.setData("text/plain", itemId);
  playAudioSynth('click');
}

function allowMinigameDrop(event) {
  event.preventDefault();
  const bin = event.currentTarget;
  bin.classList.add('hovered');
}

function handleMinigameDrop(event, basketType) {
  event.preventDefault();
  const bin = event.currentTarget;
  bin.classList.remove('hovered');
  
  if (appState.isChecking) return;
  
  const itemId = event.dataTransfer.getData("text/plain");
  classifyItemInMinigame(itemId, basketType);
}

function classifyItemInMinigame(itemId, basketType) {
  const itemEl = document.getElementById(`drag-item-${itemId}`);
  if (!itemEl) return;
  
  const targetGrid = document.getElementById(`basket-${basketType}-items`);
  if (!targetGrid) return;
  
  playAudioSynth('click');
  targetGrid.appendChild(itemEl);
  itemEl.style.position = "static"; // Asegurar posición relativa estándar
  
  minigameClassified[itemId] = basketType;
}

// Soporte táctil móvil interactivo para Arrastre
function initDragMinigameTouchSupport() {
  setTimeout(() => {
    const items = document.querySelectorAll('.draggable-item');
    items.forEach(item => {
      let activeDrag = false;
      let startX = 0, startY = 0;
      let initialLeft = 0, initialTop = 0;
      const itemId = item.id.replace('drag-item-', '');
      
      item.addEventListener('touchstart', (e) => {
        if (appState.isChecking) return;
        activeDrag = true;
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        item.style.position = 'relative';
        initialLeft = parseFloat(item.style.left) || 0;
        initialTop = parseFloat(item.style.top) || 0;
        item.style.zIndex = 1000;
        playAudioSynth('click');
      });
      
      item.addEventListener('touchmove', (e) => {
        if (!activeDrag) return;
        e.preventDefault();
        const touch = e.touches[0];
        const dx = touch.clientX - startX;
        const dy = touch.clientY - startY;
        item.style.left = `${initialLeft + dx}px`;
        item.style.top = `${initialTop + dy}px`;
      });
      
      item.addEventListener('touchend', (e) => {
        if (!activeDrag) return;
        activeDrag = false;
        item.style.zIndex = '';
        
        // Verificar colisión con las cestas
        const rect = item.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const basketHealthy = document.getElementById('basket-healthy');
        const basketJunk = document.getElementById('basket-junk');
        
        if (basketHealthy && isPointInsideRect(centerX, centerY, basketHealthy.getBoundingClientRect())) {
          classifyItemInMinigame(itemId, 'healthy');
        } else if (basketJunk && isPointInsideRect(centerX, centerY, basketJunk.getBoundingClientRect())) {
          classifyItemInMinigame(itemId, 'junk');
        } else {
          // Regresar a su lugar con un leve rebote
          item.style.left = '0px';
          item.style.top = '0px';
          playAudioSynth('incorrect');
        }
      });
    });
  }, 100);
}

function isPointInsideRect(x, y, rect) {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

// --- MINIJUEGO 2: CAJA DELIMITADORA DE VISIÓN (BOUNDING BOX) ---
let isBBoxDrawing = false;
let bboxStart = { x: 0, y: 0 };
let bboxEnd = { x: 0, y: 0 };
let bboxGameWon = false;

function startBBoxDraw(event) {
  if (appState.isChecking || bboxGameWon) return;
  
  const rectBoard = document.getElementById('bbox-game-board').getBoundingClientRect();
  isBBoxDrawing = true;
  
  // Coordenadas relativas
  bboxStart.x = event.clientX - rectBoard.left;
  bboxStart.y = event.clientY - rectBoard.top;
  
  const bbox = document.getElementById('bbox-rect-element');
  bbox.style.left = `${bboxStart.x}px`;
  bbox.style.top = `${bboxStart.y}px`;
  bbox.style.width = '0px';
  bbox.style.height = '0px';
  bbox.classList.remove('hidden');
  
  playAudioSynth('click');
}

function drawBBox(event) {
  if (!isBBoxDrawing) return;
  
  const rectBoard = document.getElementById('bbox-game-board').getBoundingClientRect();
  bboxEnd.x = event.clientX - rectBoard.left;
  bboxEnd.y = event.clientY - rectBoard.top;
  
  const width = Math.abs(bboxEnd.x - bboxStart.x);
  const height = Math.abs(bboxEnd.y - bboxStart.y);
  const left = Math.min(bboxStart.x, bboxEnd.x);
  const top = Math.min(bboxStart.y, bboxEnd.y);
  
  const bbox = document.getElementById('bbox-rect-element');
  bbox.style.left = `${left}px`;
  bbox.style.top = `${top}px`;
  bbox.style.width = `${width}px`;
  bbox.style.height = `${height}px`;
}

function endBBoxDraw(event) {
  if (!isBBoxDrawing) return;
  isBBoxDrawing = false;
  
  // Validar si la caja delimitadora encierra adecuadamente el rostro de Jagüi
  // El jaguar en la imagen de 320x240 está centrado aproximadamente entre x: 90-230, y: 30-170
  const bbox = document.getElementById('bbox-rect-element').getBoundingClientRect();
  const board = document.getElementById('bbox-game-board').getBoundingClientRect();
  
  const leftRel = bbox.left - board.left;
  const topRel = bbox.top - board.top;
  const width = bbox.width;
  const height = bbox.height;
  
  console.log("Caja delimitadora trazada:", leftRel, topRel, width, height);
  
  // Validar dimensiones lógicas de la caja
  if (width > 60 && height > 60 && leftRel > 40 && leftRel < 190 && topRel > 10 && topRel < 130) {
    bboxGameWon = true;
    playAudioSynth('correct');
    document.getElementById('bbox-rect-element').style.borderColor = 'var(--accent-green)';
    document.getElementById('bbox-rect-element').style.boxShadow = '0 0 20px var(--accent-green)';
    document.getElementById('instructor-bubble').innerHTML = "¡Excelente! Raaaawr. Has dibujado una caja perfecta. ¡Mi sistema de visión artificial me ha detectado con éxito! 📷🐆";
    speakText("¡Excelente! Has dibujado una caja perfecta. ¡Mi sistema de visión artificial me ha detectado con éxito!");
    triggerConfetti();
  } else {
    // Caja incorrecta
    playAudioSynth('incorrect');
    document.getElementById('bbox-rect-element').style.borderColor = '#ff4b4b';
    document.getElementById('bbox-rect-element').style.boxShadow = '0 0 15px #ff4b4b';
    setTimeout(() => {
      if (!bboxGameWon) {
        document.getElementById('bbox-rect-element').classList.add('hidden');
      }
    }, 1200);
  }
}

// Soporte touch móvil para Bounding Box
function initBBoxMinigameTouchSupport() {
  setTimeout(() => {
    const canvasOverlay = document.getElementById('bbox-canvas');
    if (!canvasOverlay) return;
    
    canvasOverlay.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      startBBoxDraw(touch);
    });
    
    canvasOverlay.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      drawBBox(touch);
    });
    
    canvasOverlay.addEventListener('touchend', (e) => {
      endBBoxDraw(null);
    });
  }, 100);
}

// --- MINIJUEGO 3: RED NEURONAL ELÉCTRICA (NEURAL CONNECT) ---
let connectedWires = [];

function toggleNeuralWire(wireId) {
  if (appState.isChecking) return;
  
  const idx = connectedWires.indexOf(wireId);
  const wire = document.getElementById(`wire-${wireId}`);
  
  if (idx !== -1) {
    playAudioSynth('click');
    connectedWires.splice(idx, 1);
    wire.classList.remove('connected');
    wire.classList.remove('power-flow');
  } else {
    playAudioSynth('correct');
    connectedWires.push(wireId);
    wire.classList.add('connected');
    
    // Animación de flujo eléctrico
    wire.classList.add('power-flow');
    setTimeout(() => {
      wire.classList.remove('power-flow');
    }, 800);
  }
  
  // Validar si todos los 4 cables están conectados
  if (connectedWires.length === 4) {
    setTimeout(() => {
      playAudioSynth('victory');
      document.getElementById('instructor-bubble').innerHTML = "¡Raaaawr! ¡Toda la red neuronal está encendida! Las luces viajan a súper velocidad y el robot camina perfectamente. 🕸️🧠🚶";
      speakText("¡Toda la red neuronal está encendida! Las luces viajan a súper velocidad y el robot camina perfectamente.");
      triggerConfetti();
    }, 500);
  }
}

// --- MINIJUEGO 4: ENTRENAMIENTO POR REFUERZO (REINFORCEMENT GAME) ---
let reinforcementState = {
  confidence: 0,
  cookies: 0,
  obstacleX: 300,
  isJumping: false,
  loopActive: false
};
let reinforcementLoopTimer = null;

function initReinforcementGame() {
  reinforcementState.confidence = 0;
  reinforcementState.cookies = 0;
  reinforcementState.obstacleX = 300;
  reinforcementState.isJumping = false;
  reinforcementState.loopActive = true;
  
  document.getElementById('val-conf').innerText = "0%";
  document.getElementById('val-cookies').innerText = "0 🍪";
  
  const jagui = document.getElementById('runway-jagui');
  if (jagui) {
    jagui.className = "runway-mascot walking";
  }
  
  // Arrancar el ciclo del obstáculo
  runReinforcementLoop();
}

function reinforcementAction(actionType) {
  if (appState.isChecking) return;
  
  const jagui = document.getElementById('runway-jagui');
  
  if (actionType === 'cookie') {
    playAudioSynth('click');
    
    // Si la galleta se da justo cuando el obstáculo está pasando por el jaguar y el jaguar saltó
    // Coordenadas de colisión: el jaguar está en x=30, y el obstáculo colisiona si x está entre 25 y 45
    const obsLeft = reinforcementState.obstacleX;
    
    if (reinforcementState.isJumping && obsLeft > 15 && obsLeft < 55) {
      // ¡Excelente refuerzo positivo en el milisegundo correcto!
      playAudioSynth('correct');
      reinforcementState.confidence += 25;
      reinforcementState.cookies += 1;
      
      // Animación de estrellitas
      spawnSparkle(50, 40, "🍪✨");
      
      if (reinforcementState.confidence > 100) reinforcementState.confidence = 100;
      
      document.getElementById('val-conf').innerText = `${reinforcementState.confidence}%`;
      document.getElementById('val-cookies').innerText = `${reinforcementState.cookies} 🍪`;
      
      document.getElementById('instructor-bubble').innerHTML = "¡Excelente! Le diste una galleta 🍪 por saltar el obstáculo. ¡La IA sube su confianza!";
      speakText("¡Excelente! Le diste una galleta por saltar el obstáculo. ¡La IA sube su confianza!");
      
      if (reinforcementState.confidence === 100) {
        reinforcementState.loopActive = false;
        playAudioSynth('victory');
        document.getElementById('instructor-bubble').innerHTML = "¡Perfecto! Raaaawr. Jagüi ha aprendido por refuerzo positivo a saltar de forma automática y no chocará nunca más. ¡Felicidades! 🎮🍪🐆";
        speakText("¡Perfecto! Jagüi ha aprendido por refuerzo positivo a saltar de forma automática. ¡Felicidades!");
        triggerConfetti();
      }
    } else {
      // Galleta en mal momento (refuerzo erróneo)
      playAudioSynth('incorrect');
      document.getElementById('instructor-bubble').innerHTML = "¡Uy! Le diste una galleta en mal momento. Jagüi se confunde y no aprende el truco.";
      speakText("Le diste una galleta en mal momento. Jagüi se confunde.");
      reinforcementState.confidence -= 15;
      if (reinforcementState.confidence < 0) reinforcementState.confidence = 0;
      document.getElementById('val-conf').innerText = `${reinforcementState.confidence}%`;
    }
  } else if (actionType === 'whistle') {
    // Silbato: hace saltar a Jagüi
    if (reinforcementState.isJumping) return;
    
    playAudioSynth('click');
    reinforcementState.isJumping = true;
    jagui.classList.add('jumping');
    
    // Sonido corto de salto
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(700, now + 0.2);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(now + 0.2);
    
    setTimeout(() => {
      jagui.classList.remove('jumping');
      reinforcementState.isJumping = false;
    }, 450);
  }
}

function spawnSparkle(x, y, char) {
  const board = document.getElementById('runway-board');
  if (!board) return;
  
  const sparkle = document.createElement('div');
  sparkle.className = "runway-sparkle";
  sparkle.innerText = char;
  sparkle.style.left = `${x}px`;
  sparkle.style.bottom = `${y}px`;
  board.appendChild(sparkle);
  
  setTimeout(() => sparkle.remove(), 600);
}

function runReinforcementLoop() {
  if (reinforcementLoopTimer) {
    clearInterval(reinforcementLoopTimer);
  }
  
  reinforcementLoopTimer = setInterval(() => {
    if (!reinforcementState.loopActive) {
      clearInterval(reinforcementLoopTimer);
      return;
    }
    
    // Mover obstáculo de derecha a izquierda
    reinforcementState.obstacleX -= 6;
    if (reinforcementState.obstacleX < -30) {
      reinforcementState.obstacleX = 300; // Reiniciar obstáculo
    }
    
    const obs = document.getElementById('runway-obstacle');
    if (obs) {
      obs.style.left = `${reinforcementState.obstacleX}px`;
    }
    
    // Si la confianza es del 100%, Jagüi salta de forma automática
    if (reinforcementState.confidence === 100 && reinforcementState.obstacleX > 50 && reinforcementState.obstacleX < 70) {
      reinforcementAction('whistle');
    }
    
    // Verificar colisión física (chocar con obstáculo)
    const obsLeft = reinforcementState.obstacleX;
    
    if (!reinforcementState.isJumping && obsLeft > 25 && obsLeft < 45) {
      // ¡Colisión! Choque contra el cactus
      playAudioSynth('incorrect');
      reinforcementState.obstacleX = 300; // Reiniciar
      spawnSparkle(35, 30, "💥");
      
      document.getElementById('instructor-bubble').innerHTML = "¡Ay! Chocamos contra el cactus. Toca el Silbato 🔔 para hacerme saltar y dale una galleta 🍪 al caer.";
      speakText("Chocamos contra el cactus. Toca el Silbato para hacerme saltar.");
    }
  }, 45);
}

function spawnConfetti() {
  triggerConfetti();
}

function handleQuizAction() {
  const lesson = LESSONS_DATA[appState.currentLessonId];
  const question = lesson.questions[appState.currentQuestionIndex];

  if (!appState.isChecking) {
    // 1. VALIDACIÓN PREVIA DE LLENADO/ACCIÓN
    if (question.type === 'choice' || question.type === 'boolean') {
      if (appState.selectedOptionIndex === null) {
        speakText("¡Oye! Tienes que elegir una opción.");
        return;
      }
    } else if (question.type === 'builder') {
      if (appState.builderAnswers.length < question.blanksCount) {
        speakText("Acomoda las palabras en sus lugares.");
        return;
      }
    } else if (question.type === 'drag_classify') {
      const totalItems = question.items.length;
      const classifiedCount = Object.keys(minigameClassified).length;
      if (classifiedCount < totalItems) {
        speakText("¡Oye! Tienes que ordenar todos los alimentos en sus cestas primero. 🍏🍩");
        return;
      }
    } else if (question.type === 'bounding_box') {
      if (!bboxGameWon) {
        speakText("¡Vamos! Haz clic y arrastra para dibujar una caja alrededor de mi cara. 📷");
        return;
      }
    } else if (question.type === 'neural_connect') {
      if (connectedWires.length < 4) {
        speakText("¡Conecta los 4 cables grises para encender la red neuronal! 🕸️🧠");
        return;
      }
    } else if (question.type === 'reinforcement') {
      if (reinforcementState.confidence < 100) {
        speakText("¡Sigue entrenándome con galletas hasta que mi confianza llegue al 100%! 🍪🎮");
        return;
      }
    } else if (question.type === 'ai_open') {
      const inputVal = document.getElementById('ai-open-input').value.trim();
      if (!inputVal) {
        speakText("¡Oye! Escribe o díctame tu respuesta en el cuadro primero. 📝");
        return;
      }
      
      // --- FLUJO ASÍNCRONO DE IA NATIVA (EVALUACIÓN SEMÁNTICA CON GEMINI) ---
      appState.isChecking = true;
      setMascotExpression('jagui-instructor', 'thinking');
      document.getElementById('instructor-bubble').innerHTML = "¡Dejame analizar semánticamente tu respuesta con mi cerebro de IA en la nube! Raaaawr... 📡🧠";
      speakText("Dejame analizar tu respuesta con mi cerebro de Inteligencia Artificial.");
      
      const actionBtn = document.getElementById('btn-quiz-action');
      actionBtn.disabled = true;
      actionBtn.innerHTML = "<span>Evaluando... 🧠</span>";
      
      const defaultApiKey = "AIzaSyCpbAxrs6y89rF5NvFTJ7CYUASi8Jr1ACI";
      const apiKey = localStorage.getItem('gemini_api_key') || defaultApiKey;
      const promptText = `La pregunta de ética de IA es: "${question.question}". El niño respondió libremente: "${inputVal}". Evalúa con empatía infantil si la respuesta tiene sentido ético (si promueve ayudar a la gente, cuidar plantas, cuidar la selva o usar la IA para el bien). Responde ESTRICTAMENTE con un objeto JSON (sin markdown y sin acentos raros que rompan el parser) en este formato exacto: { "isCorrect": true o false, "explanation": "un mensaje de felicitacion o consejo en 1 frase carinosa firmado por Jagüi" }`;
      
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
      const payload = {
        contents: [{ parts: [{ text: promptText }] }]
      };
      
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(res => res.json())
      .then(data => {
        actionBtn.disabled = false;
        actionBtn.innerHTML = "<span>Continuar ➡️</span>";
        actionBtn.className = "btn-3d btn-secondary";
        
        let result = { isCorrect: true, explanation: "¡Excelente reflexión, Científico/a! Tu mente humana es muy valiosa para el futuro. 🐆🎓" };
        
        try {
          if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts) {
            const rawText = data.candidates[0].content.parts[0].text;
            // Limpiar posibles bloques de código de markdown del JSON
            const cleanText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
            result = JSON.parse(cleanText);
          }
        } catch (e) {
          console.warn("Fallo al parsear evaluacion de Gemini. Usando fallback aprobado.", e);
        }
        
        showQuizFeedback(result.isCorrect, result.explanation, question);
      })
      .catch(err => {
        console.error("Gemini Evaluation error:", err);
        actionBtn.disabled = false;
        actionBtn.innerHTML = "<span>Continuar ➡️</span>";
        actionBtn.className = "btn-3d btn-secondary";
        
        // Fallback robusto en modo offline: se aprueba la respuesta por defecto para animar al niño
        showQuizFeedback(true, "¡Rugido supremo de sabiduría! Me encanta cómo piensas de forma tan noble. ¡Felicidades! 🐆🌍", question);
      });
      return; // Detener flujo síncrono para esperar la respuesta asíncrona
    }

    appState.isChecking = true;
    let isCorrect = false;

    // 2. VERIFICACIÓN DE RESPUESTA CORRECTA
    if (question.type === 'choice') {
      isCorrect = question.options[appState.selectedOptionIndex].isCorrect;
    } else if (question.type === 'boolean') {
      const selectedVal = question.options[appState.selectedOptionIndex].value;
      isCorrect = selectedVal === question.correctValue;
    } else if (question.type === 'builder') {
      isCorrect = true;
      for (let i = 0; i < question.correctAnswers.length; i++) {
        if (appState.builderAnswers[i] !== question.correctAnswers[i]) {
          isCorrect = false;
          break;
        }
      }
    } else if (question.type === 'drag_classify') {
      isCorrect = true;
      question.items.forEach(item => {
        if (minigameClassified[item.id] !== item.type) {
          isCorrect = false;
        }
      });
      minigameClassified = {};
    } else if (question.type === 'bounding_box') {
      isCorrect = bboxGameWon;
      bboxGameWon = false;
    } else if (question.type === 'neural_connect') {
      isCorrect = connectedWires.length === 4;
      connectedWires = [];
    } else if (question.type === 'reinforcement') {
      isCorrect = reinforcementState.confidence === 100;
      reinforcementState.loopActive = false;
      if (reinforcementLoopTimer) {
        clearInterval(reinforcementLoopTimer);
        reinforcementLoopTimer = null;
      }
    }

    showQuizFeedback(isCorrect, isCorrect ? question.successDesc : question.failDesc, question);

  } else {
    if (appState.hearts <= 0) {
      playAudioSynth('incorrect');
      document.getElementById('dialog-gameover').showModal();
      return;
    }

    appState.currentQuestionIndex += 1;

    if (appState.currentQuestionIndex < lesson.questions.length) {
      renderQuestion();
    } else {
      finishLesson();
    }
  }
}

function showQuizFeedback(isCorrect, feedbackText, question) {
  const banner = document.getElementById('quiz-feedback-banner');
  const title = document.getElementById('feedback-title');
  const desc = document.getElementById('feedback-desc');
  const icon = document.getElementById('feedback-icon');
  const actionBtn = document.getElementById('btn-quiz-action');

  actionBtn.innerHTML = "<span>Continuar ➡️</span>";
  actionBtn.className = "btn-3d btn-secondary";

  if (isCorrect) {
    playAudioSynth('correct');
    spawnConfetti(); // Celebración de confetti en tiempo real al acertar
    setMascotExpression('jagui-instructor', 'happy');
    
    banner.className = "quiz-feedback-banner correct";
    icon.innerText = "🎉";
    title.innerText = "¡Súper Correcto!";
    desc.innerText = feedbackText;
    
    document.getElementById('instructor-bubble').innerHTML = `<strong>¡Woooow!</strong> ${feedbackText}`;
    speakText(`¡Súper Correcto! ${feedbackText}`);
  } else {
    playAudioSynth('incorrect');
    setMascotExpression('jagui-instructor', 'sad');
    
    // Retroalimentación táctil: Sacudida (shake) en la tarjeta de la pregunta
    const qCard = document.querySelector('.lesson-question-card');
    if (qCard) {
      qCard.classList.add('shake-animation');
      setTimeout(() => qCard.classList.remove('shake-animation'), 450);
    }
    
    banner.className = "quiz-feedback-banner incorrect";
    icon.innerText = "💔";
    title.innerText = "¡Oh, no es correcto!";
    desc.innerText = feedbackText;

    document.getElementById('instructor-bubble').innerHTML = `<strong>¡Ánimo!</strong> ${feedbackText}`;
    speakText(`¡Oh, no es correcto! ${feedbackText}`);

    appState.hearts -= 1;
    const heart = document.getElementById(`heart-${appState.hearts + 1}`);
    if (heart) heart.classList.remove('active');
  }
}

// Nueva función de fallback o vacía para evitar que tire error
function handleQuizAction_Old() {
  if (appState.hearts <= 0) {
    playAudioSynth('incorrect');
    document.getElementById('dialog-gameover').showModal();
    return;
  }

  appState.currentQuestionIndex += 1;

  if (appState.currentQuestionIndex < lesson.questions.length) {
    renderQuestion();
  } else {
    finishLesson();
  }
}

function finishLesson() {
  const lesson = LESSONS_DATA[appState.currentLessonId];
  playAudioSynth('victory');
  spawnConfetti();

  appState.xp += lesson.rewardXP;
  
  if (!appState.completedLessons.includes(appState.currentLessonId)) {
    appState.completedLessons.push(appState.currentLessonId);
  }

  appState.lastPlayedDate = new Date().toISOString();
  calculateStreak();
  checkAchievements();
  saveToLocalStorage();
  updateNavStats();

  let speech = `"¡Rugido de victoria ciber-jaguar! Has completado el Nivel ${lesson.id}: ${lesson.title}. ¡Sigue así, vas a cambiar el mundo!"`;
  document.getElementById('victory-speech').innerText = speech;
  document.getElementById('reward-xp').innerText = `+${lesson.rewardXP} XP`;
  
  document.getElementById('dialog-victory').showModal();
}

function closeVictoryDialog() {
  document.getElementById('dialog-victory').close();
  switchScreen('map-screen');
}

function confirmExitLesson() {
  playAudioSynth('click');
  document.getElementById('dialog-exit-confirm').showModal();
}

function exitLessonImmediately() {
  document.getElementById('dialog-exit-confirm').close();
  switchScreen('map-screen');
}

function refillHeartsAndRetry() {
  if (appState.xp >= 50) {
    appState.xp -= 50;
  } else {
    appState.xp = 0;
  }
  appState.hearts = 3;
  saveToLocalStorage();
  updateNavStats();
  
  document.getElementById('dialog-gameover').close();
  renderQuestion();
}

function exitToMapFromGameover() {
  document.getElementById('dialog-gameover').close();
  switchScreen('map-screen');
}

// --- COMPROBADOR DE LOGROS ---
function checkAchievements() {
  if (appState.completedLessons.includes(1)) {
    unlockAchievement("first-roar");
  }
  if (appState.isMLTrained) {
    unlockAchievement("ml-trainer");
  }
  if (appState.hearts === 3 && appState.currentLessonId !== null && appState.completedLessons.includes(appState.currentLessonId)) {
    unlockAchievement("perfect-brain");
  }
  if (appState.xp >= 300) {
    unlockAchievement("xp-master");
  }
  if (appState.completedLessons.length === Object.keys(LESSONS_DATA).length) {
    unlockAchievement("future-scientist");
  }
}

function unlockAchievement(id) {
  const ach = appState.achievements.find(a => a.id === id);
  if (ach && !ach.unlocked) {
    ach.unlocked = true;
    appState.xp += 50;
    saveToLocalStorage();
    speakText(`¡Genial! Desbloqueaste la medalla de logro: ${ach.title}. ¡Rugido fenomenal!`);
  }
}

// --- DIBUJAR PERFIL ---
function renderProfileView() {
  document.getElementById('username-input').value = appState.username;
  document.getElementById('prof-xp').innerText = appState.xp;
  document.getElementById('prof-lessons').innerText = `${appState.completedLessons.length}/${Object.keys(LESSONS_DATA).length}`;
  document.getElementById('prof-streak').innerText = `${appState.streak} ${appState.streak === 1 ? 'Día' : 'Días'}`;
  
  let rank = "Explorador de Datos 🌟";
  if (appState.xp >= 1500) rank = "Líder Supremo de la Singularidad 🤖👑";
  else if (appState.xp >= 1000) rank = "Gran Sabio Ciber-Jaguar 🐆⚡";
  else if (appState.xp >= 600) rank = "Maestro de Neuronas 🧠";
  else if (appState.xp >= 300) rank = "Ingeniero Junior de IA 🛠️";
  document.getElementById('profile-rank-label').innerText = rank;

  const container = document.getElementById('achievements-container');
  container.innerHTML = "";

  appState.achievements.forEach((ach) => {
    const cardHTML = `
      <div class="achievement-card ${ach.unlocked ? 'unlocked' : 'locked'}">
        <div class="achievement-medal">${ach.unlocked ? ach.icon : '🔒'}</div>
        <div class="achievement-title">${ach.title}</div>
        <div class="achievement-desc">${ach.desc}</div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

function saveUsername() {
  const val = document.getElementById('username-input').value.trim();
  if (val) {
    appState.username = val;
    saveToLocalStorage();
    updateNavStats();
    playAudioSynth('click');
  }
}

function confirmResetProgress() {
  if (confirm("⚠️ ¿Estás completamente seguro de borrar todo tu progreso? Volverás a empezar de cero.")) {
    localStorage.removeItem('jagui_game_state');
    appState.xp = 0;
    appState.hearts = 3;
    appState.completedLessons = [];
    appState.streak = 1;
    appState.lastPlayedDate = null;
    appState.username = "Científico/a de IA";
    appState.achievements = JSON.parse(JSON.stringify(ACHIEVEMENTS_DATA));
    appState.isMLTrained = false;
    
    saveToLocalStorage();
    updateNavStats();
    
    document.getElementById('btn-resume-game').classList.add('hidden');
    switchScreen('welcome-screen');
    playAudioSynth('incorrect');
  }
}

// ==========================================================================
// --- LABORATORIO DE ML (MÁQUINA INTERACTIVA CON CENTROIDES REALES) ---
// ==========================================================================

const FOOD_FEATURES = {
  "apple": { sugar: 2.0, vitamins: 9.0, emoji: "🍎", name: "Manzana" },
  "banana": { sugar: 4.0, vitamins: 8.0, emoji: "🍌", name: "Plátano" },
  "carrot": { sugar: 1.0, vitamins: 10.0, emoji: "🥕", name: "Zanahoria" },
  "broccoli": { sugar: 0.5, vitamins: 10.0, emoji: "🥦", name: "Brócoli" },
  "donut": { sugar: 9.5, vitamins: 0.5, emoji: "🍩", name: "Dona" },
  "burger": { sugar: 6.0, vitamins: 2.5, emoji: "🍔", name: "Hamburguesa" },
  "fries": { sugar: 5.0, vitamins: 1.0, emoji: "🍟", name: "Papas" },
  "pizza": { sugar: 7.0, vitamins: 2.0, emoji: "🍕", name: "Pizza" },
  
  // Alimentos misteriosos de prueba
  "pineapple": { sugar: 4.5, vitamins: 8.5, emoji: "🍍", name: "Piña" },
  "icecream": { sugar: 9.0, vitamins: 1.0, emoji: "🍦", name: "Helado" },
  "avocado": { sugar: 1.0, vitamins: 8.0, emoji: "🥑", name: "Aguacate" }
};

const ML_ITEMS = [
  { id: "apple", emoji: "🍎", name: "Manzana", type: "healthy" },
  { id: "banana", emoji: "🍌", name: "Plátano", type: "healthy" },
  { id: "carrot", emoji: "🥕", name: "Zanahoria", type: "healthy" },
  { id: "broccoli", emoji: "🥦", name: "Brócoli", type: "healthy" },
  
  { id: "donut", emoji: "🍩", name: "Dona", type: "junk" },
  { id: "burger", emoji: "🍔", name: "Hamburguesa", type: "junk" },
  { id: "fries", emoji: "🍟", name: "Papas", type: "junk" },
  { id: "pizza", emoji: "🍕", name: "Pizza", type: "junk" }
];

const ML_TEST_ITEMS = [
  { id: "pineapple", emoji: "🍍", name: "Piña" },
  { id: "icecream", emoji: "🍦", name: "Helado" },
  { id: "avocado", emoji: "🥑", name: "Aguacate" }
];

function getGraphCoords(sugar, vitamins) {
  // Transforma coordenadas del alimento (0 a 10) a píxeles del SVG viewBox 400x320
  const x = 40 + (sugar / 10) * 340;
  const y = 280 - (vitamins / 10) * 260;
  return { x, y };
}

function initMLSandbox() {
  appState.healthyBin = [];
  appState.junkBin = [];
  appState.isMLTrained = false;
  appState.mlActiveItem = null;
  
  document.getElementById('count-healthy').innerText = "0 ejemplos";
  document.getElementById('count-junk').innerText = "0 ejemplos";
  document.getElementById('bin-healthy-items').innerHTML = "";
  document.getElementById('bin-junk-items').innerHTML = "";
  document.getElementById('brain-status').innerText = "Cargando escáner...";
  document.getElementById('btn-train-ml').disabled = true;
  document.getElementById('lab-test-area').classList.add('hidden');
  
  // Ocultar y limpiar el gráfico 2D al reiniciar
  document.getElementById('lab-graph-card').classList.add('hidden');
  document.getElementById('graph-training-points').innerHTML = "";
  document.getElementById('graph-centroids').innerHTML = "";
  document.getElementById('graph-centroids').classList.add('hidden');
  document.getElementById('graph-test-vectors').innerHTML = "";
  document.getElementById('graph-test-point').innerHTML = "";
  
  setMascotExpression('jagui-lab-test', 'normal');
  document.getElementById('test-bubble').innerText = "¡Dame un alimento de prueba para ver qué aprendí!";

  const links = document.querySelectorAll('.neural-links line');
  links.forEach(l => l.setAttribute('stroke', '#555'));

  nextMLItem();
}

function nextMLItem() {
  const classifiedIds = [...appState.healthyBin, ...appState.junkBin].map(i => i.id);
  const remaining = ML_ITEMS.filter(i => !classifiedIds.includes(i.id));
  
  const scannerCard = document.getElementById('ml-active-item');
  
  if (remaining.length > 0) {
    const item = remaining[Math.floor(Math.random() * remaining.length)];
    appState.mlActiveItem = item;
    
    scannerCard.innerHTML = item.emoji;
    scannerCard.style.display = "block";
    document.getElementById('brain-status').innerText = "Escáner encendido. ¡Arrastra el alimento a su caja!";
    scannerCard.setAttribute('draggable', 'true');
  } else {
    appState.mlActiveItem = null;
    scannerCard.innerHTML = "🏁";
    scannerCard.setAttribute('draggable', 'false');
    document.getElementById('brain-status').innerText = "¡Datos recolectados! Presiona 'Entrenar IA' para procesar.";
    speakText("¡Hemos recopilado suficientes datos! Presiona el botón Entrenar IA para que empiece a aprender.");
  }
}

function handleDragStart(ev) {
  if (!appState.mlActiveItem) return;
  ev.dataTransfer.setData("text/plain", JSON.stringify(appState.mlActiveItem));
}

function allowDrop(ev) {
  ev.preventDefault();
  ev.currentTarget.classList.add('drag-over');
}

document.querySelectorAll('.lab-bin').forEach(bin => {
  bin.addEventListener('dragleave', (e) => {
    e.currentTarget.classList.remove('drag-over');
  });
});

function handleDrop(ev, binType) {
  ev.preventDefault();
  ev.currentTarget.classList.remove('drag-over');
  
  const dataStr = ev.dataTransfer.getData("text/plain");
  if (!dataStr) return;
  
  try {
    const item = JSON.parse(dataStr);
    playAudioSynth('click');
    
    if (binType === 'healthy') {
      appState.healthyBin.push(item);
      document.getElementById('count-healthy').innerText = `${appState.healthyBin.length} ejemplos`;
      document.getElementById('bin-healthy-items').innerHTML += `<div class="bin-item-bubble">${item.emoji}</div>`;
    } else {
      appState.junkBin.push(item);
      document.getElementById('count-junk').innerText = `${appState.junkBin.length} ejemplos`;
      document.getElementById('bin-junk-items').innerHTML += `<div class="bin-item-bubble">${item.emoji}</div>`;
    }
    
    // Dibujar punto dinámico instantáneo en el gráfico SVG de coordenadas
    const f = FOOD_FEATURES[item.id];
    if (f) {
      const c = getGraphCoords(f.sugar, f.vitamins);
      const dotColor = binType === 'healthy' ? '#2ECC71' : '#E74C3C';
      document.getElementById('graph-training-points').innerHTML += `
        <g class="graph-dot" transform="translate(${c.x}, ${c.y})">
          <circle r="12" fill="rgba(255, 255, 255, 0.95)" stroke="${dotColor}" stroke-width="2"></circle>
          <text y="4" font-size="11" text-anchor="middle" dominant-baseline="middle">${f.emoji}</text>
        </g>
      `;
    }

    // Mostrar el contenedor del gráfico si se ha colocado al menos un ejemplo
    document.getElementById('lab-graph-card').classList.remove('hidden');
    
    animateNeuralNetPulse(binType);

    if (appState.healthyBin.length >= 2 && appState.junkBin.length >= 2) {
      document.getElementById('btn-train-ml').disabled = false;
    }
    
    nextMLItem();
  } catch (e) {
    console.error("Error en drop:", e);
  }
}

function animateNeuralNetPulse(type) {
  const links = document.querySelectorAll('.neural-links line');
  const color = type === 'healthy' ? '#2ECC71' : '#E74C3C';
  links.forEach(l => {
    l.setAttribute('stroke', color);
    l.setAttribute('stroke-width', '3');
  });
  
  setTimeout(() => {
    links.forEach(l => {
      l.setAttribute('stroke', '#888');
      l.setAttribute('stroke-width', '1.5');
    });
  }, 400);
}

function trainMLModel() {
  playAudioSynth('click');
  document.getElementById('btn-train-ml').disabled = true;
  document.getElementById('brain-status').innerText = "🧠 Entrenando redes neuronales por centroides... 📡";
  
  setMascotExpression('jagui-welcome', 'thinking');
  
  let count = 0;
  const trainInterval = setInterval(() => {
    const links = document.querySelectorAll('.neural-links line');
    links.forEach(l => {
      l.setAttribute('stroke', `hsl(${Math.random() * 360}, 85%, 60%)`);
      l.setAttribute('stroke-width', Math.random() * 4 + 1.5);
    });
    
    playAudioSynth('click');
    count++;
    
    if (count > 8) {
      clearInterval(trainInterval);
      completeTraining();
    }
  }, 250);
}

function completeTraining() {
  appState.isMLTrained = true;
  playAudioSynth('victory');
  
  document.getElementById('brain-status').innerText = "¡IA ENTRENADA CON ÉXITO! 🎉";
  
  const links = document.querySelectorAll('.neural-links line');
  links.forEach((l, idx) => {
    l.setAttribute('stroke', idx % 2 === 0 ? '#00FFFF' : '#FF00FF');
    l.setAttribute('stroke-width', '2.5');
  });

  // Calcular centroides matemáticos reales
  appState.healthyCentroid = appState.healthyBin.reduce((acc, item) => {
    const f = FOOD_FEATURES[item.id];
    if (f) {
      acc.sugar += f.sugar;
      acc.vitamins += f.vitamins;
    }
    return acc;
  }, { sugar: 0, vitamins: 0 });
  
  if (appState.healthyBin.length > 0) {
    appState.healthyCentroid.sugar /= appState.healthyBin.length;
    appState.healthyCentroid.vitamins /= appState.healthyBin.length;
  }

  appState.junkCentroid = appState.junkBin.reduce((acc, item) => {
    const f = FOOD_FEATURES[item.id];
    if (f) {
      acc.sugar += f.sugar;
      acc.vitamins += f.vitamins;
    }
    return acc;
  }, { sugar: 0, vitamins: 0 });
  
  if (appState.junkBin.length > 0) {
    appState.junkCentroid.sugar /= appState.junkBin.length;
    appState.junkCentroid.vitamins /= appState.junkBin.length;
  }

  // Dibujar y animar los centroides en el gráfico interactivo SVG
  const hcCoords = getGraphCoords(appState.healthyCentroid.sugar, appState.healthyCentroid.vitamins);
  const jcCoords = getGraphCoords(appState.junkCentroid.sugar, appState.junkCentroid.vitamins);
  
  const centroidsG = document.getElementById('graph-centroids');
  centroidsG.innerHTML = `
    <!-- Centroide Saludable -->
    <g class="graph-centroid healthy" transform="translate(${hcCoords.x}, ${hcCoords.y})">
      <circle r="22" fill="rgba(46, 204, 113, 0.2)" stroke="#2ECC71" stroke-width="2.5" stroke-dasharray="2 2"></circle>
      <text y="5" font-size="14">🍏🧠</text>
    </g>
    <!-- Centroide No Saludable -->
    <g class="graph-centroid junk" transform="translate(${jcCoords.x}, ${jcCoords.y})">
      <circle r="22" fill="rgba(231, 76, 60, 0.2)" stroke="#E74C3C" stroke-width="2.5" stroke-dasharray="2 2"></circle>
      <text y="5" font-size="14">🍩🧠</text>
    </g>
  `;
  centroidsG.classList.remove('hidden');

  const testArea = document.getElementById('lab-test-area');
  testArea.classList.remove('hidden');
  
  const testSelector = document.getElementById('test-items-list');
  testSelector.innerHTML = "";
  
  ML_TEST_ITEMS.forEach(item => {
    testSelector.innerHTML += `
      <button class="test-food-btn" onclick="testMLItem('${item.id}')">${item.emoji}</button>
    `;
  });

  setMascotExpression('jagui-lab-test', 'happy');
  document.getElementById('test-bubble').innerHTML = "<strong>¡Fabuloso!</strong> Mi red neuronal aprendió los centroides de tus datos. ¡Presiona un alimento de prueba para ponerme a prueba!";
  speakText("¡Fabuloso! Mi red neuronal aprendió los centroides de tus datos. ¡Presiona un alimento misterioso de prueba para ver qué aprendí!");

  appState.isMLTrained = true;
  checkAchievements();
  saveToLocalStorage();
}

function testMLItem(itemId) {
  const f = FOOD_FEATURES[itemId];
  if (!f) return;

  playAudioSynth('click');
  
  const links = document.querySelectorAll('.neural-links line');
  // Visual pulse on net links
  links.forEach(l => {
    l.setAttribute('stroke', '#00FFFF');
    l.setAttribute('stroke-width', '4');
  });

  setMascotExpression('jagui-lab-test', 'thinking');
  document.getElementById('test-bubble').innerText = "Calculando distancias euclidianas en mi plano cartesiano... 🤖🔎";

  // Calcular coordenadas del punto de prueba en SVG píxeles
  const testCoords = getGraphCoords(f.sugar, f.vitamins);
  
  // Calcular distancia Euclidiana
  const dHealthy = Math.sqrt((f.sugar - appState.healthyCentroid.sugar)**2 + (f.vitamins - appState.healthyCentroid.vitamins)**2);
  const dJunk = Math.sqrt((f.sugar - appState.junkCentroid.sugar)**2 + (f.vitamins - appState.junkCentroid.vitamins)**2);
  
  const predictedType = dHealthy < dJunk ? 'healthy' : 'junk';
  
  // Limpiar vectores de prueba anteriores
  document.getElementById('graph-test-vectors').innerHTML = '';
  
  // Graficar punto de prueba
  document.getElementById('graph-test-point').innerHTML = `
    <g class="graph-dot" transform="translate(${testCoords.x}, ${testCoords.y})">
      <circle r="16" fill="rgba(0, 255, 255, 0.25)" stroke="#00FFFF" stroke-width="2"></circle>
      <text y="5" font-size="14">${f.emoji}</text>
    </g>
  `;

  // Coordenadas de los centroides
  const hcCoords = getGraphCoords(appState.healthyCentroid.sugar, appState.healthyCentroid.vitamins);
  const jcCoords = getGraphCoords(appState.junkCentroid.sugar, appState.junkCentroid.vitamins);

  setTimeout(() => {
    // Dibujar líneas y etiquetas de distancias
    const colorH = predictedType === 'healthy' ? '#2ECC71' : '#888';
    const widthH = predictedType === 'healthy' ? '3' : '1.5';
    const colorJ = predictedType === 'junk' ? '#E74C3C' : '#888';
    const widthJ = predictedType === 'junk' ? '3' : '1.5';

    document.getElementById('graph-test-vectors').innerHTML = `
      <line class="distance-line" x1="${testCoords.x}" y1="${testCoords.y}" x2="${hcCoords.x}" y2="${hcCoords.y}" stroke="${colorH}" stroke-width="${widthH}"></line>
      <line class="distance-line" x1="${testCoords.x}" y1="${testCoords.y}" x2="${jcCoords.x}" y2="${jcCoords.y}" stroke="${colorJ}" stroke-width="${widthJ}"></line>
      
      <!-- Etiquetas flotantes -->
      <text x="${(testCoords.x + hcCoords.x)/2}" y="${(testCoords.y + hcCoords.y)/2 - 5}" fill="${colorH}" font-size="10" font-weight="bold" text-anchor="middle">d=${dHealthy.toFixed(1)}</text>
      <text x="${(testCoords.x + jcCoords.x)/2}" y="${(testCoords.y + jcCoords.y)/2 - 5}" fill="${colorJ}" font-size="10" font-weight="bold" text-anchor="middle">d=${dJunk.toFixed(1)}</text>
    `;

    links.forEach((l, idx) => {
      l.setAttribute('stroke', idx % 2 === 0 ? '#00FFFF' : '#FF00FF');
      l.setAttribute('stroke-width', '2.5');
    });

    playAudioSynth(predictedType === 'healthy' ? 'correct' : 'incorrect');
    setMascotExpression('jagui-lab-test', 'happy');
    
    let explanationSpeech = "";
    let explanationHTML = "";
    
    if (predictedType === 'healthy') {
      explanationSpeech = `¡Es Saludable! La distancia matemática al grupo Saludable es de ${dHealthy.toFixed(1)}, que es más chiquita que al grupo No Saludable de ${dJunk.toFixed(1)}. ¡Increíble!`;
      explanationHTML = `¡Es <strong>Saludable 🍏</strong>!<br>Distancia a saludables: <strong>${dHealthy.toFixed(1)}</strong> (¡Más cerca!).<br>Distancia a no saludables: <strong>${dJunk.toFixed(1)}</strong>.`;
    } else {
      explanationSpeech = `¡Es No Saludable! La distancia matemática al grupo No Saludable es de ${dJunk.toFixed(1)}, que es más chiquita que al grupo Saludable de ${dHealthy.toFixed(1)}. ¡Clasificado con éxito!`;
      explanationHTML = `¡Es <strong>No Saludable 🍩</strong>!<br>Distancia a no saludables: <strong>${dJunk.toFixed(1)}</strong> (¡Más cerca!).<br>Distancia a saludables: <strong>${dHealthy.toFixed(1)}</strong>.`;
    }
    
    document.getElementById('test-bubble').innerHTML = explanationHTML;
    speakText(explanationSpeech);
  }, 1200);
}

function resetMLSandbox() {
  playAudioSynth('click');
  initMLSandbox();
}
