import { NgModule } from '@angular/core';
import { MessagingRoutingModule } from './messaging-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from '../shared/shared.module';
import { MessagingViewerComponent } from './containers/messaging-viewer/messaging-viewer.component';
import { ViewMessagesComponent } from './screens/view-messages/view-messages.component';
import { TexterDashboardComponent } from './screens/texter-dashboard/texter-dashboard.component';
import { SendInitialTextComponent } from './screens/send-initial-text/send-initial-text.component';
import { InboxComponent } from './screens/inbox/inbox.component';
import { MessengerComponent } from './screens/messenger/messenger.component';
import { MessageComponent } from './screens/messenger/components/message/message.component';
import { AccordionModule } from 'primeng/accordion';
import { SelfAssignmentRequestsComponent } from './screens/self-assignment-requests/self-assignment-requests.component';
import { BadgeModule } from "primeng/badge";
import { ReassignRepliesComponent } from "./screens/reassign-replies/reassign-replies.component";

@NgModule({
  providers: [
  ],
  declarations: [
    MessagingViewerComponent,
    ViewMessagesComponent,
    TexterDashboardComponent,
    SendInitialTextComponent,
    InboxComponent,
    MessengerComponent,
    MessageComponent,
    SelfAssignmentRequestsComponent,
    ReassignRepliesComponent,
  ],
  imports: [
    SharedModule,
    MessagingRoutingModule,
    TabViewModule,
    AutoCompleteModule,
    InputTextareaModule,
    TableModule,
    AvatarModule,
    DialogModule,
    AccordionModule,
    BadgeModule,
  ],
  exports: [
    MessageComponent,
  ],
})
export class MessagingModule {
}
