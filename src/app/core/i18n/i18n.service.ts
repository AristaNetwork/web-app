/** Angular Imports */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { environment } from '@env/environment';

/** Custom Services */
import { Logger } from '../logger/logger.service';

/** Initialize Logger */
const log = new Logger('I18nService');

/**
 * Pass-through function to mark a string for translation extraction.
 * Running `npm translations:extract` will include the given string by using this.
 * @param {string} s The string to extract for translation.
 * @return {string} The same string.
 */
export function extract(s: string) {
  return s;
}

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  /**
   * 
   * @param translateService 
   * @param localStorageSrv 
   */

  constructor(
    private translateService: TranslateService,
    private localStorageSrv: LocalStorageService
  ) {}

  /**
   * Initializes i18n for the application.
   * Loads language from local storage if present, or sets default language.
   */

  public init(): void {
    this.translateService.setDefaultLang( environment.defaultLanguage );
    this.language = null;

    // this.translateService.onLangChange.subscribe(
    //   (event: LangChangeEvent) => this.localStorageSrv.setLang( event.lang )
    // );
  }

  /**
   * Sets the current language.
   * Note: The current language is saved to the local storage.
   * If no parameter is specified, the language is loaded from local storage (if present).
   * @param {string} language The IETF language code to set.
   */

  set language(language: string) {
    language = language || this.localStorageSrv.getLang() || this.translateService.getBrowserCultureLang();

    // It checks if the language is not supported
    if ( !new Set( environment.supportedLanguages ).has( language ) ) 
      language = this.translateService.getDefaultLang();

    log.debug(`Language set to ${language}`);
    this.translateService.use(language);
  }

  /**
   * Gets the current language.
   * @return {string} The current language code.
   */

  get language(): string {
    return this.translateService.currentLang;
  }

  /**
   * It gets the language supported
   * @returns Lista of languages supported
   */

  get languages(): string[] {
    return environment.supportedLanguages || [];
  }

  /**
   * Observable that is emitted when the language changes
   */

  get onLanguageChange(): Observable<LangChangeEvent> {
    return this.translateService.onLangChange;
  }

}
