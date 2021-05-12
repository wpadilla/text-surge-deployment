import { NgModule } from '@angular/core';
import { CampaignComponent } from './containers/campaign/campaign.component';
import { SharedModule } from '../shared/shared.module';
import { CampaignRoutingModule } from './campaign-routing.module';
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [CampaignComponent],
  imports: [
    SharedModule,
    CampaignRoutingModule,
    NgbNavModule,
  ]
})
export class CampaignModule { }
