<template>
  <section id="about" class="section about">
    <AppContainer size="narrow">
      <div class="about__content flex reveal">
        <p class="about__eyebrow pixel-font">ABOUT</p>

        <h2 class="section-title">
          Building polished frontend experiences with engineering discipline.
        </h2>

        <div class="about__body">
          <p>
            I specialize in frontend engineering and interactive web
            experiences, combining scalable architecture with modern UI
            development and game-inspired interaction design.
          </p>

          <p>
            My focus is building performant, maintainable applications using
            Vue, TypeScript, PixiJS, and modern frontend systems with strong
            attention to accessibility, responsiveness, and user experience
            quality.
          </p>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.about {
  &__content {
    flex-direction: column;
    gap: 2rem;
  }

  &__eyebrow {
    color: var(--color-primary);
  }

  &__body {
    display: grid;
    gap: 1.5rem;

    color: var(--color-text-muted);

    font-size: 1.125rem;
    line-height: 1.8;
  }
}
</style>
