export interface ExperienceItem {
  period: string
  title: string
  company: string
  description: string
  technologies: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: '2015 — Present',
    title: 'Senior Experience Technology Engineer (XT)',
    company: 'PGD (Publicis Global Delivery) - Interactive Developer',
    description:
      'Building modern frontend systems, interactive web experiences, and game-inspired interfaces focused on performance, accessibility, and scalable architecture.',
    technologies: ['Vue', 'Nuxt', 'TypeScript', 'SCSS', 'GSAP', 'PixiJS'],
  },

  {
    period: '2014 — 2015',
    title: 'Frontend Engineering Focus',
    company: 'Accenture',
    description:
      'Deep focus on frontend architecture, agile projects, maintenance, responsive systems, UI engineering, reusable component design, animation systems, and modern web tooling.',
    technologies: ['JavaScript', 'Frontend Systems', 'UI Engineering'],
  },

  {
    period: '2013 — 2014',
    title: 'Web and Game Development Foundations',
    company: 'Independent Learning - INA (Instituto Nacional de Aprendizaje)',
    description:
      'Built strong foundations in semantic HTML, modern CSS, JavaScript fundamentals, responsive design, and interactive web and video games development.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
]
