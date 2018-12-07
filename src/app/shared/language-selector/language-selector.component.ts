/** Angular Imports */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/** Custom Services */
import { I18nService } from '../../core/i18n/i18n.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';

/**
 * Language selector component.
 *
 * TODO: Decision to be taken on using ngx-translate or angular-internationalization
 *       to provide language support in the application.
 */
@Component({
  selector: 'mifosx-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {

  /** Language selector form control. */
  public languageSelector: FormControl = new FormControl();

  /**
   * Sets the language of the application in the selector on initial setup.
   * @param {I18nService} i18nService Internationalization Service.
   * @param {localStorageSrv} LocalStorageService localstorage Service.
   */

  constructor(
    private i18nService: I18nService,
    private localStorageSrv: LocalStorageService
  ) {

    this.languageSelector.setValue( this.i18nService.language );

    // It changes the default lang in the local storage and in the app
    this.languageSelector.valueChanges.subscribe( val => {
      this.localStorageSrv.setLang( val );
      this.i18nService.language = val; 
      window.location.reload();
    });

  }

  /**
   * Returns all the languages supported by the application.
   * @return {string[]} Supported languages.
   */
  get languages(): string[] {
    return this.i18nService.languages;
  }

}
