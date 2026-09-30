import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Project } from '../../../../core/models/project.model';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css'
})
export class ProjectList {

  @Input() projects: Project[] = [];

  @Input() columnClass = 'col-md-6 col-xl-4';

  @Input() management = false;

  @Output() delete = new EventEmitter<string>();

  @Output() edit = new EventEmitter<Project>();

  deleteProject(id: string): void {
    this.delete.emit(id);
  }

  editProject(project: Project): void {
    this.edit.emit(project);
  }
}