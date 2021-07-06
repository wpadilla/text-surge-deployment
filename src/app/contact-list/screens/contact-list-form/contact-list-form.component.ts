import { Component, OnInit } from '@angular/core';
import { IContactList } from '../../../core/interfaces';
import { FormGroup } from '@angular/forms';
import IPhoneNumber from '../../../core/interfaces/phone.interface';
import { clientMock, contactsListMock, phoneNumbersMock } from '../../../../utils/mock';
import { globalSearch } from '../../../../utils';
import IClient from '../../../core/interfaces/client.interface';
import {
  fadeAnimation,
  fadeListAnimation,
  horizontalSlideAnimation, popInAnimation,
  verticalSlideAnimation, verticalSlideListAnimation
} from '../../../shared/animations';
import { ISortBy } from '../../../shared/components/list-filters/list-filters.component';
import { ConfirmationService } from 'primeng/api';
import { csvToArray } from '../../../../utils/files.utils';

export interface ILoadedContact {
  fileName: string;
  contacts: IPhoneNumber[];
}

@Component({
  selector: 'ts-contact-list-form',
  templateUrl: './contact-list-form.component.html',
  styleUrls: ['./contact-list-form.component.scss'],
  animations: [
    fadeAnimation,
    verticalSlideAnimation,
    horizontalSlideAnimation,
    fadeListAnimation,
    popInAnimation,
    verticalSlideListAnimation,
  ]
})
export class ContactListFormComponent implements OnInit {

  constructor(
    private confirmationService: ConfirmationService,
  ) {
  }

  contactListToExclude = contactsListMock;
  filteredContactListToExcludeFromCampaign: IContactList[] = [];
  filteredContactListToExcludeFromList: IContactList[] = [];

  contactListToAdd = contactsListMock;
  filteredContactListToAddFromList: IContactList[] = [];
  filteredContactListToAddFromCampaign: IContactList[] = [];

  excludedContactsFromList: IContactList[] = [];
  excludedContactsFromCampaign: IContactList[] = [];

  addedContactsFromList: IContactList[] = [];
  addedContactsFromCampaign: IContactList[] = [];
  customFields: string[] = [];
  enableAddCustomField?: boolean;

  manuallyAddedContacts: IPhoneNumber[] = [{id: 1} as any];

  loadedContactsFromFiles: ILoadedContact[] = [];
  sortByProperties: ISortBy<IContactList>[] = [
    {
      property: 'createdDate',
      label: 'Date Added',
    },
    {
      property: 'name',
      label: 'name',
    },
  ];
  form: FormGroup = new FormGroup({});
  phoneNumbers: IPhoneNumber[] = phoneNumbersMock;
  clients: IClient[] = clientMock;
  filteredClients: IClient[] = [];
  selectedPhone?: IPhoneNumber;
  enableAddContactFromList?: boolean;
  enableAddContactFromCampaign?: boolean;
  enableExcludeContactFromCampaign?: boolean;
  enableExcludeContactFromList?: boolean;

  get newCustomField(): string {
    return this.form.controls.newCustomField.value;
  }

  ngOnInit(): void {
    this.selectedPhone = this.phoneNumbers[0];
  }

  createClient(): void {
    console.log(this.form.value);
  }

  filterClients(data: any): void {
    this.filteredClients = globalSearch(this.clients, data.query);
  }

  filterContactsToAddFromList(data: IContactList[]): void {
    this.filteredContactListToAddFromList = data;
  }

  filterContactsToAddFromCampaign(data: IContactList[]): void {
    this.filteredContactListToAddFromCampaign = data;
  }

  filterContactsToExcludeFromCampaign(data: IContactList[]): void {
    this.filteredContactListToExcludeFromCampaign = data;
  }

  filterContactsToExcludeFromList(data: IContactList[]): void {
    this.filteredContactListToExcludeFromList = data;
  }

  addNewCustomField(): void {
    if (this.newCustomField) {
      this.customFields.push(this.newCustomField.toLowerCase());
      this.form.controls.newCustomField.setValue('');
    }
  }

  removeCustomField(index: number): void {
    this.customFields = this.customFields.filter((field, i) => i !== index);
  }

  removeManuallyRecord(contact: IPhoneNumber): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.manuallyAddedContacts = this.manuallyAddedContacts.filter(manuallyContact => manuallyContact.id !== contact.id);
        if (!this.manuallyAddedContacts.length) {
          this.manuallyAddedContacts = [{id: 1} as any];
        }
      }
    });
  }

  addEmptyManuallyRecord(): void {
    this.manuallyAddedContacts.push({id: this.manuallyAddedContacts.length + 1} as any);
  }

  loadFile(event: any): void {
    const files = event.target.files;
    Promise.all(Array.from(files).map(async (file: any, i: number) => {
      const reader = new FileReader();
      reader.onload = async (event: any) => {
        const contacts = csvToArray(event.target.result, ',', ['firstName', 'lastName', 'phone']);
        await setTimeout(() => {
          this.loadedContactsFromFiles.push({fileName: file.name, contacts});
        }, 200 * i);
      };
      await reader.readAsText(file, file.name);
    })).then(() => {
      event.target.value = '';
    });
  }

  removeLoadedFile(index: number): void {
    this.loadedContactsFromFiles = this.loadedContactsFromFiles.filter((item, i) => i !== index);
  }
}
