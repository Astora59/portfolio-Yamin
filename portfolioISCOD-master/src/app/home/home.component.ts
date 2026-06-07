import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactService } from '../contact/services/contact.service';
import { RouterLink } from '@angular/router';
import { PARCOURS_STEPS } from '../parcours/parcours.data';
import { REALISATIONS } from '../realisations/data/realisations.data';
import { highlightPortfolioText } from '../shared/skill-links.util';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly profilePhotoUrl = 'assets/yamin_smiling.jpg';
  readonly highlightPortfolioText = highlightPortfolioText;
  private readonly featuredProjectOrder = [
    'applications-rh-paie-weekera',
    'pilotage-projet-ofit',
    'ci-cd-deploy',
    'plateforme-consultation-metier',
    'refonte-site-upc-jean-mermoz',
  ];

  readonly featuredSkills = [
    {
      label: 'Angular / Front-end',
      route: '/comp/angular-front',
      tone: 'bg-blue-500/10 text-blue-200 border-blue-400/20',
    },
    {
      label: 'Java / Spring Boot',
      route: '/comp/java-spring',
      tone: 'bg-emerald-500/10 text-emerald-200 border-emerald-400/20',
    },
    {
      label: 'Docker & DevOps',
      route: '/comp/docker-devops',
      tone: 'bg-cyan-500/10 text-cyan-200 border-cyan-400/20',
    },
    {
      label: 'Communication en mode projet',
      route: '/comp/communication-projet',
      tone: 'bg-rose-500/10 text-rose-200 border-rose-400/20',
    },
  ];

  readonly featuredSteps = [...PARCOURS_STEPS].sort((a, b) => b.order - a.order);
  readonly featuredProjects = this.featuredProjectOrder
    .map((slug) => REALISATIONS.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));
  currentProjectIndex = 0;

  constructor(public contactModal: ContactService) {}

  showPreviousProject(): void {
    this.currentProjectIndex =
      this.currentProjectIndex === 0
        ? this.featuredProjects.length - 1
        : this.currentProjectIndex - 1;
  }

  showNextProject(): void {
    this.currentProjectIndex =
      this.currentProjectIndex === this.featuredProjects.length - 1
        ? 0
        : this.currentProjectIndex + 1;
  }

  goToProject(index: number): void {
    this.currentProjectIndex = index;
  }

  get projectTrackTransform(): string {
    return `translateX(-${this.currentProjectIndex * 100}%)`;
  }
}
