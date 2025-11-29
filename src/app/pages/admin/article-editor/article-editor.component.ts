import { Component } from '@angular/core';
import { DocumentEditorComponent } from '../../../components/document-editor/document-editor.component';
import { CommonModule } from '@angular/common';
import { Article } from '../../../../interfaces/article.interface';

@Component({
  selector: 'app-article-editor',
  imports: [CommonModule, DocumentEditorComponent],
  templateUrl: './article-editor.component.html',
  styleUrl: './article-editor.component.scss',
})
export class ArticleEditorComponent {
  article:Article 
  constructor() {
  
    this.article = { articleID:0, title: 'Sample Article',description:'', status:'Draft' }
  }
}
