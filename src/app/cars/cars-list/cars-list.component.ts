import { ViewChild, ViewEncapsulation, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarTableRowComponent } from '../car-table-row/car-table-row.component';
import { CarsService } from '../cars.service';
import { CostSharedService } from '../cost-shared.service';
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
  @ViewChildren(CarTableRowComponent)
  carRows!: QueryList<CarTableRowComponent>;
  totalCost!: number;
  grossCost: number | any;
  cars: Car[] = [];
  carForm : FormGroup | any;

  constructor(private carsService: CarsService,
    private router: Router,
    private formBuilder: FormBuilder,
    private costSharedService: CostSharedService ) {}

  ngOnInit(): void {
    this.loadCars();
    this.carForm = this.buildCarForm();
  }


  buildCarForm () {
    return this.formBuilder.group({
      model: ['', Validators.required],
      type: '',
      plate: ['', [Validators.minLength(3), Validators.required, Validators.maxLength(7)]],
      deliveryDate: '',
      deadline: '',
      color: '',
      power: '',
      clientFirstName: '',
      clientSurname: '',
      cost: '',
      isFullyDamaged: '',
      year: ''
    });
  }
  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
      this.costSharedService.shareCost(this.totalCost);

    });
  }
addCar () {
  this.carsService.addCar(this.carForm.value).subscribe(() => {
    this.loadCars();
  })
}
  ngAfterViewInit() {
    this.totalCostRef.showGross();
    this.carRows.changes.subscribe(() => {
      if (this.carRows.first.car.clientSurname === 'Kowalski') {
        console.log('Warning, Client Kowalski is next queue!');
      }
    })
  }

  onRemovedCar(car : Car) { 
    this.carsService.removeCar(car.id).subscribe(() => {
      this.loadCars();
    })
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
