import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IAction, IPropertyLabel } from '../../../core/interfaces';
import { fakeMessageMock } from '../../../../utils/mock/messages.mock';
import IMessage from '../../../core/interfaces/message.interface';

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

  messages = fakeMessageMock;
  filteredMessages: IMessage[] = [];

  ngOnInit(): void {

  }

  setMessagesFilteredData(data: IMessage[]): void {
    console.log(data, ' klk')
    this.filteredMessages = data;
  }
}
