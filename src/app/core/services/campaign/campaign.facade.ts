import { Injectable } from '@angular/core';
import { ICampaign } from '../../interfaces';
import CampaignService from './campaign.service';


@Injectable()
export default class CampaignFacade {

  constructor(
    private campaignService: CampaignService,
  ) {
  }

  get campaigns(): ICampaign[]{
    return this.campaignService.campaigns;
  }

  get(id: number): ICampaign | undefined {
    return this.campaigns.find(item => item.id === Number(id));
  }

  create(campaign: Exclude<ICampaign, 'id'>): void {
    this.campaignService.create(campaign);
  }

  update(id: number, campaign: Exclude<ICampaign, 'id'>): void {
    this.campaignService.update(id, campaign);
  }

  delete(id: number): void {
    this.campaignService.delete(id);
  }
}
