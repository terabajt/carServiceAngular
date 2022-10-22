import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarsModule, CarsListComponent, CarsRoutingModule, CarsService } from './cars/index';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core-module/core.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginModule } from './login/login.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { LayoutService } from './shared-module/services/layout.service';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CoreModule, AppRoutingModule, LoginModule],
  providers: [CarsService, AuthService, AuthGuard, LayoutService],
  bootstrap: [AppComponent],
})
export class AppModule {}
