<script setup lang="ts">
import { projects } from '~/data/projects/projects'
</script>

<template>
  <section id="projects" class="section projects" tabindex="-1">
    <AppContainer>
      <div class="projects__content flex">
        <div class="projects__header reveal">
          <p class="section-label pixel-font">PROJECTS</p>

          <h2 class="section-title">
            Selected work and interactive experiments.
          </h2>

          <p class="section-description">
            A collection of frontend engineering projects, game-inspired
            interfaces, and interactive web experiences focused on performance,
            scalability, and user experience quality.
          </p>
        </div>

        <ProjectsGrid :projects="projects" />
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  &__content {
    flex-direction: column;
    gap: 4rem;
  }
  &__header {
    max-width: 720px;
  }
}
</style>
