import { Injectable } from '@angular/core';
import { Car } from './models/car';
import { Observable, BehaviorSubject, Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private apiUrl = "http://localhost:3000/api/cars";
  constructor(private http : HttpClient) { }

   getCars() : Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

}
