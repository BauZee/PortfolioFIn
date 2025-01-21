
import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { FormComponentComponent } from './pages/contact/components/form-component/form-component.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'contact',
    component: FormComponentComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];