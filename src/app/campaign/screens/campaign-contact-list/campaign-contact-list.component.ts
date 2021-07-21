import { Component, OnInit } from '@angular/core';
import { contactsListMock } from 'src/utils/mock';
import { IPropertyLabel } from '../../../core/interfaces/common.interface';
import { IContactList } from '../../../core/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import {
  fadeAnimation,
  fadeListAnimation,
  horizontalSlideAnimation, popInAnimation,
  verticalSlideAnimation, verticalSlideListAnimation
} from '../../../shared/animations';
import { routePathNames } from "../../../../utils/routes.utils";

@Component({
  selector: 'app-campaign-contact-list',
  templateUrl: './campaign-contact-list.component.html',
  styleUrls: ['./campaign-contact-list.component.scss'],
  animations: [
    fadeAnimation,
    verticalSlideAnimation,
    horizontalSlideAnimation,
    fadeListAnimation,
    popInAnimation,
    verticalSlideListAnimation,
  ]
})
export class CampaignContactListComponent implements OnInit {

  constructor(private router: Router,
              private activedRoute: ActivatedRoute,
  ) {
  }

  contactsList = contactsListMock;
  contactListToAdd = contactsListMock;
  filteredContactListToAddFromList: IContactList[] = [];
  filteredContactListToAddFromCampaign: IContactList[] = [];
  addedContactsFromList: IContactList[] = [];
  addedContactsFromCampaign: IContactList[] = [];
  contactListToExclude = contactsListMock;
  filteredContactListToExcludeFromList: IContactList[] = [];
  filteredContactListToExcludeFromCampaign: IContactList[] = [];
  excludedContactsFromCampaign: IContactList[] = [];
  excludedContactsFromList: IContactList[] = [];
  excludeContactsList = contactsListMock;
  excludeCampaignsContactsList = contactsListMock;
  filteredContactList: IContactList[] = [];
  filteredExcludeContactList: IContactList[] = [];
  filteredExcludeCampaignsContactList: IContactList[] = [];
  totalContactsSelected = 0;
  showErrorMessage = false;
  enableAddContactFromList = true;
  enableAddContactFromCampaign?: boolean;
  enableExcludeContactFromList?: boolean;
  enableExcludeContactFromCampaign?: boolean;

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
    if (exclude && this.totalContactsSelected > 0) {
      const results = this.totalContactsSelected - rowData.contactsQuantity;
      this.totalContactsSelected = results >= 0 ? results : 0;
    } else if (!exclude) {
      this.totalContactsSelected = this.totalContactsSelected + rowData.contactsQuantity;
    }
  }

  onRowUnselect(rowData: IContactList, exclude: boolean = false): void {
    if (!exclude && this.totalContactsSelected > 0) {
      const results = this.totalContactsSelected - rowData.contactsQuantity;
      this.totalContactsSelected = results >= 0 ? results : this.totalContactsSelected;
    } else if (exclude) {
      this.totalContactsSelected = this.totalContactsSelected + rowData.contactsQuantity;
    }
  }

  next(): void {
    if (this.totalContactsSelected <= 0) {
      this.showErrorMessage = true;
    } else {
      if (this.mode === 'Create') {
        this.router.navigate(['main/campaign/create/texters']);
      } else {
        this.router.navigate(['main/campaign/view/1'], {queryParams: {tab: 'contacts'}});

      }
    }
  }


  filterContactsToExcludeFromCampaign(data: IContactList[]): void {
    this.filteredContactListToExcludeFromCampaign = data;
  }

  filterContactsToAddFromCampaign(data: IContactList[]): void {
    this.filteredContactListToAddFromCampaign = data;
  }

  filterContactsToAddFromList(data: IContactList[]): void {
    this.filteredContactListToAddFromList = data;
  }

  filterContactsToExcludeFromList(data: IContactList[]): void {
    this.filteredContactListToExcludeFromList = data;
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
    const totalContactsAddedFromTables = this.getTotalContactsInContactLists([
      ...this.addedContactsFromList,
      ...this.addedContactsFromCampaign
    ]);
    const totalContactsExcludedFromTables = this.getTotalContactsInContactLists([
      ...this.excludedContactsFromCampaign,
      ...this.excludedContactsFromList
    ]);

    this.totalContactsSelected = totalContactsAddedFromTables - totalContactsExcludedFromTables;
  }

  goToContactList(id: number): void {
    this.router.navigate([routePathNames.main['contact-list'].view.path, id]);
  }
}
