import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { SkillNews } from '../models/skill-news.model'

@Injectable({ providedIn: 'root' })
export class SkillNewsService {
  private readonly BASE_URL = 'https://dev.to/api/articles'

  constructor(private http: HttpClient) {}

  getNewsBySkill(slug: string): Observable<SkillNews[]> {
    const tag = this.mapSlugToTag(slug)

    return this.http
      .get<any[]>(`${this.BASE_URL}?tag=${tag}&per_page=3`)
      .pipe(
        map(articles =>
          articles.map(article => ({
            title: article.title,
            description: article.description,
            url: article.url,
            source: 'dev.to',
            publishedAt: article.published_at,
          }))
        )
      )
  }

  private mapSlugToTag(slug: string): string {
    switch (slug) {
      case 'angular-front':
        return 'angular'
      
      case 'java-spring':
        return 'java'
      case 'docker-devops':
        return 'docker'
      case 'tests':
        return 'testing'
      default:
        return 'programming'
    }
  }
}
