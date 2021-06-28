import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfAssignmentRequestsComponent } from './self-assignment-requests.component';

describe('MessengerComponent', () => {
  let component: SelfAssignmentRequestsComponent;
  let fixture: ComponentFixture<SelfAssignmentRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfAssignmentRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfAssignmentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
