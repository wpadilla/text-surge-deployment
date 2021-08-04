import { Component, OnInit } from '@angular/core';
import { IAction, IPropertyLabel } from '../../../core/interfaces';
import { fakeMessageMock } from '../../../../utils/mock/messages.mock';
import IMessage from '../../../core/interfaces/message.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { campaignMock, clientMock } from '../../../../utils/mock';
import { fadeListAnimation, verticalSlideAnimation } from '../../../shared/animations';
import { routePathNames } from '../../../../utils/routes.utils';

@Component({
  selector: 'ts-create-campaign',
  templateUrl: './view-messages.component.html',
  styleUrls: ['./view-messages.component.scss'],
  animations: [
    fadeListAnimation,
    verticalSlideAnimation,
  ]
})
export class ViewMessagesComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) {
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
  title = 'All Conversations';
  messages = fakeMessageMock;
  filteredMessages: IMessage[] = [];
  viewMode: 'Campaign' | 'Client' | 'All' = 'Campaign';

  get filterByTexterName(): string {
    return this.activatedRoute.snapshot.queryParams.texterName;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getMessagesData(params);
      this.getViewMode();
    });
  }

  getMessagesData(params: any): void {
    if (this.location.path().includes('client')) {
      const client = clientMock.find(item => item.id === Number(params.id));
      this.title = client ? client.name : '';
    } else if (this.location.path().includes('campaign')) {
      const campaign = campaignMock.find(item => item.id === Number(params.id));
      this.title = campaign ? `${campaign.name} / ${campaign.description}` : '';
    } else {
      this.title = 'All Conversations';
    }
  }

  getViewMode(): void {
    const path = this.location.path();
    this.viewMode = path.includes('client') ? 'Client' : path.includes('view') && 'All' || this.viewMode;
  }
  setMessagesFilteredData(data: IMessage[]): void {
    this.filteredMessages = data;
  }

  goToInbox(id: number): void {
    this.router.navigate([routePathNames.main.messaging.view.inbox.path, id]);
  }
}
