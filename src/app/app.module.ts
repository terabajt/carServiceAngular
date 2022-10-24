import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {
  CarsModule,
  CarsListComponent,
  CarsRoutingModule,
  CarsService,
} from './cars/index';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core-module/core.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginModule } from './login/login.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LayoutService } from './shared-module/services/layout.service';
import { AuthCanLoadGuard } from './guards/auth-can-load.guard';
import { FormCanDeactivateGuard } from './guards/form-can-deactivate.guard';
import { SharedModule } from './shared-module/shared.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    LoginModule,
    SharedModule
  ],
  providers: [
    CarsService,
    AuthService,
    AuthGuard,
    LayoutService,
    AuthCanLoadGuard,
    FormCanDeactivateGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
