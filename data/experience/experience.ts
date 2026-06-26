export interface ExperienceItem {
  period: string
  title: string
  company: string
  description: string
  technologies: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: '2015 — 2026',
    title: 'Senior Interactive Developer',
    company: 'PGD',
    description:
      'Building modern frontend systems, interactive web experiences, and game-inspired interfaces focused on performance, accessibility, and scalable architecture.',
    technologies: ['Vue', 'Nuxt', 'TypeScript', 'SCSS', 'GSAP', 'PixiJS', 'Accessibility', 'Frontent Systems'],
  },

  {
    period: '2014 — 2015',
    title: 'Frontend Engineering Focus',
    company: 'Accenture',
    description:
      'Delivered frontend solutions within enterprise environments, focusing on responsive interfaces, UI implementation, cross-browser compatibility, maintenance of existing platforms, and Agile collaboration across multidisciplinary teams.',
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'Responsive Design',
      'Cross-Browser Support',
      'Agile'
    ],
  },

  {
    period: '2013 — 2014',
    title: 'Web and Game Development Foundations',
    company: 'Independent Learning - INA (Instituto Nacional de Aprendizaje)',
    description:
      'Built foundational skills in HTML, CSS, JavaScript, responsive design, accessibility fundamentals, and interactive web development while exploring early game development concepts.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
]
