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
  
  isSaving: boolean = false;
@Input() set article(value: Article | null) {
  this._article = value;
  if (value) {
    this.title = value.title || '';
    this.description = value.description || '';
    this.content = value.content || '';
    this.tags = value.tags?.join(', ') || '';
    this.url = value.contentUrl || '';
  }
}
private _article: Article | null = null;
  constructor(private aiService: AiService) {

  }

  ngOnInit(): void {
   console.log('DocumentEditorComponent initialized with article:', this._article);
   if (this._article) {
     this.title = this._article.title || '';
     this.description = this._article.description || '';
     this.content = this._article.content || '';
     this.tags = this._article.tags?.join(', ') || '';
     this.url = this._article.contentUrl || '';
   }
  }
  saveDocument(): void {
    if (!this.title.trim()) {
      alert('Please enter a document title');
      return;
    }

    this.isSaving = true;

    // Prepare document data
    const documentData: Article = {
      title: this.title.trim(),
      description: this.description.trim(),
      content: this.content.trim(),
      tags: this.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0),
      contentUrl: this.url.trim(),
      articleID:0,
      sourceURL:"",
      date:dateTimestampProvider,
      createDate:new Date(),
      status:"Draft",
      author:""
    };

    console.log('Saving document:', documentData);

    this.aiService.postArticle(documentData).subscribe(obj=>{
        console.log('Document saved successfully', obj);
        this.resetForm();
        this.isSaving = false;
    })
    // TODO: Implement your server upload logic here
    // Example:
    // this.httpClient.post('/api/documents', documentData).subscribe({
    //   next: (response) => {
    //     console.log('Document saved successfully', response);
    //     this.resetForm();
    //     this.isSaving = false;
    //   },
    //   error: (error) => {
    //     console.error('Error saving document', error);
    //     this.isSaving = false;
    //   }
    // });

    // Simulating save for now
  //   setTimeout(() => {
  //     this.isSaving = false;
  //     alert('Document saved successfully!');
  //     this.resetForm();
  //   }, 1000);
  }

  resetForm(): void {
    this.title = '';
    this.description = '';
    this.content = '';
    this.tags = '';
    this.url = '';
  }

  clearForm(): void {
    if (confirm('Are you sure you want to clear all fields?')) {
      this.resetForm();
    }
  }
}