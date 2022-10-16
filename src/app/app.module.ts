import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarsModule, CarsListComponent, CarsRoutingModule, CarsService } from './cars/index';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core-module/core.module';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CarsModule, HttpClientModule, CoreModule, AppRoutingModule, CarsRoutingModule],
  providers: [CarsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
