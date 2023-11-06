import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsulinRoutingModule } from './insulin-routing.module';
import { FormsModule } from '@angular/forms';
import { InsulinComponent } from './insulin.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [InsulinComponent],
  imports: [
    CommonModule,
    InsulinRoutingModule,
    FormsModule,
    IonicModule
  ]
})
export class InsulinModule { }
