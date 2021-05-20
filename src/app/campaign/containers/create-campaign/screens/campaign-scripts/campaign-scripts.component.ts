import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import CampaignFacade from '../../../../../core/services/campaign/campaign.facade';
import IClient from '../../../../../core/interfaces/client.interface';
import { globalSearch } from '../../../../../../utils';
import { ICampaign } from '../../../../../core/interfaces';

@Component({
  selector: 'app-campaign-scripts-form',
  templateUrl: './campaign-scripts.component.html',
  styleUrls: ['./campaign-scripts.component.scss']
})
export class CampaignScriptsComponent implements OnInit {

  constructor(private router: Router,
              private cdr: ChangeDetectorRef,
              public campaignFacade: CampaignFacade,
  ) {
  }

  public form: FormGroup = new FormGroup({});
  filteredClients: Partial<IClient>[] = [];
  filteredTimezones: any[] = [];
  isDraft?: boolean;
  campaignId?: number;
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

  }

  getNeedCampaignProperties(campaign: Partial<ICampaign>): Partial<ICampaign>{
    return  {
    };
  }


  submitForm(): void {
    console.log(this.form.value);
  }

  filterClients(data: any): void {
    this.filteredClients = globalSearch(this.clients, data.query);
  }

  filterTimezones(data: any): void {
    this.filteredTimezones =  globalSearch(this.timezones, data.query);
  }
}


