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

- SCSS
- CSS Custom Properties
- Design Tokens
- Responsive Sass Mixins

## Animation

- GSAP

## Game Rendering

- PixiJS v8

## Deployment

Phase I:

- GitHub Pages

Phase II+:

- Netlify (planned migration)

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
├── components/
├── composables/
├── constants/
├── data/
├── game/
├── layouts/
├── pages/
├── public/
├── server/
├── styles/
├── tests/
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

- useTheme.ts
- useSeo.ts
- useRevealAnimation.ts
- useActiveSection.ts

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

The application should remain functional without the game layer enabled.

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

- design tokens
- themes
- typography
- mixins
- responsive systems
- utility classes
- animation systems
- layout systems

---

### Structure

```txt
styles/
├── abstracts/
├── base/
├── components/
├── layouts/
├── themes/
└── main.scss
```

---

# Styling Philosophy

This project intentionally avoids utility-first CSS frameworks.

Instead, styling is built around:

- SCSS architecture
- reusable mixins
- responsive breakpoint systems
- CSS custom properties
- token-driven theming
- reusable utility classes
- scalable component styling

## CSS Custom Properties

CSS variables act as the primary runtime styling system.

Examples:

- colors
- spacing
- typography
- radii
- shadows
- transitions

This enables:

- scalable theming
- runtime theme switching
- visual consistency
- easier maintenance

---

# Theme System

Themes are powered by CSS custom properties.

Examples:

- dark mode
- light mode
- future retro themes

Theme switching occurs through:

```html
data-theme="dark"
```

or:

```html
data-theme="light"
```

---

# Responsive Philosophy

Mobile-first always.

Responsive behavior is handled through reusable Sass breakpoint mixins.

Example goals:

- touch-friendly interfaces
- scalable layouts
- consistent spacing systems
- reduced responsive duplication

Primary targets:

- mobile devices
- laptops
- desktop monitors

---

# Animation Philosophy

Animations should enhance clarity and atmosphere.

Avoid animation for novelty alone.

## GSAP Responsibilities

Used for:

- hero reveals
- section transitions
- scroll choreography
- cinematic polish
- timeline orchestration

Avoid:

- animating every interaction
- excessive motion overload
- unnecessary runtime complexity

---

# PixiJS Philosophy

PixiJS is used only where canvas rendering adds meaningful value.

Examples:

- particle systems
- retro environments
- shader effects
- interactive visual scenes
- game-like interactions

Avoid:

- rendering the entire portfolio in canvas
- replacing semantic UI unnecessarily
- coupling app logic tightly to Pixi systems

Pixi components should remain isolated.

Suggested structure:

```txt
components/game/
```

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

# Naming Conventions

## Components

PascalCase

Examples:

- ProjectCard.vue
- HeroSection.vue

## Composables

camelCase prefixed with `use`

Examples:

- useTheme.ts
- useSeo.ts

## Utilities

kebab-case

Examples:

- format-date.ts

## Routes

kebab-case

Examples:

- /projects/contrast-the-color-wars

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

GitHub with Github Actions

1. Merged to main
2. Actions to push Live in Github Pages

## Production Hosting

Phase I:

- GitHub Pages

Future:

- Netlify (under evaluation)

## Workflow

1. Local development
2. Feature branch
3. Commit changes
4. Push feature branch
5. Open Pull Request into dev
6. Automated CI validation
7. Merge into dev
8. Merge dev into main
9. Automated GitHub Pages deployment

---

# Status

## Current status

v1.0.0
Phase I complete.

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
