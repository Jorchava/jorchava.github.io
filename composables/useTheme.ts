export const useTheme = () => {
  const theme = useState<'dark' | 'light'>('theme', () => 'dark')

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'

    setThemeAttribute()
  }

  const setThemeAttribute = () => {
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  onMounted(() => {
    setThemeAttribute()
  })

  return {
    theme,
    toggleTheme,
  }
}
