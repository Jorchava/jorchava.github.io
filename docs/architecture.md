# Architecture Overview

This document defines the architectural philosophy and structure for the Jorchava Portfolio project.

The goal is to maintain:

- scalability
- clarity
- maintainability
- performance
- strong separation of concerns

---

# Core Stack

## Framework

- Nuxt 4
- Vue 3
- TypeScript

## Styling

- TailwindCSS
- SCSS

## Animation

- GSAP

## Game Rendering

- PixiJS v8

## Deployment

- Netlify

---

# High-Level Architecture Philosophy

The portfolio is NOT the game.

The game is an isolated enhancement layer.

This separation is intentional and critical.

If the game systems fail or are disabled, the portfolio itself must remain fully functional.

---

# Primary Engineering Principles

1. Prefer clarity over cleverness
2. Prefer maintainability over abstraction
3. Keep dependencies intentional
4. Isolate responsibilities
5. Build scalable foundations early
6. Avoid premature optimization
7. Optimize for shipping
8. Mobile-first always
9. Accessibility is part of frontend quality
10. Performance is a feature

---

# Folder Structure

```txt
/
├── app/
├── assets/
├── components/
├── composables/
├── data/
├── game/
├── layouts/
├── pages/
├── public/
├── server/
├── styles/
├── types/
├── utils/
└── docs/
```

---

# Folder Responsibilities

## /components

Vue UI and feature components only.

Responsibilities:

- presentation
- interaction
- rendering

Avoid:

- game logic
- business logic
- data transformation complexity

### Subfolders

- layout/
- ui/
- sections/
- projects/
- game/

---

## /composables

Reusable Vue composition logic.

Examples:

- responsive helpers
- project filtering
- navigation state
- utility reactive systems

Convention:

- prefixed with `use`

Examples:

- useProjects.ts
- useAge.ts

---

## /data

Structured content and configuration.

Purpose:

- decouple content from rendering
- simplify future project additions
- support scalable project systems

Examples:

- projects
- navigation
- social links
- skills

---

## /game

Isolated PixiJS architecture.

Contains:

- rendering systems
- entities
- scenes
- interactions
- movement systems
- game utilities

The game layer must remain independent from the primary app structure.

---

## /server

Server-side functionality.

Examples:

- contact form handling
- sanitization
- rate limiting
- validation
- email relay

---

## /styles

Global SCSS architecture.

Responsibilities:

- variables
- tokens
- themes
- typography
- animation systems

Tailwind handles:

- layout
- spacing
- responsive utilities

SCSS handles:

- identity
- custom styling systems
- retro polish
- advanced visual systems

---

# Component Architecture Rules

## Components should:

- have a single responsibility
- remain focused
- avoid excessive prop complexity
- avoid hidden side effects

## Avoid:

- giant mega-components
- deeply nested business logic
- duplicated rendering logic

---

# Data Flow Philosophy

Structured data drives rendering.

Projects are content-driven, not hardcoded.

This enables:

- scalability
- filtering
- future CMS migration
- easier maintenance

---

# Styling Philosophy

## TailwindCSS

Used for:

- layout
- spacing
- responsiveness
- utility composition

## SCSS

Used for:

- custom systems
- retro UI identity
- animations
- component polish

---

# Naming Conventions

## Components

PascalCase

Examples:

- ProjectCard.vue
- HeroSection.vue

## Composables

camelCase prefixed with `use`

Examples:

- useProjects.ts

## Utilities

kebab-case

Examples:

- format-date.ts

## Routes

kebab-case

Examples:

- /projects/contrast-the-color-wars

---

# Responsive Philosophy

Mobile-first always.

Primary targets:

- mobile devices
- laptops
- desktop monitors

The project should feel:

- fast
- lightweight
- touch-friendly
- responsive

---

# Accessibility Philosophy

Accessibility is treated as part of frontend engineering quality.

Goals:

- semantic HTML
- keyboard support
- reduced motion support
- strong contrast
- readable typography
- mobile usability

---

# Performance Philosophy

Performance is a core feature.

Goals:

- low bundle size
- minimal runtime JS
- optimized media
- lazy loading
- fast navigation
- strong Lighthouse scores

---

# Game System Philosophy

The PixiJS contact world is intentionally constrained.

Initial scope:

- lightweight
- top-down retro room
- short interaction loop
- mailbox submission interaction
- mobile compatible

Avoid:

- MMO complexity
- large realtime systems
- excessive networking
- feature creep

---

# Deployment Workflow

## Source Control

GitHub

## Production Hosting

Netlify

## Workflow

1. Local development
2. Feature branch
3. Commit changes
4. Push to GitHub
5. Netlify preview deploy
6. Merge to main
7. Production deployment

---

# Future Expansion Philosophy

Future features should:

- justify complexity
- improve portfolio value
- remain maintainable
- align with hiring goals

Avoid:

- adding systems for novelty only
- unnecessary dependencies
- overengineering

---

# Final Guiding Principle

Ship polished, focused systems.

Avoid endless rebuilding.
