import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailFormComponent } from './campaign-detail-form.component';

describe('CampaignDetailFormComponent', () => {
  let component: CampaignDetailFormComponent;
  let fixture: ComponentFixture<CampaignDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
