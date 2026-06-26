import { projects } from './projects'

export const getProjectBySlug = (slug: string) =>
    projects.find(project => project.slug === slug)