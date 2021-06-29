import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import ToastService from './core/services/toast.service';
import { MessageService } from 'primeng/api';
import CampaignFacade from './core/services/campaign/campaign.facade';
import CampaignService from './core/services/campaign/campaign.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    IconSpriteModule.forRoot({path: 'assets/sprites/sprite.svg'}),
  ],
  providers: [
    ToastService,
    MessageService,
    CampaignFacade,
    CampaignService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
