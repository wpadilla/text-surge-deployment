import { Component, OnInit } from '@angular/core';
import { verticalSlideAnimation } from '../../../shared/animations';
import { routePathNames } from '../../../../utils/routes.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'ts-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  animations: [
    verticalSlideAnimation,
  ]
})
export class TopBarComponent implements OnInit {
  constructor(
    private router: Router,
  ) {
  }

  userProfileImg = 'https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg';

  public ngOnInit(): void {
  }


  goToProfile(): void {
    this.router.navigate([routePathNames.main.user.profile.path, 1]);
  }

}
