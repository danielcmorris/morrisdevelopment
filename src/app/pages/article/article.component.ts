import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';
import { Article } from '../../../interfaces/article.interface';
import { ArticleService } from '../../services/article.service';
 
@Component({
  standalone: true,
  selector: 'app-article',
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  article?: Article;
  renderedContent: SafeHtml = '';
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      if (slug) {
        this.loadArticle(slug);
      }
    });
  }

  loadArticle(slug: string) {
    this.loading = true;
    this.error = false;
    console.log('loading ' + slug)
    this.articleService.getArticle(slug).subscribe({
      next: (article) => {
        console.log('got article',article)
        this.article = article;
        this.renderMarkdown();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading article:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  async renderMarkdown() {
    if (this.article?.content) {
      const html = await marked.parse(this.article.content, {
        gfm: true,
        breaks: true
      });
      const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, html);
      this.renderedContent = sanitized || '';
    }
  }
}