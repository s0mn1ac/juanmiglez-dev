import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/header/header.component';
import { PrimengModule } from '../primeng/primeng.module';
import { AppService } from '../../services/app.service';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoRootModule } from 'src/app/config/transloco-root.module';
import { FormsModule } from '@angular/forms';
import { DarkModeToggleComponent } from 'src/app/header/components/dark-mode-toggle/dark-mode-toggle.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { ParallaxDirective } from '../../directives/parallax.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DarkModeToggleComponent,
    ParallaxDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslocoRootModule,
    RouterModule,
    PrimengModule
  ],
  exports: [
    TranslocoRootModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    DarkModeToggleComponent,
    ParallaxDirective,
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