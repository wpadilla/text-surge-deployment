import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './containers/campaign/campaign.component';

const routes: Routes = [
    { path: '', component: CampaignComponent },
    { path: 'create', loadChildren: () => import('./containers/create-campaign/create-campaign.module').then(m => m.CreateCampaignModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CampaignRoutingModule {}
