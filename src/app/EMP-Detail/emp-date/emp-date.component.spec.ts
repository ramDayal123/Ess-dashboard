import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDateComponent } from './emp-date.component';

describe('EmpDateComponent', () => {
  let component: EmpDateComponent;
  let fixture: ComponentFixture<EmpDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
