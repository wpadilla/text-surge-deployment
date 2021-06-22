import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICampaign, IPropertyLabel } from '../../../core/interfaces';
import IClient from '../../../core/interfaces/client.interface';
import { clientMock } from '../../../../utils/mock/client.mock';
import { FormGroup } from "@angular/forms";
import IPhoneNumber from "../../../core/interfaces/phone.interface";
import { phoneNumbersMock } from "../../../../utils/mock";
import { globalSearch } from "../../../../utils";

@Component({
  selector: 'ts-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {

  constructor() {
  }
  clients = clientMock;
  filteredClients: IClient[] = [];
  form: FormGroup = new FormGroup({});
  phoneNumbers: IPhoneNumber[] = phoneNumbersMock;
  filteredPhoneNumbers: IPhoneNumber[] = [];
    selectedPhone?: IPhoneNumber;
  selectableSearchFields: IPropertyLabel[] = [{ label: 'Area Code', property: 'phone' }, { label: 'Location', property: 'location' }];

  get accountType(): string {
    return this.form.controls.accountType.value;
  }
  ngOnInit(): void {
    this.filteredClients = this.clients;
    this.selectedPhone = this.phoneNumbers[0];
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
