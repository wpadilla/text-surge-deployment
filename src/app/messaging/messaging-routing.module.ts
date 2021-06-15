import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagingViewerComponent } from './containers/messaging-viewer/messaging-viewer.component';
import { ViewCampaignMessagesComponent } from './screens/view-campaign-messages/view-campaign-messages.component';
import { TexterDashboardComponent } from './screens/texter-dashboard/texter-dashboard.component';

const routes: Routes = [
    { path: '', component: MessagingViewerComponent, children: [
        {
          path: 'view',
          component: ViewCampaignMessagesComponent
        },
        {
          path: 'texter-dashboard',
          component: TexterDashboardComponent,
        }
      ] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessagingRoutingModule {}
