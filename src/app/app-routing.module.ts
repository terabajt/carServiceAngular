import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { CarsListComponent } from "./cars/cars-list/cars-list.component";

const APP_ROUTES : Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'cars', loadChildren: () => import('./cars/cars.module').then(mod => mod.CarsModule),
 }]; 

@NgModule({
imports: [
    RouterModule.forRoot(APP_ROUTES)
],
exports: [
    RouterModule
]
})

export class AppRoutingModule {}