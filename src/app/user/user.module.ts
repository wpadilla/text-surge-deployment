import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './containers/user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserViewComponent } from './screens/user-view/user-view.component';
import { UserFormComponent } from './screens/user-form/user-form.component';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from "primeng/inputtext";
import { InputMaskModule } from "primeng/inputmask";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from "primeng/dialog";
import { CheckboxModule } from "primeng/checkbox";
import { TabViewModule } from "primeng/tabview";
import { AvatarModule } from "primeng/avatar";
import { BadgeModule } from "primeng/badge";

@NgModule({
  declarations: [
    UserListComponent,
    UserViewComponent,
    UserFormComponent,
  ],
  exports: [
  ],
  imports: [
    UserRoutingModule,
    SharedModule,
    TableModule,
    AutoCompleteModule,
    InputTextModule,
    InputMaskModule,
    ConfirmDialogModule,
    DialogModule,
    CheckboxModule,
    TabViewModule,
    AvatarModule,
    BadgeModule,
  ],
})
export class UserModule {
  constructor() {
  }

}
