import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    IconSpriteModule.forRoot({path: 'assets/sprites/sprite.svg'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
