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
        type: "choice",
        question: "¿Cuál es el 'alimento' principal que la IA necesita para aprender?",
        options: [
          { text: "Electricidad de alto voltaje", isCorrect: false },
          { text: "Datos y ejemplos (como fotos, palabras o sonidos)", isCorrect: true },
          { text: "Tornillos y tuercas de acero", isCorrect: false }
        ],
        hint: "Es la información que le damos para entrenar.",
        speech: "¿Sabes cuál es el combustible de aprendizaje de una IA?",
        successDesc: "¡Súper! Esos ejemplos se llaman 'Datos de Entrenamiento' y le sirven a la IA para descubrir patrones.",
        failDesc: "¡Nop! Los tornillos arman al robot y la luz lo enciende, pero la IA necesita datos para aprender."
      },
      {
        type: "builder",
        question: "Completa la frase sobre los datos:",
        sentence: "Para entrenar a una IA necesitamos darle muchos {blank} de excelente {blank}.",
        blanksCount: 2,
        wordBank: ["ejemplos", "calidad", "cables", "dulces"],
        correctAnswers: ["ejemplos", "calidad"],
        hint: "Piensa en buenos datos.",
        speech: "¡Ordenemos la regla de los datos!",
        successDesc: "¡Genial! Si los ejemplos (datos) son de buena calidad, la IA aprenderá rápido y de forma correcta.",
        failDesc: "¡Casi! Necesitamos darle muchos 'ejemplos' de excelente 'calidad'."
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
        type: "choice",
        question: "¿Cómo aprende una IA a ganar videojuegos mediante el 'Aprendizaje por Refuerzo'?",
        options: [
          { text: "Leyendo el manual de instrucciones", isCorrect: false },
          { text: "Probando acciones y recibiendo 'premios' (puntos) si lo hace bien, o 'castigos' si falla", isCorrect: true },
          { text: "Viendo comerciales en YouTube", isCorrect: false }
        ],
        hint: "Es muy similar a cómo entrenamos a una mascota dándole premios.",
        speech: "¿Cómo aprende una IA a jugar Mario Bros sola?",
        successDesc: "¡Genial! Juega millones de veces. Si avanza suma puntos (refuerzo positivo), si cae al vacío pierde (negativo). ¡Así se vuelve invencible!",
        failDesc: "¡No! La IA de videojuegos juega por prueba y error, recibiendo recompensas virtuales cuando logra objetivos."
      },
      {
        type: "boolean",
        question: "¿Entrenar a un perrito dándole una galleta cuando da la pata es igual al Aprendizaje por Refuerzo?",
        options: [
          { text: "Sí, es el mismo concepto de premio-reacción", value: true },
          { text: "No, los perritos no usan algoritmos", value: false }
        ],
        correctValue: true,
        hint: "Ambos aprenden ajustando su conducta para obtener la galleta (premio).",
        speech: "¿Asocias el truco del perrito con este algoritmo?",
        successDesc: "¡Exacto! El perrito asocia 'dar la pata' con 'galleta'. La IA asocia 'esquivar obstáculo' con 'ganar puntos'.",
        failDesc: "¡Cuidado! Aunque el perrito no use código de PC, la idea de aprender mediante recompensas es exactamente la misma."
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
        type: "choice",
        question: "¿Qué hace una 'Neurona Artificial' dentro de la computadora?",
        options: [
          { text: "Recibe datos, les aplica un cálculo matemático simple y envía una señal", isCorrect: true },
          { text: "Almacena fotos en una carpeta secreta", isCorrect: false },
          { text: "Mueve los cables físicos de la PC", isCorrect: false }
        ],
        hint: "Es una pequeña función matemática que procesa una entrada y da una salida.",
        speech: "¡Llegamos al Mundo 3! Hablemos de la neurona artificial.",
        successDesc: "¡Fabuloso! Recibe entradas (números), los multiplica por un 'peso' y, si el resultado supera un límite, envía la señal al siguiente nodo.",
        failDesc: "¡Nop! Es un nodo de código que hace operaciones matemáticas sencillas para filtrar y pasar datos."
      },
      {
        type: "boolean",
        question: "¿Las neuronas artificiales tienen 'pesos' que deciden qué información es más importante?",
        options: [
          { text: "Sí, los pesos ajustan la importancia de los datos", value: true },
          { text: "No, todos los datos pesan exactamente lo mismo", value: false }
        ],
        correctValue: true,
        hint: "Si buscas saber si una fruta es manzana, el 'color rojo' tiene más peso que el 'tamaño'.",
        speech: "¿Existen los pesos en la inteligencia artificial?",
        successDesc: "¡Súper! Un peso alto significa que ese dato específico es muy importante para que la neurona tome una decisión.",
        failDesc: "¡Nop! Los pesos son fundamentales. Ayudan a que la neurona filtre qué datos valen la pena y cuáles no."
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
        type: "choice",
        question: "¿Qué es la 'Visión por Computadora'?",
        options: [
          { text: "Ponerle lentes a la pantalla de la PC", isCorrect: false },
          { text: "La tecnología que permite a la IA entender fotos y videos en tiempo real", isCorrect: true },
          { text: "Un videojuego para jaguares", isCorrect: false }
        ],
        hint: "Permite clasificar objetos o rastrear caras con cámaras.",
        speech: "¡Bienvenidos al Mundo 4! ¿Qué es la visión por computadora?",
        successDesc: "¡Correcto! Permite que la IA reconozca semáforos, animales, personas y gestos analizando los píxeles de una cámara.",
        failDesc: "¡Nop! Es la rama que enseña a las máquinas a 'ver' y comprender imágenes digitales."
      },
      {
        type: "boolean",
        question: "¿Para la computadora, una foto es en realidad una cuadrícula gigante de números (píxeles)?",
        options: [
          { text: "Sí, las máquinas solo leen números de colores", value: true },
          { text: "No, las máquinas ven colores e imágenes directo", value: false }
        ],
        correctValue: true,
        hint: "Las pantallas usan valores RGB (Rojo, Verde, Azul) de 0 a 255.",
        speech: "¿Cómo ve una foto una computadora por dentro?",
        successDesc: "¡Fantástico! La IA procesa matrices de números que indican el color de cada diminuto píxel.",
        failDesc: "¡Nop! Las computadoras no tienen ojos biológicos. Traducen todo a matrices de números de colores RGB."
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
        type: "boolean",
        question: "¿Estás listo para usar tu conocimiento de IA para crear cosas geniales y ayudar al mundo como un verdadero científico?",
        options: [
          { text: "¡Sí, estoy listo para rugir con la IA! 🐆⚡", value: true },
          { text: "No, prefiero dejarle todo a las máquinas", value: false }
        ],
        correctValue: true,
        hint: "¡JagÜi cree en ti!",
        speech: "¡Científico/a! ¿Estás listo para cambiar el futuro?",
        successDesc: "¡Raaaawr! ¡Felicidades, Maestro de la Inteligencia Artificial! JagÜi está súper orgulloso de ti. ¡Has completado los 30 niveles!",
        failDesc: "¡Ánimo! El futuro necesita de tu creatividad humana. ¡Tú eres el verdadero jefe de la tecnología!"
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
  isMLTrained: false
};

