<script setup lang="ts">
import type { Project } from '~/data/projects/projects'

interface Props {
  projects: Project[]
}

defineProps<Props>()

useRevealAnimation('.projects-card', {
  stagger: 0.18,
  duration: 0.9,
})
</script>

<template>
  <div class="projects-grid">
    <ProjectsCard
      v-for="project in projects"
      :key="project.title"
      v-bind="project"
    />
  </div>
</template>

<style lang="scss" scoped>
.projects-grid {
  display: grid;
  gap: 2rem;
}
@include respond(md) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@include respond(xl) {
  .projects-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
