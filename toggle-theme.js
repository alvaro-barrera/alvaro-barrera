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
    // Usar valores hardcodeados para evitar getComputedStyle y redistribuciones forzadas
    const themeColors = {
      light: '#fefbfb',
      dark: '#0c0c0c'
    };
    metaThemeColor.content = themeColors[theme] || themeColors.light;
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
  // Verificar si hay un tema guardado en localStorage
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Determinar el tema inicial
  let initialTheme;
  if (savedTheme) {
    // Si hay un tema guardado, usarlo
    initialTheme = savedTheme;
  } else {
    // Si no hay tema guardado, usar el tema del sistema
    initialTheme = prefersDark.matches ? 'dark' : 'light';
  }
  
  // Aplicar el tema inicial
  setTheme(initialTheme);
  
  // Configurar el evento de clic en el botón de tema
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = getCurrentTheme();
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      // Guardar la preferencia del usuario en localStorage
      localStorage.setItem('theme', newTheme);
    });
  }
  
  // Escuchar cambios en las preferencias del sistema
  const handleSystemThemeChange = (e) => {
    // Solo cambiar automáticamente si no hay preferencia guardada
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    }
  };
  
  // Configurar el listener para cambios del sistema
  prefersDark.addEventListener('change', handleSystemThemeChange);
  
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
