<script setup lang="ts">
import { projects } from '~/data/projects/projects'
import { getProjectBySlug } from '~/data/projects/getProjectBySlug'

const route = useRoute()

const currentProject = getProjectBySlug(
  route.params.slug as string
)

if (!currentProject) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found',
  })
}

const currentIndex = projects.findIndex(
  project => project.slug === route.params.slug
)

const previousProject =
  currentIndex > 0
    ? projects[currentIndex - 1]
    : null

const nextProject =
  currentIndex < projects.length - 1
    ? projects[currentIndex + 1]
    : null

useSeo({
  title: `${currentProject.title} | Jorchava`,
  description: currentProject.description,
})
</script>
<template>
  <AppContainer>
    <article class="project-page">

      <NuxtImg :src="currentProject.image" :alt="`${currentProject.title} hero screenshot`" class="project-page__hero"
        preload width="1200" height="675" sizes="xs:100vw sm:100vw md:100vw lg:1200px" />

      <NuxtLink to="/#projects" class="project-page__back">
        <Icon name="heroicons:arrow-left-20-solid" class="projects-page-back__icon" />Back to Projects
      </NuxtLink>

      <header class="project-page__header">
        <h1>{{ currentProject.title }}</h1>

        <p>
          {{ currentProject.description }}
        </p>

        <div class="project-page__actions">
          <NuxtLink :to="currentProject.href">
            {{ currentProject.linkLabel }}
            <Icon name="heroicons:arrow-top-right-on-square-20-solid" class="projects-page-actions__icon" />
          </NuxtLink>
        </div>
      </header>

      <section>
        <h2>Problem</h2>
        <p>{{ currentProject.problem }}</p>
      </section>

      <section>
        <h2>Solution</h2>
        <p>{{ currentProject.solution }}</p>
      </section>

      <section>
        <h2>Technologies</h2>

        <ul>
          <li v-for="technology in currentProject.technologies" :key="technology">
            {{ technology }}
          </li>
        </ul>
      </section>

      <section>
        <h2>Accessibility</h2>

        <ul>
          <li v-for="item in currentProject.accessibility" :key="item">
            {{ item }}
          </li>
        </ul>
      </section>

      <section>
        <h2>Performance</h2>

        <ul>
          <li v-for="item in currentProject.performance" :key="item">
            {{ item }}
          </li>
        </ul>
      </section>

      <section v-if="currentProject.screenshots.length">
        <h2>Screenshots</h2>

        <div class="project-page__gallery">
          <NuxtImg v-for="screenshot in currentProject.screenshots" :key="screenshot" :src="screenshot"
            :alt="`${currentProject.title} screenshot`" loading="lazy" />
        </div>
      </section>

      <section v-if="previousProject || nextProject" class="project-page__navigation">
        <h2 class="project-page__navigation-title">
          Continue Exploring
        </h2>
        <NuxtLink v-if="previousProject" :to="`/projects/${previousProject.slug}`" class="project-page__nav-card">

          <NuxtImg :src="previousProject.image" :alt="previousProject.title" class="project-page__nav-image"
            loading="lazy" />
          <span class="project-page__nav-label">
            Previous Project
          </span>

          <span class="project-page__nav-title">
            <Icon name="heroicons:arrow-left-20-solid" class="project-page__nav-icon" /> {{ previousProject.title }}
          </span>
        </NuxtLink>

        <NuxtLink v-if="nextProject" :to="`/projects/${nextProject.slug}`"
          class="project-page__nav-card project-page__nav-card--next">

          <NuxtImg :src="nextProject.image" :alt="nextProject.title" class="project-page__nav-image" loading="lazy" />
          <span class="project-page__nav-label">
            Next Project
          </span>

          <span class="project-page__nav-title">
            {{ nextProject.title }}
            <Icon name="heroicons:arrow-right-20-solid" class="project-page__nav-icon" />
          </span>
        </NuxtLink>
      </section>

    </article>
  </AppContainer>
</template>
<style scoped lang="scss">
.project-page {
  max-width: 1000px;
  margin-inline: auto;
  padding-block: 6rem;

  &__hero {
    width: 100%;
    border-radius: var(--radius-lg);
    margin-bottom: 3rem;
    border: 1px solid var(--color-border);
    height: auto;
  }

  &__back {
    display: inline-flex;
    margin-bottom: 2rem;
    color: var(--color-text-muted);
    text-decoration: none;
    gap: 0.5rem;
    align-items: center;

    &:hover {
      color: var(--color-primary);
    }
  }

  &__header {
    margin-bottom: 4rem;
    max-width: 850px;

    h1 {
      margin-bottom: 1rem;
      font-size: clamp(3rem, 8vw, 5rem);
      line-height: 0.95;
    }

    p {
      max-width: 70ch;
      color: var(--color-text-muted);
    }
  }

  section {
    margin-bottom: 4rem;
  }

  h2 {
    margin-bottom: 1rem;
    color: var(--color-primary);
  }

  &__actions {
    text-decoration: underline;
  }

  &__gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit,
        minmax(320px, 1fr));
    gap: 1.5rem;

    :deep(img) {
      width: 100%;
      border-radius: var(--radius-md);
    }
  }

  &__navigation {
    display: grid;
    gap: 1rem;
    margin-top: 5rem;

    &-title {
      grid-column: 1 / -1;
      margin-bottom: 1rem;
    }

    @include respond(md) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__nav-card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.5rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    background: var(--color-surface);
    text-decoration: none;
    transition:
      transform var(--transition-default),
      border-color var(--transition-default);

    &:hover {
      transform: translateY(-3px);
      border-color: var(--color-primary);
    }

    &--next {
      text-align: right;
    }
  }

  &__nav-label {
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }

  &__nav-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text);
    font-size: 1.125rem;
    font-weight: 600;
  }

  &__nav-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: var(--radius-md);
    margin-bottom: 1rem;
    display: block;
  }

  &__nav-card--next &__nav-title {
    justify-content: flex-end;
  }

  &__nav-icon {
    font-size: 1.25rem;
  }
}
</style>
