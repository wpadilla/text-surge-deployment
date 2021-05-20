import { Injectable } from '@angular/core';
import { ICampaign } from '../../interfaces';
import { campaignMock } from '../../../../utils/mock';


@Injectable()
export default class CampaignService {

  constructor(
  ) {
    const localCampaigns = localStorage.getItem('campaigns');
    if (localCampaigns) {
      this.campaigns = JSON.parse(localCampaigns);
    } else {
      localStorage.setItem('campaigns', JSON.stringify(campaignMock));
      this.campaigns = JSON.parse(localStorage.getItem('campaigns') as any);
    }
  }

  get campaigns(): ICampaign[]{
    return JSON.parse(localStorage.getItem('campaigns') as any);
  }

  set campaigns(campaigns: ICampaign[]) {
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
  }

  create(campaign: Exclude<ICampaign, 'id'>): void {
    const id = Math.floor(Math.random() * 100);
    this.campaigns = [
      ...this.campaigns,
      {
        ...campaign,
        id,
      }
    ];
  }

  update(id: number, campaign: Exclude<ICampaign, 'id'>): void {
    this.campaigns = this.campaigns.map(item => item.id === id ? ( { ...item, ...campaign }) : item );
  }

  delete(id: number): void {
    this.campaigns = this.campaigns.filter(item => item.id !== id);
  }
}
