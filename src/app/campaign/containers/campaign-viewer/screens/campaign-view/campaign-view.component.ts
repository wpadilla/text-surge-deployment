import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  ) { }
  items: any[] = [];
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

  selectContactTab(): void {
    this.tabActiveIndex = 1;
  }
}
