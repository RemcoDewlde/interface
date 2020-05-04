import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadGuideComponent } from './read-guide.component';

describe('ReadGuideComponent', () => {
  let component: ReadGuideComponent;
  let fixture: ComponentFixture<ReadGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
