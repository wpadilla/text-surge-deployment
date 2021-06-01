import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ts-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCampaignComponent implements OnInit {

  constructor(private router: Router) { }
  steps: MenuItem[] = [];
  activeStep = 0;

  ngOnInit(): void {
    const id = Number(location.pathname.split('/').pop()) || '';
    const stepNames = this.router.url.split('/');
    const stepName: string = stepNames.map((step, i) => step === 'create' ? stepNames[i + 1] : false).find(item => item) || '';

    this.steps = [
      {
        label: 'Details',
        routerLink: `details/${id}`,
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

    this.activeStep = this.steps.map(item => item.routerLink).findIndex(item => item === stepName);

    if (location.pathname === '/main/campaign/create') {
      this.router.navigate(['main/campaign/create/details']);
    }
  }

}
