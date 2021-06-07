import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILabelValue } from '../../../../../core/interfaces';

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
    editCampaign: 'main/campaign/edit/details/1',
  };

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.queryParams) {
      const tabIndex = this.tabNames.indexOf(this.activatedRoute.snapshot.queryParams.tab);
      this.tabActiveIndex = tabIndex !== -1 ? tabIndex : this.tabActiveIndex;
    }
  }

  goTo(path: string): void {
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
    }  else if (label.includes('reply')) {
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
