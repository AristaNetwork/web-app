import { Injectable } from '@angular/core';
import { ErrorMessageLoader } from './error-message.loader';

/**
 * Service for serving the dictionary of error to the erroMessagePipe
 */

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {

  /**
   * It keeps the error messages
   */
  
  private _errorDict: any = {}

  /**
   * @param errorLoader The loader service for getting the error json file
   */

  constructor(
    private errorLoader: ErrorMessageLoader
  ) {}

  /**
   * It changes the language to use getting the json file
   * @param lang The language to use
   */

  public use(lang: string): void {
    this.errorLoader.getErrors(lang).subscribe( (res: any) => this._errorDict = res );
  }

  /**
   * It gets the dictionary of errors
   */

  get errorDict(): any {
    return this._errorDict;
  }
}
