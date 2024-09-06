import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { CarsService } from '../cars.service';
import { CarDetailsComponent } from './car-details.component';

describe('CarDetailsComponent', () => {
  let component: CarDetailsComponent;
  let carsService: CarsService;
  let route: ActivatedRoute;
  let router: Router;

  beforeEach(() => {
    carsService = {
      updateCar: jest.fn().mockReturnValue(of({})),
    } as any;

    route = {
      snapshot: {
        data: {
          car: {
            id: 1,
            model: 'Test Model',
            type: 'SUV',
            plate: 'ABC123',
            deliveryDate: '2023-01-01',
            deadline: '2023-12-31',
            color: 'Red',
            power: 150,
            clientFirstName: 'John',
            clientSurname: 'Doe',
            isFullyDamaged: false,
            year: 2020,
            parts: [
              { name: 'Engine', inStock: true, price: '1000' },
              { name: 'Tire', inStock: true, price: '100' },
            ],
          },
        },
      },
    } as any;

    router = {
      navigate: jest.fn(),
    } as any;

    component = new CarDetailsComponent(
      carsService,
      route,
      new FormBuilder(),
      router
    );
    component.ngOnInit();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load car data on init', () => {
    expect(component.car).toEqual(route.snapshot.data['car']);
  });

  it('should build car form on init', () => {
    expect(component.carForm).toBeTruthy();
    expect(component.carForm.value.model).toBe('Test Model');
  });

  it('should add a part', () => {
    const initialLength = component.parts.length;
    component.addPart();
    expect(component.parts.length).toBe(initialLength + 1);
  });

  it('should remove a part', () => {
    const initialLength = component.parts.length;
    component.removePart(0);
    expect(component.parts.length).toBe(initialLength - 1);
  });

  it('should update car', () => {
    component.updateCar();
    expect(carsService.updateCar).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/cars']);
  });

  it('should calculate parts cost', () => {
    const parts = [
      { name: 'Engine', inStock: true, price: '1000' },
      { name: 'Tire', inStock: true, price: '100' },
    ];
    const cost = component.getPartsCost(parts);
    expect(cost).toBe(1100);
  });
});
