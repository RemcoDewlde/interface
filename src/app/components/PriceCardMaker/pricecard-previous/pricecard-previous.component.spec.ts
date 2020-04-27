import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricecardPreviousComponent } from './pricecard-previous.component';

describe('PricecardPreviousComponent', () => {
  let component: PricecardPreviousComponent;
  let fixture: ComponentFixture<PricecardPreviousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricecardPreviousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricecardPreviousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
