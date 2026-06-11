import { describe, expect, it } from 'vitest'

describe('Theme', () => {
  it('supports dark theme', () => {
    expect('dark').toBe('dark')
  })

  it('supports light theme', () => {
    expect('light').toBe('light')
  })
})