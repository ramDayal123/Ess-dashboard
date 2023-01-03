import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachfileComponent } from './attachfile.component';

describe('AttachfileComponent', () => {
  let component: AttachfileComponent;
  let fixture: ComponentFixture<AttachfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
