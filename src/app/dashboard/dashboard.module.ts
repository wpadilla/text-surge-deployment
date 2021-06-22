import { NgModule } from '@angular/core';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CampaignModule } from '../campaign/campaign.module';



@NgModule({
  declarations: [DashboardComponent],
  exports: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    CampaignModule
  ]
})
export class DashboardModule { }
