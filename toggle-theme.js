const primaryColorScheme = ""; // "light" | "dark"

function getCurrentTheme() {
  return localStorage.getItem("theme");
}

function getPreferTheme() {
  const currentTheme = getCurrentTheme();
  if (currentTheme) return currentTheme;

  if (primaryColorScheme) return primaryColorScheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let themeValue = getPreferTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", themeValue);

  const body = document.body;

  if (body) {
    const computedStyles = window.getComputedStyle(body);
    const bgColor = computedStyles.backgroundColor;

    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
}

window.onload = () => {
  reflectPreference();
};

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });

document.addEventListener("astro:before-swap", () => {
  reflectPreference();
});

document.addEventListener("astro:after-swap", () => {
  themeValue = getPreferTheme();
  reflectPreference();
});
