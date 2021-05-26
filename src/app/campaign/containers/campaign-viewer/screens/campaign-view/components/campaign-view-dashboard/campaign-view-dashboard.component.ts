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
    value: 1000,
  }];

  ngOnInit(): void {
  }

}
