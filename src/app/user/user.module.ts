import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './containers/user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserProfileComponent,
  ],
  exports: [],
  imports: [
    UserRoutingModule,
    SharedModule,
    TableModule,
    DialogModule,
    TabViewModule,
    AvatarModule,
    BadgeModule,
    RadioButtonModule,
  ],
})
export class UserModule {
  constructor() {
  }

}
