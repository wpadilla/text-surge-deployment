import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagingViewerComponent } from './containers/messaging-viewer/messaging-viewer.component';
import { ViewMessagesComponent } from './screens/view-messages/view-messages.component';
import { TexterDashboardComponent } from './screens/texter-dashboard/texter-dashboard.component';
import { SendInitialTextComponent } from './screens/send-initial-text/send-initial-text.component';
import { InboxComponent } from './screens/inbox/inbox.component';
import { MessengerComponent } from './screens/messenger/messenger.component';
import { SelfAssignmentRequestsComponent } from './screens/self-assignment-requests/self-assignment-requests.component';
import { ReassignRepliesComponent } from './screens/reassign-replies/reassign-replies.component';

const routes: Routes = [
  {
    path: '', component: MessagingViewerComponent, children: [
      {
        path: 'assignments',
        component: TexterDashboardComponent,
      },
      {
        path: 'campaign/:id',
        component: ViewMessagesComponent
      },
      {
        path: 'client/:id',
        component: ViewMessagesComponent
      },
      {
        path: 'view',
        component: ViewMessagesComponent,
      },
      {
        path: 'assignments/send-initial-text/:id',
        component: SendInitialTextComponent,
      },
      {
        path: 'inbox',
        component: InboxComponent,
      },
      {
        path: 'inbox/:id',
        component: MessengerComponent,
      },
      {
        path: 'view/inbox/:id',
        component: MessengerComponent,
      },
      {
        path: 'self-assignment-requests',
        component: SelfAssignmentRequestsComponent,
      },
      {
        path: 'reassign-replies',
        component: ReassignRepliesComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagingRoutingModule {
}
