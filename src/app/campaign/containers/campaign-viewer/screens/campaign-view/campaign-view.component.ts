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
  tabActiveIndex = 1;
  routes = {
    editCampaign: 'main/campaign/edit/details/1',
  };

  ngOnInit(): void {
  }

  goTo(path: string): void {
    this.router.navigate([path]);
  }

  selectContactTab(): void {
    this.tabActiveIndex = 1;
  }
}
