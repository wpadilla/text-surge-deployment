import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './containers/client-list/client-list.component';
import { SharedModule } from '../shared/shared.module';
import { AccordionModule } from 'primeng/accordion';
import { ClientViewerComponent } from './containers/client-viewer/client-viewer.component';
import { ClientViewComponent } from './screens/client-view/client-view.component';
import { TabViewModule } from 'primeng/tabview';
import { ClientFormComponent } from './screens/client-form/client-form.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ClientDashboardComponent } from './screens/client-view/components/client-dashboard/client-dashboard.component';
import { CampaignModule } from '../campaign/campaign.module';
import { ClientContactListComponent } from './screens/client-view/components/client-contact-list/client-contact-list.component';
import { ClientContactsComponent } from './screens/client-view/components/client-contacts/client-contacts.component';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientViewerComponent,
    ClientViewComponent,
    ClientFormComponent,
    ClientDashboardComponent,
    ClientContactListComponent,
    ClientContactsComponent,
  ],
  exports: [
    ClientDashboardComponent,
    ClientContactListComponent,
    ClientContactsComponent,
  ],
  imports: [
    ClientRoutingModule,
    SharedModule,
    AccordionModule,
    TabViewModule,
    RadioButtonModule,
    TableModule,
    AutoCompleteModule,
    CampaignModule,
    AvatarModule
  ],
})
export class ClientModule {
  constructor() {
  }

}
