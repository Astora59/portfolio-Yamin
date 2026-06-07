import { Component } from '@angular/core'

import { SKILLS } from './data/skills.data'
import { Skill } from './models/skill.model'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-competences',
  standalone:true,
   imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css'],
})
export class CompetencesComponent {
  technicalSkills: Skill[] = []
  softSkills: Skill[] = []
  readonly technicalSectionTone = {
    accent: '#60a5fa',
    soft: 'rgba(96, 165, 250, 0.18)',
    glow: 'rgba(96, 165, 250, 0.16)',
  }
  readonly softSectionTone = {
    accent: '#fb7185',
    soft: 'rgba(251, 113, 133, 0.18)',
    glow: 'rgba(251, 113, 133, 0.14)',
  }
  private readonly skillTones: Record<string, { accent: string; soft: string; glow: string }> = {
    'angular-front': {
      accent: '#60a5fa',
      soft: 'rgba(96, 165, 250, 0.18)',
      glow: 'rgba(96, 165, 250, 0.16)',
    },
    'svelte': {
      accent: '#2dd4bf',
      soft: 'rgba(45, 212, 191, 0.18)',
      glow: 'rgba(45, 212, 191, 0.16)',
    },
    'java-spring': {
      accent: '#f59e0b',
      soft: 'rgba(245, 158, 11, 0.18)',
      glow: 'rgba(245, 158, 11, 0.16)',
    },
    'docker-devops': {
      accent: '#34d399',
      soft: 'rgba(52, 211, 153, 0.18)',
      glow: 'rgba(52, 211, 153, 0.16)',
    },
    tests: {
      accent: '#fb7185',
      soft: 'rgba(251, 113, 133, 0.18)',
      glow: 'rgba(251, 113, 133, 0.14)',
    },
    'communication-projet': {
      accent: '#f59e0b',
      soft: 'rgba(245, 158, 11, 0.18)',
      glow: 'rgba(245, 158, 11, 0.16)',
    },
    'relation-client': {
      accent: '#fb7185',
      soft: 'rgba(251, 113, 133, 0.18)',
      glow: 'rgba(251, 113, 133, 0.14)',
    },
    'travail-equipe': {
      accent: '#2dd4bf',
      soft: 'rgba(45, 212, 191, 0.18)',
      glow: 'rgba(45, 212, 191, 0.16)',
    },
    'adaptabilite-autonomie': {
      accent: '#34d399',
      soft: 'rgba(52, 211, 153, 0.18)',
      glow: 'rgba(52, 211, 153, 0.16)',
    },
    'analyse-rigueur': {
      accent: '#60a5fa',
      soft: 'rgba(96, 165, 250, 0.18)',
      glow: 'rgba(96, 165, 250, 0.16)',
    },
  }

  constructor() {
    this.technicalSkills = SKILLS.filter(s => s.type === 'technical')
    this.softSkills = SKILLS.filter(s => s.type === 'soft')
  }

  getToneStyle(skill: Skill): Record<string, string> {
    const tone = this.skillTones[skill.slug] ?? this.technicalSectionTone

    return {
      '--skill-accent': tone.accent,
      '--skill-accent-soft': tone.soft,
      '--skill-accent-glow': tone.glow,
    }
  }

  getSkillLevelLabel(skill: Skill): string {
    if (skill.level >= 85) {
      return 'Avancé'
    }

    if (skill.level >= 60) {
      return 'Intermédiaire'
    }

    return 'Débutant'
  }
}
