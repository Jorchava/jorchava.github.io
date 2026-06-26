import { describe, expect, it } from 'vitest'
import { projects } from '~/data/projects/projects'

describe('Project thumbnails', () => {
    it('every project has a thumbnail', () => {
        projects.forEach((project) => {
            expect(project.image.trim()).not.toBe('')
        })
    })

    it('all thumbnails use webp format', () => {
        projects.forEach((project) => {
            expect(project.image.endsWith('.webp')).toBe(true)
        })
    })
})