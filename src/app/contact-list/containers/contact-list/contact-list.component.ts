import { Component, OnInit } from '@angular/core';
import { IContactList, IPropertyLabel } from '../../../core/interfaces';
import { ISortBy } from '../../../shared/components/list-filters/list-filters.component';
import { Router } from '@angular/router';
import { fadeAnimation, fadeListAnimation } from '../../../shared/animations';
import { contactsListMock } from '../../../../utils/mock';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  animations: [
    fadeListAnimation,
    fadeAnimation,
  ]
})
export class ContactListComponent implements OnInit {

  constructor(private router: Router) {
  }

  sortByProperties: ISortBy<IContactList>[] = [
    {
      label: 'Date Added',
      property: 'createdDate',
      reversed: true,
    },
    {
      label: 'Client Name',
      property: 'client.name',
    },
    {
      label: 'Number of Contacts',
      property: 'contactsQuantity',
      reversed: true,
    },
    {
      label: 'List Name',
      property: 'name',
    },
  ];
  filterByProperties: IPropertyLabel<IContactList>[] = [
    {
      property: 'client.name',
      label: 'Client'
    },
  ];
  contactList = contactsListMock;
  filteredContactList: IContactList[] = [];
  ngOnInit(): void {
  }

  setFilteredClients(contactList: IContactList[]): void {
    this.filteredContactList = contactList;
  }

  goToContactListView(id: number): void {
    this.router.navigate([`main/client/view/${id}`]);
  }

  goToCreateContactList(): void {
    this.router.navigate(['main/client/create']);
  }

}
