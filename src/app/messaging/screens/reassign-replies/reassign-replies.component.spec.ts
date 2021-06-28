import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReassignRepliesComponent } from './reassign-replies.component';

describe('MessengerComponent', () => {
  let component: ReassignRepliesComponent;
  let fixture: ComponentFixture<ReassignRepliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReassignRepliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReassignRepliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
