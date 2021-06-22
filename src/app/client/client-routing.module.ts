import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './containers/client-list/client-list.component';
import { ClientViewerComponent } from './containers/client-viewer/client-viewer.component';
import { ClientFormComponent } from './screens/client-form/client-form.component';

const routes: Routes = [
  {
    path: '',
    component: ClientListComponent,
  },
  {
    path: 'view/:id',
    component: ClientViewerComponent,
    data: { animation: 'ViewClient'}
  },
  {
    path: 'create',
    component: ClientFormComponent,
    data: { animation: 'CreateClient'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
