import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmGeneralButtonComponent } from './epm-general-button.component';

describe('EpmGeneralButtonComponent', () => {
  let component: EpmGeneralButtonComponent;
  let fixture: ComponentFixture<EpmGeneralButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpmGeneralButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmGeneralButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
