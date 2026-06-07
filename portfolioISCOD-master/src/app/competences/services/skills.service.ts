import { Injectable } from '@angular/core'
import { Skill } from '../models/skill.model'
import { SKILLS } from '../data/skills.data'

@Injectable({ providedIn: 'root' })
export class SkillsService {
  getAll(): Skill[] {
    return SKILLS
  }

  getBySlug(slug: string): Skill | undefined {
    return SKILLS.find((skill) => skill.slug === slug)
  }
}
