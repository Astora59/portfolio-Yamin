import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PARCOURS_STEPS, ParcoursStep } from './parcours.data';
import { emphasizePortfolioText } from '../shared/skill-links.util';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent {
  readonly timelineSteps = [...PARCOURS_STEPS].sort((a, b) => b.order - a.order)
  readonly emphasizePortfolioText = emphasizePortfolioText
  activeFilter: ParcoursStep['category'] | 'all' = 'all'
  readonly filterOptions: Array<{ key: ParcoursStep['category'] | 'all'; label: string; chipClass: string }> = [
    { key: 'all', label: 'Tous', chipClass: 'legend-chip--all' },
    { key: 'school', label: 'École', chipClass: 'legend-chip--school' },
    { key: 'company', label: 'Entreprise', chipClass: 'legend-chip--company' },
    { key: 'mixed', label: 'École & entreprise', chipClass: 'legend-chip--mixed' },
  ]

  get filteredTimelineSteps(): ParcoursStep[] {
    if (this.activeFilter === 'all') {
      return this.timelineSteps
    }

    return this.timelineSteps.filter((step) => step.category === this.activeFilter)
  }

  setFilter(filter: ParcoursStep['category'] | 'all'): void {
    this.activeFilter = filter
  }
}
