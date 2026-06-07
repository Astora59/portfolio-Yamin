import { SkillArticle } from "./skill-article.model"

export type SkillType = 'technical' | 'soft'

export interface Skill {
  name: string
  slug: string
  icon: string
  summary: string
  level: number
  type: SkillType
  article: SkillArticle
}
