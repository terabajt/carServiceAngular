import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CostSharedService } from '../../cost-shared.service';

@Component({
  selector: 'cs-income-tax',
  templateUrl: './income-tax.component.html',
})
export class IncomeTaxComponent implements OnInit {
  private incomeTax : number = 18;
  income: number | undefined;
  costSubscription : Subscription | undefined 

  constructor( private costSharedService: CostSharedService) { }

  ngOnInit(): void {
    this.costSubscription = this.costSharedService.totalCostSource$.subscribe((cost) => {
      this.income = cost * this.incomeTax / 100;
    })
  }

  ngOnDestroy() {
    if(this.costSubscription) {
this.costSubscription?.unsubscribe();
    }
  }

}
