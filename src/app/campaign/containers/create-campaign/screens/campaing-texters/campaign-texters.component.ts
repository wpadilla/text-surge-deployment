import { Component, OnInit } from '@angular/core';
import { phoneNumbersMock, textersMock } from 'src/utils/mock';
import { IPropertyLabel } from '../../../../../core/interfaces/common.interface';
import { IContactList } from '../../../../../core/interfaces';
import { Router } from '@angular/router';
import IPhoneNumber from '../../../../../core/interfaces/phone.interface';
import IUser from '../../../../../core/interfaces/user.interface';
import { equitableDivision } from '../../../../../../utils';

@Component({
  selector: 'app-campaign-contact-list',
  templateUrl: './campaign-texters.component.html',
  styleUrls: ['./campaign-texters.component.scss']
})
export class CampaignTextersComponent implements OnInit {

  constructor(private router: Router) {
  }
  phoneNumbers: IPhoneNumber[] = phoneNumbersMock;
  filteredPhoneNumbers: IPhoneNumber[] = [];
  phoneNumbersSelected: IPhoneNumber[] = [];
  texters: IUser[] = textersMock;
  textersSelected: IUser[] = [];
  filteredTexters: IUser[] = [];
  campaignContacts = 435;
  FCCAllowedTextMessageFromOnePhoneNumber = 250;
  assignmentQuantityDivided: number[] = [];
  filteredExcludeCampaignsContactList: IContactList[] = [];
  totalContacts = 0;
  minPhoneNumbersQuantity = 0;

  showErrorMessage = false;
  sortByProperties: IPropertyLabel[] = [{
    label: 'Status',
    property: 'hasAssignments',
  },
    {
      label: 'Name',
      property: 'firstName',
    }
  ];

  getValue(i: any): void {
    console.log(i);
  }
  ngOnInit(): void {
    this.setPhoneNumberNeeded();
  }

  setPhoneNumberNeeded(): void {
    this.minPhoneNumbersQuantity = Math.ceil(this.campaignContacts / this.FCCAllowedTextMessageFromOnePhoneNumber);
    this.phoneNumbersSelected = this.phoneNumbers.slice(0, this.minPhoneNumbersQuantity);
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

  next(): void {
    if (this.totalContacts <= 0) {
      this.showErrorMessage = true;
    } else {
      this.router.navigate(['main/campaign/create/example2']);
    }
  }

  /* return an equitable division for each texter*/
  getInitialTextsDivision(): void {
    if (!this.textersSelected.length) { return; }
    this.assignmentQuantityDivided = equitableDivision(this.campaignContacts, this.textersSelected.length);

  }
}
