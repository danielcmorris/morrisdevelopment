import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { Article } from '../../interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private basePath = 'data';

  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<Article> {
    const jsonUrl = `${this.basePath}/${slug}.json`;
    const mdUrl = `${this.basePath}/${slug}.md`;

    return forkJoin({
      metadata: this.http.get<Article>(jsonUrl),
      content: this.http.get(mdUrl, { responseType: 'text' })
    }).pipe(
      map(({ metadata, content }) => ({
        ...metadata,
        content,
        date: new Date(metadata.date)
      }))
    );
  }
}