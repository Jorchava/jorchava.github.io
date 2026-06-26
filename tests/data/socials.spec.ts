import { describe, expect, it } from 'vitest'
import { socials } from '~/data/socials/socials'

describe('Social links', () => {
    it('contains social links', () => {
        expect(socials.length).toBeGreaterThan(0)
    })

    it('all socials are complete', () => {
        socials.forEach((social) => {
            expect(social.label.trim()).not.toBe('')
            expect(social.href.trim()).not.toBe('')
            expect(social.icon.trim()).not.toBe('')
        })
    })

    it('all socials use valid protocols', () => {
        socials.forEach((social) => {
            expect(
                social.href.startsWith('https://') ||
                social.href.startsWith('mailto:')
            ).toBe(true)
        })
    })
})