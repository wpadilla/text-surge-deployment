import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCampaignMessagesComponent } from './view-campaign-messages.component';

describe('ViewCampaignMessagesComponent', () => {
  let component: ViewCampaignMessagesComponent;
  let fixture: ComponentFixture<ViewCampaignMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCampaignMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCampaignMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
