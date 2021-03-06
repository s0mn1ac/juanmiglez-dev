import { HttpClient } from '@angular/common/http';
import { Translation, TRANSLOCO_LOADER, TranslocoLoader, TRANSLOCO_CONFIG, TranslocoModule, translocoConfig } from '@ngneat/transloco';
import { Injectable, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) { }

  getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  exports: [TranslocoModule],
  providers: [
    { provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['es', 'en'],
        defaultLang: 'es',
        fallbackLang: ['es'],
        reRenderOnLangChange: true,
        prodMode: environment.production
      })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
  ]
})
export class TranslocoRootModule { }