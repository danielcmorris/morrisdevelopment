import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiService } from '../../services/ai.service';
import { Article } from '../../../interfaces/article.interface';

@Component({
  selector: 'app-document-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.scss']
})
export class DocumentEditorComponent {
  title: string = '';
  description: string = '';
  content: string = '';
  tags: string = '';
  url: string = '';
  
  isSaving: boolean = false;

  constructor(private aiService: AiService) {}


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
      contentUrl: this.url.trim()
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