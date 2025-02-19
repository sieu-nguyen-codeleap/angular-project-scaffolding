import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'company',
    loadComponent: () =>
      import('./company/company.component').then((m) => m.CompanyComponent),
  },
  {
    path: 'market-place',
    loadComponent: () =>
      import('./market-place/market-place.component').then(
        (m) => m.MarketPlaceComponent,
      ),
  },
  {
    path: 'features',
    loadComponent: () =>
      import('./features/features.component').then((m) => m.FeaturesComponent),
  },
  {
    path: 'team',
    loadComponent: () =>
      import('./team/team.component').then((m) => m.TeamComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
];
