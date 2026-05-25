# 📝 Changelog - Jagüi: Mi Primer Copiloto 🐆🤖⚡

Todos los cambios notables y las mejoras aplicadas a la plataforma interactiva de aprendizaje de Inteligencia Artificial infantil.

---

## [1.2.0] - 2026-05-25
### Added
- **Renders 3D Google Imagen Premium**:
  - `assets/achievement_badge.png`: Medalla de oro 3D con circuitos neón cian y follaje selvático para la cuadrícula de Logros.
  - `assets/jagui_scientist.png`: Jaguar científico 3D con gabardina de laboratorio y gafas VR holográficas para el Lab de Machine Learning.
- **Misiones Diarias 🗺️**:
  - Panel flotante responsivo con tres retos del día interactivos tachados automáticamente con emojis de logro (`✅`).
  - Lógica en JS para comprobar misiones de Lab, Chat y XP.
- **Cofre de la Selva 🎁**:
  - Un cofre misterioso interactivo que acumula progreso de XP hasta 150 XP.
  - Al abrirse, reproduce fanfarrias arpegiadas mágicas, triples de confetti y otorga una recompensa persistente de `+50 XP`.
- **Efectos de Audio Whimsical (Web Audio API)**:
  - `'powerup'`: Sweep de diente de sierra ascendente futurista para el Modo Súper Cerebro.
  - `'chest'`: Arpegio pentatónico brillante para el cofre.
  - `'bubble'`: Sonido pop acuoso rápido para el chat y burbujas.
  - `'equip'`: Tono cyber corto de confirmación en la Tienda IA.
- **Guía de Seguridad Infantil para Padres 🛡️**:
  - Sección colapsable en la pantalla de Charla Gemini que detalla políticas de privacidad infantil, acompañamiento y uso ético seguro de copilotos de IA.

### Changed
- **Burbuja de Onboarding**:
  - La burbuja de Jagüi en la bienvenida se ha reescrito con un texto de guía y bienvenida selvática mucho más cálido y aventurero para los niños.
  - La burbuja de texto de bienvenida se ha estilizado con bordes de luz cian y rabillo de globo para simular un bocadillo real.
- **Medallas de Perfil**:
  - Sustitución de los emojis tradicionales por el render premium dorado en 3D (`assets/achievement_badge.png`) con animaciones de destello de brillo metálico (`shinyGold`).
- **Navegación e Interfaz**:
  - Microinteracciones elásticas en hover y taps de botones de navegación lateral/inferior.
  - Glassmorphic card adjustments (`backdrop-filter: blur(14px)`).
  - Centrado y responsividad en dispositivos móviles.

### Fixed
- **Integración de XP**:
  - Unificación de los incrementos de XP bajo la función central `addXP(...)` para asegurar que el cofre y las misiones se actualicen en tiempo real y no haya desincronizaciones en el local storage.

---

## [1.1.0] - 2026-05-24
### Added
- **Spritesheets en Proporción 1:1**:
  - Hoja de Jagüi de alta precisión de $1200 \times 300$ px con frames perfectos eliminando por completo tajos y parpadeos.
- **Camino Adaptativo y Nivel Secreto 31**:
  - El Templo de la Superinteligencia como un nivel 31 secreto desbloqueado por XP mayor a 300 y lección 30 completada.
- **Mapa en Perspectiva 2.5D**:
  - Islas flotantes tridimensionales vectoriales SVG con sombras proyectadas, circuitos fluorescentes y lianas colgantes que cambian según el estado.
- **Modo Súper Cerebro**:
  - Multiplicador de aciertos, triples de confetti y XP adicionales con voz TTS.
- **Firebase Auth**:
  - Integración interactiva del Club de Científicos con persistencia en la nube.
- **Instalación PWA**:
  - Soporte de instalación local directa en celulares y tabletas.
