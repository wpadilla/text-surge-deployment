import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICampaign } from 'src/app/core/interfaces';
import { IPropertyLabel } from '../../../core/interfaces/common.interface';
import { campaignMock, completedCampaignsMock } from '../../../../utils/mocks';
import { filterByPropertiesData, sortByPropertiesData } from '../../../core/data/filters.data';

@Component({
  selector: 'ts-dashboard',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
    public campaigns: ICampaign[] = campaignMock;
    public filteredCampaigns: ICampaign[] = new Array<ICampaign>();
    public sortByProperties: IPropertyLabel[] = sortByPropertiesData;
    filterByProperties: IPropertyLabel[] = filterByPropertiesData;
    activeTab = 1;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    setFilteredCampaign(campaigns: ICampaign[]): void {
      this.filteredCampaigns = campaigns;
    }

    updateCampaigns(completed: boolean): void {
      this.campaigns = completed ? completedCampaignsMock : campaignMock;
      this.setFilteredCampaign(this.campaigns);
    }

    goToCreateCampaign(): void {
      this.router.navigate(['/main/campaign/create/details']);
    }
}
