import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core-module/core.module';
import { RouterModule } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';

import { CarsRoutingModule } from './cars/cars-routing.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CarsModule, HttpClientModule, CoreModule, AppRoutingModule, CarsRoutingModule],
  providers: [CarsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
