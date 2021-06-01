import { Component, OnInit } from '@angular/core';
import { campaignsContactsListMock, contactsListMock } from 'src/utils/mock';
import { IPropertyLabel } from '../../../core/interfaces/common.interface';
import { IContactList } from '../../../core/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-contact-list',
  templateUrl: './campaign-contact-list.component.html',
  styleUrls: ['./campaign-contact-list.component.scss']
})
export class CampaignContactListComponent implements OnInit {

  constructor(private router: Router) {
  }

  contactsList = contactsListMock;
  excludeContactsList = contactsListMock;
  excludeCampaignsContactsList = campaignsContactsListMock;
  filteredContactList: IContactList[] = [];
  filteredExcludeContactList: IContactList[] = [];
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

  setFilteredContactsList(data: any[]): void {
    this.filteredContactList = data;
  }

  setFilteredExcludeContactLists(data: any[]): void {
    this.filteredExcludeContactList = data;
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
      this.router.navigate(['main/campaign-list/create/texters']);
    }
  }
}
