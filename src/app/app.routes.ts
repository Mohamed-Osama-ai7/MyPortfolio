import { Routes } from '@angular/router';

import { Layout } from './layout/layout/layout';
import { Dashboard } from './sections/dashboard/dashboard';

import { Home } from './sections/home/home';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Credentials } from './sections/credentials/credentials';
import { Contact } from './sections/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: Home
      },
      {
        path: 'about',
        component: About
      },
      {
        path: 'skills',
        component: Skills
      },
      {
        path: 'experience',
        component: Experience
      },
      {
        path: 'projects',
        component: Projects
      },
      {
        path: 'credentials',
        component: Credentials
      },
      {
        path: 'contact',
        component: Contact
      },
      {
        path: 'dashboard',
        component: Dashboard
      }
    ]
  }
];