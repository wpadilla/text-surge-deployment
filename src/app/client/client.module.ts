import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './containers/client-list/client-list.component';
import { SharedModule } from '../shared/shared.module';
import { AccordionModule } from "primeng/accordion";

@NgModule({
  declarations: [
    ClientListComponent,
  ],
  exports: [
  ],
  imports: [
    ClientRoutingModule,
    SharedModule,
    AccordionModule
  ],
})
export class ClientModule {
  constructor() {
  }

}
