export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  year?: string;
  featured?: boolean;
}