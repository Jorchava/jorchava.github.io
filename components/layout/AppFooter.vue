<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <AppContainer>
      <div class="app-footer__content flex">
        <div class="app-footer__branding flex">
          <p class="app-footer__logo pixel-font">JORCHAVA</p>

          <p class="app-footer__text">
            Frontend engineering & interactive web experiences.
          </p>
        </div>

        <div class="app-footer__meta flex">
          <p>© {{ year }} Jorchava</p>

          <p>Built with Nuxt, Vue, TypeScript & PixiJS</p>
        </div>
      </div>
    </AppContainer>
  </footer>
</template>

<style lang="scss" scoped>
.app-footer {
  padding-block: 2rem;
  border-top: 1px solid var(--color-border);
  opacity: 0.92;
  &__content {
    flex-direction: column;
    gap: 2rem;
  }
  &__branding {
    flex-direction: column;
    gap: 0.75rem;
  }
  &__logo {
    color: var(--color-text);
    text-shadow: var(--shadow-logo-glow);
  }
  &__text,
  &__meta {
    color: var(--color-text-muted);
  }
  &__meta {
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.95rem;
  }
}
@include respond(md) {
  .app-footer {
    &__content {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    &__meta {
      align-items: flex-end;
      text-align: right;
    }
  }
}
</style>
