import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { campaignMock, completedCampaignsMock } from '../../../../utils/mock';
import { Router } from '@angular/router';
import { routePathNames } from '../../../../utils/routes.utils';
import { horizontalSlideAnimation } from '../../../shared/animations';

@Component({
  selector: 'ts-texter-dashboard',
  templateUrl: './texter-dashboard.component.html',
  styleUrls: ['./texter-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    horizontalSlideAnimation,
  ]
})
export class TexterDashboardComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  campaigns = campaignMock;
  completedCampaigns = completedCampaignsMock;
  selfAssignDialogIsVisible?: boolean;
  periods = [
    {
      label: 'Current Pay Period',
    },
    {
      label: 'Week',
    },
    {
      label: 'Month',
    },
    {
      label: 'Quarter',
    },
    {
      label: 'Year',
    },
  ];
  dates = [
    {
      label: 'Start Date',
      value: '2/5/21',
    },
    {
      label: 'End Date',
      value: '2/19/21',
    }
  ];

  initialTexts = [
    {
      label: 'Sent',
      value: '4000',
    },
    {
      label: 'Earned',
      value: '$200.00',
    }
  ];

  replies = [
    {
      label: 'Sent',
      value: '750',
    },
    {
      label: 'Earned',
      value: '$150.00',
    }
  ];

  ngOnInit(): void {
  }

  goToSendInitialText(id: number): void {
    this.router.navigate([routePathNames.main.messaging.assignments['send-initial-text'].path, id]);
  }

  goToCampaignReplies(campaignName: string): void {
    this.router.navigate([routePathNames.main.messaging.inbox.path], {queryParams: {campaignName}});
  }
}
