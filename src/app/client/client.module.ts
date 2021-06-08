import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './containers/client-list/client-list.component';
import { SharedModule } from '../shared/shared.module';
import { AccordionModule } from "primeng/accordion";
import { ClientViewerComponent } from "./containers/client-viewer/client-viewer.component";
import { TreeModule } from "primeng/tree";

@NgModule({
  declarations: [
    ClientListComponent,
    ClientViewerComponent,
  ],
  exports: [
  ],
  imports: [
    ClientRoutingModule,
    SharedModule,
    AccordionModule,
    TreeModule
  ],
})
export class ClientModule {
  constructor() {
  }

}
