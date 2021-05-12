import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from 'src/app/core/interfaces';
import { IPropertyLabel } from '../../../core/interfaces/common';
import { campaignMock } from '../../../../utils/mocks';
import { filterByPropertiesData, sortByPropertiesData } from '../../../core/data/filters.data';

@Component({
  selector: 'ts-dashboard',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
    public campaigns: Campaign[] = campaignMock;
    public filteredCampaigns: Campaign[] = new Array<Campaign>();
    public sortByProperties: IPropertyLabel[] = sortByPropertiesData;
    filterByProperties: IPropertyLabel[] = filterByPropertiesData;
    activeTab = 1;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    setFilteredCampaign(campaigns: Campaign[]): void {
      this.filteredCampaigns = campaigns;
    }
    public submitForm(): void {

    }
}
