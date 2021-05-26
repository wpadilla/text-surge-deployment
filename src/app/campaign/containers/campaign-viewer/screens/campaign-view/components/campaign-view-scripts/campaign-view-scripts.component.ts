import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-campaign-view-scripts',
  templateUrl: './campaign-view-scripts.component.html',
  styleUrls: ['./campaign-view-scripts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewScriptsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
