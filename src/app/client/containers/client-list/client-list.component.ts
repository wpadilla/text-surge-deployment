import { Component, OnInit } from '@angular/core';
import IClient from '../../../core/interfaces/client.interface';
import { clientMock } from '../../../../utils/mock/client.mock';
import { IPropertyLabel } from '../../../core/interfaces';
import { ISortBy } from '../../../shared/components/list-filters/list-filters.component';
import { Router } from '@angular/router';
import { fadeAnimation, fadeListAnimation } from '../../../shared/animations';

@Component({
  selector: 'app-client',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
  animations: [
    fadeListAnimation,
    fadeAnimation,
  ]
})
export class ClientListComponent implements OnInit {

  constructor(private router: Router) {
  }

  sortByProperties: ISortBy<IClient>[] = [
    {
      property: 'createdAt',
      label: 'Date Added',
      reversed: true,
    },
    {
      property: 'name',
      label: 'Name'
    },
    {
      property: 'campaigns',
      label: 'Campaigns',
      reversed: true,
    },
  ];
  filterByProperties: IPropertyLabel<IClient>[] = [
    {
      property: 'name',
      label: 'Client'
    },
  ];
  clients = clientMock;
  filteredClients: IClient[] = [];
  ngOnInit(): void {
  }

  setFilteredClients(clients: IClient[]): void {
    this.filteredClients = clients;
  }

  goToContactView(id: number): void {
    this.router.navigate([`main/client/view/${id}`]);
  }

  goToCreateClient(): void {
    this.router.navigate(['main/client/create']);
  }

}
