import { ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild('totalCostRef')
  totalCostRef!: TotalCostComponent;
  totalCost!: number;
  grossCost: number | undefined;
  cars: Car[] = [];

  constructor(private carsService: CarsService,
    private router: Router) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();

    });
  }

  ngAfterViewInit() {
    this.totalCostRef.showGross();
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }
  
  goToCarDetail( car: Car) {
    this.router.navigate(['/cars', car.id]);
  }
  countTotalCost(): void {
    this.totalCost = this.cars
      .map((car) => car.cost) // 300, 400, 600
      .reduce((prev, next) => prev + next);
  }
  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }
}
