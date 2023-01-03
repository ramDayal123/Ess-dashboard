import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeIdNumberComponent } from './employee-id-number.component';

describe('EmployeeIdNumberComponent', () => {
  let component: EmployeeIdNumberComponent;
  let fixture: ComponentFixture<EmployeeIdNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeIdNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeIdNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
