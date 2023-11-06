import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { IonicModule } from '@ionic/angular';
import { EventsComponent } from './events.component';
import { FormsModule } from '@angular/forms';
// import { IonicTimepickerModalComponent } from '@logisticinfotech/ionic-timepicker';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    IonicModule,
    FormsModule,
  ],
})
export class EventsModule {}
