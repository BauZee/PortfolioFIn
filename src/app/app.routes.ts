import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home-page.component').then(m => m.HomePageComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
  },
  {
    path: 'exercise',
    loadComponent: () => import('./pages/exercises/exercises.component').then(m => m.ExercisesComponent),
  },
  {
    path: 'exercise/:id',
    loadComponent: () => import('./pages/exercises/components/exercise-detail/exercise-detail.component').then(m => m.ExerciseDetailComponent),
  }
];
