import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-campaign-view-messages',
  templateUrl: './campaign-view-messages.component.html',
  styleUrls: ['./campaign-view-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewMessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
