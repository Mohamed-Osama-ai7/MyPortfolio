import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Project } from '../../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {

  @Input() project!: Project;

  @Input() management = false;

  @Output() delete = new EventEmitter<string>();

  @Output() edit = new EventEmitter<Project>();

  deleteProject(): void {
    this.delete.emit(this.project.id);
  }

  editProject(): void {
    this.edit.emit(this.project);
  }
}