import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'services',
    loadComponent: () => 
      import('./pages/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'about',
    loadComponent: () => 
      import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => 
      import('./pages/contact/contact.component').then(m => m.ContactComponent)
  }
];
