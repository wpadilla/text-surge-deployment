import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IContactList } from '../../../core/interfaces';
import { FormGroup } from '@angular/forms';
import IPhoneNumber from '../../../core/interfaces/phone.interface';
import { clientMock, contactsListMock, phoneNumbersMock } from '../../../../utils/mock';
import { globalSearch } from '../../../../utils';
import IClient from '../../../core/interfaces/client.interface';
import {
  fadeAnimation,
  fadeListAnimation,
  horizontalSlideAnimation,
  popInAnimation,
  verticalSlideAnimation,
  verticalSlideListAnimation
} from '../../../shared/animations';
import { ISortBy } from '../../../shared/components/list-filters/list-filters.component';
import { ConfirmationService } from 'primeng/api';
import { csvToArray } from '../../../../utils/files.utils';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { routePathNames } from '../../../../utils/routes.utils';

export interface ILoadedContact {
  fileName: string;
  contacts: IPhoneNumber[];
}

@Component({
  selector: 'ts-contact-list-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  animations: [
    fadeAnimation,
    verticalSlideAnimation,
    horizontalSlideAnimation,
    fadeListAnimation,
    popInAnimation,
    verticalSlideListAnimation,
  ],
})
export class UserFormComponent implements OnInit, AfterViewInit {

  constructor(
    private confirmationService: ConfirmationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
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
  totalContactsSelected = 0;

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
  editMode?: boolean;
  contactListEditData: IContactList = {} as any;

  get newCustomField(): string {
    return this.form.controls.newCustomField.value;
  }

  ngOnInit(): void {
    this.selectedPhone = this.phoneNumbers[0];
  }

  ngAfterViewInit(): void {
    this.getContactListFromParams();
  }

  getContactListFromParams(): void {
    if (this.activatedRoute.snapshot.params.id) {
      setTimeout(() => {
        this.contactListEditData = contactsListMock
          .find(contactList => contactList.id === Number(this.activatedRoute.snapshot.params.id)) || this.contactListEditData;
        if (this.location.path().includes('edit') && !this.contactListEditData.id) {
          this.router.navigate([routePathNames.main['contact-list'].path]);
        } else {
          this.editMode = true;
          this.fillFormWithEditContactListData();
        }
      });
    }
  }

  fillFormWithEditContactListData(): void {
    setTimeout( () => this.form.setValue({
      ...this.form.value,
      client: this.contactListEditData.client,
      name: this.contactListEditData.name,
    }));
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
    const onAccept = () => {
      this.manuallyAddedContacts = this.manuallyAddedContacts.filter(manuallyContact => manuallyContact.id !== contact.id);
      if (!this.manuallyAddedContacts.length) {
        this.manuallyAddedContacts = [{id: 1} as any];
      }
      this.calculateTotalContact();
    };
    if (this.manuallyAddedContacts.length === 1) {
      onAccept();
    } else {
      this.confirmationService.confirm({
        message: 'Are you sure you want to delete ',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: onAccept,
      });
    }

  }

  addEmptyManuallyRecord(): void {
    this.manuallyAddedContacts.push({id: this.manuallyAddedContacts.length + 1} as any);
    this.calculateTotalContact();
  }

  loadFile(event: any): void {
    const files = event.target.files;
    Promise.all(Array.from(files).map(async (file: any, i: number) => {
      const reader = new FileReader();
      reader.onload = async (event: any) => {
        const contacts = csvToArray(event.target.result, ',', ['firstName', 'lastName', 'phone']);
        await setTimeout(() => {
          this.loadedContactsFromFiles.push({fileName: file.name, contacts});
          this.calculateTotalContact();
        }, 200 * i);
      };
      await reader.readAsText(file, file.name);
    })).then(() => {
      event.target.value = '';
    });
  }

  removeLoadedFile(index: number): void {
    this.loadedContactsFromFiles = this.loadedContactsFromFiles.filter((item, i) => i !== index);
    this.calculateTotalContact();
  }


  /* getTotalContactsInContactLists, calculate all contacts quantity in an array of contacts list
    * @return number
    * */
  getTotalContactsInContactLists(contactLists: IContactList[]): number {
    return contactLists.map(item => item.contactsQuantity).reduce((a, b) => a + b, 0);
  }

  /* calculateTotalContact, calculate the total quantity of the contacts selected and contacts excluded
  * @return number
  * */
  calculateTotalContact(): void {
    let loadedContactsFromFiles: number = this.loadedContactsFromFiles.length ? this.loadedContactsFromFiles[0].contacts.length : 0;
    if (this.loadedContactsFromFiles.length > 1) {
      loadedContactsFromFiles = this.loadedContactsFromFiles.map((a) => a.contacts.length).reduce((a, b) => a + b, 0);
    }
    const totalContactsAddedFromTables = this.getTotalContactsInContactLists([
      ...this.addedContactsFromList,
      ...this.addedContactsFromCampaign
    ]);
    const totalContactsExcludedFromTables = this.getTotalContactsInContactLists([
      ...this.excludedContactsFromCampaign,
      ...this.excludedContactsFromList
    ]);
    this.totalContactsSelected = (
      totalContactsAddedFromTables +
      /// just the manual contacts added with phone will be approved
      this.manuallyAddedContacts.filter(item => !!item.phone).length +
      loadedContactsFromFiles
    ) - totalContactsExcludedFromTables;
  }
}
