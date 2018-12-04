import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonValidators } from 'ng-validator';
import { RGX } from '@helpers/regex';
import { MatCheckbox } from '@angular/material/checkbox';
import { ClientsService } from '@services/clients/clients.service';
// import { SeasonalitySale } from '@components/seasonality-sale/seasonality-sale';

/**
 * Component class that contains all the actions a properties for the form-client.component.html
 */

@Component({
  selector: 'mifosx-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  /**
   * It has the form group
   */

  public formClient: FormGroup;

  /**
   * It contains all the data sent on the data property in the routing config
   */

  public routeData: any = {};
  
  /**
   * 
   * @param fb 
   */
  
  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private clientsSrv: ClientsService
  ) {   }

  /**
   * Getter that returns the sub form group personalData
   */

  get formPersonalData(): FormGroup {
    return this.formClient.get('personalData') as FormGroup;
  }

  /**
   * Getter that returns the sub form group lifeInsurance
   */

  get formLifeInsuranceData(): FormGroup {
    return this.formClient.get('lifeInsurance') as FormGroup;
  }

  /**
   * Getter that returns the sub form group addressData
   */

  get formAddressData(): FormGroup {
    return this.formClient.get('addressData') as FormGroup;
  }

  /**
   * Getter that returns the sub form group bussinessData
   */

  get formBussinessData(): FormGroup {
    return this.formClient.get('bussinessData') as FormGroup;
  }

  /**
   * Getter that returns the sub form group pldData
   */

  get formPldData(): FormGroup {
    return this.formClient.get('pldData') as FormGroup;
  }

  /**
   * Getter that returns the sub form group economicsData
   */

  get formEconomicsData(): FormGroup {
    return this.formClient.get('economicsData') as FormGroup;
  }

  /**
   * It Creates the full form and assings it to the [formClient]{@link #formClient} property
   * 
   */

  private createForm(): void {
    const personalData = this.fb.group({
      firstname: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      pLastname: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      mLastname: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      gender: [null, Validators.required ],
      maritalStatus: [null, Validators.required ],
      scholarship: [null],
      profession: [null],
      electorKey: ['', CommonValidators.isNumber ],
      curp: ['', [ CommonValidators.requiredTrim, Validators.pattern( RGX.CURP ) ]], // No duplicado
      rfc: ['', Validators.pattern( RGX.RFC ) ], //No duplicado
      electronicSignature: [''],
      IDProspera: [''],
      birthday: ['', [ Validators.required ]],
      birthdayEntity: [null, Validators.required ],
      requestDate: ['', Validators.required],
      numberDependents: ['', CommonValidators.isNumber ],
      speakNativeLanguage: [null],
      hasDisabilities: [null],
      hasInternet: [null],
      useSocialNetworks: [null]
    });

    const addressData = this.fb.group({
      address: ['', CommonValidators.requiredTrim ],
      timeAvailable: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      period: [null, Validators.required ],
      externalNumber: [''],
      internalNumber: [''],
      roadType: [null, Validators.required],
      postalCode: ['', CommonValidators.isNumber],
      country: ['', Validators.required],
      state: ['', Validators.required],
      municipality: ['', Validators.required],
      locality: ['', Validators.required],
      colony: [''],
      settlement: [''],
      settlementName: [''],
      email: ['', CommonValidators.isEmail ],
      rolHome: ['', Validators.required],
      formPhone: this.createFormPhone(),
      phones: this.fb.array([], Validators.required)
    });

    const bussinessData = this.fb.group({
      isCopied: false,
      economicActivity: [null, Validators.required],
      beginActivity: [null, Validators.required],
      employeesNumber: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      resourcesOrigin: [null, Validators.required],
      creditDestination: [null, Validators.required],
      totalSales: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      expenses: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      anotherIncome: ['', CommonValidators.isNumber ],
      totalIncome: ['', CommonValidators.isNumber ],
      address: ['', CommonValidators.requiredTrim ],
      timeAvailable: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      period: [null, Validators.required ],
      externalNumber: [''],
      internalNumber: [''],
      roadType: [null, Validators.required],
      postalCode: ['', CommonValidators.isNumber],
      country: ['', Validators.required],
      state: ['', Validators.required],
      municipality: ['', Validators.required],
      locality: ['', Validators.required],
      colony: [''],
      settlement: [''],
      settlementName: [''],
      formPhone: this.createFormPhone(),
      phones: this.fb.array([], Validators.required),
      revolvency: [null, Validators.required],
      seasonality: this.fb.array([])
    });

    const pldData = this.fb.group({
      hasPublicCharge: [null],
      hasPublicChargeSpecification: [''],
      familyHasPublicFunction: [null],
      publicFunctionSpecification: ['']
    });

    /* const economicsData = this.fb.group({
      economicActivity: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      beginActivity: ['', Validators.required],
      employeesNumber: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      resourcesOrigin: [''],
      creditAmount: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      creditDestination: [''],
      totalSales: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      expenses: ['', CommonValidators.requiredTrim ],
      spouseSalary: ['', CommonValidators.isNumber ],
      hadCredit: [null, Validators.required ],
      hadCreditAmount: ['0', CommonValidators.isNumber ],
      incomeHasImproved: [null, Validators.required],
      hasAnotherJob: [null, Validators.required ],

    }); */

    const lifeInsurance = this.fb.group({
      firstname: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      pLastname: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      mLastname: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      birthday: ['', [ Validators.required ]],
      relationship: [null, Validators.required ],
      percent: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber, CommonValidators.greaterThan(0), CommonValidators.lessThan(100, true) ]],
      address: ['', CommonValidators.requiredTrim ],
      externalNumber: [''],
      internalNumber: [''],
      roadType: [null, Validators.required ],
      postalCode: ['', CommonValidators.isNumber ],
      country: ['', Validators.required ],
      state: ['', Validators.required ],
      municipality: ['', Validators.required ],
      locality: ['', Validators.required],
      colony: [''],
      settlement: [''],
      settlementName: [''],
      formPhone: this.createFormPhone(),
      phones: this.fb.array([], Validators.required)
    });

    // this.formClient = this.fb.group({ 
    //   personalData, 
    //   addressData, 
    //   bussinessData,
    //   pldData,
    //   // economicsData,
    //   lifeInsurance
    // });

    this.formClient = this.fb.group({
      firstname: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      middlename: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      lastname: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      genderId: [null, Validators.required ],
      officeId: [null, Validators.required],
      curp: ['', [ CommonValidators.requiredTrim, Validators.pattern( RGX.CURP ) ]], // No duplicado
      rfc: ['', Validators.pattern( RGX.RFC ) ], //No duplicado
      address: [],
      familyMembers: [],
      legalFormId: 1,
      staffId: 23,
      mobileNo: 555555555,
      clientTypeId: 15,
      active: true,
      locale: 'en',
      dateFormat: 'dd MMMM yyyy',
      activationDate: '29 November 2018',
      submittedOnDate: '29 November 2018',
      dateOfBirth: '13 August 2000',
      savingsProductId: null,

      maritalStatus: [null, Validators.required ],
      scholarship: [null],
      profession: [null],
      electorKey: ['', CommonValidators.isNumber ],
      electronicSignature: [''],
      IDProspera: [''],
      birthday: ['', [ Validators.required ]],
      birthdayEntity: [null, Validators.required ],
      requestDate: ['', Validators.required],
      numberDependents: ['', CommonValidators.isNumber ],
      speakNativeLanguage: [null],
      hasDisabilities: [null],
      hasInternet: [null],
      useSocialNetworks: [null]
    });
  }

  /**
   * it creates a new form phone group
   * @returns A formGroup with two props phone and phoneType
   */

  private createFormPhone(): FormGroup {
    return this.fb.group({
      phone: [null, CommonValidators.isPhone ],
      phoneType: [null],
      isEdited: null,
      index: null
    });
  }

  /**
   * It adds a new phone number to the formArray control or update if is edited
   * 
   * @param form form group to edit and it has a formPhone
   */

  public addPhone(form: FormGroup): void {
    const f = form.get('phones') as FormArray;
    const formPhone = form.get('formPhone');
    const phone = formPhone.get('phone').value;
    const phoneType = formPhone.get('phoneType').value;
    const isEdited = formPhone.get('isEdited').value;
    const index = formPhone.get('index').value;

    // it checks if the form is edited and if the position exists
    if( isEdited && f.at( index ) ) {
      // it updates the formArray in the position passed
      f.at( index ).patchValue({ phone, phoneType });
    } else {
      // it adds new formgroup to the array
      f.push(
        this.fb.group({ phone, phoneType })
      );
    }

    formPhone.reset();
  }

  /**
   * It removes a phone number of the formArray control
   * 
   * @param phoneRemoved phone removed in the chips phone collections, it contains the following object { index: 0, phone: { phone: '123132132', phoneType: 1 } }
   * @param form the specific form group where the phone object will be removed
   */

  public removePhone(phoneRemoved: any, form: FormGroup): void {
    const phones = form.get('phones') as FormArray;
    const formPhone = form.get('formPhone');

    phones.removeAt( phoneRemoved.index );

    // if the phone is being edited and the same time is being removed, reset the formPhone to avoid errors
    if ( formPhone.get('index').value == phoneRemoved.index ) 
      formPhone.reset();

  }

   /**
   * It edits a phone number of the formArray control
   * 
   * @param phoneToEdit The phone object to edit, it contains the following object { index: 0, phone: { phone: '123132132', phoneType: 1 } }
   * @param formPhone The form group where it will be reflected the data for editing
   */

  public editPhone(phoneToEdit: any, formPhone: FormGroup): void {
    let phone = phoneToEdit.phone;

    // it adds the index to edit and specify that it is edited
    phone.isEdited = true;
    phone.index = phoneToEdit.index;

    formPhone.patchValue( phone );
  }

  /**
   * It copies the formAddress data to formBussines
   * 
   * @param checkboxEvent The checkboxEvent when the checkbox is marked or unmarked
   */

  public copyAddressToBussiness(checkboxEvent: MatCheckbox): void {

    if ( checkboxEvent.checked ) {
      const formAddress = this.formAddressData.value;

      this.formBussinessData.patchValue( formAddress );
      
      // it's necesary replace the phone property and filled manually, because when the patchValue() is executed, it doesn't fill the phones formArray.
      if ( Array.isArray( formAddress.phones ) && formAddress.phones.length ) {
        this.formBussinessData.setControl('phones', this.fb.array(
          formAddress.phones.map( (e: any) => this.fb.group( e ) )
        ));
      }

    } else {

      // It gets a seasonality clone and creates a new arrayForm to prevent that it will be reseted
      const seasonality = this.fb.array( [ ...this.formBussinessData.get('seasonality').value || [] ] );

      this.formBussinessData.reset();

      // it's necesary replace the phones property, because the reset() methods only clean the data
      this.formBussinessData.setControl('phones', this.fb.array([], Validators.required));
      this.formBussinessData.setControl('seasonality', seasonality);
    }

  }

  /**
   * It gets the seasonality of the every month and set it to the bussiness form
   * 
   * @param seasonality All the seasonality of every months of the year
   */

  // public seasonalitySaleEvent(seasonality: SeasonalitySale[]): void {
  //   this.formBussinessData.setControl('seasonality', this.fb.array( seasonality ));
  // }

  /**
   * It sends the data to the server
   */

  public submit(): void {
    console.log(this.formClient.value);
    // validate form

    this.clientsSrv.create( this.formClient.value ).subscribe( res => {
      console.log('RESP:', res);
    }, err => {
      console.log('ERR:', err);
    });
    // console.log('VALID FORM: ', this.formClient.get('personalData').valid);
    // console.log('ERRORS: ', this.formClient.get('personalData.firstname').errors);
  }


  ngOnInit() {
    this.createForm();

    // get the route data
    this.activeRoute.data.subscribe( data => {
      this.routeData = data || {};
    });
  }

}
