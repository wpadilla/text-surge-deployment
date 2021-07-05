import { Component, OnInit } from '@angular/core';
import { IContactList } from '../../../core/interfaces';
import { FormGroup } from '@angular/forms';
import IPhoneNumber from '../../../core/interfaces/phone.interface';
import { clientMock, contactsListMock, phoneNumbersMock } from '../../../../utils/mock';
import { globalSearch } from '../../../../utils';
import IClient from '../../../core/interfaces/client.interface';

@Component({
  selector: 'ts-contact-list-form',
  templateUrl: './contact-list-form.component.html',
  styleUrls: ['./contact-list-form.component.scss'],
})
export class ContactListFormComponent implements OnInit {

  constructor() {
  }
  contactList = contactsListMock;
  filteredContactList: IContactList[] = [];
  form: FormGroup = new FormGroup({});
  phoneNumbers: IPhoneNumber[] = phoneNumbersMock;
  clients: IClient[] = clientMock;
  filteredClients: IClient[] = [];
  selectedPhone?: IPhoneNumber;
  enableAddContactFromList?: boolean;
  enableAddContactFromCampaign?: boolean;
  enableExcludeContactFromCampaign?: boolean;
  enableExcludeContactFromList: boolean;

  ngOnInit(): void {
    this.filteredContactList = this.contactList;
    this.selectedPhone = this.phoneNumbers[0];
  }

  createClient(): void {
    console.log(this.form.value);
  }

  filterClients(data: any): void {
    this.filteredClients = globalSearch(this.clients, data.query);
  }

}
