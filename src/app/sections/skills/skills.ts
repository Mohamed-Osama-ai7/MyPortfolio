import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skillGroups = [
    {
      title: 'Programming',
      description: 'Programming languages I use for software development and problem solving.',
      skills: ['C++', 'C#', 'Python', 'JavaScript', 'SQL']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Areas I am studying and applying through practical projects.',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning']
    },
    {
      title: 'Web Development',
      description: 'Technologies I use while building web applications and learning full-stack development.',
      skills: ['HTML', 'CSS', 'Bootstrap', 'Angular', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
      title: 'Tools & Technical Areas',
      description: 'Additional technical areas supporting my software and AI work.',
      skills: ['Git', 'GitHub', 'Algorithms', 'Problem Solving', 'Database Design', 'System Analysis']
    }
  ];
}