import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import {Location} from '@angular/common';
import { createCampaignRouterAnimations, fadeAnimation } from '../../../shared/animations';

@Component({
  selector: 'ts-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    createCampaignRouterAnimations,
    fadeAnimation,
  ]
})
export class CreateCampaignComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
    ) { }
  steps: MenuItem[] = [];
  activeStep = 0;

  ngOnInit(): void {
    const id = Number(this.location.path().split('/').pop()) || '';

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

    if (this.location.path() === '/main/campaign/create') {
      this.router.navigate(['main/campaign/create/details']);
    }
  }

  prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
