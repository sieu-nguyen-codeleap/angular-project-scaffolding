import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'company',
    loadComponent: () =>
      import('./pages/company/company.component').then(
        (m) => m.CompanyComponent,
      ),
  },
  {
    path: 'market-place',
    loadComponent: () =>
      import('./pages/market-place/market-place.component').then(
        (m) => m.MarketPlaceComponent,
      ),
  },
  {
    path: 'features',
    loadComponent: () =>
      import('./pages/features/features.component').then(
        (m) => m.FeaturesComponent,
      ),
  },
  {
    path: 'team',
    loadComponent: () =>
      import('./pages/team/team.component').then((m) => m.TeamComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
  },
];
