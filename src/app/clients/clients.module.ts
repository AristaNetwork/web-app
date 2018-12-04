import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// routing
import { ClientsRoutingModule } from './clients-routing.module';


import { CoreModule } from '../core/core.module';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ArchwizardModule } from 'angular-archwizard';

import { ClientsComponent } from './clients.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { ViewLoanComponent } from './view-loan/view-loan.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { CreateIdentityComponent } from './create-identity/create-identity.component';

import { ClientsService } from './clients.service';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { ChequeComponent } from './cheque/cheque.component';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpModule, 
    MatTableModule,
    ArchwizardModule,
    TranslateModule
  ],
  declarations: [
    ClientsComponent,
    ViewClientComponent,
    ViewLoanComponent,
    CreateAddressComponent,
    CreateIdentityComponent,
    UploadDocumentComponent,
    EditAddressComponent,
    ChequeComponent
  ],
  providers: [
    ClientsService,
    HttpModule  // tslint:disable
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ClientsModule { }
