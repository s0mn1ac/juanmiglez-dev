import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/layout/components/header/header.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule
  ],
  exports: [
    LayoutComponent,
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

      ]
    };
  }
}
