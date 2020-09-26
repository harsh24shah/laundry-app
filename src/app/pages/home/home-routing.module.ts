import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'our-services',
        loadChildren: () => import('./our-services/our-services.module').then( m => m.OurServicesPageModule)
      },
      {
        path: 'preferences',
        loadChildren: () => import('./preferences/preferences.module').then( m => m.PreferencesPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home/our-services'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
