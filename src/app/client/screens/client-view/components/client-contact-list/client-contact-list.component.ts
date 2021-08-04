import { Component, OnInit, } from '@angular/core';
import { IContactList } from '../../../../../core/interfaces';
import { ISortBy } from '../../../../../shared/components/list-filters/list-filters.component';
import { contactsListMock } from '../../../../../../utils/mock';
import { routePathNames } from '../../../../../../utils/routes.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'ts-client-contact-list',
  templateUrl: './client-contact-list.component.html',
  styleUrls: ['./client-contact-list.component.scss'],
})
export class ClientContactListComponent implements OnInit {

  constructor(private router: Router,) {
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

  goToCreateContactList(): void {
    this.router.navigate([routePathNames.main['contact-list'].create.path]);
  }

  goToContactListView(id: number): void {
    this.router.navigate([routePathNames.main['contact-list'].view.path, id]);
  }
}
