import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: '[cs-car-table-row]',
  templateUrl: './car-table-row.component.html'
})
export class CarTableRowComponent implements OnInit {
  @Input()
  car!: Car;
@Output() removedCar = new EventEmitter
@HostBinding('class.after-deadline') deadline : boolean = false;

ngOnInit() {
  this.deadline = new Date(this.car.deadline) < new Date();
}
 
  removeCar(car: any, event: any) {
    event?.stopPropagation();
    this.removedCar.emit(car);
  }

}
