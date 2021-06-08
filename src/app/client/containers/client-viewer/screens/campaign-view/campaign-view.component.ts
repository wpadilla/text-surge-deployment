import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import CampaignFacade from "../../../../../core/services/campaign/campaign.facade";
import { ICampaign, ILabelValue, StatusRelatedType } from "../../../../../core/interfaces";

@Component({
  selector: 'ts-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private campaignFacade: CampaignFacade,
  ) {
  }

  items: any[] = [];
  contactsStatusFilter?: string;
  contactsScriptFilter?: string;
  contactsTagFilter?: string;
  tabActiveIndex = 0;

  tabNames = [
    'dashboard',
    'contacts',
    'scripts',
    'messages',
  ];
  routes = {
    editCampaign: 'main/campaign/edit/details/',
  };
  campaign: ICampaign = {} as any;
  campaignTagStatus: StatusRelatedType = {
    'in progress': 'info',
    completed: 'success',
    'not started': 'disabled',
    'unassigned contacts': 'danger',
    draft: 'danger',
  };

  ngOnInit(): void {
    const {snapshot} = this.activatedRoute;
    if (snapshot.queryParams) {
      const tabIndex = this.tabNames.indexOf(this.activatedRoute.snapshot.queryParams.tab);
      this.tabActiveIndex = tabIndex !== -1 ? tabIndex : this.tabActiveIndex;
    }
    const campaign = this.campaignFacade.get(snapshot.params.id);
    if (campaign) {
      this.campaign = campaign;
    } else {
      this.router.navigate(['main/campaign']);
    }
  }

  goTo(path: string): void {
    console.log(path, 'hola');
    this.router.navigate([path]);
  }

  selectContactTab(data: ILabelValue): void {
    this.tabActiveIndex = 1;
    this.contactsStatusFilter = '';
    this.contactsTagFilter = '';
    this.contactsScriptFilter = '';
    const label = data.label ? data.label.toLowerCase() : '';
    if (label.includes('sent')) {
      this.contactsStatusFilter = 'sent';
    } else if (label.includes('reply')) {
      this.contactsStatusFilter = 'replied';

    } else if (label.includes('delivery')) {
      this.contactsStatusFilter = 'bounced';

    } else if (label.includes('click')) {
      this.contactsTagFilter = 'subscribed';

    } else if (label.includes('subscribed')) {
      this.contactsTagFilter = 'subscribed';

    } else if (label.includes('unsubscribe')) {
      this.contactsTagFilter = 'unsubscribed';

    }


  }

  onTabChange(value: any): void {
    if (value.index === 3) {
      this.router.navigate(['main/messaging/view']);
    }
  }
}
