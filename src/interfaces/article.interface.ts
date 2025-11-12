export interface Article {
  title: string;
  subtitle?: string;
  author?: string;
  date?: Date;
  coverImage?: string;
  content: string; // HTML content
  tags?: string[];
  readTime?: number; // in minutes
}