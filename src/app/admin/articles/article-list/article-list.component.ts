import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/article.service';

export interface Article {
  articleID: number;
  title: string;
  author: string;
  createDate: Date;
  sourceURL: string;
  tags: string[];
  status: 'Draft' | 'Published' | 'Archived' | 'Review';
}

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export default class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  searchTerm: string = '';
  sortColumn: keyof Article | '' = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  
  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  constructor(private router: Router, private articleService:ArticleService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    // Replace with actual API call
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;
      this.applyFilters();
    });
    return;

    // Mock data for demonstration
    this.articles = [
      {
        articleID: 1,
        title: 'Getting Started with Angular',
        author: 'John Doe',
        createDate: new Date('2024-01-15'),
        sourceURL: 'https://example.com/angular-intro',
        tags: ['Angular', 'Tutorial', 'Beginner'],
        status: 'Published'
      },
      {
        articleID: 2,
        title: 'Advanced TypeScript Patterns',
        author: 'Jane Smith',
        createDate: new Date('2024-02-20'),
        sourceURL: 'https://example.com/typescript-advanced',
        tags: ['TypeScript', 'Advanced', 'Patterns'],
        status: 'Published'
      },
      {
        articleID: 3,
        title: 'Tailwind CSS Dark Mode',
        author: 'Bob Johnson',
        createDate: new Date('2024-03-10'),
        sourceURL: 'https://example.com/tailwind-dark',
        tags: ['CSS', 'Tailwind', 'Design'],
        status: 'Draft'
      },
      {
        articleID: 4,
        title: 'Building RESTful APIs with Node.js',
        author: 'Alice Williams',
        createDate: new Date('2024-01-25'),
        sourceURL: 'https://example.com/nodejs-api',
        tags: ['Node.js', 'API', 'Backend'],
        status: 'Review'
      },
      {
        articleID: 5,
        title: 'React vs Angular: A Comparison',
        author: 'Charlie Brown',
        createDate: new Date('2024-02-05'),
        sourceURL: 'https://example.com/react-vs-angular',
        tags: ['React', 'Angular', 'Comparison'],
        status: 'Published'
      },
      {
        articleID: 6,
        title: 'Database Design Best Practices',
        author: 'Diana Prince',
        createDate: new Date('2024-03-01'),
        sourceURL: 'https://example.com/database-design',
        tags: ['Database', 'SQL', 'Design'],
        status: 'Archived'
      }
    ];

    this.applyFilters();
  }

  onSearchChange(): void {
    this.currentPage = 1; // Reset to first page when searching
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = [...this.articles];

    // Apply search filter
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(term) ||
        article.author.toLowerCase().includes(term) ||
        article.tags.some(tag => tag.toLowerCase().includes(term)) ||
        article.status.toLowerCase().includes(term) ||
        article.articleID.toString().includes(term)
      );
    }

    // Apply sorting
    if (this.sortColumn) {
      filtered.sort((a, b) => {
        const aVal = a[this.sortColumn as keyof Article];
        const bVal = b[this.sortColumn as keyof Article];

        let comparison = 0;
        if (aVal < bVal) comparison = -1;
        if (aVal > bVal) comparison = 1;

        return this.sortDirection === 'asc' ? comparison : -comparison;
      });
    }

    this.filteredArticles = filtered;
    this.totalPages = Math.ceil(this.filteredArticles.length / this.itemsPerPage);
  }

  sortBy(column: keyof Article): void {
    if (this.sortColumn === column) {
      // Toggle direction if clicking the same column
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // New column, default to ascending
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.applyFilters();
  }

  getPaginatedArticles(): Article[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredArticles.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxPagesToShow = 5;
    
    let startPage = Math.max(1, this.currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(this.totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  viewArticle(article: Article): void {
    // Navigate to article detail page
    // this.router.navigate(['/articles', article.articleID]);
    console.log('View article:', article);
  }

  editArticle(article: Article, event: Event): void {
    event.stopPropagation(); // Prevent row click
    // Navigate to edit page
    // this.router.navigate(['/articles', article.articleID, 'edit']);
    console.log('Edit article:', article);
  }

  deleteArticle(article: Article, event: Event): void {
    event.stopPropagation(); // Prevent row click
    if (confirm(`Are you sure you want to delete "${article.title}"?`)) {
      // Call delete API
      console.log('Delete article:', article);
      // this.articleService.deleteArticle(article.articleID).subscribe(() => {
      //   this.loadArticles();
      // });
    }
  }

  getStatusClass(status: string): string {
    const statusClasses: { [key: string]: string } = {
      'Published': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      'Draft': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      'Review': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      'Archived': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
    };
    return statusClasses[status] || 'bg-gray-100 text-gray-800';
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.onSearchChange();
  }
}