import { Component, OnInit, } from '@angular/core';
import { ISortBy } from '../../../../../shared/components/list-filters/list-filters.component';
import { optedBackContactsMock, phoneNumbersMock } from '../../../../../../utils/mock';
import IPhoneNumber, { IOptedBackContact } from '../../../../../core/interfaces/phone.interface';
import { IAction, IPropertyLabel, StatusRelatedType } from '../../../../../core/interfaces';

@Component({
  selector: 'ts-client-contacts',
  templateUrl: './client-contacts.component.html',
  styleUrls: ['./client-contacts.component.scss'],
})
export class ClientContactsComponent implements OnInit {

  constructor() {
  }

  contacts: IPhoneNumber[] = phoneNumbersMock;
  filteredContacts: IPhoneNumber[] = [];
  optedBackContacts: IOptedBackContact[] = optedBackContactsMock;
  contactActions: IAction[] = [
    {
      label: 'Export',
      icon: 'external-link',
      action: () => console.log('exported'),
    },
  ];
  sortByProperties: ISortBy<IPhoneNumber>[] = [
    {
      property: 'timeCreated',
      label: 'Date Added',
      reversed: true,
    },
    {
      property: 'firstName',
      label: 'First Name',
    },
    {
      property: 'lastName',
      label: 'Last Name',
    },
  ];
  filterByProperties: IPropertyLabel<IPhoneNumber>[] = [
    {
      property: 'tag',
      label: 'Tag',
    },
  ];
  tagColors: StatusRelatedType = {
    subscribed: 'info',
    unsubscribed: 'disabled',
    'opted out': 'danger',
  };

  ngOnInit(): void {
  }

  setFilteredContacts(data: IPhoneNumber[]): void {
    this.filteredContacts = data;
  }

}
