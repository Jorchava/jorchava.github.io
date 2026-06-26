import { describe, expect, it } from 'vitest'
import { experience } from '~/data/experience/experience'

describe('Experience data', () => {
    it('contains at least one experience entry', () => {
        expect(experience.length).toBeGreaterThan(0)
    })

    it('all experience entries are complete', () => {
        experience.forEach((item) => {
            expect(item.period.trim()).not.toBe('')
            expect(item.title.trim()).not.toBe('')
            expect(item.company.trim()).not.toBe('')
            expect(item.description.trim()).not.toBe('')
            expect(item.technologies.length).toBeGreaterThan(0)
        })
    })
})