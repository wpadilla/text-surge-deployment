import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICampaign } from 'src/app/core/interfaces';
import { IPropertyLabel } from '../../../core/interfaces/common.interface';
import { campaignMock } from '../../../../utils/mock';
import { filterByPropertiesData, sortByPropertiesData } from '../../../core/data/filters.data';

@Component({
  selector: 'ts-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public campaigns: ICampaign[] = campaignMock;
    public filteredCampaigns: ICampaign[] = new Array<ICampaign>();
    public sortByProperties: IPropertyLabel[] = sortByPropertiesData;
    filterByProperties: IPropertyLabel[] = filterByPropertiesData;
    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    setFilteredCampaign(campaigns: ICampaign[]): void {
      this.filteredCampaigns = campaigns;
    }
    public submitForm(): void {

    }

    goToCreateCampaign(): void {
       this.router.navigate(['/main/campaign/create/details']);
    }

  selectCampaign(campaign: ICampaign): void {
    if (campaign.tags && campaign.tags.indexOf('draft') > -1) {
      this.router.navigate(['main/campaign/create/details'], {state: {campaign, isDraft: true}});
    }
  }
}
