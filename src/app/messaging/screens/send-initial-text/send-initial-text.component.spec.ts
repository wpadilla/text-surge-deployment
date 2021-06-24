import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendInitialTextComponent } from './send-initial-text.component';

describe('MessengerComponent', () => {
  let component: SendInitialTextComponent;
  let fixture: ComponentFixture<SendInitialTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendInitialTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendInitialTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
