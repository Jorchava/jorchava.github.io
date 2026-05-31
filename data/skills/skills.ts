export interface SkillCategory {
  title: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    items: ['Vue', 'Nuxt', 'TypeScript', 'JavaScript', 'SCSS', 'HTML5'],
  },

  {
    title: 'Game Development',
    items: ['PixiJS', 'Canvas', 'Game UI', 'Interactive Systems', 'Animation'],
  },

  {
    title: 'Engineering',
    items: [
      'Accessibility',
      'Performance',
      'Responsive Design',
      'Architecture',
      'Design Systems',
    ],
  },
]
