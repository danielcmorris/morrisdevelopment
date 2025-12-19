import { Component } from '@angular/core';
import { OllamaService } from '../ollama.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { marked } from 'marked';

@Component({
  selector: 'app-ollama',
  imports: [CommonModule, FormsModule],
  templateUrl: './ollama.component.html',
  styleUrl: './ollama.component.scss',

})
export class OllamaComponent {
  displayText = '';
  question = "";

rawText=""
  constructor(private ollamaService: OllamaService) { }

  isLoading = false;

  sendPrompt(prompt: string) {
    this.displayText = '';
    this.isLoading = true;

    this.ollamaService.streamOllamaResponse(prompt).subscribe({
      next: (token) => {
        
         this.rawText += token;
        this.displayText = marked(this.rawText) as string;
      },
      error: (err) => {
        console.error('Stream error:', err);
        this.isLoading = false;
      },
      complete: () => {
        console.log('Stream complete');
        this.isLoading = false;
      }
    });
  }


  search() {
    if (this.question != '') {
      this.sendPrompt(this.question);
    }
  }
  // sendPrompt(prompt: string) {
  //   this.displayText = '';

  //   this.ollamaService.streamOllamaResponse(prompt).subscribe({
  //     next: (token) => {
  //       this.displayText += token; // Append each token
  //     },
  //     error: (err) => console.error('Stream error:', err),
  //     complete: () => console.log('Stream complete')
  //   });
  // }
}
