import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESSDashboardComponent } from './ess-dashboard.component';

describe('ESSDashboardComponent', () => {
  let component: ESSDashboardComponent;
  let fixture: ComponentFixture<ESSDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESSDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ESSDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
