import { NgModule } from '@angular/core';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './containers/setting/setting.component';
import { SharedModule } from '../shared/shared.module';
import { AvatarModule } from 'primeng/avatar';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [
    SettingComponent,
  ],
  exports: [],
  imports: [
    SettingRoutingModule,
    SharedModule,
    AvatarModule,
    InputMaskModule,
  ],
})
export class SettingModule {
  constructor() {
  }

}
