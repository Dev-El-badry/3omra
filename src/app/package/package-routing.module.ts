import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackagePage } from './package.page';

const routes: Routes = [
  {
    path: "tabs",
    component: PackagePage,
    children: [
      {
        path: "packages",
        loadChildren: ()=> import('./packages/packages.module').then(m => m.PackagesPageModule)
      },
      {
        path: "welcome",
        loadChildren: () =>
          import("./welcome/welcome.module").then(m => m.WelcomePageModule)
      },
      {
        path: "store",
        loadChildren: () =>
          import("./store/store.module").then(m => m.StorePageModule)
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("../booking/notification/notification.module").then(
            m => m.NotificationPageModule
          )
      }
    ]
  },
  {
    path: "",
    redirectTo: "/package/tabs/welcome",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackagePageRoutingModule {}
