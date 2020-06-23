import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-print-page',
  templateUrl: './print-page.component.html',
  styleUrls: ['./print-page.component.scss']
})
export class PrintPageComponent implements OnInit {

  constructor(private router: Router) {
  }

  priceCard: any;

  ngOnInit(): void {
    this.priceCard = history.state;
  }

  openPrintScreen() {
    window.print();
  }

  backToEditor() {
    this.router.navigateByUrl('/pricecard/editor', {state: this.priceCard});
  }

}
