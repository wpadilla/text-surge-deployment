import { NgModule } from '@angular/core';
import { CreateCampaignComponent } from './create-campaign.component';
import { CreateCampaignRoutingModule } from './create-campaign-routing.module';
import { CampaignDetailFormComponent } from './screens/campaign-detail-form/campaign-detail-form.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { StepsModule } from 'primeng/steps';
import { SharedModule } from '../../../shared/shared.module';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { CampaignModule } from '../../campaign.module';
import { CampaignContactListComponent } from './screens/campaign-contact-list/campaign-contact-list.component';
import { TableModule } from 'primeng/table';
import { CampaignTextersComponent } from "./screens/campaing-texters/campaign-texters.component";
import { CheckboxModule } from "primeng/checkbox";

@NgModule({
  declarations: [CreateCampaignComponent, CampaignDetailFormComponent, CampaignContactListComponent, CampaignTextersComponent],
  imports: [
    CreateCampaignRoutingModule,
    AutoCompleteModule,
    StepsModule,
    SharedModule,
    InputTextareaModule,
    CalendarModule,
    InputNumberModule,
    CampaignModule,
    TableModule,
    CheckboxModule,
  ],
  exports: [
  ]
})
export class CreateCampaignModule { }
