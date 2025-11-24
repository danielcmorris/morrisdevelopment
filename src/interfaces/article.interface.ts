export interface Article {
  articleID:number;
  title: string;
  subtitle?: string;
  author: string;
  date?: any;
  coverImage?: string;
  description: string;
  content: string; // HTML content
  contentUrl?: string;
  tags: string[];
  readTime?: number; // in minutes
  createDate:Date;
  status:"Draft" | "Published" | "Archived" | "Review"
  sourceURL:string;
}