import { Component, OnInit } from '@angular/core';
import { phoneNumbersMock, usersMock } from 'src/utils/mock';
import { ActivatedRoute, Router } from '@angular/router';
import IPhoneNumber from '../../../core/interfaces/phone.interface';
import IUser from '../../../core/interfaces/user.interface';
import { equitableDivision } from '../../../../utils';
import { fadeAnimation, fadeListAnimation } from '../../../shared/animations';
import { ISortBy } from '../../../shared/components/list-filters/list-filters.component';

@Component({
  selector: 'app-campaign-contact-list',
  templateUrl: './campaign-texters.component.html',
  styleUrls: ['./campaign-texters.component.scss'],
  animations: [
    fadeListAnimation,
    fadeAnimation,
  ]
})
export class CampaignTextersComponent implements OnInit {

  constructor(private router: Router,
              private activedRoute: ActivatedRoute,
  ) {
  }

  phoneNumbers: IPhoneNumber[] = phoneNumbersMock;
  filteredPhoneNumbers: IPhoneNumber[] = [];
  phoneNumbersSelected: IPhoneNumber[] = [];
  texters: IUser[] = usersMock;
  textersSelected: IUser[] = [];
  filteredTexters: IUser[] = [];
  campaignContacts = 435;
  FCCAllowedTextMessageFromOnePhoneNumber = 250;
  assignmentQuantityDivided: number[] = [];
  minPhoneNumbersQuantity = 0;
  mode: 'Create' | 'Edit' = 'Create';


  showErrorMessage = false;
  sortByProperties: ISortBy<IUser>[] = [
    {
      label: 'Time Requested',
      property: 'requestTime',
    },
    {
    label: 'Status',
    property: 'hasAssignments',
  },
    {
      label: 'Last Name',
      property: 'lastName',
    },
  ];

  ngOnInit(): void {
    this.setPhoneNumberNeeded();
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.mode = 'Edit';
    }
  }

  get unassignedTexts(): number {
    return this.campaignContacts - this.assignmentQuantityDivided.reduce((a, b) => Number(a || 0) + Number(b || 0), 0);
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
    if (!this.textersSelected.length) {
      return;
    }
    this.assignmentQuantityDivided = equitableDivision(this.campaignContacts, this.textersSelected.length);
    this.validData();
  }

  next(): void {
    if (this.validData()) {
      if (this.mode === 'Create') {
        this.router.navigate(['main/campaign/create/scripts']);
      } else {
        this.router.navigate(['main/campaign/view/1']);
      }
    }
  }


  validData(): boolean {
    this.showErrorMessage = ![
      !!this.textersSelected.length // validate if at least one texter was selected
    ].reduce((a, b) => a && b, true);
    return !this.showErrorMessage;
  }

  onKeyUpInitialText(event: Event, i: number): void {
    event.preventDefault();
    if (this.unassignedTexts < 0) {
      const stringQuantity = String(this.assignmentQuantityDivided[i]);
      this.assignmentQuantityDivided[i] = this.assignmentQuantityDivided[i] ?
        Number(stringQuantity.slice(0, stringQuantity.length - 1)) : 0;
      event.preventDefault();
    } else {
      this.assignmentQuantityDivided[i] = !this.assignmentQuantityDivided[i] ? 0 : this.assignmentQuantityDivided[i];
    }
  }
}
