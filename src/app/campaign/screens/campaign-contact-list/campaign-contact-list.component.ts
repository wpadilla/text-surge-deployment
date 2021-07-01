import { Component, OnInit } from '@angular/core';
import { campaignsContactsListMock, contactsListMock } from 'src/utils/mock';
import { IPropertyLabel } from '../../../core/interfaces/common.interface';
import { IContactList } from '../../../core/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeAnimation, fadeListAnimation } from '../../../shared/animations';

@Component({
  selector: 'app-campaign-contact-list',
  templateUrl: './campaign-contact-list.component.html',
  styleUrls: ['./campaign-contact-list.component.scss'],
  animations: [
    fadeAnimation,
    fadeListAnimation,
  ]
})
export class CampaignContactListComponent implements OnInit {

  constructor(private router: Router,
              private activedRoute: ActivatedRoute,
  ) {
  }

  contactsList = contactsListMock;
  excludeContactsList = contactsListMock;
  excludeCampaignsContactsList = campaignsContactsListMock;
  filteredContactList: IContactList[] = [];
  filteredExcludeContactList: IContactList[] = [];
  filteredExcludeCampaignsContactList: IContactList[] = [];
  totalContacts = 0;
  showErrorMessage = false;
  mode: 'Create' | 'Edit' = 'Create';
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
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.mode = 'Edit';
    }
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
      if (this.mode === 'Create') {
        this.router.navigate(['main/campaign/create/texters']);
      } else {
        this.router.navigate(['main/campaign/view/1'], {queryParams: {tab: 'contacts'}});

      }
    }
  }
}
