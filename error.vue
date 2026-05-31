<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>
<template>
  <main class="error-page">
    <div class="error-page__content">
      <p class="error-page__status">
        {{ error?.statusCode || 'Error' }}
      </p>

      <h1 class="error-page__title pixel-font">
        {{
          error?.statusCode === 404 ? 'Page not found' : 'Something went wrong'
        }}
      </h1>

      <p class="error-page__message">
        {{
          error?.statusCode === 404
            ? "The page you're looking for doesn't exist."
            : 'An unexpected error occurred.'
        }}
      </p>

      <button class="error-page__button" type="button" @click="handleError">
        Return Home
      </button>
    </div>
  </main>
</template>
<style lang="css" scoped>
.error-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  background: var(--color-background);
}

.error-page__content {
  text-align: center;
  max-width: 40rem;
}

.error-page__status {
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
}

.error-page__title {
  margin-top: 1rem;
}

.error-page__message {
  margin-top: 1rem;
  color: var(--color-text-muted);
}

.error-page__button {
  margin-top: 2rem;
}
</style>
