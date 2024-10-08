import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'cs-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalCostComponent implements OnChanges {
  @Input()
  totalCost!: number | 0;
  @Output() shownGross: EventEmitter<number> = new EventEmitter<number>();
  private Vat: number = 1.23;
  costThreshold: number = 10000;
  isCostTooLow: boolean = false;

  showGross(): void {
    this.shownGross.emit(this.totalCost * this.Vat);
  }
  ngOnInit() {
    this.isCostTooLow = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isCostTooLow = changes['totalCost'].currentValue < this.costThreshold;
  }
}
