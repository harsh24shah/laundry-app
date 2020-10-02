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
        loadChildren: () => import('./our-services/our-services.module').then(m => m.OurServicesPageModule)
      },
      {
        path: 'preferences',
        loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesPageModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'profile/addresses',
        loadChildren: () => import('./profile/addresses/addresses.module').then(m => m.AddressesPageModule)
      },
      {
        path: 'profile/update-address',
        loadChildren: () => import('./profile/address-form/address-form.module').then(m => m.AddressFormPageModule)
      },
      {
        path: 'profile/user-preference',
        loadChildren: () => import('./profile/user-preference/user-preference.module').then(m => m.UserPreferencePageModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home/categories'
      }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
