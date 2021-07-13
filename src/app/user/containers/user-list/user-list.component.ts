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
  ];

  ngOnInit(): void {
  }

  goToContactListView(id: number): void {
    this.router.navigate([routePathNames.main['contact-list'].view.path, id]);
  }

  goToCreateUser(): void {
    this.router.navigate([routePathNames.main['contact-list'].create.path]);
  }

  changeUserType(event: any): void {

  }

  setUsersFilteredData(data: IUser[]): void {
    this.filteredUsers = data;
  }

}
