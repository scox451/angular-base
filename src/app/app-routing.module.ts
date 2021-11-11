import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';

// import { UserPermissionGuard } from '@app/core/guards/user-permission.guard'

// import { RoleType } from '@shared/models/role-type';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)//,
        //canActivate: [UserPermissionGuard],
        //data: {
        //    breadcrumb: { label: 'Users' },
        //    roles: `${RoleType.Admin}` }
    },  {
    path: '**',
      redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: `reload`,
      enableTracing: false,
      preloadingStrategy: NoPreloading,
      relativeLinkResolution: 'legacy'
      })
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
