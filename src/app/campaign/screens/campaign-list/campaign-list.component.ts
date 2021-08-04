import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICampaign } from 'src/app/core/interfaces';
import { IPropertyLabel } from '../../../core/interfaces/common.interface';
import { completedCampaignsMock } from '../../../../utils/mock';
import { filterByPropertiesData, sortByPropertiesData } from '../../../core/data/filters.data';
import CampaignFacade from '../../../core/services/campaign/campaign.facade';
import { fadeAnimation, fadeListAnimation, popInAnimation } from '../../../shared/animations';

@Component({
  selector: 'ts-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
  animations: [
    fadeAnimation,
    popInAnimation,
    fadeListAnimation
  ]
})
export class CampaignListComponent implements OnInit  {
    public campaigns: ICampaign[] = [];
    public completedCampaigns: ICampaign[] = completedCampaignsMock;
    enableCompletedCampaigns?: boolean;
    public filteredCampaigns: ICampaign[] = new Array<ICampaign>();
    public sortByProperties: IPropertyLabel[] = sortByPropertiesData;
    filterByProperties: IPropertyLabel[] = filterByPropertiesData;
    @Input() justActiveCampaign?: boolean;
    @Input() justCompletedCampaign?: boolean;
    @Input() justList?: boolean;
    @Input() disableClientFilter?: boolean;

    constructor(
      private router: Router,
      public campaignFacade: CampaignFacade,
    ) { }

    ngOnInit(): void {
      this.enableCompletedCampaigns = this.justCompletedCampaign;
      this.filterByProperties = this.disableClientFilter ? [] : this.filterByProperties;
      this.campaigns = this.campaignFacade.campaigns;
    }

  get secondLayoutMode(): boolean {
      return !!this.justActiveCampaign || !!this.justCompletedCampaign;
  }
  setFilteredCampaign(campaigns: ICampaign[]): void {
      this.filteredCampaigns = campaigns;
    }

    updateCampaigns(completed: boolean): void {
      this.enableCompletedCampaigns = completed;
    }

    goToCreateCampaign(): void {
      this.router.navigate(['/main/campaign/create/details']);
    }
}
