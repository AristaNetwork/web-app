import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClientComponent } from './create-client.component';

const routes: Routes = [
  { 
    path: '', 
    component: CreateClientComponent,
    data: { title: 'title.module.createClient' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateClientRoutingModule { }
