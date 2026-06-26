<script setup lang="ts">
interface Props {
  slug: string
  title: string
  description: string
  tags: string[]
  image: string
}

defineProps<Props>()
</script>

<template>
  <article class="projects-card surface flex">
    <div class="projects-card__content flex">
      <div class="projects-card__image">
        <NuxtImg v-if="image" :src="image" :alt="`${title} project's screenshot`" loading="lazy" />
      </div>
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

    <NuxtLink :to="`/projects/${slug}`" class="projects-card__link" :aria-label="`View case study for ${title}`">View
      Case Study
      <Icon name="heroicons:arrow-right-20-solid" class="projects-card__icon" />
    </NuxtLink>
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
  transition:
    transform var(--transition-default),
    border-color var(--transition-default),
    box-shadow var(--transition-default);

  &:hover {
    transform: translateY(-6px);
    border-color: var(--color-primary);
    box-shadow:
      0 0 0 1px rgba(255, 106, 0, 0.2),
      0 12px 32px rgba(0, 0, 0, 0.35);

    .projects-card__image :deep(img) {
      transform: scale(1.03);
    }

    .projects-card__icon {
      transform: translate(3px, -3px);
    }
  }

  &__content {
    flex-direction: column;
    gap: 1.5rem;
  }

  &__image {
    overflow: hidden;
    border-radius: var(--radius-md);
    margin-bottom: 1rem;
    aspect-ratio: 16 / 9;

    :deep(img) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform var(--transition-default);
    }
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
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__icon {
    transition: transform var(--transition-default);
  }
}
</style>
