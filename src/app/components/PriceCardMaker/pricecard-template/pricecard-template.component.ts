import {Component, OnInit} from '@angular/core';
import {PriceCard} from '../../../classes/pricecard/price-card';
import {TemplateService} from '../../../services/pricecardTemplate/template.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pricecard-template',
  templateUrl: './pricecard-template.component.html',
  styleUrls: ['./pricecard-template.component.scss']
})
export class PricecardTemplateComponent implements OnInit {

  constructor(private templateService: TemplateService, private router: Router) {
  }

  templates: PriceCard[];

  ngOnInit(): void {
    this.getTemplates();
  }

  getTemplates() {
    this.templateService.getTemplates().subscribe((data) => {
      this.templates = data;
    });
  }

  searchTemplate(searchTerm){
    const search = {search: searchTerm};
    if (search.search != null) {
      this.templateService.searchTemplate(search).subscribe((data) => {
        this.templates = data.found;
      });
    }
  }

  GoToEditor(id){
    this.templateService.getTemplate(id).subscribe((data) => {
      this.router.navigateByUrl('/pricecard/editor', {state: data});
    });
  }

  deleteTemplate(id){
   // TODO: add are you sure model
    this.templateService.deleteTemplate(id).subscribe(() => {
      this.getTemplates();
    });
  }

}
