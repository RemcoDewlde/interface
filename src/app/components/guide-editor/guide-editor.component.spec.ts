import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideEditorComponent } from './guide-editor.component';

describe('GuideEditorComponent', () => {
  let component: GuideEditorComponent;
  let fixture: ComponentFixture<GuideEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
