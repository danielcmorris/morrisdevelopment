
import { Component, Input, SecurityContext } from '@angular/core';
import { Article } from '../../../interfaces/article.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { marked } from 'marked';

@Component({
    standalone:true,
    selector: 'app-article',
    imports: [CommonModule],
    templateUrl: './article.component.html',
    styleUrl: './article.component.scss'
})
export class ArticleComponent {
  // In your parent component
  article: Article = {
    title: "Building Scalable Angular Applications",
    subtitle: "Best practices and patterns for enterprise development",
    author: "Dan Morris",
    date: new Date(),
    coverImage: "/assets/images/article-cover.jpg",
    readTime: 8,
    tags: ["Angular", "TypeScript", "Web Development"],
    content: `
    <span style="font-size:2em">Adding AI Tools to your Website</span>
    <p>While the question/answer features and threading of an LLM can be helpful, often we really need more focused results that are specific to our own database needs. The issue we faced was having products on a job which were out of stock. How do you replace those with something equivalent or close to equivalent?
</p>
    <p>For example, we may have a sales meeting where a Sanyo XL12e 5000 lumen projector is listed on the quote you’ve given the client, but it’s out of stock. Now, we have 10 others in our own warehouse and probably 50 in neighboring warehouses. We need to browse around and find something that works and it can be time consuming. However, we can easily take that product make, model and name and find a related item using AI. Here’s how to do it.

    </p>
    <h3>Key Concepts</h3>
    <p>Understanding these fundamental concepts will help you...</p>
    
    <blockquote>
      "Clean code is not written by following a set of rules. 
      You don't become a software craftsman by learning a list of what to do and what not to do."
    </blockquote>
  `
  };
  renderedContent: SafeHtml = '';


 ngOnInit() {
    this.renderMarkdown();
  }


  constructor(private sanitizer: DomSanitizer) {
    
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


  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
