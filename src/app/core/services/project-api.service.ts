import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Project } from '../models/project.model';

interface ProjectApiResponse {
  _id: string;
  name: string;
  description: string;
  category: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  year?: string;
  featured?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectApiService {

  private apiUrl = 'http://localhost:3000/api/project';

  constructor(
    private http: HttpClient
  ) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<ProjectApiResponse[]>(
      this.apiUrl
    ).pipe(
      map(projects =>
        projects.map(project => ({
          id: project._id,
          name: project.name,
          description: project.description,
          category: project.category,
          technologies: project.technologies,
          image: project.image
            ? `http://localhost:3000${project.image}`
            : undefined,
          githubUrl: project.githubUrl,
          liveUrl: project.liveUrl,
          year: project.year,
          featured: project.featured
        }))
      )
    );
  }
}