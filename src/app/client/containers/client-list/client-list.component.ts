import { Component, OnInit } from '@angular/core';
import IClient from '../../../core/interfaces/client.interface';
import { clientMock } from '../../../../utils/mock/client.mock';

@Component({
  selector: 'app-client',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  constructor() {
  }

  clients = clientMock;
  filteredClients: IClient[] = [];

  ngOnInit(): void {
  }

  setFilteredClients(clients: IClient[]): void {
    this.filteredClients = clients;
  }

}
