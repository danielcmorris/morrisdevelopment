import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { marked } from 'marked';
import { OllamaService } from '../ollama.service';

export interface IConversationItem {
  question: string;
  prompt: string;
  source: 'user' | 'ai';
  response: string;
}

@Component({
  selector: 'app-ollama',
  imports: [CommonModule, FormsModule],
  templateUrl: './ollama.component.html',
  styleUrl: './ollama.component.scss',
})
export class OllamaComponent {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  question = '';
  conversation: IConversationItem[] = [];
  isLoading = false;

  private rawText = '';

  constructor(private ollamaService: OllamaService) {}

  search(): void {
    if (this.question.trim()) {
      this.sendPrompt(this.question);
    }
  }

  onEnterKey(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    if (!keyboardEvent.shiftKey) {
      event.preventDefault();
      this.search();
    }
  }

  private sendPrompt(question: string): void {
    // Add user message
    const userMessage: IConversationItem = {
      question,
      response: '',
      prompt: '',
      source: 'user',
    };
    this.conversation.push(userMessage);
    this.scrollToBottom();

    // Build context from previous AI responses
    const conversationContext = this.buildConversationContext();
    const fullPrompt = conversationContext 
      ? `${question}\n\nPrevious conversation:\n${conversationContext}`
      : question;

    // Add AI response placeholder
    const aiMessage: IConversationItem = {
      question,
      response: '',
      prompt: fullPrompt,
      source: 'ai',
    };
    this.conversation.push(aiMessage);

    // Reset state
    this.question = '';
    this.rawText = '';
    this.isLoading = true;

    // Stream response
    this.ollamaService.streamOllamaResponse(fullPrompt).subscribe({
      next: (token) => {
        this.rawText += token;
        const lastMessage = this.conversation[this.conversation.length - 1];
        lastMessage.response = marked(this.rawText) as string;
        this.scrollToBottom();
      },
      error: (err) => {
        console.error('Stream error:', err);
        this.isLoading = false;
      },
      complete: () => {
        console.log('Stream complete');
        this.isLoading = false;
        this.scrollToBottom();
      },
    });
  }

  private buildConversationContext(maxMessages: number = 5): string {
    return this.conversation
      .filter(item => item.source === 'ai' && item.response)
      .slice(-maxMessages)
      .map(item => `Q: ${item.question}\nA: ${this.stripHtml(item.response)}`)
      .join('\n\n');
  }

  private stripHtml(html: string): string {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      try {
        if (this.chatContainer && this.chatContainer.nativeElement) {
          this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
        }
      } catch (err) {
        console.error('Scroll error:', err);
      }
    }, 0);
  }
}