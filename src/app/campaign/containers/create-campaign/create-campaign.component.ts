import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {

  constructor() { }
  items: any[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Details',
        routerLink: 'details',
      },
      {
        label: 'Contacts',
      },
      {
        label: 'Texters',
      },
      {
        label: 'Scripts',
      },
    ];
  }

}
