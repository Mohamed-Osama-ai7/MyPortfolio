import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { Project } from '../models/project.model';
import { PortfolioDataService } from './portfolio-data.service';

describe('PortfolioDataService', () => {

  let service: PortfolioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return projects', async () => {
    const projects = await firstValueFrom(
      service.getProjects()
    );

    expect(projects.length).toBeGreaterThan(0);
  });

  it('should add a project', async () => {
    const projectsBefore = await firstValueFrom(
      service.getProjects()
    );

    const newProject: Project = {
      id: 999,
      name: 'Test Project',
      description: 'Test description',
      category: 'Test',
      technologies: ['Angular'],
      year: '2026'
    };

    service.addProject(newProject);

    const projectsAfter = await firstValueFrom(
      service.getProjects()
    );

    expect(projectsAfter.length).toBe(
      projectsBefore.length + 1
    );

    expect(
      projectsAfter.some(project => project.id === 999)
    ).toBe(true);
  });

  it('should update a project', async () => {
    const projectsBefore = await firstValueFrom(
      service.getProjects()
    );

    const project = projectsBefore[0];

    const updatedProject: Project = {
      ...project,
      name: 'UpdatedProject'
    };

    service.updateProject(updatedProject);

    const projectsAfter = await firstValueFrom(
      service.getProjects()
    );

    expect(projectsAfter[0].name).toBe(
      'UpdatedProject'
    );
  });

  it('should delete a project', async () => {
    const projectsBefore = await firstValueFrom(
      service.getProjects()
    );

    const projectId = projectsBefore[0].id;

    service.deleteProject(projectId);

    const projectsAfter = await firstValueFrom(
      service.getProjects()
    );

    expect(projectsAfter.length).toBe(
      projectsBefore.length - 1
    );

    expect(
      projectsAfter.some(project => project.id === projectId)
    ).toBe(false);
  });

});