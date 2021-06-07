import { NgModule } from '@angular/core';
import { MessagingRoutingModule } from './messaging-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { SharedModule } from '../shared/shared.module';
import { MessagingViewerComponent } from "./containers/messaging-viewer/messaging-viewer.component";

@NgModule({
  providers: [
  ],
  declarations: [
    MessagingViewerComponent
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
    TreeModule,
  ],
  exports: [
  ],
})
export class MessagingModule { }
