import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { Article } from '../../interfaces/article.interface';
import { environment } from '../../environments/environment';

export interface ArticleSearchParams {
  search?: string;
  status?: string;
  author?: string;
  tags?: string[];
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

export interface ArticleListResponse {
  articles: Article[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}



@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private basePath = 'data';
  private apiUrl = environment.API_URL + '/api/article'; 

  constructor(private http: HttpClient) {}

  getArticle_old(slug: string): Observable<Article> {
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
  
  /**
   * Get all articles with optional filtering and pagination
   */
  getArticles(params?: ArticleSearchParams): Observable<Article[]> {
    let httpParams = new HttpParams();
    
    if (params) {
      if (params.search) httpParams = httpParams.set('search', params.search);
      if (params.status) httpParams = httpParams.set('status', params.status);
      if (params.author) httpParams = httpParams.set('author', params.author);
      if (params.tags && params.tags.length > 0) {
        httpParams = httpParams.set('tags', params.tags.join(','));
      }
      if (params.page) httpParams = httpParams.set('page', params.page.toString());
      if (params.pageSize) httpParams = httpParams.set('pageSize', params.pageSize.toString());
      if (params.sortBy) httpParams = httpParams.set('sortBy', params.sortBy);
      if (params.sortDirection) httpParams = httpParams.set('sortDirection', params.sortDirection);
    }

    return this.http.get<Article[]>(this.apiUrl, { params: httpParams })
      .pipe(
        map((obj:any)=>{
            return obj.items;
        })
      );
  }

  /**
   * Get articles with server-side pagination
   */
  getArticlesPaginated(params?: ArticleSearchParams): Observable<ArticleListResponse> {
    let httpParams = new HttpParams();
    
    if (params) {
      if (params.search) httpParams = httpParams.set('search', params.search);
      if (params.status) httpParams = httpParams.set('status', params.status);
      if (params.author) httpParams = httpParams.set('author', params.author);
      if (params.tags && params.tags.length > 0) {
        httpParams = httpParams.set('tags', params.tags.join(','));
      }
      if (params.page) httpParams = httpParams.set('page', params.page.toString());
      if (params.pageSize) httpParams = httpParams.set('pageSize', params.pageSize.toString());
      if (params.sortBy) httpParams = httpParams.set('sortBy', params.sortBy);
      if (params.sortDirection) httpParams = httpParams.set('sortDirection', params.sortDirection);
    }

    return this.http.get<ArticleListResponse>(`${this.apiUrl}/paginated`, { params: httpParams });
  }

  /**
   * Get a single article by ID
   */
  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  /**
   * Create a new article
   */
  createArticle(article: Partial<Article>): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article);
  }

  /**
   * Update an existing article
   */
  updateArticle(id: number, article: Partial<Article>): Observable<Article> {
    return this.http.put<Article>(`${this.apiUrl}/${id}`, article);
  }

  /**
   * Partially update an article
   */
  patchArticle(id: number, updates: Partial<Article>): Observable<Article> {
    return this.http.patch<Article>(`${this.apiUrl}/${id}`, updates);
  }

  /**
   * Delete an article
   */
  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Bulk delete articles
   */
  bulkDeleteArticles(ids: number[]): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/bulk-delete`, { ids });
  }

  /**
   * Get all unique tags
   */
  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/tags`);
  }

  /**
   * Get all unique authors
   */
  getAuthors(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/authors`);
  }

  /**
   * Update article status
   */
  updateStatus(id: number, status: Article['status']): Observable<Article> {
    return this.http.patch<Article>(`${this.apiUrl}/${id}/status`, { status });
  }

  /**
   * Export articles to CSV
   */
  exportToCSV(params?: ArticleSearchParams): Observable<Blob> {
    let httpParams = new HttpParams();
    
    if (params) {
      if (params.search) httpParams = httpParams.set('search', params.search);
      if (params.status) httpParams = httpParams.set('status', params.status);
      if (params.author) httpParams = httpParams.set('author', params.author);
    }

    return this.http.get(`${this.apiUrl}/export/csv`, {
      params: httpParams,
      responseType: 'blob'
    });
  }
}