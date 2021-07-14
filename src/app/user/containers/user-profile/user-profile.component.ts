import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  fadeAnimation,
  fadeListAnimation,
  horizontalSlideAnimation,
  verticalSlideAnimation
} from '../../../shared/animations';
import { campaignMock, usersMock } from '../../../../utils/mock';
import { ICampaign } from '../../../core/interfaces';
import { routePathNames } from '../../../../utils/routes.utils';
import IUser from '../../../core/interfaces/user.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  animations: [
    fadeListAnimation,
    fadeAnimation,
    verticalSlideAnimation,
    horizontalSlideAnimation,
  ]
})
export class UserProfileComponent implements OnInit {

  assignedCampaigns = campaignMock;
  user: IUser = {} as any;
  users = usersMock;
  adminMode?: boolean;

  constructor(
    private router: Router,
    private  activatedRouter: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.setUser();
  }

  /* setUser, set the user according to the id that comes from params
  * @return void
  * */
  setUser(): void {
    const id = Number(this.activatedRouter.snapshot.params.id);
    if (id) {
      this.user = this.users.find(user => user.id === id) || this.user;
      this.adminMode = this.user.role === 'Owner';
    }

    if (!this.user.id) {
      this.router.navigate([routePathNames.main.user.path]);
    }
  }

  selectCampaign(campaign: ICampaign): void {
    this.router.navigate([routePathNames.main.campaign.view.path, campaign.id]);
  }

  goToUserMessage(): void {
    this.router.navigate([routePathNames.main.messaging.view.path],
      {
        queryParams: {
          texterName: `${this.user.firstName} ${this.user.lastName}`,
        },
      });
  }

}
