<script setup lang="ts">
interface Props {
  size?: 'default' | 'narrow' | 'wide' | 'full'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})
</script>

<template>
  <div class="container" :class="`container--${props.size}`">
    <slot />
  </div>
</template>
