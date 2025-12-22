// Personaje Mascota 8-bit - Múltiples personajes
document.addEventListener('DOMContentLoaded', () => {
  const mascot = document.getElementById('pixel-mascot');
  const bubble = document.getElementById('pixel-bubble');
  const characterContainer = document.getElementById('character-container');
  
  if (!mascot || !bubble || !characterContainer) return;

  // Definición de personajes - Animales 8-bit
  const characters = [
    {
      name: 'Pixel',
      color: '#4CAF50',
      darkColor: '#2E7D32',
      accent: '#FF5722',
      messages: [
        '¡Navega por aquí!',
        '¿Buscas algo?',
        '¡Explora el contenido!',
        '¿Quieres ver más?',
        '¡Descubre nuevos proyectos!',
        '¡Usa el menú!',
        '¡Scroll para más!',
        '¡Bienvenido!'
      ],
      svg: `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Cuerpo -->
        <rect x="36" y="58" width="48" height="36" fill="#4CAF50" />
        <!-- Cabeza -->
        <rect x="42" y="34" width="36" height="30" fill="#4CAF50" />
        <!-- Ojos -->
        <rect x="48" y="42" width="8" height="8" fill="#000" />
        <rect x="65" y="42" width="8" height="8" fill="#000" />
        <!-- Boca -->
        <rect x="53" y="58" width="14" height="5" fill="#000" />
        <!-- Brazos -->
        <rect x="30" y="60" width="8" height="24" fill="#4CAF50" />
        <rect x="83" y="60" width="8" height="24" fill="#4CAF50" />
        <!-- Piernas -->
        <rect x="46" y="90" width="12" height="15" fill="#2E7D32" />
        <rect x="62" y="90" width="12" height="15" fill="#2E7D32" />
        <!-- Sombrero -->
        <rect x="36" y="26" width="48" height="8" fill="#FF5722" />
        <rect x="48" y="18" width="24" height="8" fill="#FF5722" />
      </svg>`
    },
    {
      name: 'Malinois',
      color: '#8D6E63',
      darkColor: '#5D4037',
      accent: '#FF9800',
      messages: [
        '¡Guía tu navegación!',
        '¡Te mostraré el camino!',
        '¿Necesitas dirección?',
        '¡Explora las secciones!',
        '¡Sigue explorando!',
        '¡Woof! ¡Navega!',
        '¡Te acompaño!'
      ],
      svg: `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Cuerpo alargado -->
        <rect x="30" y="60" width="54" height="30" fill="#8D6E63" />
        <!-- Cuello -->
        <rect x="34" y="53" width="18" height="12" fill="#8D6E63" />
        <!-- Cabeza triangular -->
        <polygon points="22,30 54,30 46,53" fill="#8D6E63" />
        <!-- Orejas puntiagudas -->
        <polygon points="18,22 26,14 30,34" fill="#5D4037" />
        <polygon points="48,22 56,14 60,34" fill="#5D4037" />
        <!-- Hocico -->
        <polygon points="22,37 12,42 22,48" fill="#5D4037" />
        <!-- Ojos oscuros -->
        <rect x="26" y="36" width="5" height="5" fill="#000" />
        <rect x="37" y="36" width="5" height="5" fill="#000" />
        <!-- Nariz negra -->
        <rect x="14" y="41" width="6" height="5" fill="#000" />
        <!-- Marcas negras en cara -->
        <rect x="24" y="42" width="12" height="4" fill="#5D4037" />
        <!-- Patas delanteras -->
        <rect x="36" y="88" width="10" height="18" fill="#5D4037" />
        <rect x="48" y="88" width="10" height="18" fill="#5D4037" />
        <!-- Patas traseras -->
        <rect x="62" y="88" width="10" height="18" fill="#5D4037" />
        <rect x="74" y="88" width="10" height="18" fill="#5D4037" />
        <!-- Cola larga -->
        <rect x="78" y="62" width="26" height="6" fill="#8D6E63" />
        <rect x="102" y="56" width="6" height="14" fill="#8D6E63" />
        <!-- Pelo en espalda -->
        <rect x="37" y="56" width="22" height="5" fill="#5D4037" />
        <!-- Collar -->
        <rect x="30" y="49" width="18" height="4" fill="#FF9800" />
        <!-- Medalla -->
        <circle cx="40" cy="50" r="4" fill="#FFC107" />
      </svg>`
    },
    {
      name: 'Gatito',
      color: '#FF9800',
      darkColor: '#E65100',
      accent: '#FFC107',
      messages: [
        '¡Miau! Navega aquí',
        '¿Buscas algo específico?',
        '¡Explora con elegancia!',
        '¿Quieres ver más?',
        '¡Desliza para descubrir!',
        '¡Contenido interesante!',
        '¡Miau! ¡Sigue navegando!',
        '¡Te guía con estilo!'
      ],
      svg: `<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <!-- Cuerpo -->
        <rect x="20" y="34" width="24" height="16" fill="#FF9800" />
        <!-- Cabeza -->
        <rect x="22" y="22" width="20" height="16" fill="#FF9800" />
        <!-- Orejas triangulares -->
        <polygon points="18,22 26,10 30,22" fill="#E65100" />
        <polygon points="38,22 34,10 42,22" fill="#E65100" />
        <!-- Ojos -->
        <rect x="26" y="26" width="4" height="4" fill="#000" />
        <rect x="34" y="26" width="4" height="4" fill="#000" />
        <!-- Nariz -->
        <polygon points="30,32 28,34 32,34" fill="#FFC107" />
        <!-- Bigotes -->
        <rect x="20" y="30" width="6" height="1" fill="#000" />
        <rect x="38" y="30" width="6" height="1" fill="#000" />
        <!-- Patas -->
        <rect x="24" y="48" width="6" height="8" fill="#E65100" />
        <rect x="34" y="48" width="6" height="8" fill="#E65100" />
        <!-- Cola -->
        <rect x="44" y="38" width="16" height="4" fill="#FF9800" />
        <rect x="56" y="34" width="4" height="8" fill="#FF9800" />
        <!-- Sombrero de ratón -->
        <rect x="22" y="18" width="20" height="3" fill="#FFC107" />
        <rect x="28" y="14" width="8" height="3" fill="#FFC107" />
      </svg>`
    },
    {
      name: 'Pajarito',
      color: '#2196F3',
      darkColor: '#1565C0',
      accent: '#FFC107',
      messages: [
        '¡Pío! Vuela por el sitio',
        '¿Buscas algo específico?',
        '¡Navega por las secciones!',
        '¿Quieres descubrir más?',
        '¡Explora el contenido!',
        '¡Pío! ¡Sigue navegando!',
        '¡Te guía volando!',
        '¡Alas para navegar!'
      ],
      svg: `<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <!-- Cuerpo -->
        <ellipse cx="32" cy="40" rx="14" ry="12" fill="#2196F3" />
        <!-- Cabeza -->
        <circle cx="32" cy="28" r="8" fill="#2196F3" />
        <!-- Ojos -->
        <rect x="28" y="26" width="3" height="3" fill="#000" />
        <rect x="33" y="26" width="3" height="3" fill="#000" />
        <!-- Pico -->
        <polygon points="32,32 28,34 32,36" fill="#FFC107" />
        <!-- Alas -->
        <ellipse cx="20" cy="38" rx="8" ry="4" fill="#1565C0" />
        <ellipse cx="44" cy="38" rx="8" ry="4" fill="#1565C0" />
        <!-- Cola -->
        <polygon points="44,40 52,36 52,44" fill="#1565C0" />
        <!-- Patas -->
        <rect x="28" y="48" width="3" height="6" fill="#FFC107" />
        <rect x="33" y="48" width="3" height="6" fill="#FFC107" />
        <!-- Sombrero de nube -->
        <rect x="24" y="18" width="16" height="3" fill="#FFC107" />
        <rect x="30" y="14" width="4" height="3" fill="#FFC107" />
      </svg>`
    }
  ];

  // Seleccionar personaje aleatorio
  const currentCharacter = characters[Math.floor(Math.random() * characters.length)];
  characterContainer.innerHTML = currentCharacter.svg;

  // Mostrar mensaje aleatorio
  function showRandomMessage() {
    const randomMsg = currentCharacter.messages[Math.floor(Math.random() * currentCharacter.messages.length)];
    bubble.textContent = randomMsg;
    bubble.classList.add('show');
    
    setTimeout(() => {
      bubble.classList.remove('show');
    }, 2000);
  }

  // Cambiar animación
  function setAnimation(animation) {
    mascot.className = 'pixel-mascot';
    setTimeout(() => {
      mascot.classList.add(animation);
    }, 10);
  }

  // Interacciones
  mascot.addEventListener('click', () => {
    setAnimation('jump');
    showRandomMessage();
    
    setTimeout(() => {
      setAnimation('idle');
    }, 1000);
  });

  // Reaccionar al scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > lastScroll + 50) {
      setAnimation('dance');
      setTimeout(() => setAnimation('idle'), 1000);
    } 
    lastScroll = currentScroll;
  });

  // Reaccionar al cambio de tema
  const observer = new MutationObserver(() => {
    setAnimation('happy');
    bubble.textContent = document.documentElement.getAttribute('data-theme') === 'dark' 
      ? '¡Perfecto para leer!' 
      : '¡Ideal para navegar!';
    bubble.classList.add('show');
    
    setTimeout(() => {
      bubble.classList.remove('show');
      setAnimation('idle');
    }, 2000);
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });

  // Iniciar con animación de saludo
  setTimeout(() => {
    setAnimation('happy');
    showRandomMessage();
    
    setTimeout(() => {
      setAnimation('idle');
    }, 2000);
  }, 1000);

  // Dormir después de inactividad
  let timeoutId;
  function resetSleepTimer() {
    clearTimeout(timeoutId);
    setAnimation('idle');
    
    timeoutId = setTimeout(() => {
      setAnimation('sleep');
      bubble.textContent = 'Zzzz...';
      bubble.classList.add('show');
    }, 30000); // 30 segundos de inactividad
  }

  // Reiniciar temporizador de inactividad
  ['mousemove', 'click', 'keypress', 'scroll'].forEach(event => {
    window.addEventListener(event, resetSleepTimer, { passive: true });
  });

  resetSleepTimer();
});
