import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-campaign-view-dashboard',
  templateUrl: './campaign-view-dashboard.component.html',
  styleUrls: ['./campaign-view-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
