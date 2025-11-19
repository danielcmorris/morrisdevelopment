export interface Article {
  title: string;
  subtitle?: string;
  author?: string;
  date?: any;
  coverImage?: string;
  description: string;
  content: string; // HTML content
  contentUrl?: string;
  tags?: string[];
  readTime?: number; // in minutes
}