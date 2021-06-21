import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), data: { animation: 'Auth' } },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule), data: { animation: 'Main' } },
  //  path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule), canLoad: [AuthGuard] },
  // { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
