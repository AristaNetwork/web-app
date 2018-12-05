/** Angular Imports */
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

/** Tanslation Imports */
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/** Chart Imports */
import { NgxChartsModule } from '@swimlane/ngx-charts';

/** Environment Configuration */
import { environment } from 'environments/environment';

/** Main Component */
import { WebAppComponent } from './web-app.component';

/** Not Found Component */
import { NotFoundComponent } from './not-found/not-found.component';

/** Custom Modules */
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SettingsModule } from './settings/settings.module';
import { NavigationModule } from './navigation/navigation.module';
import { ClientsModule} from './clients/clients.module';
import { GroupsModule } from './groups/groups.module';
import { CentersModule } from './centers/centers.module';
import { AccountingModule } from './accounting/accounting.module';
import { SelfServiceModule } from './self-service/self-service.module';
import { SystemModule } from './system/system.module';

/** Main Routing Module */
import { AppRoutingModule } from './app-routing.module';

import { I18nService } from '../app/core/i18n/i18n.service';

// Resgister langs
import { registerLocaleData } from '@angular/common';
import localeMX from '@angular/common/locales/es-MX';

// Resgisting the langs
registerLocaleData( localeMX, 'es-MX' );

/**
 * App Module
 *
 * Core module and all feature modules should be imported here in proper order.
 */
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    }),

    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    NgxChartsModule,
    CoreModule,
    HomeModule,
    LoginModule,
    SettingsModule,
    NavigationModule,
    ClientsModule,
    GroupsModule,
    CentersModule,
    AccountingModule,
    SelfServiceModule,
    SystemModule,
    AppRoutingModule
  ],
  declarations: [WebAppComponent, NotFoundComponent],
  providers: [{
    provide: LOCALE_ID,
    useFactory: getLanguage,
    deps: [ I18nService ]
  }],
  bootstrap: [WebAppComponent]
})
export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

// Configure the language to the app
export function getLanguage(s: I18nService) {
  return s.language;
}