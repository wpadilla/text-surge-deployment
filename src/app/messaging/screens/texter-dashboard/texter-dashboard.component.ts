import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IAction, IPropertyLabel } from '../../../core/interfaces';
import { fakeMessageMock } from '../../../../utils/mock/messages.mock';
import IMessage from '../../../core/interfaces/message.interface';
import { campaignMock, completedCampaignsMock } from "../../../../utils/mock";

@Component({
  selector: 'ts-texter-dashboard',
  templateUrl: './texter-dashboard.component.html',
  styleUrls: ['./texter-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TexterDashboardComponent implements OnInit {

  constructor() {
  }
  campaigns = campaignMock;
  completedCampaigns = completedCampaignsMock;
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
}
