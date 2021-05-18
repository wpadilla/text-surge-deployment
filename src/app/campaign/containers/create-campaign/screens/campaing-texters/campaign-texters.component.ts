import { Component, OnInit } from '@angular/core';
import { campaignsContactsListMock, contactsListMock, phoneNumbersMock } from 'src/utils/mock';
import { IPropertyLabel } from '../../../../../core/interfaces/common.interface';
import { IContactList } from '../../../../../core/interfaces';
import { Router } from '@angular/router';
import IPhoneNumber from "../../../../../core/interfaces/phone.interface";

@Component({
  selector: 'app-campaign-contact-list',
  templateUrl: './campaign-texters.component.html',
  styleUrls: ['./campaign-texters.component.scss']
})
export class CampaignTextersComponent implements OnInit {

  constructor(private router: Router) {
  }

  phoneNumbers: IPhoneNumber[] = phoneNumbersMock;
  texters = contactsListMock;
  excludeCampaignsContactsList = campaignsContactsListMock;
  filteredPhoneNumbers: IContactList[] = [];
  filteredTexters: IContactList[] = [];
  filteredExcludeCampaignsContactList: IContactList[] = [];
  totalContacts = 0;
  showErrorMessage = false;
  sortByProperties: IPropertyLabel[] = [{
    label: 'Date Added',
    property: 'createdDate',
  },
    {
      label: 'Name',
      property: 'name',
    }
  ];

  ngOnInit(): void {
  }

  goToCreateContactList(): void {

  }

  setFilteredPhoneNumbers(data: any[]): void {
    this.filteredPhoneNumbers = data;
  }

  setFilteredTexters(data: any[]): void {
    this.filteredTexters = data;
  }

  setFilteredExcludeCampaignsContactLists(data: any[]): void {
    this.filteredExcludeCampaignsContactList = data;
  }

  onRowSelect(rowData: IContactList, exclude: boolean = false): void {
      if (exclude && this.totalContacts > 0) {
        const results = this.totalContacts - rowData.contactsQuantity;
        this.totalContacts = results >= 0 ? results : 0;
      } else if (!exclude) {
        this.totalContacts = this.totalContacts + rowData.contactsQuantity;
      }
  }

  onRowUnselect(rowData: IContactList, exclude: boolean = false): void {
    if (!exclude && this.totalContacts > 0) {
      const results = this.totalContacts - rowData.contactsQuantity;
      this.totalContacts = results >= 0 ? results : this.totalContacts;
    } else if (exclude) {
      this.totalContacts = this.totalContacts + rowData.contactsQuantity;
    }
  }

  next(): void {
    if (this.totalContacts <= 0) {
      this.showErrorMessage = true;
    } else {
      this.router.navigate(['main/campaign/create/example2']);
    }
  }
}
