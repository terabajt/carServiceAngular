import {
  ViewChild,
  ViewEncapsulation,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateComponent } from 'src/app/guards/form-can-deactivate.guard';
import { CsValidators } from 'src/app/shared-module/validators/cs-validators';
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
export class CarsListComponent
  implements OnInit, AfterViewInit, CanDeactivateComponent
{
  @ViewChild('totalCostRef')
  totalCostRef!: TotalCostComponent;
  @ViewChildren(CarTableRowComponent)
  carRows!: QueryList<CarTableRowComponent>;
  totalCost!: number;
  grossCost: number | any;
  cars: Car[] = [];
  carForm: FormGroup | any;

  constructor(
    private carsService: CarsService,
    private router: Router,
    private formBuilder: FormBuilder,
    private costSharedService: CostSharedService
  ) {}

  ngOnInit(): void {
    this.loadCars();
    this.carForm = this.buildCarForm();
  }

  buildCarForm() {
    return this.formBuilder.group({
      model: ['', Validators.required],
      type: '',
      plate: [
        '',
        [Validators.minLength(3), Validators.required, Validators.maxLength(7)],
      ],
      deliveryDate: '',
      deadline: '',
      color: '',
      power: ['', CsValidators.power],
      clientFirstName: '',
      clientSurname: '',
      isFullyDamaged: '',
      year: '',
      parts: this.formBuilder.array([]),
    });
  }

  buildParts(): FormGroup {
    return this.formBuilder.group({
      name: '',
      inStock: true,
      price: '',
    });
  }
  get parts(): FormArray {
    return <FormArray>this.carForm.get('parts');
  }

  addPart(): void {
    this.parts.push(this.buildParts());
  }

  removePart(i: number): void {
    this.parts.removeAt(i);
  }

  togglePlateValidity() {
    const damageControl = this.carForm.get('isFullyDamaged');
    const plateControl = this.carForm.get('plate');
    if (damageControl.value) {
      plateControl.clearValidators();
    } else {
      plateControl.setValidators([
        Validators.minLength(3),
        Validators.required,
        Validators.maxLength(7),
      ]);
    }

    plateControl.updateValueAndValidity();
  }
  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
      this.costSharedService.shareCost(this.totalCost);
    });
  }
  addCar() {
    let carFormData = Object.assign({}, this.carForm.value);
    carFormData.cost = this.getPartsCost(carFormData.parts);
    this.carsService.addCar(carFormData).subscribe(() => {
      this.loadCars();
    });
  }

  getPartsCost(parts: any[]) {
    return parts.reduce((prev, nextPart) => {
      return parseFloat(prev) + parseFloat(nextPart.price);
    }, 0);
  }
  ngAfterViewInit() {
    this.totalCostRef.showGross();
    this.carRows.changes.subscribe(() => {
      if (this.carRows.first.car.clientSurname === 'Kowalski') {
        console.log('Warning, Client Kowalski is next queue!');
      }
    });
  }

  onRemovedCar(car: Car) {
    this.carsService.removeCar(car.id).subscribe(() => {
      this.loadCars();
    });
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }

  goToCarDetail(car: Car) {
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
  canDeactivate() {
    if (!this.carForm.dirty) {
      return true;
    }
    return window.confirm('Disable changes?');
  }
}
