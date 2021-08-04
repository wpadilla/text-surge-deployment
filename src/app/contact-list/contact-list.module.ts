import { NgModule } from '@angular/core';
import { ContactListRoutingModule } from './contact-list-routing.module';
import { ContactListComponent } from './containers/contact-list/contact-list.component';
import { SharedModule } from '../shared/shared.module';
import { ContactListViewComponent } from './screens/client-view/contact-list-view.component';
import { ContactListFormComponent } from './screens/contact-list-form/contact-list-form.component';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';

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
    AutoCompleteModule,
    InputTextModule,
    InputMaskModule,
    ConfirmDialogModule,
    DialogModule,
    CheckboxModule,
  ],
})
export class ContactListModule {
  constructor() {
  }

}
