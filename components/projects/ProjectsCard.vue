<script setup lang="ts">
interface Props {
  title: string
  description: string
  tags: string[]
  href: string
}

defineProps<Props>()
</script>

<template>
  <article class="projects-card surface flex">
    <div class="projects-card__content flex">
      <h3 class="projects-card__title">
        {{ title }}
      </h3>

      <p class="projects-card__description">
        {{ description }}
      </p>

      <ul class="projects-card__tags flex">
        <li v-for="tag in tags" :key="tag" class="projects-card__tag">
          {{ tag }}
        </li>
      </ul>
    </div>

    <NuxtLink :to="href" class="projects-card__link"> View Project </NuxtLink>
  </article>
</template>

<style lang="scss" scoped>
.projects-card {
  flex-direction: column;
  justify-content: space-between;
  min-height: 320px;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  @include transition;
  @include hover-border;
  &__content {
    flex-direction: column;
    gap: 1.5rem;
  }
  &__title {
    font-size: 1.75rem;
  }
  &__description {
    color: var(--color-text-muted);
    line-height: 1.7;
  }
  &__tags {
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  &__tag {
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--color-border);
    border-radius: 999px;
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }
  &__link {
    margin-top: 2rem;
    color: var(--color-primary);
    text-decoration: none;
  }
}
</style>
