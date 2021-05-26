import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-campaign-view-contacts',
  templateUrl: './campaign-view-contacts.component.html',
  styleUrls: ['./campaign-view-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
