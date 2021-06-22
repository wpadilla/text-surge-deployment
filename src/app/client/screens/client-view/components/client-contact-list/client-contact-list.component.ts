import { Component, OnInit, } from '@angular/core';
import { IContactList } from '../../../../../core/interfaces';
import { ISortBy } from '../../../../../shared/components/list-filters/list-filters.component';
import { contactsListMock } from '../../../../../../utils/mock';

@Component({
  selector: 'ts-client-contact-list',
  templateUrl: './client-contact-list.component.html',
  styleUrls: ['./client-contact-list.component.scss'],
})
export class ClientContactListComponent implements OnInit {

  constructor() {
  }

  contactLists: IContactList[] = contactsListMock;
  filteredContactList: IContactList[] = [];
  sortByProperties: ISortBy<IContactList>[] = [
    {
      property: 'createdDate',
      label: 'Date Added',
      reversed: true,
    },
    {
      property: 'contactsQuantity',
      label: 'Contacts',
      reversed: true,
    },
    {
      property: 'name',
      label: 'Name',
    },
  ];

  ngOnInit(): void {
  }

  setFilteredContactList(data: IContactList[]): void {
    this.filteredContactList = data;
  }
}
