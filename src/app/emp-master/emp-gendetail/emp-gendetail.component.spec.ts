import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpGendetailComponent } from './emp-gendetail.component';

describe('EmpGendetailComponent', () => {
  let component: EmpGendetailComponent;
  let fixture: ComponentFixture<EmpGendetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpGendetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpGendetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
