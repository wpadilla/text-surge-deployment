import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ILabelValue } from '../../../../../core/interfaces';
import { usersMock } from '../../../../../../utils/mock';
import { ActivatedRoute, Router } from '@angular/router';
import { routePathNames } from '../../../../../../utils/routes.utils';
import IUser from '../../../../../core/interfaces/user.interface';

@Component({
  selector: 'ts-campaign-view-dashboard',
  templateUrl: './campaign-view-dashboard.component.html',
  styleUrls: ['./campaign-view-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewDashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  @Output() selectStatistic: EventEmitter<any> = new EventEmitter();
  donutChartData: any = {};
  donutChartOptions: any = {};
  totalBudget = 850;
  used = 300;
  remaining = 0;
  percentageUsed = 0;
  routes = {
    texters: 'main/campaign/edit/texters/1',
    scripts: 'main/campaign/create/scripts',
  };
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

  goTo(path: string): void {
    this.router.navigate([path]);
  }

  goToTexterMessage(texter: IUser): void {
    this.router.navigate([routePathNames.main.messaging.campaign.path, this.activatedRoute.snapshot.params.id],
      {
        queryParams: {
          texterName: `${texter.firstName} ${texter.lastName}`,
        }
      });
  }

  getPercentColor(total: number, value: number): string {
    return Math.ceil((value * 100) / total) > 49 ? '#003399' : '#ffaa00';
  }

}
