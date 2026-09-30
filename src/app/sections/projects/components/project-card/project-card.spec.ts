import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCard } from './project-card';
import { Project } from '../../../../core/models/project.model';

describe('ProjectCard', () => {

  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  const testProject: Project = {
    id: 1,
    name: 'Test Project',
    description: 'Test description',
    category: 'Test',
    technologies: ['Angular'],
    year: '2026',
    featured: false
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ProjectCard]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('project', testProject);

    await fixture.whenStable();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});