export interface ExperienceItem {
  period: string
  title: string
  company: string
  description: string
  technologies: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: '2024 — Present',
    title: 'Frontend & Interactive Developer',
    company: 'Independent Projects',
    description:
      'Building modern frontend systems, interactive web experiences, and game-inspired interfaces focused on performance, accessibility, and scalable architecture.',
    technologies: ['Vue', 'Nuxt', 'TypeScript', 'SCSS', 'PixiJS'],
  },

  {
    period: '2023 — 2024',
    title: 'Frontend Engineering Focus',
    company: 'Advanced Self-Directed Learning',
    description:
      'Deep focus on frontend architecture, responsive systems, UI engineering, reusable component design, animation systems, and modern web tooling.',
    technologies: ['JavaScript', 'Frontend Systems', 'GSAP', 'UI Engineering'],
  },

  {
    period: '2022 — 2023',
    title: 'Web Development Foundations',
    company: 'Independent Learning',
    description:
      'Built strong foundations in semantic HTML, modern CSS, JavaScript fundamentals, responsive design, and interactive web development.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
]
