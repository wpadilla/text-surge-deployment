import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ILabelValue } from '../../../../../../../core/interfaces';
import { usersMock } from '../../../../../../../../utils/mock';
import { Router } from '@angular/router';

@Component({
  selector: 'ts-campaign-view-dashboard',
  templateUrl: './campaign-view-dashboard.component.html',
  styleUrls: ['./campaign-view-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewDashboardComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }
  @Output() selectStatistic: EventEmitter<any> = new EventEmitter();
  donutChartData: any = {};
  donutChartOptions: any = {};
  totalBudget = 850;
  used = 300;
  remaining = 0;
  percentageUsed = 0;

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
  users = usersMock;

  scripts = [
    {
      label: 'All Script',
    },
    {
      label: 'script 1',
    }
  ];

  ngOnInit(): void {
    this.remaining = this.totalBudget - this.used;
    this.percentageUsed = Math.ceil((this.remaining * 100) / this.totalBudget);
    this.donutChartData = {
      labels: ['A', 'B'],
      datasets: [
        {
          data: [75, 150],
          backgroundColor: [
            '#fff',
            '#2a5ec8',
          ],
          hoverBackgroundColor: [
            '#eaeeff',
            '#4b82f1',
          ],
          borderWidth: 0,
        }]
    };
    this.donutChartOptions = {
      cutoutPercentage: 80,
      legend: {
        display: false
      },
      radius: '50%',
      rotate: 90,
    };
  }

  goToCampaignTexters(): void {
    this.router.navigate(['main/campaign/create/texters']);
  }

  goToCampaignScripts(): void {
    this.router.navigate(['main/campaign/create/scripts']);
  }

}
