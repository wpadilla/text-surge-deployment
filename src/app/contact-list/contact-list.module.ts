import { NgModule } from '@angular/core';
import { ContactListRoutingModule } from './contact-list-routing.module';
import { ContactListComponent } from './containers/contact-list/contact-list.component';
import { SharedModule } from '../shared/shared.module';
import { ContactListViewComponent } from './screens/client-view/contact-list-view.component';
import { ContactListFormComponent } from './screens/contact-list-form/contact-list-form.component';
import { TableModule } from "primeng/table";

@NgModule({
  declarations: [
    ContactListComponent,
    ContactListViewComponent,
    ContactListFormComponent,
  ],
  exports: [
  ],
  imports: [
    ContactListRoutingModule,
    SharedModule,
    TableModule,
  ],
})
export class ContactListModule {
  constructor() {
  }

}
