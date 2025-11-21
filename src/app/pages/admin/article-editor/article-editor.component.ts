import { Component } from '@angular/core';
import { DocumentEditorComponent } from '../../../components/document-editor/document-editor.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-editor',
  imports: [CommonModule, DocumentEditorComponent],
  templateUrl: './article-editor.component.html',
  styleUrl: './article-editor.component.scss',
})
export class ArticleEditorComponent {
  article = {
    title: '',
    description: '',
    content: '',
    tags: [] as string[],
    contentUrl: ''
  };
  constructor() {
  
    this.article = {
      title: 'Sample Article',
      description: 'This is a sample article for editing.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['sample', 'article', 'editing'],
      contentUrl: 'https://example.com/sample-article'
    }
  }
}
