import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../models/car';

@Component({
  selector: 'cs-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit {
  car : Car | undefined;

  constructor(private carsService: CarsService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCar();
  }
  loadCar() {
    const id = +this.route.snapshot.params['id'];
  
  this.carsService.getCar(id).subscribe((car: any) => {
    this.car = car;
  });
}

}
