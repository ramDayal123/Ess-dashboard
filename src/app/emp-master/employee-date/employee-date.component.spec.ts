import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDateComponent } from './employee-date.component';

describe('EmployeeDateComponent', () => {
  let component: EmployeeDateComponent;
  let fixture: ComponentFixture<EmployeeDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
