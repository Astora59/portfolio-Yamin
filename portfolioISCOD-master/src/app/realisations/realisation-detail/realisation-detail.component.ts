import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Realisation } from '../models/realisation.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { REALISATIONS } from '../data/realisations.data';
import { highlightPortfolioText } from '../../shared/skill-links.util';

@Component({
  selector: 'app-realisation-detail',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './realisation-detail.component.html',
  styleUrls: ['./realisation-detail.component.css']
})
export class RealisationDetailComponent implements OnInit {
  realisation?: Realisation
  readonly highlightPortfolioText = highlightPortfolioText
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
    },
    'rbx': {
      accent: '#a35210',
      soft: 'rgba(167, 139, 250, 0.18)',
      glow: 'rgba(167, 139, 250, 0.14)',
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug')
      this.realisation = REALISATIONS.find((r) => r.slug === slug)

      if (!this.realisation) {
        this.router.navigate(['/real'])
      }
    })
  }

  getToneStyle(realisation: Realisation | undefined): Record<string, string> {
    if (!realisation) {
      return {}
    }

    const tone = this.realisationTones[realisation.slug] ?? this.realisationTones['plateforme-consultation-metier']

    return {
      '--real-accent': tone.accent,
      '--real-accent-soft': tone.soft,
      '--real-accent-glow': tone.glow,
    }
  }
}
