import { Component, OnInit } from '@angular/core';
import { PreviousCardsService} from '../../../services/previousCards/previous-cards.service';
import {Router} from '@angular/router';
import {PriceCard} from '../../../classes/pricecard/price-card';

@Component({
  selector: 'app-pricecard-previous',
  templateUrl: './pricecard-previous.component.html',
  styleUrls: ['./pricecard-previous.component.scss']
})
export class PricecardPreviousComponent implements OnInit {
   pricecards: PriceCard[];

  constructor(private previousCardsService: PreviousCardsService, private router: Router) { }

  ngOnInit(): void {
    this.getTemplates();
  }

  getTemplates() {
    this.previousCardsService.getPriceCards().subscribe((data) => {
      this.pricecards = data;
    });
  }

  searchTemplate(searchTerm){
    const search = {search: searchTerm};
    if (search.search != null) {
      this.previousCardsService.searchPriceCard(search).subscribe((data) => {
        this.pricecards = data.found;
      });
    }
  }

  GoToEditor(id){
    this.previousCardsService.getPriceCard(id).subscribe((data) => {
      this.router.navigateByUrl('/home/editor', {state: data});
    });
  }

  deleteTemplate(id){
    // TODO: add are you sure model
    this.previousCardsService.deletePriceCard(id).subscribe((data) => {
      this.getTemplates();
    });
  }

}
