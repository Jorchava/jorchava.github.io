export const useTheme = () => {
  const theme = useState<'dark' | 'light'>('theme', () => {
    if (import.meta.client) {
      return document.documentElement.getAttribute('data-theme') === 'light'
        ? 'light'
        : 'dark'
    }

    return 'dark'
  })

  const applyTheme = (value: 'dark' | 'light') => {
    theme.value = value

    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', value)
      localStorage.setItem('theme', value)
    }
  }

  const toggleTheme = () => {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme === 'dark' || storedTheme === 'light') {
      applyTheme(storedTheme)
      return
    }

    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    applyTheme(prefersDark ? 'dark' : 'light')
  })

  return {
    theme,
    toggleTheme,
  }
}
