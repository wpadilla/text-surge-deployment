import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './containers/contact-list/contact-list.component';
import { ContactListFormComponent } from './screens/contact-list-form/contact-list-form.component';
import { ContactListViewComponent } from './screens/client-view/contact-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
  },
  {
    path: 'view/:id',
    component: ContactListViewComponent,
    data: { animation: 'ViewClient'}
  },
  {
    path: 'create',
    component: ContactListFormComponent,
    data: { animation: 'CreateClient'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactListRoutingModule {
}
