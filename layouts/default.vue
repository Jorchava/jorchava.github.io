<template>
  <div class="app-layout flex">
    <AppHeader />
    <main id="main-content" class="app-main"><slot /></main>
    <AppFooter />
  </div>
</template>
<style lang="scss" scoped>
.app {
  &-layout {
    min-height: 100vh;
    flex-direction: column;
    background: var(--color-background);
  }
  &-main {
    flex: 1;
    padding-top: 5rem;
  }
}
</style>
