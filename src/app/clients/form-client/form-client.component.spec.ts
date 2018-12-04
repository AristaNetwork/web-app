import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// pipes
import { ErrorMessageModule } from '../../../pipes/error-message/error-message.module';

// components
import { FormClientComponent } from './form-client.component';

// Materials Components
import { 
  MatStepperModule,
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';

describe('FormClientComponent', () => {
  let component: FormClientComponent;
  let fixture: ComponentFixture<FormClientComponent>;

  /* beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatStepperModule,
        MatButtonModule,
        MatInputModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        ErrorMessageModule
      ],
      declarations: [ FormClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
