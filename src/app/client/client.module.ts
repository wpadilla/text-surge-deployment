import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './containers/client-list/client-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ClientListComponent,
  ],
  exports: [
  ],
  imports: [
    ClientRoutingModule,
    SharedModule
  ],
})
export class ClientModule {
  constructor() {
  }

}
