import { Component, Input, OnInit } from '@angular/core';
import { IAction, IContactList, StatusRelatedType } from '../../../core/interfaces';
import IClient from '../../../core/interfaces/client.interface';
import { fadeAnimation, fadeListAnimation } from '../../../shared/animations';
import { ISortBy } from '../../../shared/components/list-filters/list-filters.component';
import { contactsListMock, phoneNumbersMock } from '../../../../utils/mock';
import IPhoneNumber from '../../../core/interfaces/phone.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { routePathNames } from '../../../../utils/routes.utils';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'ts-contact-list-view',
  templateUrl: './contact-list-view.component.html',
  styleUrls: ['./contact-list-view.component.scss'],
  animations: [
    fadeAnimation,
    fadeListAnimation,
  ]
})
export class ContactListViewComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService,
  ) {
  }

  @Input() client: IClient = {} as any;
  phoneNumbers = phoneNumbersMock;
  filteredPhoneNumbers: IPhoneNumber[] = [];
  selectedPhoneNumbers: IPhoneNumber[] = [];
  contactListViewData: IContactList = {} as any;
  contactForm: FormGroup = {} as any;
  sortByProperties: ISortBy[] = [
    {
      label: 'Date Added',
      property: 'createdDate',
      reversed: true,
    },
    {
      label: 'Contact Name',
      property: 'status',
    },
    {
      label: 'Status',
      property: 'status',
    }
  ];
  contactId = 0;
  exportOptionsDialogIsVisible?: boolean;
  editContactDialogIsVisible?: boolean;
  actions: IAction[] = [];
  tagColors: StatusRelatedType = {
    subscribed: 'info',
    unsubscribed: 'disabled',
    'opted out': 'danger',
  };

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.contactListViewData = contactsListMock.find(cl => cl.id === Number(id)) || this.contactListViewData;

    this.actions = [
      {
        label: 'Export',
        icon: 'external-link',
        action: () => this.exportOptionsDialogIsVisible = true,
      }
    ];

    // initializing contact form
    this.contactForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      phone: new FormControl(),
      zip: new FormControl(),
      city: new FormControl(),
    });
  }

  filterPhoneNumbers(data: IPhoneNumber[]): void {
    this.filteredPhoneNumbers = data;
  }

  goToClient(): void {
    this.router.navigate([routePathNames.main.client.view.path, this.contactListViewData.client.id]);
  }

  openEditContact(event: any, contact: IPhoneNumber): void {
    event.stopPropagation();
    this.contactId = contact.id;
    this.editContactDialogIsVisible = true;
    this.contactForm.setValue({
      firstName: contact.firstName,
      lastName: contact.lastName,
      phone: contact.phone,
      zip: contact.zip,
      city: contact.city,
    });
  }

  editContact(): void {
    this.phoneNumbers = this.phoneNumbers
      .map((contact) => contact.id === this.contactId ? ({...contact, ...this.contactForm.value}) : contact);
    this.editContactDialogIsVisible = false;
  }

  onDeleteContact(event: any, id: number): void {
    event.stopPropagation();
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this contact?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.phoneNumbers = this.phoneNumbers.filter(item => item.id !== id);
      },
    });
  }

  deleteContactSelected(): void {
    if (this.selectedPhoneNumbers.length) {
      this.confirmationService.confirm({
        message: 'Are you sure you want to delete these contacts? This item cannot be undone. ',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.selectedPhoneNumbers.forEach((contact, i) => {
            setTimeout(() => {
              this.phoneNumbers = this.phoneNumbers.filter(item => item.id !== contact.id);
            }, i * 100);
          });
        },
      });
    }
  }
}
