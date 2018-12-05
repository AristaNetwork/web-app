import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

// Routes
import { FormClientRoutingModule } from './form-client-routing.module';

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

// Custom Modules
// import { ChipsPhonesModule } from '@components/chips-phones/chips-phones.module';
// import { SeasonalitySaleModule } from '@components/seasonality-sale/seasonality-sale.module';

// // Pipes
// import { ErrorMessageModule } from '@pipes/error-message/error-message.module';

// Components
import { FormClientComponent } from './form-client.component';

@NgModule({
  imports: [
    CommonModule,
    FormClientRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TranslateModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    // ErrorMessageModule,
    MatCheckboxModule,
    MatSliderModule,
    // ChipsPhonesModule,
    // SeasonalitySaleModule
  ],
  declarations: [
    FormClientComponent
  ]
})
export class FormClientModule { }
