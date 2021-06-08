import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './containers/client-list/client-list.component';
import { ClientViewerComponent } from "./containers/client-viewer/client-viewer.component";

const routes: Routes = [
  {
    path: '',
    component: ClientListComponent,
  },
  {
    path: 'view',
    component: ClientViewerComponent,
    children: [
      {
        path: '/',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
