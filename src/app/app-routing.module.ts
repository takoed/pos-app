import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { AccountComponent } from './theme/layout/account/account.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./main/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      }
    ]
  },
  {
    path: 'account',
    canActivate: [authGuard],
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./main/account/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      }
    ]
  },
  {
    path: 'auth',
    component: GuestComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./main/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}





// ,
//       {
//         path: 'apexchart',
//         loadComponent: () => import('./main/pages/core-chart/apex-chart/apex-chart.component')
//       },
//       {
//         path: 'sample-page',
//         loadComponent: () => import('./main/extra/sample-page/sample-page.component')
//       }