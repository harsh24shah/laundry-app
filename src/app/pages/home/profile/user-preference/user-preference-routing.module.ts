import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPreferencePage } from './user-preference.page';

const routes: Routes = [
  {
    path: '',
    component: UserPreferencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPreferencePageRoutingModule {}
