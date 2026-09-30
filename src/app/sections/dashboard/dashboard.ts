import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';

import { Project } from '../../core/models/project.model';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { ProjectList } from '../projects/components/project-list/project-list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, ProjectList, AsyncPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  stats = [
    {
      label: 'Primary Focus',
      value: 'AI / ML',
      icon: 'bi-cpu-fill'
    },
    {
      label: 'Education',
      value: '2024–2028',
      icon: 'bi-mortarboard-fill'
    },
    {
      label: 'Projects',
      value: '10+',
      icon: 'bi-folder-fill'
    },
    {
      label: 'Location',
      value: 'Cairo, Egypt',
      icon: 'bi-geo-alt-fill'
    }
  ];

  currentLearning = [
    'DEPI × Microsoft — Machine Learning Engineering',
    'Huawei ICT Academy — HCIA-Big Data',
    'Huawei ICT Academy — HCIA-Cloud Service',
    'NTI — MEAN-Stack Web Development'
  ];

  quickLinks = [
    {
      label: 'Projects',
      description: 'Explore my projects',
      route: '/projects',
      icon: 'bi-folder2-open'
    },
    {
      label: 'Credentials',
      description: 'Training & achievements',
      route: '/credentials',
      icon: 'bi-award-fill'
    },
    {
      label: 'Experience',
      description: 'Experience & leadership',
      route: '/experience',
      icon: 'bi-briefcase-fill'
    },
    {
      label: 'Contact',
      description: 'Get in touch',
      route: '/contact',
      icon: 'bi-envelope-fill'
    }
  ];

  projects$: Observable<Project[]>;

  featuredProjects$: Observable<Project[]>;

  constructor(
    private portfolioDataService: PortfolioDataService
  ) {
    this.projects$ =
      this.portfolioDataService.getProjects();

    this.featuredProjects$ =
      this.projects$.pipe(
        map(projects =>
          projects.filter(project => project.featured)
        )
      );
  }

  addProject(): void {
    const newProject: Project = {
      id: Date.now().toString(),
      name: 'New Project',
      category: 'Software',
      year: '2026',
      description:
        'This project was added from the Dashboard.',
      technologies: [
        'Angular',
        'TypeScript'
      ]
    };

    this.portfolioDataService.addProject(
      newProject
    );
  }

  editProject(project: Project): void {
    const name = prompt(
      'Project name:',
      project.name
    );

    if (
      name === null ||
      name.trim() === ''
    ) {
      return;
    }

    const description = prompt(
      'Project description:',
      project.description
    );

    if (
      description === null ||
      description.trim() === ''
    ) {
      return;
    }

    const updatedProject: Project = {
      ...project,
      name: name.trim(),
      description: description.trim()
    };

    this.portfolioDataService.updateProject(
      updatedProject
    );
  }

  deleteProject(id: string): void {
    this.portfolioDataService.deleteProject(id);
  }
}