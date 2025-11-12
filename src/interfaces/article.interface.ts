export interface Article {
  title: string;
  subtitle?: string;
  author?: string;
  date?: any;
  coverImage?: string;
  content: string; // HTML content
  tags?: string[];
  readTime?: number; // in minutes
}