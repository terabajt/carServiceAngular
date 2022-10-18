import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarsModule, CarsListComponent, CarsRoutingModule, CarsService } from './cars/index';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core-module/core.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginModule } from './login/login.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CarsModule, HttpClientModule, CoreModule, AppRoutingModule, CarsRoutingModule, LoginRoutingModule, LoginModule],
  providers: [CarsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
