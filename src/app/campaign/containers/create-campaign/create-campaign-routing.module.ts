import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCampaignComponent } from './create-campaign.component';
import { DropdownComponent } from '../../../shared/components/dropdown/dropdown.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { CampaignDetailFormComponent } from './containers/campaign-detail-form/campaign-detail-form.component';
import { CampaignComponent } from '../campaign/campaign.component';
import { DashboardComponent } from '../../../dashboard/containers/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: CreateCampaignComponent,
      children: [
        {
          path: 'details',
          component: CampaignDetailFormComponent,
        },
        {
          path: 'example1',
          component: CampaignComponent,
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
