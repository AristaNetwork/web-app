import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { CreateClientRoutingModule } from './create-client-routing.module';

// Materials Components
import { 
  MatStepperModule,
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSliderModule
} from '@angular/material';

// Components
import { CreateClientComponent } from './create-client.component';

@NgModule({
  imports: [
    CommonModule,
    CreateClientRoutingModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSliderModule
  ],
  declarations: [
    CreateClientComponent
  ]
})
export class CreateClientModule { }
