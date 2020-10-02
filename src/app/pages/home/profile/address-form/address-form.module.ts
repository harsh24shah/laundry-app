import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressFormPageRoutingModule } from './address-form-routing.module';

import { AddressFormPage } from './address-form.page';
import { MaterialModules } from 'src/app/shared/material-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressFormPageRoutingModule,
    MaterialModules
  ],
  declarations: [AddressFormPage]
})
export class AddressFormPageModule {}
