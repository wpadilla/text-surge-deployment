import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignListComponent } from './containers/campaign-list/campaign-list.component';
import { CreateCampaignComponent } from './containers/create-campaign/create-campaign.component';
import { CampaignDetailFormComponent } from './containers/create-campaign/screens/campaign-detail-form/campaign-detail-form.component';
import { CampaignContactListComponent } from './containers/create-campaign/screens/campaign-contact-list/campaign-contact-list.component';
import { CampaignTextersComponent } from './containers/create-campaign/screens/campaing-texters/campaign-texters.component';
import { CampaignScriptsComponent } from './containers/create-campaign/screens/campaign-scripts/campaign-scripts.component';
import { CampaignViewComponent } from './containers/campaign-viewer/screens/campaign-view/campaign-view.component';
import { CampaignViewerComponent } from './containers/campaign-viewer/campaign-viewer.component';

const routes: Routes = [
    { path: '', component: CampaignListComponent },
    { path: 'create', component: CreateCampaignComponent,
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
      ],
    },
  {
    path: 'view/:id',  component: CampaignViewerComponent, children: [
      {
        path: '',
        component: CampaignViewComponent,
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CampaignRoutingModule {}
