import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDateTypeComponent } from './employee-date-type.component';

describe('EmployeeDateTypeComponent', () => {
  let component: EmployeeDateTypeComponent;
  let fixture: ComponentFixture<EmployeeDateTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDateTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDateTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
