<script setup lang="ts">
import { skills } from '~/data/skills/skills'
</script>

<template>
  <section id="skills" class="section skills">
    <AppContainer>
      <div class="skills__content flex">
        <div class="skills__intro">
          <p class="section-label pixel-font">SKILLS</p>

          <h2 class="section-title">
            Modern frontend engineering focused on scalable interactive systems.
          </h2>

          <p class="section-description">
            Building performant applications and immersive web experiences using
            modern frontend technologies, scalable architecture, and
            game-inspired interaction design.
          </p>
        </div>

        <div class="skills-grid reveal">
          <article
            v-for="category in skills"
            :key="category.title"
            class="skills-card surface"
          >
            <h3 class="skills-card__title">
              {{ category.title }}
            </h3>

            <ul class="skills-card__list flex">
              <li
                v-for="skill in category.items"
                :key="skill"
                class="skills-card__item"
              >
                {{ skill }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  &__content {
    flex-direction: column;
    gap: 4rem;
  }
  &__intro {
    max-width: 60rem;
  }
}
.skills-grid {
  display: grid;
  gap: 1.5rem;
}

.skills-card {
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);

  &__title {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  &__list {
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  &__item {
    padding: 0.65rem 1rem;
    border: 1px solid var(--color-border);
    border-radius: 999px;
    color: var(--color-text-muted);
    background: rgb(255 255 255 / 0.02);
  }
}
@include respond(md) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@include respond(lg) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
