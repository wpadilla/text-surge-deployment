import { NgModule } from '@angular/core';
import { CampaignComponent } from './containers/campaign/campaign.component';
import { SharedModule } from '../shared/shared.module';
import { CampaignRoutingModule } from './campaign-routing.module';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { IconSpriteModule } from 'ng-svg-icon-sprite';



@NgModule({
  declarations: [CampaignComponent],
  imports: [
    SharedModule,
    CampaignRoutingModule,
    NgbNavModule,
    IconSpriteModule,
  ]
})
export class CampaignModule { }
