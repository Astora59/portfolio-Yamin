export interface Realisation {
  title: string
  slug: string
  shortDescription: string
  externalLink?: {
    label: string
    url: string
    spotlightTitle?: string
    spotlightDescription?: string
  }
  article: {
    presentation: string
    objectives: string
    steps: string
    results: string
    future: string
  }
  relatedSkills: {
    label: string
    link: string
  }[]
  relatedParcours?: {
    label: string
    link: string
  }[]
}
