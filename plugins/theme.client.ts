export default defineNuxtPlugin(() => {
  const storedTheme = localStorage.getItem('theme')

  const theme =
    storedTheme ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')

  document.documentElement.setAttribute('data-theme', theme)
})
