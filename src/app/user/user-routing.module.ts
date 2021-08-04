import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'profile/:id',
    component: UserProfileComponent,
    data: {animation: 'UserProfile'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
