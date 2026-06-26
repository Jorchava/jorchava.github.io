import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, '.'),
      '@': resolve(__dirname, '.'),
    },
  },

  test: {
    environment: 'happy-dom',
    setupFiles: ['./tests/setup.ts'],
  },
})