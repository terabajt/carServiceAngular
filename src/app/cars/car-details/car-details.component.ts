import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../models/car';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  buildParts() : FormGroup {
    return this.formBuilder.group({
      name: '',
      inStock: true,
      price: ''
    });
  }
  get parts() : FormArray {
    return <FormArray>this.carForm.get('parts');
  }

  addPart() : void {
    this.parts.push(this.buildParts())
  }

  removePart(i: number) : void {
    this.parts.removeAt(i);

  }
  loadCar() {
    this.car = this.route.snapshot.data['car'];
  }

  buildCarForm() {
    let parts = this.car.parts.map((part) => this.formBuilder.group(part));
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
      isFullyDamaged: this.car?.isFullyDamaged,
      year: this.car?.['year'],
      parts: this.formBuilder.array(parts)
    });
  }
  updateCar() {
    let carFormData = Object.assign({}, this.carForm.value);
    carFormData.cost = this.getPartsCost(carFormData.parts);
    this.carsService.updateCar(this.car?.id, carFormData).subscribe(() => {
      this.router.navigate(['/cars']);
    })
  }
  getPartsCost(parts: any[]) {
    return parts.reduce((prev, nextPart) => {
      return parseFloat(prev) + parseFloat(nextPart.price);
    }, 0)
  }

}
