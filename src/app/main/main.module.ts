import { NgModule } from '@angular/core';
import { MainComponent } from './containers/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AvatarModule } from 'primeng/avatar';
import TemplateChangesService from '../core/services/template-changes.service';
import { OverlayPanelModule } from "primeng/overlaypanel";


@NgModule({
  declarations: [MainComponent, TopBarComponent, SideNavComponent],
  imports: [
    SharedModule,
    MainRoutingModule,
    AvatarModule,
    OverlayPanelModule
  ],
  providers: [
    // LocationResolver,
    // DashboardGuard
    TemplateChangesService,
  ]
})
export class MainModule {
}
