import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagingViewerComponent } from "./containers/messaging-viewer/messaging-viewer.component";

const routes: Routes = [
    { path: 'view', component: MessagingViewerComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessagingRoutingModule {}
