import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import CampaignFacade from '../../../core/services/campaign/campaign.facade';
import IClient from '../../../core/interfaces/client.interface';
import { globalSearch } from '../../../../utils';
import { ICampaign } from '../../../core/interfaces';

@Component({
  selector: 'app-campaign-detail-form',
  templateUrl: './campaign-detail-form.component.html',
  styleUrls: ['./campaign-detail-form.component.scss'],
})
export class CampaignDetailFormComponent implements OnInit, AfterViewInit {

  constructor(private router: Router,
              private cdr: ChangeDetectorRef,
              public campaignFacade: CampaignFacade,
              private activedRoute: ActivatedRoute,
  ) {
  }

  public form: FormGroup = new FormGroup({});
  filteredClients: Partial<IClient>[] = [];
  filteredTimezones: any[] = [];
  isDraft?: boolean;
  campaignId?: number;
  mode: 'New' | 'Edit' = 'New';
  timezones: any[] = [{
    name: 'UTC',
    id: 1,
  },
    {
      name: 'NT MTO',
      id: 2,
    },
    {
      name: 'LU PH',
      id: 3,
    }];

  clients: Partial<IClient>[] = [{
    name: 'Va Game',
    id: 1,
  },
    {
      name: 'Second Client',
      id: 2,
    },
    {
      name: 'Third Client',
      id: 3,
    }];

  ngOnInit(): void {
    this.cdr.detectChanges();
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.mode = 'Edit';
    }
  }

  getNeedCampaignProperties(campaign: Partial<ICampaign>): Partial<ICampaign>{
    return  {
      clientID: this.clients.find(client => client.id === campaign.clientID) as any,
      name: campaign.name,
      description: campaign.description,
      endDate: new Date(campaign.endDate as Date),
      totalClientBudget: campaign.totalClientBudget,
      clientRate: campaign.clientRate,
      initialRate: campaign.initialRate,
      replyRate: campaign.replyRate,
      startTime: new Date(campaign.startTime as Date),
      endTime: new Date(campaign.endTime as Date),
      timezone: this.timezones.find(timezone => timezone.name === campaign.timezone),
    };
  }

  ngAfterViewInit(): void {
    const params = this.activedRoute.snapshot.params;
    const campaign = this.campaignFacade.get(params.id);
    if (campaign) {
      const campaignDraft = this.getNeedCampaignProperties(campaign);
      this.campaignId = campaign.id;
      this.form.setValue(campaignDraft);
    }
  }

  submitForm(): void {
    if (this.form.status === 'VALID') {
      const clientID = this.clients.find(client => client.id === this.form.value.clientID.id)?.id;
      const timezone = this.timezones.find(timezone => timezone.name === this.form.value.timezone.name)?.name;
      if (this.isDraft && this.campaignId) {
        this.campaignFacade.update(this.campaignId, {
          ...this.form.value,
          clientID,
          timezone,
        });
      } else {
        this.campaignFacade.create({
          ...this.form.value,
          tags: ['draft'],
          clientID,
          timezone,
        });
      }
      if (this.mode === 'New') {
        this.router.navigate(['main/campaign/create/contacts']);
      } else {
        this.router.navigate(['main/campaign/view/1']);
      }
    }
    console.log(this.form.value);
  }

  filterClients(data: any): void {
    this.filteredClients = globalSearch(this.clients, data.query);
  }

  filterTimezones(data: any): void {
    this.filteredTimezones =  globalSearch(this.timezones, data.query);
  }
}


