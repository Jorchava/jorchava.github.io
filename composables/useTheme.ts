import { nextTheme } from '~/utils/theme'

export const useTheme = () => {
  const theme = useState<'dark' | 'light'>('theme', () => 'dark')

  const applyTheme = (value: 'dark' | 'light') => {
    theme.value = value

    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', value)
      localStorage.setItem('theme', value)
    }
  }

  const toggleTheme = () => {
    applyTheme(nextTheme(theme.value))
  }

  onMounted(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme')

    if (currentTheme === 'dark' || currentTheme === 'light') {
      theme.value = currentTheme
    }
  })

  return {
    theme,
    toggleTheme,
  }
}
