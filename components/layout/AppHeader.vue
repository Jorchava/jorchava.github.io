<script setup lang="ts">
import { navigationItems } from '~/data/navigation/navigation'
import { useActiveSection } from '~/composables/useActiveSection'

const isMenuOpen = ref(false)

const { activeSection } = useActiveSection()

const MOBILE_BREAKPOINT = 768

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleResize = () => {
  if (window.innerWidth >= MOBILE_BREAKPOINT) {
    closeMenu()
  }
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

watch(isMenuOpen, (value) => {
  document.documentElement.classList.toggle('menu-open', value)
})

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleEscape)
  document.documentElement.classList.remove('menu-open')
})
</script>

<template>
  <header class="app-header">
    <AppContainer>
      <div class="app-header__content flex">
        <a href="#hero" class="app-header__logo pixel-font"> JORCHAVA </a>

        <nav class="app-header__desktop-nav">
          <a
            v-for="item in navigationItems"
            :key="item.href"
            :href="item.href"
            :class="[
              'app-header__link',
              {
                'app-header__link--active':
                  activeSection === item.href.replace('#', ''),
              },
            ]"
          >
            {{ item.label }}
          </a>
        </nav>

        <button
          class="app-header__toggle"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation menu"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </AppContainer>

    <Teleport to="body">
      <Transition name="menu">
        <div v-if="isMenuOpen" class="mobile-menu flex" @click="closeMenu">
          <nav class="mobile-menu__nav flex" @click.stop>
            <a
              v-for="item in navigationItems"
              :key="item.href"
              :href="item.href"
              :class="[
                'mobile-menu__link',
                {
                  'mobile-menu__link--active':
                    activeSection === item.href.replace('#', ''),
                },
              ]"
              @click="closeMenu"
            >
              {{ item.label }}
            </a>
          </nav>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  border-bottom: 1px solid rgb(255 255 255 / 0.06);
  background: rgb(13 12 12 / 0.8);
  backdrop-filter: blur(16px);
  width: 100%;
  &__content {
    align-items: center;
    justify-content: space-between;
    min-height: 5rem;
  }
  &__logo {
    color: var(--color-text);
    text-decoration: none;
  }
  &__desktop-nav {
    display: none;
    align-items: center;
    gap: 2rem;
  }
  &__link {
    color: var(--color-text);
    text-decoration: none;
    position: relative;
    @include transition;
    &:hover {
      color: var(--color-primary);
    }
    &--active {
      color: var(--color-primary);
    }
  }
  &__toggle {
    position: relative;
    width: 3rem;
    height: 3rem;
    border: 0;
    background: transparent;
    cursor: pointer;
    span {
      position: absolute;
      left: 50%;
      width: 24px;
      height: 2px;
      background: var(--color-text);
      transition: all var(--transition-default);
      transform: translateX(-50%);
    }
    span:first-child {
      top: 1.1rem;
    }
    span:last-child {
      bottom: 1.1rem;
    }
    &[aria-expanded='true'] {
      span:first-child {
        top: 50%;
        transform: translateX(-50%) rotate(45deg);
      }
      span:last-child {
        bottom: calc(50% - 1px);
        transform: translateX(-50%) rotate(-45deg);
      }
    }
  }
}
.mobile-menu {
  position: fixed;
  inset: 5rem 0 0;
  z-index: 9000;
  overflow-y: auto;
  align-items: flex-start;
  justify-content: center;
  padding-top: 6rem;
  background: rgb(13 12 12 / 0.96);
  backdrop-filter: blur(20px);
  min-height: calc(100dvh - 5rem);
  &__nav {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  &__link {
    font-size: clamp(2rem, 8vw, 4rem);
    color: var(--color-text);
    text-decoration: none;
    @include transition;
    &:hover {
      color: var(--color-primary);
    }
    &--active {
      color: var(--color-primary);
    }
  }
}
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 220ms ease,
    transform 220ms ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
@include respond(md) {
  .app-header {
    &__desktop-nav {
      display: flex;
    }
    &__toggle {
      display: none;
    }
  }
}
</style>
