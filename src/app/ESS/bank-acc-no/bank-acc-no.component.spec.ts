import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccNoComponent } from './bank-acc-no.component';

describe('BankAccNoComponent', () => {
  let component: BankAccNoComponent;
  let fixture: ComponentFixture<BankAccNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccNoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
