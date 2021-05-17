import { Component, OnInit } from '@angular/core';
import { IPropertyLabel } from '../../../../../core/interfaces/common';

@Component({
  selector: 'app-campaign-contact-list',
  templateUrl: './campaign-contact-list.component.html',
  styleUrls: ['./campaign-contact-list.component.scss']
})
export class CampaignContactListComponent implements OnInit {

  constructor() { }
  products = [{
    code: 111,
    name: 'Product 1',
    category: 'Category 1',
    quantity: 111,
  },
    {
      code: 2,
      name: 'Product 2',
      category: 'Category 2',
      quantity: 2,
    },
    {
      code: 3,
      name: 'Product 3',
      category: 'Category 3',
      quantity: 3,
    },
  ];
  contactLists: any[] = [];
  filterByProperties: IPropertyLabel[] = [];

  ngOnInit(): void {
  }

  goToCreateContactList(): void {

  }

  setFilteredCampaign(data: any[]): void {
    this.contactLists = data;
  }
}
