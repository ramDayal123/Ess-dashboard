import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpButtonComponent } from './emp-button.component';

describe('EmpButtonComponent', () => {
  let component: EmpButtonComponent;
  let fixture: ComponentFixture<EmpButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
