import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminborrowedComponent } from './adminborrowed.component';

describe('AdminborrowedComponent', () => {
  let component: AdminborrowedComponent;
  let fixture: ComponentFixture<AdminborrowedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminborrowedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminborrowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
