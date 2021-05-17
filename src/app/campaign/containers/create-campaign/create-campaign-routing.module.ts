import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCampaignComponent } from './create-campaign.component';
import { CampaignDetailFormComponent } from './screens/campaign-detail-form/campaign-detail-form.component';
import { DashboardComponent } from '../../../dashboard/containers/dashboard/dashboard.component';
import { CampaignContactListComponent } from "./screens/campaign-contact-list/campaign-contact-list.component";

const routes: Routes = [
    { path: '', component: CreateCampaignComponent,
      children: [
        {
          path: 'details',
          component: CampaignDetailFormComponent,
        },
        {
          path: 'contacts',
          component: CampaignContactListComponent,
        },
        {
          path: 'example2',
          component: DashboardComponent,
        },
        {
          path: 'example3',
          component: CampaignDetailFormComponent,
        },
      ]
      ,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule,
    ]
})
export class CreateCampaignRoutingModule {}
