import { NgModule, ModuleWithProviders, FactoryProvider } from '@angular/core';
import { ErrorMessagePipe } from './error-message.pipe';
import { ErrorMessageService } from './error-message.service';

@NgModule({
  declarations: [ ErrorMessagePipe ],
  exports: [ ErrorMessagePipe ]
})
export class ErrorMessageModule { 

  /**
   * Method for chargin the dictionary of errors to the service
   * @param {FactoryProvider} config The configuration for loading the errors json file
   */

  static forRoot(config: FactoryProvider): ModuleWithProviders {
    return {
      ngModule: ErrorMessageModule,
      providers: [ config,  ErrorMessageService ]
    };
  }

}
