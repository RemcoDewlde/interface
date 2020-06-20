import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';
import {TemplateService} from '../../../services/pricecardTemplate/template.service';
import {Router} from '@angular/router';
import {PreviousCardsService} from '../../../services/previousCards/previous-cards.service';

@Component({
  selector: 'app-pricecard-editor',
  templateUrl: './pricecard-editor.component.html',
  styleUrls: ['./pricecard-editor.component.scss']
})
export class PricecardEditorComponent implements OnInit {
  priceCardForm: any;
  ok: any;
  sellingPoints: FormArray;
  private stateSellingPointsArray;

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private templateService: TemplateService, private router: Router, private priceCardService: PreviousCardsService) {
  }

  ngOnInit(): void {
    // setup the editor form
    this.priceCardForm = this.formBuilder.group({
        Name: '',
        productPrice: '',
        status: '',
        marge: false,
        sale: false,
        salePrice: '',
        sellingPoints: this.formBuilder.array([])
      }
    );

    // check if history has a form object in the state
    // if yes than fill the form with that information
    // if no fill with empty string and add a empty sellingPoint
    if ('Name' in history.state) {
      this.stateSellingPointsArray = history.state.sellingPoints;
      this.priceCardForm.setValue({
        Name: history.state.Name,
        productPrice: history.state.productPrice,
        status: history.state.status,
        marge: history.state.marge,
        sale: history.state.sale,
        salePrice: history.state.salePrice,
        sellingPoints:  []
      });

      // selling point are filled here because there must be first a field before you can
      // push data into that field
      this.stateSellingPointsArray.forEach(point => {
        this.sellingpointsArray.push(this.formBuilder.group({
          nameSellingPoint: [point.nameSellingPoint],
          valueSellingPoint: [point.valueSellingPoint],
        }));
      });
    }
    else {
      // add the empty sellingPoint fields
      this.addSellingPoint();
    }
  }

  get sellingpointsArray() {
    return this.priceCardForm.get('sellingPoints') as FormArray;
  }

  addSellingPoint() {
    const sellingPoint = this.formBuilder.group({
      nameSellingPoint: [],
      valueSellingPoint: [],
    });
    this.sellingpointsArray.push(sellingPoint);
  }

  deleteSellingPoint(i) {
    this.sellingpointsArray.removeAt(i);
  }

  saveAsTemplate(form) {
    const cop = JSON.parse(JSON.stringify(form));
    this.templateService.postTemplate(cop).subscribe((data) => {
      this.ok = data;
    });
  }

  saveToPreviousPriceCard(form) {
    const cop = JSON.parse(JSON.stringify(form));
    this.priceCardService.postPriceCards(cop).subscribe((data) => {
      this.ok = data;
    });
  }

  toPreview(form) {
    this.router.navigateByUrl('/home/printpage', {state : form});
  }
}
