import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  private projectsSubject = new BehaviorSubject<Project[]>([
    {
      id: '1',
      name: 'PhysioMentor',
      category: 'AI • Healthcare Education',
      year: '2026',
      description:
        'An AI-powered physiotherapy learning platform designed to help students understand clinical concepts, anatomy, rehabilitation topics, and physiotherapy knowledge through an interactive educational experience.',
      technologies: [
        'AI',
        'Machine Learning',
        'Physiotherapy Education',
        'Web Application'
      ],
      image: 'images/projects/physiomentor.png',
      featured: true
    },

    {
      id: '2',
      name: 'InvoiceGuard AI',
      category: 'AI • Machine Learning',
      year: '2026',
      description:
        'An intelligent invoice payment risk prediction and cash-flow protection system that helps identify late-payment risk, analyze customer behavior, and support receivables decisions.',
      technologies: [
        'Python',
        'Machine Learning',
        'NLP',
        'Streamlit',
        'FastAPI'
      ],
      image: 'images/projects/invoiceguard.png',
      githubUrl:
        'https://github.com/Mohamed-Osama-ai7/Inovice-Guard-ai',
      liveUrl:
        'https://inovice-guard-ai-17.streamlit.app/',
      featured: true
    },

    {
      id: '3',
      name: 'PromiseGuard AI',
      category: 'AI • NLP',
      year: '2026',
      description:
        'An AI system focused on detecting future-action commitments in employee messages using Natural Language Processing and machine learning.',
      technologies: [
        'Python',
        'NLP',
        'Machine Learning',
        'LLM'
      ],
      image: 'images/projects/promiseguard.png',
      githubUrl:
        'https://github.com/Mohamed-Osama-ai7/promise-guard'
    },

    {
      id: '4',
      name: 'AUTO GEN',
      category: 'AI • Automation',
      year: '2026',
      description:
        'An AI-powered customer service and automation platform combining conversational AI, automation workflows, product discovery, and automated invoice delivery.',
      technologies: [
        'FastAPI',
        'n8n',
        'AI Studio',
        'Python'
      ]
    },

    {
      id: '5',
      name: 'HEALIX Healthcare System',
      category: 'Healthcare • Software',
      year: '2025–2026',
      description:
        'A healthcare management system designed around clinic operations, patient management, digital booking, requirements analysis, and database architecture.',
      technologies: [
        'SQL',
        'Database Design',
        'System Analysis',
        'Architecture'
      ]
    },

    {
      id: '6',
      name: 'Enterprise Customer Churn AI',
      category: 'AI • Data',
      year: '2026',
      description:
        'A machine learning project focused on predicting customer churn and exploring practical approaches to classification and customer retention analysis.',
      technologies: [
        'Python',
        'Machine Learning',
        'Classification'
      ],
      githubUrl:
        'https://github.com/Mohamed-Osama-ai7/enterprise-customer-churn-ai'
    },

    {
      id: '7',
      name: 'NASA Space Apps Challenge',
      category: 'NASA • AI • Web',
      year: '2025',
      description:
        'A weather-focused AI project developed for NASA Space Apps, using weather data and machine learning concepts for rainfall prediction and analysis.',
      technologies: [
        'Python',
        'AI',
        'Machine Learning',
        'Weather Data',
        'Web Development'
      ]
    },

    {
      id: '8',
      name: 'Zero Hour — First-Person Shooter',
      category: 'Game Development',
      year: '2026',
      description:
        'A first-person shooter game developed using Unity and C# as an ITI graduation project. The project focused on gameplay systems, combat mechanics, player interaction, physics, and first-person game development.',
      technologies: [
        'Unity',
        'C#',
        'FPS',
        'Game Logic',
        'Physics',
        'ITI Graduation Project'
      ]
    },

    {
      id: '9',
      name: 'Firmware Manifest System',
      category: 'Systems',
      year: '2026',
      description:
        'A firmware manifest architecture focused on update verification, system integrity, reliability, and secure update workflows.',
      technologies: [
        'Firmware Architecture',
        'Security',
        'Update Verification'
      ]
    },

    {
      id: '10',
      name: 'OS & Algorithm Scheduling Systems',
      category: 'C++ • Operating Systems',
      year: '2026',
      description:
        'Implemented operating-system scheduling algorithms and evaluated their behavior and performance using algorithmic optimization.',
      technologies: [
        'C++',
        'Operating Systems',
        'Scheduling',
        'Algorithms'
      ]
    },

    {
      id: '11',
      name: 'Pizza Restaurant Database',
      category: 'Database',
      year: '2026',
      description:
        'A relational database system designed for restaurant operations, menu management, order processing, inventory, and structured data management.',
      technologies: [
        'SQL',
        'Database Design',
        'Relational Modeling'
      ]
    },

    {
      id: '12',
      name: 'GPS Vehicle Tracker',
      category: 'IoT • Embedded Systems',
      year: '2025',
      description:
        'A hardware-software GPS tracking system designed for real-time location monitoring and embedded integration.',
      technologies: [
        'GPS',
        'Embedded Systems',
        'Real-Time Processing'
      ]
    },

    {
      id: '13',
      name: 'Autonomous Robotics',
      category: 'Robotics',
      year: '2024–2025',
      description:
        'Autonomous robotics projects involving human-following, maze solving, sensor processing, navigation, and obstacle avoidance.',
      technologies: [
        'Robotics',
        'Embedded Systems',
        'Sensors',
        'Navigation'
      ]
    }
  ]);

  readonly projects$: Observable<Project[]> =
    this.projectsSubject.asObservable();

  getProjects(): Observable<Project[]> {
    return this.projects$;
  }

  addProject(project: Project): void {
    const currentProjects =
      this.projectsSubject.value;

    this.projectsSubject.next([
      ...currentProjects,
      project
    ]);
  }

  updateProject(updatedProject: Project): void {
    const updatedProjects =
      this.projectsSubject.value.map(
        project =>
          project.id === updatedProject.id
            ? updatedProject
            : project
      );

    this.projectsSubject.next(updatedProjects);
  }

  deleteProject(id: string): void {
    const updatedProjects =
      this.projectsSubject.value.filter(
        project => project.id !== id
      );

    this.projectsSubject.next(updatedProjects);
  }
}