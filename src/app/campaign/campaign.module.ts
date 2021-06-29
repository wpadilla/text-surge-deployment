import { NgModule } from '@angular/core';
import { CampaignListComponent } from './screens/campaign-list/campaign-list.component';
import { SharedModule } from '../shared/shared.module';
import { CampaignRoutingModule } from './campaign-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { CreateCampaignComponent } from './containers/create-campaign/create-campaign.component';
import { CampaignDetailFormComponent } from './screens/campaign-detail-form/campaign-detail-form.component';
import { CampaignContactListComponent } from './screens/campaign-contact-list/campaign-contact-list.component';
import { CampaignTextersComponent } from './screens/campaing-texters/campaign-texters.component';
import { CampaignScriptsComponent } from './screens/campaign-scripts/campaign-scripts.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { StepsModule } from 'primeng/steps';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { AvatarModule } from 'primeng/avatar';
import { ContenteditableModule } from '@ng-stack/contenteditable';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { CampaignViewerComponent } from './containers/campaign-viewer/campaign-viewer.component';
import { CampaignViewComponent } from './screens/campaign-view/campaign-view.component';
import { CampaignViewDashboardComponent } from './screens/campaign-view/components/campaign-view-dashboard/campaign-view-dashboard.component';
import { CampaignViewContactsComponent } from './screens/campaign-view/components/campaign-view-contacts/campaign-view-contacts.component';
import { CampaignViewScriptsComponent } from './screens/campaign-view/components/campaign-view-scripts/campaign-view-scripts.component';
import { EditCampaignComponent } from './containers/edit-campaign/edit-campaign.component';
import { CampaignComponent } from './containers/campaign/campaign.component';

@NgModule({
  providers: [
  ],
  declarations: [
    CampaignComponent,
    CampaignListComponent,
    CreateCampaignComponent,
    CampaignDetailFormComponent,
    CampaignContactListComponent,
    CampaignTextersComponent,
    CampaignScriptsComponent,
    CampaignViewerComponent,
    CampaignViewComponent,
    CampaignViewDashboardComponent,
    CampaignViewContactsComponent,
    CampaignViewScriptsComponent,
    EditCampaignComponent,
  ],
  imports: [
    SharedModule,
    CampaignRoutingModule,
    TabViewModule,
    AutoCompleteModule,
    StepsModule,
    InputTextareaModule,
    CalendarModule,
    InputNumberModule,
    TableModule,
    CheckboxModule,
    AvatarModule,
    ContenteditableModule,
    PickerModule,
    DialogModule,
    InputMaskModule,
  ],
  exports: [
    CampaignViewDashboardComponent,
    CampaignViewContactsComponent,
    CampaignViewScriptsComponent,
    CampaignListComponent,
  ],
})
export class CampaignModule { }
