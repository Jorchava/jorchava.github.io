<script setup lang="ts">
const { theme, toggleTheme } = useTheme()
</script>
<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-pressed="theme === 'light'"
    :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`"
    @click="toggleTheme"
  >
    {{ theme === 'dark' ? '☀' : '☾' }}
  </button>
</template>

<style scoped lang="scss">
.theme-toggle {
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text);
  cursor: pointer;
  border-radius: var(--radius-sm);
  padding: 0.5rem 0.75rem;
  transition: all var(--transition-default);
  width: 2.75rem;
  height: 2.75rem;
  &:hover {
    border-color: var(--color-secondary);
    color: var(--color-secondary);
  }
  &:focus-visible {
    outline: 2px solid var(--color-secondary);
    color: var(--color-secondary);
  }
}
</style>
