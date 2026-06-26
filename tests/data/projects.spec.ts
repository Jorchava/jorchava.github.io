import { describe, expect, it } from 'vitest'
import { projects } from '~/data/projects/projects'

describe('Projects data', () => {
    it('contains at least one project', () => {
        expect(projects.length).toBeGreaterThan(0)
    })

    it('all projects have required fields', () => {
        projects.forEach((project) => {
            expect(project.title.trim()).not.toBe('')
            expect(project.description.trim()).not.toBe('')
            expect(project.href.trim()).not.toBe('')
            expect(project.image.trim()).not.toBe('')
            expect(project.tags.length).toBeGreaterThan(0)
        })
    })

    it('all project links use https', () => {
        projects.forEach((project) => {
            expect(project.href.startsWith('https://')).toBe(true)
        })
    })

    it('all projects have slugs', () => {
        projects.forEach(project => {
            expect(project.slug.trim()).not.toBe('')
        })
    })

    it('all projects have unique slugs, prevent route collisions', () => {
        const slugs = projects.map(
            project => project.slug
        )
        expect(
            new Set(slugs).size
        ).toBe(slugs.length)
    })

    it('all projects have screenshots', () => {
        projects.forEach(project => {
            expect(project.screenshots.length).toBeGreaterThan(0)
        })
    })

    it('all projects have accessibility notes', () => {
        projects.forEach(project => {
            expect(project.accessibility.length).toBeGreaterThan(0)
        })
    })

    it('all projects have performance notes', () => {
        projects.forEach(project => {
            expect(project.performance.length).toBeGreaterThan(0)
        })
    })

    it('all projects have technologies', () => {
        projects.forEach(project => {
            expect(
                project.technologies.length
            ).toBeGreaterThan(0)
        })
    })
})