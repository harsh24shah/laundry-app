import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MaterialModules } from 'src/app/shared/material-module';
import { SidemenuComponent } from 'src/app/shared/components/sidemenu/sidemenu.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { TabNavComponent } from 'src/app/shared/components/tab-nav/tab-nav.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MaterialModules
  ],
  declarations: [
    HomePage,
    SidemenuComponent,
    HeaderComponent,
    TabNavComponent
  ]
})
export class HomePageModule { }
