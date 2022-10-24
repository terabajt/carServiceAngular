import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthCanLoadGuard } from './guards/auth-can-load.guard';
import { AuthGuard } from './guards/auth.guard';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { PageNotFoundComponent } from './shared-module/page-not-found/page-not-found.component';

const APP_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'cars', canLoad: [AuthCanLoadGuard], loadChildren: () => import('./cars/cars.module').then((mod) => mod.CarsModule) },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
