import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignContactListComponent } from './campaign-contact-list.component';

describe('CampaignTextersComponent', () => {
  let component: CampaignContactListComponent;
  let fixture: ComponentFixture<CampaignContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignContactListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
