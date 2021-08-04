import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCampaignComponent } from './containers/create-campaign/create-campaign.component';
import { CampaignDetailFormComponent } from './screens/campaign-detail-form/campaign-detail-form.component';
import { CampaignContactListComponent } from './screens/campaign-contact-list/campaign-contact-list.component';
import { CampaignTextersComponent } from './screens/campaing-texters/campaign-texters.component';
import { CampaignScriptsComponent } from './screens/campaign-scripts/campaign-scripts.component';
import { CampaignViewerComponent } from './containers/campaign-viewer/campaign-viewer.component';
import { EditCampaignComponent } from './containers/edit-campaign/edit-campaign.component';
import { CampaignComponent } from './containers/campaign/campaign.component';

const routes: Routes = [
    { path: '', component: CampaignComponent },
    { path: 'create', component: CreateCampaignComponent,
      children: [
        {
          path: 'details',
          component: CampaignDetailFormComponent,
          data: {
            animation: 'Details',
          }
        },
        {
          path: 'details/:id',
          component: CampaignDetailFormComponent,
          data: {
            animation: 'Details',
          }
        },
        {
          path: 'contacts',
          component: CampaignContactListComponent,
          data: {
            animation: 'Contacts',
          }
        },
        {
          path: 'texters',
          component: CampaignTextersComponent,
          data: {
            animation: 'Texters',
          }
        },
        {
          path: 'scripts',
          component: CampaignScriptsComponent,
          data: {
            animation: 'Scripts',
          }
        },
      ],
    },
  {
    path: 'view/:id',  component: CampaignViewerComponent,
  },
  { path: 'edit', component: EditCampaignComponent,
    children: [
      {
        path: 'details/:id',
        component: CampaignDetailFormComponent,
      },
      {
        path: 'contacts/:id',
        component: CampaignContactListComponent,
      },
      {
        path: 'texters/:id',
        component: CampaignTextersComponent,
      },
      {
        path: 'scripts/:id',
        component: CampaignScriptsComponent,
      },
    ],
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CampaignRoutingModule {}
