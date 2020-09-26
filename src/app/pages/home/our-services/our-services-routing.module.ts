import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurServicesPage } from './our-services.page';

const routes: Routes = [
  {
    path: '',
    component: OurServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurServicesPageRoutingModule {}
