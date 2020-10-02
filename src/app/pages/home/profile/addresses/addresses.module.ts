import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressesPageRoutingModule } from './addresses-routing.module';

import { AddressesPage } from './addresses.page';
import { MaterialModules } from 'src/app/shared/material-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressesPageRoutingModule,
    MaterialModules
  ],
  declarations: [AddressesPage]
})
export class AddressesPageModule {}
