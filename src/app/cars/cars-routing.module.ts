import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { FormCanDeactivateGuard } from '../guards/form-can-deactivate.guard';
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
        canDeactivate: [FormCanDeactivateGuard]
      },
      {
        path: ':id',
        component: CarDetailsComponent,
        resolve: { car: CarResolve },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(CARS_ROUTES)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
