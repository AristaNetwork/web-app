/** Angular Imports */
import { Component, OnInit } from '@angular/core';
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
export class LanguageSelectorComponent implements OnInit {

  /** Language selector form control. */
  public languageSelector: FormControl = new FormControl();

  /**
   * Sets the language of the application in the selector on initial setup.
   * @param {I18nService} i18nService Internationalization Service.
   */

  constructor(
    private i18nService: I18nService,
    private localStorageSrv: LocalStorageService
    ) {
    this.languageSelector.setValue( this.i18nService.language );
    this.languageSelector.valueChanges.subscribe( val => {
      this.localStorageSrv.setLang( val );
      this.i18nService.language = val; 
      window.location.reload();
    });
  }

  ngOnInit() {
  }

  /**
   * Returns all the languages supported by the application.
   * @return {string[]} Supported languages.
   */
  get languages(): string[] {
    return this.i18nService.languages;
  }

}
