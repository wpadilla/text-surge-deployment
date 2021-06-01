import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import IPhoneNumber from '../../../../../../../core/interfaces/phone.interface';
import { phoneNumbersMock } from '../../../../../../../../utils/mock';

@Component({
  selector: 'ts-campaign-view-contacts',
  templateUrl: './campaign-view-contacts.component.html',
  styleUrls: ['./campaign-view-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewContactsComponent implements OnInit {

  constructor() { }
  contactList = [
    'VA Dems Contact List',
    '1 Contact List',
  ];
  contacts: IPhoneNumber[] = phoneNumbersMock;
  filteredContacts: IPhoneNumber[] = [];
  contactListText?: string;

  ngOnInit(): void {
    this.contactListText = this.contactList.join(', ');
  }


  setFilteredContacts(data: IPhoneNumber[]): void {
    this.filteredContacts = data;
  }


}
