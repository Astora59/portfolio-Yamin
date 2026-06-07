import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillNews } from './models/skill-news.model';
import { SkillNewsService } from './services/skill-news.service';

@Component({
  selector: 'app-skill-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-news.component.html',
  styleUrls: ['./skill-news.component.css']
})
export class SkillNewsComponent implements OnInit {
  @Input() skillSlug?: string
  news: SkillNews[] = []
  loading = true

  constructor(private newsService: SkillNewsService) {}

  ngOnInit(): void {
    if (this.skillSlug) {
      this.newsService.getNewsBySkill(this.skillSlug).subscribe({
      next: data => {
        this.news = data
        this.loading = false
      },
      error: () => {
        this.loading = false
      },
    })
    }
  }
}