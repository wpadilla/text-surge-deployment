import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './containers/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      // { path: '', canActivate: [RedirectGuard], pathMatch: 'full' },
      {path: '', pathMatch: 'full'},
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {animation: 'Dashboard'}
      },
      {
        path: 'campaign',
        loadChildren: () => import('../campaign/campaign.module').then(m => m.CampaignModule),
        data: {animation: 'Campaign'}
      },
      {
        path: 'messaging',
        loadChildren: () => import('../messaging/messaging.module').then(m => m.MessagingModule),
        data: {animation: 'Messaging'}
      },
      {
        path: 'client',
        loadChildren: () => import('../client/client.module').then(m => m.ClientModule),
        data: {animation: 'Client'}
      },
      {
        path: 'contact-list',
        loadChildren: () => import('../contact-list/contact-list.module').then(m => m.ContactListModule),
        data: {animation: 'ContactList'}
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {
}
