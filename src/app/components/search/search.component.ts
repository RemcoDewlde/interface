import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PriceCard} from '../../classes/pricecard/price-card';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  public title: string;

  @Input()
  set searchForTitle(title: string) {
    this.title =  `for ${title}` || '';
  }
  @Output() SearchEventEmitter = new EventEmitter();


  ngOnInit(): void {
  }

  SearchEvent(value) {
    this.SearchEventEmitter.emit(value);
  }

}