// --- CONFIGURACIÓN DE AUDIO SINTETIZADO ---
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
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
    currentUtterance.lang = 'es-MX'; // Idioma preferido (Español Latinoamericano)
    currentUtterance.rate = 1.05;  // Velocidad de voz natural
    currentUtterance.pitch = 1.15; // Tono ligeramente más agudo para que JagÜi suene infantil/carismático
    
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
    if (this.y > canvas.height) {
      this.y = -20;
      this.x = Math.random() * canvas.width;
    }
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

function spawnConfetti() {
  confettiParticles = [];
  for (let i = 0; i < 100; i++) {
    confettiParticles.push(new ConfettiParticle());
  }
  
  if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
  animateConfetti();
  
  setTimeout(() => {
    cancelAnimationFrame(confettiAnimationId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiAnimationId = null;
  }, 5000);
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiParticles.forEach((p) => {
    p.update();
    p.draw();
  });
  confettiAnimationId = requestAnimationFrame(animateConfetti);
}

// --- NAVEGACIÓN Y CAMBIO DE PANTALLAS ---
function switchScreen(screenId) {
  playAudioSynth('click');
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
  }
  
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  if (screenId === 'map-screen') {
    document.getElementById('btn-nav-map').classList.add('active');
    renderLessonMap();
  } else if (screenId === 'lab-screen') {
    document.getElementById('btn-nav-lab').classList.add('active');
    initMLSandbox();
  } else if (screenId === 'profile-screen') {
    document.getElementById('btn-nav-profile').classList.add('active');
    renderProfileView();
  }
  
  document.querySelector('.main-content').scrollTop = 0;
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
    achievements: appState.achievements
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
      
      document.getElementById('btn-resume-game').classList.remove('hidden');
      updateNavStats();
      calculateStreak();
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
}

