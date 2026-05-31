<script setup lang="ts">
import { socials } from '~/data/socials/socials'
</script>

<template>
  <section id="contact" class="section contact-section" tabindex="-1">
    <AppContainer>
      <div class="contact-section__content reveal">
        <div class="contact-section__intro">
          <p class="section-label pixel-font">CONTACT</p>

          <h2 class="contact-section__title">
            Let’s build interactive experiences together.
          </h2>

          <p class="contact-section__description">
            Interested in frontend engineering, interactive web experiences, UI
            systems, or game-inspired development? Let’s connect.
          </p>
        </div>

        <div class="contact-section__panel surface">
          <div class="contact-section__links flex">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              class="contact-section__link flex"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Open ${social.label} in a new tab`"
            >
              <span>{{ social.label }}</span>

              <span class="contact-section__arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          <a
            href="/jorchavaCV.pdf"
            class="contact-section__resume"
            target="_blank"
          >
            Download Resume
          </a>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.contact-section {
  padding-bottom: 10rem;
  &__content {
    display: grid;
    gap: 4rem;
  }
  &__intro {
    max-width: 720px;
  }
  &__title {
    margin-bottom: 2rem;
    font-size: clamp(3rem, 8vw, 6rem);
    line-height: 0.95;
    letter-spacing: -0.04em;
  }
  &__description {
    max-width: 60ch;
    line-height: 1.8;
    color: var(--color-text-muted);
  }
  &__panel {
    padding: 2rem;
    border: 1px solid var(--color-border-subtle);
    border-radius: var(--radius-lg);
    background: linear-gradient(
      180deg,
      var(--color-surface-elevated),
      var(--color-surface-elevated-less)
    );
  }
  &__links {
    flex-direction: column;
  }
  &__link {
    align-items: center;
    justify-content: space-between;
    padding-block: 1.5rem;
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text);
    text-decoration: none;
    font-size: clamp(1.25rem, 3vw, 2rem);
    min-height: 88px;
    @include transition;
    &:hover {
      color: var(--color-primary);
    }
  }
  &__link:hover &__arrow {
    transform: translate(3px, -3px);
  }
  &__arrow {
    font-size: 1.25rem;
    color: var(--color-primary);
    transition:
      transform var(--transition-default),
      color var(--transition-default);
  }
  &__resume {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3rem;
    margin-top: 2rem;
    padding-inline: 1.5rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text);
    text-decoration: none;
    @include transition;
    @include hover-border;
    &:hover {
      transform: translateY(-2px);
    }
  }
}
@include respond(xl) {
  .contact-section {
    &__content {
      grid-template-columns: 1.2fr 0.8fr;
      align-items: start;
    }
    &__panel {
      position: sticky;
      top: 8rem;
    }
  }
}
</style>
