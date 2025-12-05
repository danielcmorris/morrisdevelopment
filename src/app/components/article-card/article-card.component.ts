import { Component, input, InputSignal } from '@angular/core';
import { Article } from '../../../interfaces/article.interface';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent {
 public article: InputSignal<Article> = input.required<Article>();
}
