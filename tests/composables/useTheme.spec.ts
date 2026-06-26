import { describe, expect, it } from 'vitest'
import { nextTheme } from '~/utils/theme'

describe('Theme utility', () => {
  it('switches dark to light', () => {
    expect(nextTheme('dark')).toBe('light')
  })

  it('switches light to dark', () => {
    expect(nextTheme('light')).toBe('dark')
  })

  it('always returns a valid theme', () => {
    const result = nextTheme('dark')

    expect(['dark', 'light']).toContain(result)
  })
})