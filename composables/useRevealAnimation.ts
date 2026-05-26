import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useRevealAnimation = (
  selector: string,
  options?: GSAPTweenVars
) => {
  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const elements = gsap.utils.toArray(selector)

    elements.forEach((element) => {
      gsap.from(element as Element, {
        y: 48,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element as Element,
          start: 'top 88%',
        },
        ...options,
      })
    })
  })
}
