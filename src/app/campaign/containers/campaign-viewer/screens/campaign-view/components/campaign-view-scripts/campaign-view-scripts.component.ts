import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ts-campaign-view-scripts',
  templateUrl: './campaign-view-scripts.component.html',
  styleUrls: ['./campaign-view-scripts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewScriptsComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToScripts(): void {
    this.router.navigate(['main/campaign/edit/scripts/1']);
  }
}
