import { APP_INITIALIZER, Provider } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';

export function initTransloco(appService: AppService): () => Promise<void> {

    // eslint-disable-next-line no-async-promise-executor
    return (): Promise<void> => new Promise(async (resolve) => {

        const navigatorLanguage = navigator.language;

        const lang: string = navigatorLanguage.startsWith('es') ? 'es' : 'en';

        appService.translocoService.setActiveLang(lang);
        await appService.translocoService.load(lang).toPromise();
        resolve();
    });
}

export const TranslocoInitializer: Provider = {
    provide: APP_INITIALIZER,
    useFactory: initTransloco,
    deps: [AppService],
    multi: true
};