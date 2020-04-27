import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricecardTemplateComponent } from './pricecard-template.component';

describe('PricecardTemplateComponent', () => {
  let component: PricecardTemplateComponent;
  let fixture: ComponentFixture<PricecardTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricecardTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricecardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
