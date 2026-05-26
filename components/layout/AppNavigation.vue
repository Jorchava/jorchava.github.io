<script setup lang="ts">
import { navigationItems } from '~/data/navigation/navigation'
</script>

<template>
  <nav class="app-navigation" aria-label="Primary navigation">
    <ul class="app-navigation__list flex">
      <li
        v-for="item in navigationItems"
        :key="item.href"
        class="app-navigation__item"
      >
        <a :href="item.href" class="app-navigation__link">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.app-navigation {
  &__list {
    align-items: center;
    gap: 1.5rem;

    margin: 0;
    padding: 0;

    list-style: none;
  }

  &__link {
    color: var(--color-text);
    text-decoration: none;

    transition: color var(--transition-default);

    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
