import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { getParcoursStepBySlug, ParcoursStep } from '../parcours.data';
import { highlightPortfolioText } from '../../shared/skill-links.util';

@Component({
  selector: 'app-parcours-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './parcours-detail.component.html',
  styleUrls: ['./parcours-detail.component.css']
})
export class ParcoursDetailComponent implements OnInit {
  step?: ParcoursStep;
  readonly highlightPortfolioText = highlightPortfolioText;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.step = getParcoursStepBySlug(slug);

      if (!this.step) {
        this.router.navigate(['/parcours']);
      }
    });
  }
}
