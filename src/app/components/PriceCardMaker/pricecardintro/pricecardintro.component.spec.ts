import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricecardintroComponent } from './pricecardintro.component';

describe('PricecardintroComponent', () => {
  let component: PricecardintroComponent;
  let fixture: ComponentFixture<PricecardintroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricecardintroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricecardintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
