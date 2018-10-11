import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreturnedComponent } from './adminreturned.component';

describe('AdminreturnedComponent', () => {
  let component: AdminreturnedComponent;
  let fixture: ComponentFixture<AdminreturnedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminreturnedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminreturnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
