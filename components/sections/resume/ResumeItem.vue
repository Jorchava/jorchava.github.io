<script setup lang="ts">
import type { ExperienceItem } from '~/data/experience/experience'

interface Props {
  item: ExperienceItem
}

defineProps<Props>()
</script>

<template>
  <article class="resume-item reveal">
    <div class="resume-item__timeline flex">
      <span class="resume-item__dot"></span>
    </div>

    <div class="resume-item__content">
      <p class="resume-item__period pixel-font">
        {{ item.period }}
      </p>

      <h3 class="resume-item__title">
        {{ item.title }}
      </h3>

      <p class="resume-item__company">
        {{ item.company }}
      </p>

      <p class="resume-item__description">
        {{ item.description }}
      </p>

      <ul class="resume-item__technologies flex">
        <li
          v-for="technology in item.technologies"
          :key="technology"
          class="resume-item__technology"
        >
          {{ technology }}
        </li>
      </ul>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.resume-item {
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 1.5rem;
  &__timeline {
    position: relative;
    justify-content: center;
    &::after {
      content: '';
      position: absolute;
      top: 1rem;
      bottom: -4rem;
      width: 1px;
      background: var(--color-border);
    }
  }
  &:last-child &__timeline::after {
    display: none;
  }
  &__dot {
    width: 14px;
    height: 14px;
    margin-top: 0.35rem;
    border-radius: 999px;
    background: var(--color-primary);
    box-shadow: var(--shadow-primary-glow);
  }
  &__content {
    padding-bottom: 4rem;
  }
  &__period {
    margin-bottom: 1rem;
    font-size: 0.75rem;
    color: var(--color-primary);
  }
  &__title {
    margin-bottom: 0.5rem;
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
  &__company {
    margin-bottom: 1.25rem;
    color: var(--color-text-muted);
  }
  &__description {
    max-width: 65ch;
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: var(--color-text-muted);
  }
  &__technologies {
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  &__technology {
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--color-border);
    border-radius: 999px;
    font-size: 0.75rem;
    color: var(--color-text-muted);
    background: var(--color-surface-elevated);
  }
}
@include respond(md) {
  .resume-item {
    grid-template-columns: 48px 1fr;
    gap: 2rem;
  }
}
</style>
