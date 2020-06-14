import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideManualComponent } from './guide-manual.component';

describe('GuideManualComponent', () => {
  let component: GuideManualComponent;
  let fixture: ComponentFixture<GuideManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
