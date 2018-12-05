import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormClientComponent } from './form-client.component';

const routes: Routes = [
  { 
    path: '', 
    component: FormClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormClientRoutingModule { }
