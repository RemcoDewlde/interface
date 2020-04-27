import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomewelkomComponent } from './homewelkom.component';

describe('HomewelkomComponent', () => {
  let component: HomewelkomComponent;
  let fixture: ComponentFixture<HomewelkomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomewelkomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomewelkomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
