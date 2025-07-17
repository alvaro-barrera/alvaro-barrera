// Función para obtener el tema actual del localStorage o preferencias del sistema
function getCurrentTheme() {
  // Verificar si hay un tema guardado en localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  
  // Si no hay tema guardado, usar las preferencias del sistema
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Función para aplicar el tema
function setTheme(theme) {
  // Si no se especifica un tema, usar el tema actual
  if (!theme) {
    theme = getCurrentTheme();
  }
  
  // Guardar preferencia
  localStorage.setItem('theme', theme);
  
  // Aplicar tema al documento
  document.documentElement.setAttribute('data-theme', theme);
  
  // Actualizar el color de la barra de direcciones en móviles
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    // Usar el tema directamente para evitar getComputedStyle
    const bgVar = theme === 'dark' ? '--color-bg-dark' : '--color-bg-light';
    metaThemeColor.content = getComputedStyle(document.documentElement).getPropertyValue(bgVar);
  }
  
  // Actualizar el botón del tema con batch updates
  requestAnimationFrame(() => {
    updateThemeButton(theme);
  });
}

// Función para alternar entre temas
function toggleTheme() {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Función para actualizar el botón del tema
function updateThemeButton(theme) {
  const themeBtn = document.getElementById('theme-btn');
  if (!themeBtn) return;
  
  const moonSvg = themeBtn.querySelector('#moon-svg');
  const sunSvg = themeBtn.querySelector('#sun-svg');
  
  if (!moonSvg || !sunSvg) return;
  
  if (theme === 'dark') {
    moonSvg.style.display = 'none';
    sunSvg.style.display = 'block';
    themeBtn.setAttribute('aria-label', 'Cambiar a modo claro');
  } else {
    moonSvg.style.display = 'block';
    sunSvg.style.display = 'none';
    themeBtn.setAttribute('aria-label', 'Cambiar a modo oscuro');
  }
}

// Inicializar el tema al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  // Aplicar el tema actual
  setTheme();
  
  // Configurar el evento de clic en el botón de tema
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
  
  // Escuchar cambios en las preferencias del sistema
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  let userHasManuallyChangedTheme = false;
  
  // Verificar si el usuario ha cambiado manualmente el tema
  document.addEventListener('click', (e) => {
    if (e.target.closest('#theme-btn')) {
      userHasManuallyChangedTheme = true;
      // Guardar la preferencia del usuario
      const currentTheme = getCurrentTheme();
      localStorage.setItem('theme', currentTheme);
    }
  }, { once: false, capture: true });
  
  const handleSystemThemeChange = (e) => {
    // Solo cambiar automáticamente si el usuario no ha establecido una preferencia manual
    if (!userHasManuallyChangedTheme) {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      // Limpiar cualquier preferencia guardada para seguir las preferencias del sistema
      localStorage.removeItem('theme');
    }
  };
  
  // Configurar el listener inicial
  prefersDark.addEventListener('change', handleSystemThemeChange);
  
  // Verificar el tema del sistema al cargar
  handleSystemThemeChange({ matches: prefersDark.matches });
  
  // Limpiar el event listener cuando se desmonte el componente
  return () => {
    if (themeBtn) {
      themeBtn.removeEventListener('click', toggleTheme);
    }
    prefersDark.removeEventListener('change', handleSystemThemeChange);
  };
});

// Manejar la recarga de la página con Astro
document.addEventListener('astro:before-swap', () => {
  // Guardar el tema actual antes de la navegación
  const currentTheme = getCurrentTheme();
  localStorage.setItem('theme', currentTheme);
});

document.addEventListener('astro:after-swap', () => {
  // Restaurar el tema después de la navegación
  setTheme();
  
  // Volver a configurar el botón de tema
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
});
