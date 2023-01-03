import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSelfServiceComponent } from './employee-self-service.component';

describe('EmployeeSelfServiceComponent', () => {
  let component: EmployeeSelfServiceComponent;
  let fixture: ComponentFixture<EmployeeSelfServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSelfServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSelfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
