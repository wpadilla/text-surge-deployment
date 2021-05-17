import { Component, OnInit } from '@angular/core';
import { campaignsContactsListMock, contactsListMock } from 'src/utils/mocks';
import { IPropertyLabel } from '../../../../../core/interfaces/common.interface';
import { IContactList } from '../../../../../core/interfaces';

@Component({
  selector: 'app-campaign-contact-list',
  templateUrl: './campaign-contact-list.component.html',
  styleUrls: ['./campaign-contact-list.component.scss']
})
export class CampaignContactListComponent implements OnInit {

  constructor() {
  }

  contactsList = contactsListMock;
  excludeContactsList = contactsListMock;
  excludeCampaignsContactsList = campaignsContactsListMock;
  filteredContactList: IContactList[] = [];
  filteredExcludeContactList: IContactList[] = [];
  filteredExcludeCampaignsContactList: IContactList[] = [];

  sortByProperties: IPropertyLabel[] = [{
    label: 'Date Added',
    property: 'createdDate',
  },
    {
      label: 'Name',
      property: 'name',
    }
  ];

  ngOnInit(): void {
  }

  goToCreateContactList(): void {

  }

  setFilteredContactsList(data: any[]): void {
    this.filteredContactList = data;
  }

  setFilteredExcludeContactLists(data: any[]): void {
    this.filteredExcludeContactList = data;
  }

  setFilteredExcludeCampaignsContactLists(data: any[]): void {
    this.filteredExcludeCampaignsContactList = data;
  }
}
