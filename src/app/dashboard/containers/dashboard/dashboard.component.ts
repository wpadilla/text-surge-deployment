import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from 'src/app/core/interfaces';
import { IPropertyLabel } from '../../../core/interfaces/common';
import { campaignMock } from '../../../../utils/mocks';
import { filterByPropertiesData, sortByPropertiesData } from '../../../core/data/filters.data';

@Component({
  selector: 'ts-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public campaigns: Campaign[] = campaignMock;
    public filteredCampaigns: Campaign[] = new Array<Campaign>();
    public sortByProperties: IPropertyLabel[] = sortByPropertiesData;
    filterByProperties: IPropertyLabel[] = filterByPropertiesData;
    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    setFilteredCampaign(campaigns: Campaign[]): void {
      this.filteredCampaigns = campaigns;
    }
    public submitForm(): void {

    }

    goToCreateCampaign(): void {
       this.router.navigate(['/main/campaign/create/details']);
    }
}
