import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagingViewerComponent } from './containers/messaging-viewer/messaging-viewer.component';
import { ViewCampaignMessagesComponent } from './screens/view-campaign-messages/view-campaign-messages.component';

const routes: Routes = [
    { path: '', component: MessagingViewerComponent, children: [
        {
          path: 'view',
          component: ViewCampaignMessagesComponent
        }
      ] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessagingRoutingModule {}
