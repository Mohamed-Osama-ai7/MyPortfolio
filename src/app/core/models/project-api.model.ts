export interface ProjectApi {
  _id: string;
  name: string;
  description: string;
  category: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  year?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}