import { Component, OnInit } from '@angular/core';
import { contactsListMock } from 'src/utils/mocks';
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
  filteredContactList: IContactList[] = [];
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

  setFilteredCampaign(data: any[]): void {
    this.filteredContactList = data;
  }
}
