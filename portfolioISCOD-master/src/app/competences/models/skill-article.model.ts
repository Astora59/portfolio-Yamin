export interface SkillAnecdote {
  title: string
  description: string
  result: string
  link?: string
}

export interface SkillArticle {
  definition: string
  proofs: SkillAnecdote[]
  selfCritique: string
  evolution: string
  relatedProjects: { label: string; link: string }[]
}
