import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./package/package.module").then(m => m.PackagePageModule)
  },

  {
    path: "package",
    loadChildren: () =>
      import("./package/package.module").then(m => m.PackagePageModule)
  },
  {
    path: "booking",
    loadChildren: () =>
      import("./booking/booking.module").then(m => m.BookingPageModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthPageModule)
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./settings/settings.module").then(m => m.SettingsPageModule)
  },
  {
    path: "pages",
    loadChildren: () =>
      import("./pages/pages.module").then(m => m.PagesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
