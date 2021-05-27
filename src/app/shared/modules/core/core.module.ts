import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/header/header.component';
import { PrimengModule } from '../primeng/primeng.module';
import { AppService } from '../../services/app.service';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoRootModule } from 'src/app/config/transloco-root.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TranslocoRootModule,
    RouterModule,
    PrimengModule
  ],
  exports: [
    TranslocoRootModule,
    HeaderComponent,
    PrimengModule
  ],
  providers: []
})
export class CoreModule {

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        AppService,
        TranslocoService
    ],
    };
  }
}
