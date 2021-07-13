import { Component, OnInit } from '@angular/core';
import { ISortBy } from '../../../shared/components/list-filters/list-filters.component';
import { Router } from '@angular/router';
import { fadeAnimation, fadeListAnimation } from '../../../shared/animations';
import { usersMock } from '../../../../utils/mock';
import { routePathNames } from '../../../../utils/routes.utils';
import IUser from '../../../core/interfaces/user.interface';

@Component({
  selector: 'app-contact-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [
    fadeListAnimation,
    fadeAnimation,
  ]
})
export class UserListComponent implements OnInit {

  constructor(private router: Router) {
  }

  enableUserAdminList?: boolean;
  users = usersMock;
  filteredUsers: IUser[] = [];
  sortByProperties: ISortBy<IUser>[] = [
    {
      label: 'Last Name',
      property: 'lastName',
    },
    {
      label: 'Name',
      property: 'firstName',
    },
    {
      label: 'Status',
      property: 'role', // this need to be change when we know what is the structure that comes from the api.
    },
  ];

  ngOnInit(): void {
  }

  goToCreateUser(): void {
    this.router.navigate([routePathNames.main['contact-list'].create.path]);
  }

  changeUserType(event: any): void {
    this.enableUserAdminList = event.index === 1;

  }

  setUsersFilteredData(data: IUser[]): void {
    this.filteredUsers = data;
  }

  goToUserMessage(user: IUser): void {
    this.router.navigate([routePathNames.main.messaging.view.path],
      {
        queryParams: {
          texterName: `${user.firstName} ${user.lastName}`,
        }
      });
  }


}
