import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { Project } from '../../core/models/project.model';
import { ProjectApiService } from '../../core/services/project-api.service';
import { ProjectList } from './components/project-list/project-list';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectList],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {

  projects: Project[] = [];

  featuredProjects: Project[] = [];

  otherProjects: Project[] = [];

  constructor(
    private projectApiService: ProjectApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.projectApiService
      .getProjects()
      .subscribe(data => {

        this.projects = data;

        this.featuredProjects =
          data.filter(
            project => project.featured === true
          );

        this.otherProjects =
          data.filter(
            project => project.featured !== true
          );

        console.log(
          'Projects from API:',
          data
        );

        this.cdr.detectChanges();
      });
  }
}