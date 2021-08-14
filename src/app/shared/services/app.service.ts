import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { NavigationService } from './navigation.service';

@Injectable()
export class AppService {

  constructor(public translocoService: TranslocoService, public navigationService: NavigationService) { }

}