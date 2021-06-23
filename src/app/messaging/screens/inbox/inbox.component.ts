import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fakeMessageMock, phoneNumbersMock } from '../../../../utils/mock';
import IPhoneNumber from '../../../core/interfaces/phone.interface';
import { fadeAnimation, popInAnimation } from '../../../shared/animations';
import { IAction, ILabelValue, IPropertyLabel } from '../../../core/interfaces';
import ToastService from '../../../core/services/toast.service';
import { routePathNames } from '../../../../utils/routes.utils';
import { ActivatedRoute, Router } from '@angular/router';
import IMessage from '../../../core/interfaces/message.interface';

@Component({
  selector: 'ts-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeAnimation,
    popInAnimation,
  ]
})
export class InboxComponent implements OnInit {

  constructor(private router: Router) {
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
  enableCompletedConversation?: boolean;

  ngOnInit(): void {

  }
  setMessagesFilteredData(data: IMessage[]): void {
    this.filteredMessages = data;
  }

  changeConversations(event: any): void {
    this.enableCompletedConversation = event.index === 1;
  }

  goToConversation(id: number): void {
    this.router.navigate([routePathNames.main.messaging.inbox.path, id]);
  }
}