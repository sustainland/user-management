import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleGuard } from '@delon/auth';
import { environment } from '@env/environment';
import { LayoutDefaultComponent } from './layout/default/default.component';
// layout

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'account', loadChildren: () => import('./account/account.module').then((m) => m.AccountModule) },

      {
        path: 'organization',
        component: LayoutDefaultComponent,
        loadChildren: () => import('./organization/organization.module').then((m) => m.OrganizationModule),
      },
    ],
  },
  { path: 'login', loadChildren: () => import('./account/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
