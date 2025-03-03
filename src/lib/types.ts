export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content?: string;
  published: boolean;
  cover: string;
  alt: string;
}