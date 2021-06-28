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
    },
    {
      property: 'contact.name',
      label: 'Contact Name'
    },
    {
      property: 'type',
      label: 'Type'
    }
  ];

  actions: IAction[] = [
    {
      action: () => console.log('clicked'),
      label: 'Export',
      icon: 'external-link',
    }
  ];

  messages = fakeMessageMock;
  filteredMessages: IMessage[] = [];

  ngOnInit(): void {

  }

  setMessagesFilteredData(data: IMessage[]): void {
    this.filteredMessages = data;
  }
}
