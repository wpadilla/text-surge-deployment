import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCampaignComponent } from './create-campaign.component';
import { DropdownComponent } from '../../../shared/components/dropdown/dropdown.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { CampaignDetailFormComponent } from './containers/campaign-detail-form/campaign-detail-form.component';

const routes: Routes = [
    { path: '', component: CreateCampaignComponent,
      children: [
        {
          path: '',
          component: CampaignDetailFormComponent,
        },
        {
          path: 'personal',
          component: DropdownComponent,
        },
        {
          path: 'city',
          component: ButtonComponent,
        },
      ]
      ,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule,
    ]
})
export class CreateCampaignRoutingModule {}
