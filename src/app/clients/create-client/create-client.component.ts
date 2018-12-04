import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

/**
 * Component class that contains all the actions and properties for the create-client.component.html
 */

@Component({
  selector: 'mifosx-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  /**
   * It has the form group
   */

  public formClient: FormGroup;

  /**
   * 
   * @param fb 
   */

  constructor(
    private fb: FormBuilder
  ) { }
  
  /**
   * It Creates the full form and assings it to the [formClient]{@link #formClient} property
   */

  private createForm(): void {

    this.formClient = this.fb.group({
      officeId: [1, Validators.required],
      legalFormId: [1, Validators.required],
      genderId: [null, Validators.required],
      firstname: [null, Validators.required],
      middlename: [null, Validators.required],
      lastname: [null, Validators.required],
      curp: ['', [ Validators.required ]], // No duplicado
      rfc: [''], //No duplicado

      // clientTypeId: 15,
      // active: true,
      // locale: en,
      // dateFormat: dd MMMM yyyy,
      // activationDate: 29 November 2018,
      // submittedOnDate: 29 November 2018,
      // dateOfBirth: 13 August 2000,
      // savingsProductId: null
    });
  }

  ngOnInit() {
    this.createForm();
  }

}
