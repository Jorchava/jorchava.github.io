import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type RevealPreset = 'fade-up' | 'fade-left' | 'fade-right' | 'scale'

interface RevealOptions {
  preset?: RevealPreset
  delay?: number
  duration?: number
  stagger?: number
}

export const useRevealAnimation = (
  selector: string,
  options: RevealOptions = {}
) => {
  const triggers: ScrollTrigger[] = []

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const {
      preset = 'fade-up',
      delay = 0,
      duration = 0.9,
      stagger = 0.12,
    } = options

    const elements = gsap.utils.toArray<HTMLElement>(selector)

    const isMobile = window.innerWidth < 768

    const distance = isMobile ? 24 : 48

    const animations = {
      'fade-up': {
        y: distance,
        opacity: 0,
      },

      'fade-left': {
        x: distance,
        opacity: 0,
      },

      'fade-right': {
        x: -distance,
        opacity: 0,
      },

      scale: {
        scale: 0.92,
        opacity: 0,
      },
    }

    elements.forEach((element, index) => {
      const animation = gsap.from(element, {
        ...animations[preset],

        duration,
        delay: delay + index * stagger,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: element,
          start: 'top 92%',
          once: true,
        },
      })
      if (animation.scrollTrigger) {
        triggers.push(animation.scrollTrigger)
      }
    })
  })
  onBeforeUnmount(() => {
    triggers.forEach((trigger) => trigger.kill())
  })
}
