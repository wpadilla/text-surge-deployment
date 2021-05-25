import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCampaignComponent } from './create-campaign.component';
import { CampaignDetailFormComponent } from './screens/campaign-detail-form/campaign-detail-form.component';
import { CampaignContactListComponent } from './screens/campaign-contact-list/campaign-contact-list.component';
import { CampaignTextersComponent } from './screens/campaing-texters/campaign-texters.component';
import { CampaignScriptsComponent } from "./screens/campaign-scripts/campaign-scripts.component";

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
          path: 'texters',
          component: CampaignTextersComponent,
        },
        {
          path: 'scripts',
          component: CampaignScriptsComponent,
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
