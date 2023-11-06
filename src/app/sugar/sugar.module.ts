import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SugarRoutingModule } from './sugar-routing.module';
import { SugarComponent } from './sugar.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SugarComponent],
  imports: [
    CommonModule,
    SugarRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class SugarModule { }
