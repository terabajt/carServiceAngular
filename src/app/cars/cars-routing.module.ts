import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarResolve } from './car-resolve.services';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsComponent } from './cars.component';

const CARS_ROUTES: Route[] = [
  {
    path: '',
    component: <any>CarsComponent,
    children: [
      {
        path: '',
        component: <any>CarsListComponent,
      },
      {
        path: ':id',
        component: CarDetailsComponent,
        resolve: { car: CarResolve }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(CARS_ROUTES)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
