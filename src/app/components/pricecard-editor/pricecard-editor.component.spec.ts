import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricecardEditorComponent } from './pricecard-editor.component';

describe('PricecardEditorComponent', () => {
  let component: PricecardEditorComponent;
  let fixture: ComponentFixture<PricecardEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricecardEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricecardEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