// --- BIENVENIDA Y INICIALIZACIÓN ---
window.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage();
  
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
}

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

function handleQuizAction() {
  const lesson = LESSONS_DATA[appState.currentLessonId];
  const question = lesson.questions[appState.currentQuestionIndex];

  if (!appState.isChecking) {
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
    }

    appState.isChecking = true;
    let isCorrect = false;

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
    }

    const banner = document.getElementById('quiz-feedback-banner');
    const title = document.getElementById('feedback-title');
    const desc = document.getElementById('feedback-desc');
    const icon = document.getElementById('feedback-icon');
    const actionBtn = document.getElementById('btn-quiz-action');

    actionBtn.innerHTML = "<span>Continuar ➡️</span>";
    actionBtn.className = "btn-3d btn-secondary";

    if (isCorrect) {
      playAudioSynth('correct');
      setMascotExpression('jagui-instructor', 'happy');
      
      banner.className = "quiz-feedback-banner correct";
      icon.innerText = "🎉";
      title.innerText = "¡Súper Correcto!";
      desc.innerText = question.successDesc;
      
      document.getElementById('instructor-bubble').innerHTML = `<strong>¡Woooow!</strong> ${question.successDesc}`;
      speakText(`¡Súper Correcto! ${question.successDesc}`);
    } else {
      playAudioSynth('incorrect');
      setMascotExpression('jagui-instructor', 'sad');
      
      banner.className = "quiz-feedback-banner incorrect";
      icon.innerText = "💔";
      title.innerText = "¡Oh, no es correcto!";
      desc.innerText = question.failDesc;

      document.getElementById('instructor-bubble').innerHTML = `<strong>¡Ánimo!</strong> ${question.failDesc}`;
      speakText(`¡Oh, no es correcto! ${question.failDesc}`);

      appState.hearts -= 1;
      const heart = document.getElementById(`heart-${appState.hearts + 1}`);
      if (heart) heart.classList.remove('active');
    }

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
// --- LABORATORIO DE ML (MÁQUINA INTERACTIVA) ---
// ==========================================================================

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
  { id: "pineapple", emoji: "🍍", name: "Piña", type: "healthy", speech: "¡Es Saludable! Mi red identificó la piña como una fruta llena de vitaminas y agua natural. ¡Buen provecho!" },
  { id: "icecream", emoji: "🍦", name: "Helado", type: "junk", speech: "¡Es No Saludable! Demasiada azúcar procesada. ¡Es delicioso de vez en cuando, pero mi red lo clasificó correctamente!" },
  { id: "avocado", emoji: "🥑", name: "Aguacate", type: "healthy", speech: "¡Es Saludable! Excelente grasa vegetal y nutrientes para el cerebro. ¡Increíble decisión de mi IA!" }
];

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
  document.getElementById('brain-status').innerText = "🧠 Entrenando redes neuronales... 📡";
  
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
  document.getElementById('test-bubble').innerHTML = "<strong>¡Fabuloso!</strong> Mi red neuronal aprendió de tus datos. ¡Presiona un alimento para ponerme a prueba!";
  speakText("¡Fabuloso! Mi red neuronal aprendió de tus datos. ¡Presiona un alimento misterioso de prueba para ver qué aprendí!");

  appState.isMLTrained = true;
  checkAchievements();
  saveToLocalStorage();
}

function testMLItem(itemId) {
  const item = ML_TEST_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  playAudioSynth('click');
  
  const links = document.querySelectorAll('.neural-links line');
  const scanColor = item.type === 'healthy' ? '#00FFCC' : '#FF3366';
  links.forEach(l => {
    l.setAttribute('stroke', scanColor);
    l.setAttribute('stroke-width', '4');
  });

  setMascotExpression('jagui-lab-test', 'thinking');
  document.getElementById('test-bubble').innerText = "Analizando píxeles y patrones... 🤖🔎";

  setTimeout(() => {
    links.forEach((l, idx) => {
      l.setAttribute('stroke', idx % 2 === 0 ? '#00FFFF' : '#FF00FF');
      l.setAttribute('stroke-width', '2.5');
    });

    playAudioSynth('correct');
    setMascotExpression('jagui-lab-test', 'happy');
    
    const explanation = `<strong>JagÜi dice:</strong> ${item.speech}`;
    document.getElementById('test-bubble').innerHTML = explanation;
    speakText(item.speech);
  }, 1000);
}

function resetMLSandbox() {
  playAudioSynth('click');
  initMLSandbox();
}
