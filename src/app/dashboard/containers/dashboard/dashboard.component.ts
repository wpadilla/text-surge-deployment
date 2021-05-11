import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from 'src/app/core/interfaces';

@Component({
  selector: 'ts-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public campaigns: Campaign[] = new Array<Campaign>();
    public filteredCampaigns: Campaign[] = new Array<Campaign>();

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.campaigns.push({
            id: 1,
            name: 'VA Dems',
            description: 'Justin Case for Governor 2021',
            endDate: new Date(),
            tags: ['unassigned contacts', 'in progress'],
            target: 100,
            sent: 75
        } as Campaign,
        {
            id: 2,
            name: 'Acme Alliance',
            description: 'Lorem Ipsum Dolor Sit Amet Consectetur',
            endDate: new Date(),
            tags: ['in progress'],
            target: 50,
            sent: 35
        } as Campaign,
        {
            id: 3,
            name: 'VA Dems',
            description: 'Lorem Ipsum Dolor Sit Amet',
            endDate: new Date(),
            tags: ['not started'],
            target: 100,
            sent: 30
        } as Campaign);
    }

    setFilteredCampaign(campaigns: Campaign[]): void {
      this.filteredCampaigns = campaigns;
    }
    public submitForm(): void {

    }
}
