import { onBeforeUnmount, onMounted, ref } from 'vue'

export const useActiveSection = () => {
  const activeSection = ref('hero')

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const sections = document.querySelectorAll('section[id]')

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    )

    sections.forEach((section) => {
      observer?.observe(section)
    })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return {
    activeSection,
  }
}
