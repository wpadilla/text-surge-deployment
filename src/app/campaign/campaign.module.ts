import { NgModule } from '@angular/core';
import { CampaignListComponent } from './containers/campaign-list/campaign-list.component';
import { SharedModule } from '../shared/shared.module';
import { CampaignRoutingModule } from './campaign-routing.module';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { TabViewModule } from 'primeng/tabview';
import CampaignFacade from '../core/services/campaign/campaign.facade';
import CampaignService from '../core/services/campaign/campaign.service';
import { CreateCampaignComponent } from './containers/create-campaign/create-campaign.component';
import { CampaignDetailFormComponent } from './containers/create-campaign/screens/campaign-detail-form/campaign-detail-form.component';
import { CampaignContactListComponent } from './containers/create-campaign/screens/campaign-contact-list/campaign-contact-list.component';
import { CampaignTextersComponent } from './containers/create-campaign/screens/campaing-texters/campaign-texters.component';
import { CampaignScriptsComponent } from './containers/create-campaign/screens/campaign-scripts/campaign-scripts.component';
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
import { CampaignViewComponent } from './containers/campaign-viewer/screens/campaign-view/campaign-view.component';
import { TreeModule } from 'primeng/tree';
import { CampaignViewDashboardComponent } from './containers/campaign-viewer/screens/campaign-view/components/campaign-view-dashboard/campaign-view-dashboard.component';
import { CampaignViewContactsComponent } from "./containers/campaign-viewer/screens/campaign-view/components/campaign-view-contacts/campaign-view-contacts.component";
import { CampaignViewScriptsComponent } from "./containers/campaign-viewer/screens/campaign-view/components/campaign-view-scripts/campaign-view-scripts.component";
import { CampaignViewMessagesComponent } from "./containers/campaign-viewer/screens/campaign-view/components/campaign-view-messages/campaign-view-messages.component";

@NgModule({
  providers: [
    CampaignFacade,
    CampaignService,
  ],
  declarations: [
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
    CampaignViewMessagesComponent,
  ],
  imports: [
    SharedModule,
    CampaignRoutingModule,
    IconSpriteModule,
    TabViewModule,
    AutoCompleteModule,
    StepsModule,
    SharedModule,
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
    TreeModule,
  ],
  exports: [
    CampaignViewDashboardComponent,
    CampaignViewContactsComponent,
    CampaignViewScriptsComponent,
    CampaignViewMessagesComponent,
  ],
})
export class CampaignModule { }
