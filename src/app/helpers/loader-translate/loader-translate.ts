import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

// AoT requires an exported function for factories

/**
 * Function for setting the translate module for lazy load modules, this method is not in use, to use it when the lazy load is implemented
 * and exist many of translation files in the project 
 * @param prefix 
 * @param suffix 
 */
export function HttpLoaderFactory(prefix: string, suffix: string) {
  const loaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, prefix, suffix);

  return {
    loader: {
      provide: TranslateLoader,
      useFactory: loaderFactory,
      deps: [ HttpClient ]
    },
    isolate: true
  };
}
