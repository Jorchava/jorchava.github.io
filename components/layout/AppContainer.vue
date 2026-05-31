<script setup lang="ts">
interface Props {
  narrow?: boolean
  full?: boolean
}

withDefaults(defineProps<Props>(), {
  narrow: false,
  full: false,
})
</script>

<template>
  <div
    class="container"
    :class="{
      'container--narrow': narrow,
      'container--full': full,
    }"
  >
    <slot />
  </div>
</template>
