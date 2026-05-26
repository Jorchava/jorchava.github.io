export interface Project {
  title: string
  description: string
  tags: string[]
  href: string
}

export const projects: Project[] = [
  {
    title: 'Retro Contact World',
    description:
      'Interactive PixiJS-powered contact experience with retro-inspired exploration mechanics.',
    tags: ['Nuxt', 'PixiJS', 'TypeScript'],
    href: '/',
  },
  {
    title: 'Portfolio System',
    description:
      'Modern frontend portfolio architecture focused on scalability, accessibility, and performance.',
    tags: ['Vue', 'SCSS', 'GSAP'],
    href: '/',
  },
  {
    title: 'Interactive UI Experiments',
    description:
      'Frontend interaction experiments exploring animation systems and immersive interfaces.',
    tags: ['Frontend', 'Animation', 'UX'],
    href: '/',
  },
]
