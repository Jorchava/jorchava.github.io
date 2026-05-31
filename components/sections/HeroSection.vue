<script setup lang="ts">
import gsap from 'gsap'

const heroTitle = ref<HTMLElement | null>(null)

useRevealAnimation('.hero__eyebrow', {
  delay: 0.1,
})

useRevealAnimation('.hero__title', {
  delay: 0.2,
})

useRevealAnimation('.hero__description', {
  delay: 0.35,
})

useRevealAnimation('.hero__actions', {
  delay: 0.5,
})

onMounted(() => {
  if (!heroTitle.value) return

  gsap.to(heroTitle.value, {
    yPercent: 12,
    ease: 'none',
    scrollTrigger: {
      trigger: heroTitle.value,
      scrub: true,
    },
  })
})
</script>

<template>
  <section id="hero" class="section hero" tabindex="-1">
    <AppContainer>
      <div class="hero__content">
        <p class="hero__eyebrow section-label pixel-font">JORCHAVA</p>

        <h1 ref="heroTitle" class="hero__title">
          Frontend & Web Game Developer
        </h1>

        <p class="hero__description">
          Building interactive experiences with code and pixels.
        </p>
        <div class="hero__actions flex">
          <a href="#projects" class="hero__button surface">View Projects</a>

          <a
            href="#contact"
            class="hero__button surface hero__button--secondary"
            >Contact</a
          >
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: min(100vh, 1200px);
  background: var(--color-background);
  position: relative;
  overflow: clip;
  &__content {
    max-width: var(--content-max-width);
    margin-inline: auto;
  }
  &__title {
    font-size: clamp(3rem, 10vw, 7rem);
    margin-bottom: 1.5rem;
    line-height: 0.95;
    letter-spacing: -0.04em;
    max-width: 10ch;
  }
  &__description {
    max-width: 40ch;
    margin-bottom: 2.5rem;
    font-size: 1.25rem;
    color: var(--color-text-muted);
  }
  &__actions {
    flex-wrap: wrap;
    gap: 1rem;
  }
  &__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3rem;
    padding-inline: 1.5rem;
    border-radius: var(--radius-md);
    color: var(--color-text);
    text-decoration: none;
    @include hover-lift;
    transition:
      border-color var(--transition-default),
      transform var(--transition-default),
      background var(--transition-default);
    &:hover {
      border-color: var(--color-primary);
    }
    &--secondary {
      background: transparent;
    }
  }
}
@include respond(md) {
  .hero {
    &__actions {
      flex-wrap: nowrap;
    }
  }
}
</style>
