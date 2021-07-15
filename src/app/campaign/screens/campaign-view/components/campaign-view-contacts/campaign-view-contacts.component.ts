import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import IPhoneNumber from '../../../../../core/interfaces/phone.interface';
import { contactsListMock, phoneNumbersMock } from '../../../../../../utils/mock';
import { IAction, StatusRelatedType } from '../../../../../core/interfaces';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { fadeListAnimation } from '../../../../../shared/animations';
import { routePathNames } from "../../../../../../utils/routes.utils";

@Component({
  selector: 'ts-campaign-view-contacts',
  templateUrl: './campaign-view-contacts.component.html',
  styleUrls: ['./campaign-view-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeListAnimation,
  ]
})
export class CampaignViewContactsComponent implements OnInit {

  constructor(private router: Router) {
  }

  contactLists = contactsListMock.slice(0, 3);
  excludedContactLists = contactsListMock.slice(3);

  statusColors: StatusRelatedType = {
    sent: 'success',
    'not sent': 'disabled',
    bounced: 'danger',
    replied: 'info',
  };

  tagColors: StatusRelatedType = {
    subscribed: 'info',
    unsubscribed: 'disabled',
    'opted out': 'danger',
  };

  contacts: IPhoneNumber[] = phoneNumbersMock;
  contactExportColumns: string[] = ['Zip', 'City', 'Status', 'Script', 'Source', 'Tag'];
  filteredContacts: IPhoneNumber[] = [];
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
  }

  setFilteredContacts(data: IPhoneNumber[]): void {
    this.filteredContacts = data;
  }

  goToContact(): void {
    this.router.navigate(['main/campaign/edit/contacts/1']);
  }

  goToContactList(id: number): void {
    this.router.navigate([routePathNames.main['contact-list'].view.path, id]);
  }
}
