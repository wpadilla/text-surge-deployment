import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IAction, IPropertyLabel } from "../../../core/interfaces";

@Component({
  selector: 'ts-create-campaign',
  templateUrl: './view-campaign-messages.component.html',
  styleUrls: ['./view-campaign-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewCampaignMessagesComponent implements OnInit {

  constructor() {
  }

  filterByProperties: IPropertyLabel[] = [
    {
      property: 'type',
      label: 'Type'
    }
  ];

  sortByProperties: IPropertyLabel[] = [
    {
      property: 'date',
      label: 'Time Stamp'
    }
  ];

  actions: IAction[] = [
    {
      action: () => console.log('cloicked'),
      label: 'Export',
      icon: 'external-link',
    }
  ];

  ngOnInit(): void {

  }

}
