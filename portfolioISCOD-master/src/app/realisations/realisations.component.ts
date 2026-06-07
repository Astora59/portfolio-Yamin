import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { REALISATIONS } from './data/realisations.data';
import { emphasizePortfolioText } from '../shared/skill-links.util';

@Component({
  selector: 'app-realisations',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.css']
})
export class RealisationsComponent {
  private readonly realisationOrder = [
  
    'ci-cd-deploy',
    'just-an-easter-game',
    'cybergarde'
  ]

  realisations = this.realisationOrder
    .map((slug) => REALISATIONS.find((realisation) => realisation.slug === slug))
    .filter((realisation): realisation is NonNullable<typeof realisation> => Boolean(realisation))
  readonly emphasizePortfolioText = emphasizePortfolioText
  private readonly realisationTones: Record<string, { accent: string; soft: string; glow: string }> = {
    'just-an-easter-game': {
      accent: '#34d399',
      soft: 'rgba(52, 211, 153, 0.18)',
      glow: 'rgba(52, 211, 153, 0.16)',
    },
    'ci-cd-deploy': {
      accent: '#fb7185',
      soft: 'rgba(251, 113, 133, 0.18)',
      glow: 'rgba(251, 113, 133, 0.14)',
    },
    'cybergarde': {
      accent: '#a78bfa',
      soft: 'rgba(167, 139, 250, 0.18)',
      glow: 'rgba(167, 139, 250, 0.14)',
    }
  }

  getToneStyle(slug: string): Record<string, string> {
    const tone = this.realisationTones[slug] ?? this.realisationTones['plateforme-consultation-metier']

    return {
      '--real-accent': tone.accent,
      '--real-accent-soft': tone.soft,
      '--real-accent-glow': tone.glow,
    }
  }
}
