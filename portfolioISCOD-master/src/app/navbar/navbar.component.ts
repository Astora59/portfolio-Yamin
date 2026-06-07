import { Component } from '@angular/core';
import { SKILLS } from '../competences/data/skills.data';
import { Skill } from '../competences/models/skill.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PARCOURS_STEPS } from '../parcours/parcours.data';
import { REALISATIONS } from '../realisations/data/realisations.data';
import { Realisation } from '../realisations/models/realisation.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
    standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class NavbarComponent {
  isOpen = false
  readonly profilePhotoUrl = 'assets/yamin.jpg'

  skills: Skill[] = SKILLS
  parcoursSteps = [...PARCOURS_STEPS].sort((a, b) => b.order - a.order)
  realisations: Realisation[] = REALISATIONS
  private readonly sharedTones: Record<string, { accent: string; soft: string }> = {
    blue: { accent: '#60a5fa', soft: 'rgba(96, 165, 250, 0.18)' },
    green: { accent: '#34d399', soft: 'rgba(52, 211, 153, 0.18)' },
    orange: { accent: '#f59e0b', soft: 'rgba(245, 158, 11, 0.18)' },
    teal: { accent: '#2dd4bf', soft: 'rgba(45, 212, 191, 0.18)' },
    rose: { accent: '#fb7185', soft: 'rgba(251, 113, 133, 0.18)' },
    purple: { accent: '#a78bfa', soft: 'rgba(167, 139, 250, 0.18)' },
  };
  private readonly skillToneBySlug: Record<string, keyof NavbarComponent['sharedTones']> = {
    'angular-front': 'blue',
    'svelte': 'teal',
    'java-spring': 'orange',
    'docker-devops': 'green',
    'tests': 'rose',
    'communication-projet': 'orange',
    'relation-client': 'rose',
    'travail-equipe': 'teal',
    'adaptabilite-autonomie': 'green',
    'analyse-rigueur': 'blue',
  };
  private readonly realisationToneBySlug: Record<string, keyof NavbarComponent['sharedTones']> = {
    'refonte-site-upc-jean-mermoz': 'green',
    'plateforme-consultation-metier': 'blue',
    'applications-rh-paie-weekera': 'orange',
    'ci-cd-deploy': 'rose',
    'pilotage-projet-ofit': 'purple',
  };

  readonly sectionTones = {
    about: 'text-blue-300 hover:text-blue-200',
    parcours: 'text-cyan-300 hover:text-cyan-200',
    competences: 'text-rose-300 hover:text-rose-200',
    realisations: 'text-indigo-300 hover:text-indigo-200',
    contact: 'text-blue-300 hover:text-blue-200',
  };

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  closeMenu(): void {
    this.isOpen = false;
  }

  getParcoursMenuStyle(step: { accent: string; accentSoft: string }): Record<string, string> {
    return this.buildSubmenuItemStyle(step.accent, step.accentSoft);
  }

  getSkillMenuStyle(skill: Skill): Record<string, string> {
    const toneKey = this.skillToneBySlug[skill.slug] ?? 'blue';
    const tone = this.sharedTones[toneKey];

    return this.buildSubmenuItemStyle(tone.accent, tone.soft);
  }

  getRealisationMenuStyle(realisation: Realisation): Record<string, string> {
    const toneKey = this.realisationToneBySlug[realisation.slug] ?? 'blue';
    const tone = this.sharedTones[toneKey];

    return this.buildSubmenuItemStyle(tone.accent, tone.soft);
  }

  private buildSubmenuItemStyle(accent: string, soft: string): Record<string, string> {
    return {
      color: '#e5e7eb',
      borderLeft: `3px solid ${accent}`,
      background: `linear-gradient(90deg, ${soft} 0%, rgba(15, 23, 42, 0) 60%)`,
    };
  }
}
