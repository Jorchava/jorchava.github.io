<script setup lang="ts">
import { experience } from '~/data/experience/experience'
</script>

<template>
  <section id="resume" class="section resume-section">
    <AppContainer size="narrow">
      <div class="resume-section__header">
        <p class="resume-section__eyebrow pixel-font">RESUME</p>

        <h2 class="resume-section__title">
          Experience built through engineering-focused frontend development.
        </h2>

        <p class="resume-section__description">
          A growing foundation in frontend engineering, scalable systems,
          interactive development, and user experience architecture.
        </p>
      </div>

      <div class="resume-section__timeline">
        <ResumeItem v-for="item in experience" :key="item.title" :item="item" />
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.resume-section {
  &__header {
    margin-bottom: 5rem;
  }
  &__eyebrow {
    margin-bottom: 1rem;
    color: var(--color-primary);
  }
  &__title {
    max-width: 12ch;
    margin-bottom: 2rem;
    font-size: clamp(3rem, 8vw, 5.5rem);
    line-height: 0.95;
    letter-spacing: -0.04em;
  }
  &__description {
    max-width: 65ch;
    line-height: 1.8;
    color: var(--color-text-muted);
  }
}
</style>
