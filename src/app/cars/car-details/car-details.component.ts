import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../models/car';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cs-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less'],
})
export class CarDetailsComponent implements OnInit {
  car!: Car;
  carForm: FormGroup | any;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCar();
    this.carForm = this.buildCarForm();
  }
  loadCar() {
    this.car = this.route.snapshot.data['car'];
  }

  buildCarForm() {
    return this.formBuilder.group({
      model: [this.car?.model, Validators.required],
      type: this.car?.type,
      plate: [
        this.car?.plate,
        [Validators.minLength(3), Validators.required, Validators.maxLength(7)],
      ],
      deliveryDate: this.car?.deliveryDate,
      deadline: this.car?.deadline,
      color: this.car?.color,
      power: this.car?.power,
      clientFirstName: this.car?.clientFirstName,
      clientSurname: this.car?.clientSurname,
      cost: this.car?.cost,
      isFullyDamaged: this.car?.isFullyDamaged,
      year: this.car?.['year'],
    });
  }
  updateCar() {
    this.carsService.updateCar(this.car?.id, this.carForm.value).subscribe(() => {
      this.router.navigate(['/cars']);
    })
  }

}
