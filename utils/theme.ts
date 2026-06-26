export const nextTheme = (
    theme: 'dark' | 'light',
): 'dark' | 'light' => {
    return theme === 'dark' ? 'light' : 'dark'
}