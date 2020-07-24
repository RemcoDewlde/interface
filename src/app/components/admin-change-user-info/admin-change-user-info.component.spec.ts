import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChangeUserInfoComponent } from './admin-change-user-info.component';

describe('AdminChangeUserInfoComponent', () => {
  let component: AdminChangeUserInfoComponent;
  let fixture: ComponentFixture<AdminChangeUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChangeUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChangeUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
