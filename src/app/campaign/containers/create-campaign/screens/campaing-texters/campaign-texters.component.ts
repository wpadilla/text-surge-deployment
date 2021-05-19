import { Component, OnInit } from '@angular/core';
import { phoneNumbersMock, textersMock } from 'src/utils/mock';
import { IPropertyLabel } from '../../../../../core/interfaces/common.interface';
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
  minPhoneNumbersQuantity = 0;

  showErrorMessage = false;
  sortByProperties: IPropertyLabel[] = [{
    label: 'Status',
    property: 'hasAssignments',
  },
    {
      label: 'Last Name',
      property: 'lastName',
    }
  ];

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

  /* return an equitable division for each texter*/
  getInitialTextsDivision(): void {
    if (!this.textersSelected.length) { return; }
    this.assignmentQuantityDivided = equitableDivision(this.campaignContacts, this.textersSelected.length);
  }

  next(): void {
    if (this.validData()) {
      this.router.navigate(['main/campaign/create/scripts']);
    } else {
      this.showErrorMessage = true;
    }
  }


  validData(): boolean {
    return [
      this.phoneNumbersSelected.length >= this.minPhoneNumbersQuantity, // validate if the required numbers was selected
      !!this.textersSelected.length // validate if at least one texter was selected
    ].reduce((a, b) => a && b, true);
  }
}
