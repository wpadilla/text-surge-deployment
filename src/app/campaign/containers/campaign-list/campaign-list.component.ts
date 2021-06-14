import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICampaign } from 'src/app/core/interfaces';
import { IPropertyLabel } from '../../../core/interfaces/common.interface';
import { completedCampaignsMock } from '../../../../utils/mock';
import { filterByPropertiesData, sortByPropertiesData } from '../../../core/data/filters.data';
import CampaignFacade from '../../../core/services/campaign/campaign.facade';

@Component({
  selector: 'ts-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent implements OnInit  {
    public campaigns: ICampaign[] = [];
    public completedCampaigns: ICampaign[] = completedCampaignsMock;
    completed?: boolean;
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
      this.completed = this.justCompletedCampaign;
      this.filterByProperties = this.disableClientFilter ? [] : this.filterByProperties;
      this.campaigns = this.campaignFacade.campaigns;
    }


  setFilteredCampaign(campaigns: ICampaign[]): void {
      this.filteredCampaigns = campaigns;
    }

    updateCampaigns(completed: boolean): void {
      this.completed = completed;
      this.setFilteredCampaign(this.completedCampaigns);
    }

    goToCreateCampaign(): void {
      this.router.navigate(['/main/campaign/create/details']);
    }

    selectCampaign(campaign: ICampaign): void {
      if (campaign.tags && campaign.tags.indexOf('draft') > -1) {
        this.router.navigate([`main/campaign/create/details/${campaign.id}`]);
      } else if(campaign.tags.indexOf('completed') > -1){
        this.router.navigate([`main/campaign/view/4`]);
      } else {
        this.router.navigate([`main/campaign/view/${campaign.id}`]);
      }
    }
}
