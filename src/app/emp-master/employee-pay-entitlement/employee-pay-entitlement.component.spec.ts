import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePayEntitlementComponent } from './employee-pay-entitlement.component';

describe('EmployeePayEntitlementComponent', () => {
  let component: EmployeePayEntitlementComponent;
  let fixture: ComponentFixture<EmployeePayEntitlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePayEntitlementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePayEntitlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
