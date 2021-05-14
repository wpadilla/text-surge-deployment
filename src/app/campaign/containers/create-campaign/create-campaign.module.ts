import { NgModule } from '@angular/core';
import { CreateCampaignComponent } from './create-campaign.component';
import { CreateCampaignRoutingModule } from './create-campaign-routing.module';
import { CampaignDetailFormComponent } from './containers/campaign-detail-form/campaign-detail-form.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { StepsModule } from 'primeng/steps';
import { SharedModule } from '../../../shared/shared.module';
import { InputTextareaModule } from "primeng/inputtextarea";
import { CalendarModule } from "primeng/calendar";
import { InputNumberModule } from "primeng/inputnumber";

@NgModule({
  declarations: [CreateCampaignComponent, CampaignDetailFormComponent],
  imports: [
    CreateCampaignRoutingModule,
    AutoCompleteModule,
    StepsModule,
    SharedModule,
    InputTextareaModule,
    CalendarModule,
    InputNumberModule,
  ],
  exports: [
  ]
})
export class CreateCampaignModule { }
