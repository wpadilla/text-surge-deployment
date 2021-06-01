import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ts-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }
  items: any[] = [];
  tabActiveIndex = 0;
  ngOnInit(): void {
  }

  goToCampaign(): void {
    this.router.navigate(['main/campaign/create/details']);
  }

  selectContactTab(): void {
    this.tabActiveIndex = 1;
  }
}
