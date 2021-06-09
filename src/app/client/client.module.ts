import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './containers/client-list/client-list.component';
import { SharedModule } from '../shared/shared.module';
import { AccordionModule } from 'primeng/accordion';
import { ClientViewerComponent } from './containers/client-viewer/client-viewer.component';
import { TreeModule } from 'primeng/tree';
import { ClientViewComponent } from './containers/client-viewer/screens/client-view/client-view.component';
import { TabViewModule } from "primeng/tabview";
import { DashboardModule } from "../dashboard/dashboard.module";

@NgModule({
  declarations: [
    ClientListComponent,
    ClientViewerComponent,
    ClientViewComponent,
  ],
  exports: [
  ],
  imports: [
    ClientRoutingModule,
    SharedModule,
    AccordionModule,
    TreeModule,
    TabViewModule,
    DashboardModule
  ],
})
export class ClientModule {
  constructor() {
  }

}
