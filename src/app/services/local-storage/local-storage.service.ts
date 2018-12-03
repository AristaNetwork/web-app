import { Injectable } from '@angular/core';

/**
 * Service for managing the localstorage of the app
 */

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /**
   * Set the language to use in the app
   * @param lang lang 
   */

  public setLang(lang: string): void {
    localStorage.setItem('mifosXLanguage', lang);
  }

  /**
   * @returns The language that the app is using
   */
  
  public getLang(): string {
    return localStorage.getItem('mifosXLanguage');
  }
}
