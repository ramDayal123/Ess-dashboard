import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeeNomineeUpdateComponent } from './emplyee-nominee-update.component';

describe('EmplyeeNomineeUpdateComponent', () => {
  let component: EmplyeeNomineeUpdateComponent;
  let fixture: ComponentFixture<EmplyeeNomineeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplyeeNomineeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplyeeNomineeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
