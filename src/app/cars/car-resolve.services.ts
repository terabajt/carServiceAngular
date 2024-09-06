import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { CarsService } from "./cars.service";
import { Car } from "./models/car";

@Injectable()

export class CarResolve  {
    constructor (private carsService : CarsService) {}

    resolve(route :ActivatedRouteSnapshot) {
        return this.carsService.getCar(route.params['id']);
    }
}