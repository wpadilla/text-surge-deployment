import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ISortBy } from '../../../shared/components/list-filters/list-filters.component';
import { Router } from '@angular/router';
import { fadeAnimation, fadeListAnimation } from '../../../shared/animations';
import { usersMock } from '../../../../utils/mock';
import { routePathNames } from '../../../../utils/routes.utils';
import IUser from '../../../core/interfaces/user.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [
    fadeListAnimation,
    fadeAnimation,
  ],
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
  createContactDialogIsVisible?: boolean;
  createUserForm: FormGroup = new FormGroup({role: new FormControl(2)});

  ngOnInit(): void {
  }

  changeUserType(event: any): void {
    this.enableUserAdminList = event.index === 1;
  }

  setUsersFilteredData(data: IUser[]): void {
    setTimeout(() => this.filteredUsers = data);
  }

  goToUserMessage(user: IUser): void {
    this.router.navigate([routePathNames.main.messaging.view.path],
      {
        queryParams: {
          texterName: `${user.firstName} ${user.lastName}`,
        }
      });
  }

  createUser(): void {
    if (this.createUserForm.valid) {
      this.createContactDialogIsVisible = false;
    }
  }

  goToUserProfile(user: IUser): void {
    this.router.navigate([routePathNames.main.user.profile.path, user.id]);
  }
}
