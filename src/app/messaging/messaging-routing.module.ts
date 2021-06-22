import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagingViewerComponent } from './containers/messaging-viewer/messaging-viewer.component';
import { ViewCampaignMessagesComponent } from './screens/view-campaign-messages/view-campaign-messages.component';
import { TexterDashboardComponent } from './screens/texter-dashboard/texter-dashboard.component';
import { SendInitialTextComponent } from './screens/send-initial-text/send-initial-text.component';

const routes: Routes = [
    { path: '', component: MessagingViewerComponent, children: [
        {
          path: 'view',
          component: ViewCampaignMessagesComponent
        },
        {
          path: 'assignments',
          component: TexterDashboardComponent,
        },
        {
          path: 'assignments/send-initial-text/:id',
          component: SendInitialTextComponent,
        }
      ] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessagingRoutingModule {}
