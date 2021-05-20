import { NgModule } from '@angular/core';
import { CampaignComponent } from './containers/campaign/campaign.component';
import { SharedModule } from '../shared/shared.module';
import { CampaignRoutingModule } from './campaign-routing.module';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { TabViewModule } from 'primeng/tabview';
import CampaignFacade from '../core/services/campaign/campaign.facade';
import CampaignService from '../core/services/campaign/campaign.service';

@NgModule({
  providers: [
    CampaignFacade,
    CampaignService,
  ],
  declarations: [
    CampaignComponent,
  ],
  imports: [
    SharedModule,
    CampaignRoutingModule,
    IconSpriteModule,
    TabViewModule,
  ]
})
export class CampaignModule { }
