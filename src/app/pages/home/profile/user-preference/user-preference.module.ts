import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPreferencePageRoutingModule } from './user-preference-routing.module';

import { UserPreferencePage } from './user-preference.page';
import { MaterialModules } from 'src/app/shared/material-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPreferencePageRoutingModule,
    MaterialModules
  ],
  declarations: [UserPreferencePage]
})
export class UserPreferencePageModule {}
