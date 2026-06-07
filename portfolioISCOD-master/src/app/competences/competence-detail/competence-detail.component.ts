import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../models/skill.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SkillsService } from '../services/skills.service';
import { highlightPortfolioText } from '../../shared/skill-links.util';


@Component({
  selector: 'app-competence-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './competence-detail.component.html',
  styleUrls: ['./competence-detail.component.css']
})
export class CompetenceDetailComponent implements OnInit {
  skill?: Skill
  readonly highlightPortfolioText = highlightPortfolioText
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private skillsService: SkillsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug')

      if (!slug) {
        this.router.navigate(['/comp'])
        return
      }

      this.skill = this.skillsService.getBySlug(slug)

      if (!this.skill) {
        this.router.navigate(['/comp'])
      }
    })
  }

  goBack(): void {
  this.router.navigate(['/comp'])
}

  getToneStyle(skill: Skill | undefined): Record<string, string> {
    if (!skill) {
      return {}
    }

    const tone = this.skillTones[skill.slug] ?? this.skillTones['angular-front']

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
