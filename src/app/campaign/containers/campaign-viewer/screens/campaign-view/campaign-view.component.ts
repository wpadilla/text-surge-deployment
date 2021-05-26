import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewComponent implements OnInit {

  constructor() { }
  items: any[] = [];

  ngOnInit(): void {
  }

}
