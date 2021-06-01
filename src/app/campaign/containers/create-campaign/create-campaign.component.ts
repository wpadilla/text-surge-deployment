import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ts-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCampaignComponent implements OnInit {

  constructor(private router: Router) { }
  items: any[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Details',
        routerLink: 'details',
      },
      {
        label: 'Contacts',
        routerLink: 'contacts'
      },
      {
        label: 'Texters',
        routerLink: 'texters'

      },
      {
        label: 'Scripts',
        routerLink: 'scripts'

      },
    ];
    if (location.pathname === '/main/campaign/create') {
      this.router.navigate(['main/campaign/create/details']);
    }
  }

}
