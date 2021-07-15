import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IPropertyLabel } from '../../../core/interfaces';
import IClient from '../../../core/interfaces/client.interface';
import { clientMock } from '../../../../utils/mock/client.mock';
import { FormGroup } from '@angular/forms';
import IPhoneNumber from '../../../core/interfaces/phone.interface';
import { phoneNumbersMock } from '../../../../utils/mock';
import { globalSearch } from '../../../../utils';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { routePathNames } from '../../../../utils/routes.utils';

@Component({
  selector: 'ts-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFormComponent implements OnInit, AfterViewInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {
  }

  clients = clientMock;
  filteredClients: IClient[] = [];
  form: FormGroup = new FormGroup({});
  phoneNumbers: IPhoneNumber[] = phoneNumbersMock;
  filteredPhoneNumbers: IPhoneNumber[] = [];
  selectedPhone?: IPhoneNumber;
  selectableSearchFields: IPropertyLabel[] = [{label: 'Area Code', property: 'phone'}, {
    label: 'Location',
    property: 'location'
  }];
  client: IClient = {} as any;
  editMode?: boolean;

  get accountType(): string {
    return this.form.controls.accountType.value;
  }

  ngOnInit(): void {
    this.filteredClients = this.clients;
    this.selectedPhone = this.phoneNumbers[0];
  }

  ngAfterViewInit(): void {
    const {id} = this.activatedRoute.snapshot.params;
    if (id) {
      this.client = this.clients.find(user => user.id === Number(id)) || this.client;
      this.editMode = !!this.client.id;
      if(this.client.id) {
        setTimeout( () => this.form.setValue({
          ...this.form.value,
          name: this.client.name,
          accountType: this.client.isPrimary ? 'primary' : 'sub',
          parent: this.clients[0],
        }));
      }
    }

    if (this.location.path().includes('edit') && !this.editMode) {
      this.router.navigate([routePathNames.main.client.path]);
    }

  }

  setFilteredPhoneNumbers(data: any[]): void {
    this.filteredPhoneNumbers = data;
  }

  filterClients(value: any): void {
    this.filteredClients = globalSearch(this.clients, value);
  }

  createClient(): void {
    console.log(this.form.value);
  }
}
