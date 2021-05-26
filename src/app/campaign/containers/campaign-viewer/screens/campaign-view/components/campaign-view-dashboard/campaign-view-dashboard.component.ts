import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ILabelValue } from '../../../../../../../core/interfaces';

@Component({
  selector: 'ts-campaign-view-dashboard',
  templateUrl: './campaign-view-dashboard.component.html',
  styleUrls: ['./campaign-view-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewDashboardComponent implements OnInit {

  constructor() { }
  analyticsData: ILabelValue[] = [{
    label: 'Messages Sent',
    value: '9,375',
  },
    {
      label: 'Contacts Subscribed',
      value: '10,000',
    },
    {
      label: 'Delivery Rate',
      value: '92%',
    },
    {
      label: 'Reply Rate',
      value: '5%',
    },
    {
      label: 'Click Rate',
      value: '9%',
    },
    {
      label: 'Unsubscribe Rate',
      value: '15%',
    },
  ];

  scripts = [
    {
      label: 'All Script',
    },
    {
      label: 'script 1',
    }
  ];

  ngOnInit(): void {
  }

}
