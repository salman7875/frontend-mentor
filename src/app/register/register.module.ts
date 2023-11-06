import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { IonicModule } from '@ionic/angular';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class RegisterModule { }
