import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { AppConfig } from '../../../enums/app-data';
import { AiService } from '../../services/ai.service';
import { CommonModule } from '@angular/common';
import {  marked } from 'marked';
import { MarkdownComponent } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-embedding',
  standalone: true,
  imports: [CommonModule, MarkdownComponent,FormsModule],
  templateUrl: './embedding.component.html',
  styleUrl: './embedding.component.scss',
 })
export class EmbeddingComponent implements OnInit {
  appConfig = AppConfig;
  embedding="";
  sampleText = "";
  articlePath: string = 'data/embedding.md';
  showSpinner = false;
  constructor(public theme: ThemeService, private ai: AiService) {

  }

  ngOnInit(): void {
    this.sampleText = "The quick brown fox jumps over the lazy dog.";
  }

  onClick(){
    this.showSpinner = true;
    this.getEmbedding(this.sampleText).subscribe((response) => {
      console.log(response);
      this.embedding = JSON.stringify(response);
      this.showSpinner = false;
    });
  }
  getEmbedding(text: string) {
    return this.ai.getEmbedding(text);
  }
}
