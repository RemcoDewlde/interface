import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugReportOverviewComponent } from './bug-report-overview.component';

describe('BugReportOverviewComponent', () => {
  let component: BugReportOverviewComponent;
  let fixture: ComponentFixture<BugReportOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugReportOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugReportOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
