import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import IPhoneNumber from '../../../../../core/interfaces/phone.interface';
import { phoneNumbersMock } from '../../../../../../utils/mock';
import { IAction, StatusRelatedType } from '../../../../../core/interfaces';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';

@Component({
  selector: 'ts-campaign-view-contacts',
  templateUrl: './campaign-view-contacts.component.html',
  styleUrls: ['./campaign-view-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignViewContactsComponent implements OnInit {

  constructor(private router: Router) { }
  contactList = [
    'VA Dems Contact List',
    '1 Contact List',
  ];
  excludedContactList = [
    'VA Games',
    '2 Contact List',
  ];
  statusColors: StatusRelatedType = {
    sent: 'success',
    'not sent': 'disabled',
    bounced: 'danger',
    replied: 'info',
  };

  tagColors: StatusRelatedType = {
    subscribed: 'info',
    unsubscribed: 'disabled',
  };

  contacts: IPhoneNumber[] = phoneNumbersMock;
  contactExportColumns: string[] = ['Zip', 'City', 'Status', 'Script', 'Source', 'Tag'];
  filteredContacts: IPhoneNumber[] = [];
  contactListText?: string;
  excludedContactListText?: string;
  exportContactIsVisible?: boolean;
  @Input() selectedStatus = '';
  @Input() selectedScript = '';
  @Input() selectedTag = '';
  @ViewChild(Table) pTable: Table = {} as any;

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
  }

  goToContact(): void {
    this.router.navigate(['main/campaign/edit/contacts/1']);
  }
}
