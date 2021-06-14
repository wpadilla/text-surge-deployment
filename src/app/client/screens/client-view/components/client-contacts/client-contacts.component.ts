import { Component, OnInit, } from '@angular/core';
import { IContactList } from '../../../../../core/interfaces';
import { ISortBy } from '../../../../../shared/components/list-filters/list-filters.component';
import { contactsListMock } from '../../../../../../utils/mock';

@Component({
  selector: 'ts-client-contacts',
  templateUrl: './client-contacts.component.html',
  styleUrls: ['./client-contacts.component.scss'],
})
export class ClientContactsComponent implements OnInit {

  constructor() {
  }

  contacts: IContactList[] = contactsListMock;
  filteredContacts: IContactList[] = [];
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

  setFilteredContacts(data: IContactList[]): void {
    this.filteredContacts = data;
  }
}
