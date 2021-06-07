import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './containers/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      // { path: '', canActivate: [RedirectGuard], pathMatch: 'full' },
      { path: '', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'campaign', loadChildren: () => import('../campaign/campaign.module').then(m => m.CampaignModule) },
      { path: 'messaging', loadChildren: () => import('../messaging/messaging.module').then(m => m.MessagingModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
