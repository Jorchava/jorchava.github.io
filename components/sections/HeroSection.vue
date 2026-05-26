<template>
  <section id="hero" class="section hero">
    <AppContainer>
      <div class="hero__content">
        <p class="hero__eyebrow pixel-font reveal">JORCHAVA</p>

        <h1 class="hero__title reveal">Frontend & Web Game Developer</h1>

        <p class="hero__description reveal">
          Building interactive experiences with code and pixels.
        </p>
        <div class="hero__actions flex reveal">
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
  min-height: 100vh;
  align-items: center;
  background: var(--color-background);
  position: relative;
  overflow: clip;
  &__content {
    max-width: var(--content-max-width);
    margin-inline: auto;
  }
  &__eyebrow {
    color: var(--color-primary);
    margin-bottom: 1rem;
  }
  &__title {
    font-size: clamp(3rem, 10vw, 7rem);
    margin-bottom: 1.5rem;
    line-height: 0.95;
    letter-spacing: -0.04em;
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
