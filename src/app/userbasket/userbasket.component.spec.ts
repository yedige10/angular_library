import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbasketComponent } from './userbasket.component';

describe('UserbasketComponent', () => {
  let component: UserbasketComponent;
  let fixture: ComponentFixture<UserbasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
