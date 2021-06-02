import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import IPhoneNumber from '../../../../../../../core/interfaces/phone.interface';
import { phoneNumbersMock } from '../../../../../../../../utils/mock';
import { IAction } from '../../../../../../../core/interfaces';

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
  excludedContactList = [
    'VA Games',
    '2 Contact List',
  ];
  contacts: IPhoneNumber[] = phoneNumbersMock;
  contactExportColumns: string[] = ['Zip', 'City', 'Status', 'Script', 'Source', 'Tag'];
  filteredContacts: IPhoneNumber[] = [];
  contactListText?: string;
  excludedContactListText?: string;
  exportContactIsVisible?: boolean;
  recordsStatus: any[] = [];
  selectedStatus = '';
  contactActions: IAction[] = [
    {
      label: 'Export',
      icon: 'external-link',
      action: () => this.exportContactIsVisible = true,
    },
  ];
  ngOnInit(): void {
    this.contactListText = this.contactList.join(', ');
    this.excludedContactListText = this.excludedContactList.join(', ');
  }

  setFilteredContacts(data: IPhoneNumber[]): void {
    this.filteredContacts = data;
    this.recordsStatus = [...new Set(data.map(contact => contact.status))];
  }
}
