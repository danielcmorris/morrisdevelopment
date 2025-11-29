import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiService } from '../../services/ai.service';
import { Article } from '../../../interfaces/article.interface';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-document-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.scss']
})
export class DocumentEditorComponent implements OnInit {
  title: string = '';
  description: string = '';
  content: string = '';
  tags: string = '';
  url: string = '';
  author: string = "";
  sourceURL: string = "";



  selectedFile: File | null = null;

  isSaving: boolean = false;

  @Input() set article(value: Article | null) {
    this._article = value;
    if (value) {
      this.title = value.title || '';
      this.description = value.description || '';
      this.content = value.content || '';
      this.tags = value.tags?.join(', ') || '';
      this.url = value.contentUrl || '';
      this.sourceURL = value.sourceURL || '';
      this.author = value.author || '';
    }
  }
  private _article: Article | null = null;

  constructor(private aiService: AiService) { }

  ngOnInit(): void {
    console.log('DocumentEditorComponent initialized with article:', this._article);
    if (this._article) {
      this.title = this._article.title || '';
      this.description = this._article.description || '';
      this.content = this._article.content || '';
      this.tags = this._article.tags?.join(', ') || '';
      this.url = this._article.contentUrl || '';
      this.sourceURL = this._article.sourceURL || '';
      this.author = this._article.author || '';
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
      console.log('PDF file selected:', file.name);
    } else if (file) {
      alert('Please select a PDF file');
      event.target.value = '';
    }
  }

  isAnalyzing=false;
  process() {


    if(!this.title) this.title="Searching Title..."
    this.isAnalyzing = true;

    const formData = new FormData();
    formData.append('title', this.title.trim());
    formData.append('description', this.description.trim());
    formData.append('content', this.content.trim());
    formData.append('tags', JSON.stringify(this.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)));
    formData.append('contentUrl', this.url.trim());
    formData.append('sourceURL', this.sourceURL.trim());
    formData.append('author', this.author.trim());

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    console.log('Saving document with file:', this.selectedFile?.name);
    let command = 'summarize';
    this.aiService.postArticle(formData, command).subscribe({
      next: (obj: any) => {
        console.log('Document saved successfully', obj);
        const tagsString = obj.tags.join(',');

        this.description = obj.description
        this.title = obj.title;
        this.tags = tagsString;
        this.author = obj.author;
        this.isAnalyzing = false;
      },
      error: (error) => {
        console.error('Error analyzing document', error);
        this.isAnalyzing = false;
      }
    });
  }
  saveDocument(): void {
    if (!this.title.trim()) {
      alert('Please enter a document title');
      return;
    }

    this.isSaving = true;

    const formData = new FormData();
    formData.append('title', this.title.trim());
    formData.append('description', this.description.trim());
    formData.append('content', this.content.trim());
    formData.append('tags', JSON.stringify(this.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)));
    formData.append('contentUrl', this.url.trim());
    formData.append('sourceURL', this.sourceURL.trim());
    formData.append('author', this.author.trim());

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    console.log('Saving document with file:', this.selectedFile?.name);

    this.aiService.postArticle(formData,"upsert").subscribe({
      next: (obj) => {
        console.log('Document saved successfully', obj);
        this.resetForm();
        this.isSaving = false;
      },
      error: (error) => {
        console.error('Error saving document', error);
        this.isSaving = false;
      }
    });
  }

  resetForm(): void {
    this.title = '';
    this.description = '';
    this.content = '';
    this.tags = '';
    this.url = '';
    this.author = '';
    this.sourceURL = '';
    this.selectedFile = null;
  }

  clearForm(): void {
    if (confirm('Are you sure you want to clear all fields?')) {
      this.resetForm();
    }
  }
}