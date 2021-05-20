import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignTextersComponent } from './campaign-texters.component';

describe('CampaignTextersComponent', () => {
  let component: CampaignTextersComponent;
  let fixture: ComponentFixture<CampaignTextersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignTextersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignTextersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
