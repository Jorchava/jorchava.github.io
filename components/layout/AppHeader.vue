<script setup lang="ts">
import { navigationItems } from '~/data/navigation/navigation'
import { useActiveSection } from '~/composables/useActiveSection'

const isMenuOpen = ref(false)
const mobileMenuRef = ref<HTMLElement | null>(null)
const menuToggleRef = ref<HTMLButtonElement | null>(null)
const { activeSection } = useActiveSection()
const MOBILE_BREAKPOINT = 768

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleResize = () => {
  if (window.innerWidth >= MOBILE_BREAKPOINT) closeMenu()
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeMenu()
}

const handleTabTrap = (event: KeyboardEvent) => {
  if (!isMenuOpen.value || event.key !== 'Tab') return
  const focusableElements = [
    menuToggleRef.value,
    ...Array.from(
      mobileMenuRef.value?.querySelectorAll<HTMLElement>('a, button') ?? []
    ),
  ].filter(Boolean) as HTMLElement[]
  if (!focusableElements?.length) return
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault()
    lastElement?.focus()
  }
  if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault()
    firstElement?.focus()
  }
}

watch(isMenuOpen, async (value) => {
  document.documentElement.classList.toggle('menu-open', value)
  if (value) {
    window.addEventListener('keydown', handleEscape)
    window.addEventListener('keydown', handleTabTrap)
    await nextTick()
    const firstLink = mobileMenuRef.value?.querySelector<HTMLElement>('a')
    firstLink?.focus()
  } else {
    window.removeEventListener('keydown', handleEscape)
    window.removeEventListener('keydown', handleTabTrap)
    menuToggleRef.value?.focus()
  }
})

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleEscape)
  window.removeEventListener('keydown', handleTabTrap)
  document.documentElement.classList.remove('menu-open')
})
</script>

<template>
  <header class="app-header">
    <AppContainer>
      <div class="app-header__content flex">
        <NuxtLink to="/" aria-label="Go to homepage" class="app-header__logo pixel-font">
          JORCHAVA
        </NuxtLink>

        <nav class="app-header__desktop-nav" aria-label="Primary navigation">
          <a v-for="item in navigationItems" :key="item.href" :href="item.href" :class="[
            'app-header__link',
            {
              'app-header__link--active':
                activeSection === item.href.replace('/#', ''),
            },
          ]">
            {{ item.label }}
          </a>
          <ThemeToggle />
        </nav>

        <button ref="menuToggleRef" class="app-header__toggle" type="button" :aria-expanded="isMenuOpen"
          aria-controls="mobile-navigation" :aria-label="`${isMenuOpen ? 'Close' : 'Open'} navigation menu`"
          aria-haspopup="menu" @click="toggleMenu">
          <span />
          <span />
        </button>
        <Transition name="menu">
          <div v-if="isMenuOpen" class="mobile-menu flex" @click="closeMenu">
            <nav id="mobile-navigation" ref="mobileMenuRef" class="mobile-menu__nav flex"
              aria-label="Primary navigation" :aria-hidden="!isMenuOpen" @click.stop>
              <a v-for="item in navigationItems" :key="item.href" :href="item.href" :class="[
                'mobile-menu__link',
                {
                  'mobile-menu__link--active':
                    activeSection === item.href.replace('/#', ''),
                },
              ]" @click="closeMenu">
                {{ item.label }}
              </a>
              <ThemeToggle />
            </nav>
          </div>
        </Transition>
      </div>
    </AppContainer>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  border-bottom: 1px solid var(--color-border-subtle);
  background: var(--color-overlay);
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

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.35rem;
      width: 100%;
      height: 1px;
      background: var(--color-primary);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform var(--transition-default);
    }

    &:hover::after,
    &--active::after {
      transform: scaleX(1);
      transform-origin: left;
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
  background: var(--color-overlay-strong);
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

:deep(.menu-enter-active),
:deep(.menu-leave-active) {
  transition: opacity 220ms ease, transform 220ms ease;
}

:deep(.menu-enter-from),
:deep(.menu-leave-to) {
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
