import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './containers/client-list/client-list.component';
import { SharedModule } from '../shared/shared.module';
import { AccordionModule } from 'primeng/accordion';
import { ClientViewerComponent } from './containers/client-viewer/client-viewer.component';
import { TreeModule } from 'primeng/tree';
import { ClientViewComponent } from './screens/client-view/client-view.component';
import { TabViewModule } from 'primeng/tabview';
import { ClientFormComponent } from './screens/client-form/client-form.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ClientDashboardComponent } from './screens/client-view/components/client-dashboard/client-dashboard.component';
import { CampaignModule } from '../campaign/campaign.module';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientViewerComponent,
    ClientViewComponent,
    ClientFormComponent,
    ClientDashboardComponent,
  ],
  exports: [
    ClientDashboardComponent,
  ],
  imports: [
    ClientRoutingModule,
    SharedModule,
    AccordionModule,
    TreeModule,
    TabViewModule,
    RadioButtonModule,
    TableModule,
    AutoCompleteModule,
    CampaignModule
  ],
})
export class ClientModule {
  constructor() {
  }

}
