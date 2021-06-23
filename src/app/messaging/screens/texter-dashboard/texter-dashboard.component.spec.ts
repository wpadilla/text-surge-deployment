import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexterDashboardComponent } from './texter-dashboard.component';

describe('MessengerComponent', () => {
  let component: TexterDashboardComponent;
  let fixture: ComponentFixture<TexterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexterDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
