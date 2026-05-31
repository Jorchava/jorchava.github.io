export interface Project {
  title: string
  description: string
  tags: string[]
  href: string
  linkLabel: string
}

export const projects: Project[] = [
  {
    title: 'ContrAst: The Color Wars',
    description:
      'Accessibility-focused color contrast analyzer built to help UI and UX developers validate WCAG compliance and explore contrast relationships between colors.',
    tags: ['CSS', 'HTML', 'JavaScript'],
    href: 'https://contrastthecolorwars.netlify.app/',
    linkLabel: 'Live Demo ↗',
  },
  {
    title: 'Portfolio System',
    description:
      'Modern frontend portfolio architecture focused on scalability, accessibility, and performance.',
    tags: ['Vue', 'SCSS', 'Nuxt'],
    href: 'https://github.com/Jorchava/jorchava.github.io',
    linkLabel: 'Source Code ↗',
  },
  {
    title: 'NES Palette Copier',
    description:
      'NES Palette Copier is a tool that allows users to easily copy and paste NES color palettes for use in their projects, making it a valuable resource for game developers and designers working with retro aesthetics in the Web.',
    tags: ['Frontend', 'SCSS', 'UI'],
    href: 'https://codepen.io/Jorchava/full/NPbwVYJ',
    linkLabel: 'View on CodePen ↗',
  },
]
