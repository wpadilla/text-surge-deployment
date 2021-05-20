import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignScriptsComponent } from './campaign-scripts.component';

describe('CampaignScriptsComponent', () => {
  let component: CampaignScriptsComponent;
  let fixture: ComponentFixture<CampaignScriptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignScriptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
