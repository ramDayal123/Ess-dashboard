import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssReqComponent } from './ess-req.component';

describe('EssReqComponent', () => {
  let component: EssReqComponent;
  let fixture: ComponentFixture<EssReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
