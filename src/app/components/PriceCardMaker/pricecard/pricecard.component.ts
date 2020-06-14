import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PriceCard} from '../../../classes/pricecard/price-card';

@Component({
  selector: 'app-pricecard',
  templateUrl: './pricecard.component.html',
  styleUrls: ['./pricecard.component.scss']
})
export class PricecardComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _title = '';

  @Input() priceCard: PriceCard;

  @Input()
  set title(title: string) {
    this._title = (title && title.trim()) || '<no title set>';
  }

  get title(): string {
    return this._title;
  }

  @Output() PrimaryButtonEvent = new EventEmitter();
  @Output() SecondaryButtonEvent = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
  }

  primaryButtonPress(id) {
    this.PrimaryButtonEvent.emit(id);
  }

  secondaryButtonPress(id) {
    this.SecondaryButtonEvent.emit(id);
  }

}
