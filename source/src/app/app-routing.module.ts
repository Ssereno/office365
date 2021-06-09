import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { publicRoutes } from './components/public/public.routes';

import { PublicComponent } from './components/public/public.component';

const appRoutes : Routes = [
  { path: '', component: PublicComponent, children: publicRoutes }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,  // <-- debugging purposes only
        // Warning: DON'T change useHash: true.
        // Hash location strategy is required for the navigation to work under Excel Add-ins.
        // https://docs.microsoft.com/en-us/office/dev/add-ins/develop/add-ins-with-angular2#use-the-hash-location-strategy-in-the-angular-application
        useHash: true,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
