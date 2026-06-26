export interface Project {
  slug: string
  title: string
  description: string

  image: string

  tags: string[]
  technologies: string[]

  href: string
  linkLabel: string

  problem: string
  solution: string

  accessibility: string[]
  performance: string[]

  screenshots: string[]
}

export const projects: Project[] = [

  {
    slug: 'contrast-the-color-wars',
    title: 'ContrAst: The Color Wars',
    description:
      'Accessibility-focused color contrast analyzer built to help UI and UX developers validate WCAG compliance and explore contrast relationships between colors.',

    image: '/images/projects/contrast.webp',

    tags: ['accessibility', 'frontend tool'],
    technologies: ['JavaScript', 'CSS', 'HTML'],

    href: 'https://contrastthecolorwars.netlify.app/',
    linkLabel: 'Live Demo',

    problem:
      'Developers often struggle to quickly validate WCAG color contrast requirements while exploring alternative color combinations.',
    solution:
      'Built an accessibility-focused contrast analyzer with real-time feedback, WCAG guidance, and visual exploration tools.',

    accessibility: [
      'WCAG contrast validation',
      'Keyboard navigation',
      'Semantic HTML'
    ],
    performance: [
      'Minimal JavaScript',
      'Fast calculations',
      'Lightweight architecture'
    ],

    screenshots: [
      '/images/projects/contrast-1.webp',
      '/images/projects/contrast-2.webp'
    ],
  },

  {
    slug: 'portfolio-system',
    title: 'Portfolio System',
    description:
      'Modern frontend portfolio architecture focused on scalability, accessibility, and performance.',

    image: '/images/projects/portfolio.webp',

    tags: ['frontend', 'accessibility', 'performance'],
    technologies: ['Vue', 'Nuxt', 'SCSS', 'Accessibility', 'Performance'],

    href: 'https://github.com/Jorchava/jorchava.github.io',
    linkLabel: 'Source Code',

    problem:
      'Traditional portfolio websites are basically a template, often lack scalability and accessibility, making it difficult for developers to showcase their work effectively. Have not been maintained for years and do not reflect modern frontend development practices. And also needed something that works for both my Frontend and Web Games projects.',
    solution:
      'Built a modern, scalable portfolio system with a focus on accessibility and performance, allowing developers to effectively showcase their work. Premium visuals, intuitive navigation, and a clean design to create an engaging user experience.',

    accessibility: [
      'Semantic HTML',
      'Keyboard navigation',
      'Screen reader support',
      'Reduced motion preference handling',
    ],
    performance: [
      'Optimized assets',
      'Efficient rendering',
      'Fast loading times',
      'Theme toggle with FOUC handling'
    ],

    screenshots: [
      '/images/projects/portfolio-1.webp',
      '/images/projects/portfolio-2.webp',
    ],
  },
  {
    slug: 'nes-palette-copier',
    title: 'NES Palette Copier',
    description:
      'NES Palette Copier is a tool that allows users to easily copy and paste NES color palettes for use in their projects, making it a valuable resource for game developers and designers working with retro aesthetics in the Web.',

    image: '/images/projects/nes-palette.webp',

    tags: ['Frontend tool'],
    technologies: ['JavaScript', 'CSS', 'HTML'],

    href: 'https://codepen.io/Jorchava/full/NPbwVYJ',
    linkLabel: 'View on CodePen',

    problem:
      'Game developers and designers working with retro aesthetics often struggle to find an easy way to copy and paste NES color palettes for use in their projects. LOSPEC\'s NES palette is a popular choice, but it can be cumbersome to manually copy and paste the color values into design tools or code editors.',
    solution:
      'Created a simple tool/experiment that allows users to easily copy and paste NES color palettes, making it a valuable resource for game developers and designers working with retro aesthetics in the Web.',

    performance: [
      'Minimal JavaScript',
      'Fast copying',
      'Lightweight architecture',
      'Available in CodePen for easy access and sharing',
    ],
    accessibility: [
      'Keyboard navigation',
      'Screen reader support',
      'Semantic HTML',
      'Color contrast considerations',
      'Accessible table structure',
    ],

    screenshots: [
      '/images/projects/nes-palette-1.webp',
      '/images/projects/nes-palette-2.webp',
    ],
  },
]
