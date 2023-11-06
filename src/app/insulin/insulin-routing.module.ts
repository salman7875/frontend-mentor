import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsulinComponent } from './insulin.component';

const routes: Routes = [
  { path: '', component: InsulinComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsulinRoutingModule { }
