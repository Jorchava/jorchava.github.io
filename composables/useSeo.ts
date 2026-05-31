import { seoConfig } from '~/constants/seo'

interface SeoOptions {
  title?: string
  description?: string
}

export const useSeo = (options: SeoOptions = {}) => {
  const title = options.title ? `${options.title} — JORCHAVA` : seoConfig.title

  const description = options.description || seoConfig.description

  useSeoMeta({
    title,
    description,

    ogTitle: title,
    ogDescription: description,

    twitterTitle: title,
    twitterDescription: description,
  })
}
