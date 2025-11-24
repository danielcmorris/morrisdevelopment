import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Article {
  id: number;
  title: string;
  viewedAt: Date;
}

interface UploadedFile {
  id: number;
  name: string;
  uploadedAt: Date;
  size: string;
}

interface WorkPackage {
  id: number;
  title: string;
  status: string;
  createdAt: Date;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export default class DashboardComponent implements OnInit {
  recentArticles: Article[] = [];
  recentFiles: UploadedFile[] = [];
  recentWorkPackages: WorkPackage[] = [];

  ngOnInit(): void {
    // Load your actual data here
    this.loadRecentArticles();
    this.loadRecentFiles();
    this.loadRecentWorkPackages();
  }

  loadRecentArticles(): void {
    // Replace with actual API call
    this.recentArticles = [
      { id: 1, title: 'Getting Started with Angular', viewedAt: new Date() },
      { id: 2, title: 'Tailwind CSS Best Practices', viewedAt: new Date() },
      { id: 3, title: 'TypeScript Advanced Patterns', viewedAt: new Date() }
    ];
  }

  loadRecentFiles(): void {
    // Replace with actual API call
    this.recentFiles = [
      { id: 1, name: 'project-spec.pdf', uploadedAt: new Date(), size: '2.4 MB' },
      { id: 2, name: 'design-mockup.png', uploadedAt: new Date(), size: '1.8 MB' }
    ];
  }

  loadRecentWorkPackages(): void {
    // Replace with actual API call
    this.recentWorkPackages = [
      { id: 1, title: 'Implement user authentication', status: 'In Progress', createdAt: new Date() },
      { id: 2, title: 'Update dashboard UI', status: 'Open', createdAt: new Date() }
    ];
  }
}