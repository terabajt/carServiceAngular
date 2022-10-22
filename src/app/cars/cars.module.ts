import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { SharedModule } from '../shared-module/shared.module';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RouterModule } from '@angular/router';
import { CarResolve } from './car-resolve.services';
import { ReactiveFormsModule } from '@angular/forms';
import { IncomeTaxComponent } from './total-cost/income-tax/income-tax.component';
import { CostSharedService } from './cost-shared.service';
import { CarTableRowComponent } from './car-table-row/car-table-row.component';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';



@NgModule({
  declarations: [
    CarsListComponent,
    TotalCostComponent,
    CarDetailsComponent,
    IncomeTaxComponent,
    CarTableRowComponent,
    CarsComponent
  ],
  providers: [
    CarResolve,
    CostSharedService
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    CarsRoutingModule
  ],
  exports: [CarsListComponent],
})
export class CarsModule { }
