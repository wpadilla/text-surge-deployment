import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UserFormComponent } from './screens/user-form/user-form.component';
import { UserViewComponent } from './screens/user-view/user-view.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'view/:id',
    component: UserViewComponent,
    data: { animation: 'ViewContactList'}
  },
  {
    path: 'create',
    component: UserFormComponent,
    data: { animation: 'CreateContactList'}
  },
  {
    path: 'edit/:id',
    component: UserFormComponent,
    data: { animation: 'EditContactList'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
