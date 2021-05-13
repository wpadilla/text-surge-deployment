import { NgModule } from '@angular/core';
import { CreateCampaignComponent } from './create-campaign.component';
import { CreateCampaignRoutingModule } from './create-campaign-routing.module';
import { StepsModule } from "primeng/steps";

@NgModule({
  declarations: [CreateCampaignComponent],
  imports: [
    CreateCampaignRoutingModule,
    StepsModule,
  ]
})
export class CreateCampaignModule { }
